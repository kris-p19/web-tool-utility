import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { toolRegistry } from '../config/registry';
import type { Locale } from '../i18n';

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

function renderUrlset(): string {
  const locale: Locale = 'en';
  const alternateLocale: Locale = 'th';
  const paths = [
    '/',
    ...['thai-finance', 'ai-dev', 'text-content', 'image-media', 'design-css', 'generators', 'converters']
      .map((category) => `/category/${category}/`),
    ...toolRegistry.map((tool) => `/tools/${tool.slug}/`),
    ...infoPages.map((page) => `/${page}/`)
  ];
  const entries = paths.map((path) => {
    const loc = localizedUrl(locale, path);
    const alternate = localizedUrl(alternateLocale, path);
    const tool = path.startsWith('/tools/')
      ? toolRegistry.find((candidate) => path === `/tools/${candidate.slug}/`)
      : undefined;
    const lastmod = tool?.updatedAt ?? SITE.lastUpdated;
    return `<url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${path === '/' ? '1.0' : path.startsWith('/tools/') ? '0.9' : '0.7'}</priority><xhtml:link rel="alternate" hreflang="en" href="${escapeXml(loc)}"/><xhtml:link rel="alternate" hreflang="th" href="${escapeXml(alternate)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl('th', path))}"/></url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`;
}

export const GET: APIRoute = () =>
  new Response(renderUrlset(), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
