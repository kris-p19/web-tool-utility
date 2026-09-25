import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { toolRegistry } from '../config/registry';
import { type Locale } from '../i18n';

const infoPages = ['about', 'contact', 'privacy-policy', 'terms'];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function localizedUrl(locale: Locale, path: string): string {
  return `${SITE.url}${locale === 'th' ? path : `/en${path}`}`;
}

function urlsForLocale(
  locale: Locale
): Array<{ loc: string; path: string; priority: string; changefreq: string; lastmod: string }> {
  const home = '/';
  const urls: Array<{
    loc: string;
    path: string;
    priority: string;
    changefreq: string;
    lastmod: string;
  }> = [
    {
      loc: localizedUrl(locale, home),
      path: home,
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: SITE.lastUpdated
    }
  ];
  for (const category of ['thai-finance', 'ai-dev', 'text-content', 'image-media', 'design-css', 'generators', 'converters']) {
    const path = `/category/${category}/`;
    urls.push({
      loc: localizedUrl(locale, path),
      path,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: SITE.lastUpdated
    });
  }
  for (const tool of toolRegistry) {
    const path = `/tools/${tool.slug}/`;
    urls.push({
      loc: localizedUrl(locale, path),
      path,
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: tool.updatedAt
    });
  }
  for (const page of infoPages) {
    const path = `/${page}/`;
    urls.push({
      loc: localizedUrl(locale, path),
      path,
      priority: '0.4',
      changefreq: 'yearly',
      lastmod: SITE.lastUpdated
    });
  }
  return urls;
}

function renderUrlset(locale: Locale): string {
  const urls = urlsForLocale(locale);
  const alternateLocale = locale === 'th' ? 'en' : 'th';
  const entries = urls.map(({ loc, path, priority, changefreq, lastmod }) => {
    const alternate = localizedUrl(alternateLocale, path);
    return `<url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority><xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(loc)}"/><xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${escapeXml(alternate)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl('th', path))}"/></url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`;
}

export const GET: APIRoute = () =>
  new Response(renderUrlset('th'), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
