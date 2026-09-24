import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\nDisallow: /404/\nSitemap: ${SITE.url}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
