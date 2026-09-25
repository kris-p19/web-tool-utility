import { describe, expect, it, vi } from 'vitest';
import worker, { type Env, type D1PreparedStatement } from '../worker';

function environment() {
  const queries: Array<{ sql: string; values: unknown[] }> = [];
  const assets = { fetch: vi.fn(async () => new Response(
    '<html><head><title>Old</title><meta name="description" content="Old" /><link rel="canonical" href="old" /><meta property="og:url" content="old" /></head><body data-slug="windows-11-essential-shortcuts"></body></html>',
    { headers: { 'Content-Type': 'text/html' } }
  )) };
  const prepare = (sql: string) => {
    const query = { sql, values: [] as unknown[] };
    queries.push(query);
    const statement: D1PreparedStatement = {
      bind: (...values) => { query.values = values; return statement; },
      first: async <T>() => (sql.includes('admin_sessions')
        ? { admin_id: 1, username: 'admin' }
        : sql.includes('is_published = 1')
          ? { title: 'New title', summary: 'New summary', cover_image: '' }
          : { id: 1 }) as T,
      all: async <T>() => ({ results: [{ id: 1, content: '# Article', slug: 'new-article', created_at: '2026-09-26' }] as T[], success: true, meta: {} }),
      run: async () => ({ success: true, meta: {} })
    };
    return statement;
  };
  const env = { DB: { prepare, batch: vi.fn() }, ASSETS: assets } as unknown as Env;
  return { env, assets, queries };
}

describe('article routes', () => {
  it('serves a published CMS slug with matching title, canonical and article id', async () => {
    const { env, assets, queries } = environment();
    const response = await worker.fetch(new Request('https://tools.fintechxhub.com/articles/new-article/'), env);
    const body = await response.text();
    expect(response.status).toBe(200);
    expect(body).toContain('data-slug="new-article"');
    expect(body).toContain('<title>New title | ToolXHub</title>');
    expect(body).toContain('https://tools.fintechxhub.com/articles/new-article/');
    expect(assets.fetch).toHaveBeenCalledOnce();
    expect(queries[0]?.values).toEqual(['new-article']);
  });

  it('requires authentication for admin list and exposes content for editing', async () => {
    const { env, queries } = environment();
    const url = 'https://tools.fintechxhub.com/api/admin/articles';
    expect((await worker.fetch(new Request(url), env)).status).toBe(401);
    const response = await worker.fetch(new Request(url, { headers: { Cookie: 'tx_session=test' } }), env);
    expect((await response.json()) as object).toMatchObject({ articles: [{ content: '# Article' }] });
    expect(queries.some(({ sql }) => sql.includes('SELECT id, slug, title, summary, content,'))).toBe(true);
  });

  it('includes published CMS articles in the Thai sitemap', async () => {
    const { env, assets } = environment();
    assets.fetch.mockResolvedValueOnce(new Response('<urlset></urlset>'));
    const response = await worker.fetch(new Request('https://tools.fintechxhub.com/sitemap-th.xml'), env);
    expect(await response.text()).toContain('<loc>https://tools.fintechxhub.com/articles/new-article/</loc>');
  });

  it('updates and deletes an article using its id', async () => {
    const { env, queries } = environment();
    const url = 'https://tools.fintechxhub.com/api/admin/articles/1';
    const headers = { Cookie: 'tx_session=test', 'Content-Type': 'application/json' };
    const response = await worker.fetch(new Request(url, {
      method: 'PUT', headers,
      body: JSON.stringify({ title: 'Updated', slug: 'updated', content: '# Updated', category: 'ai', is_published: 1 })
    }), env);
    expect(response.status).toBe(200);
    expect(queries.some(({ sql, values }) => sql.includes('UPDATE articles SET slug') && values.at(-1) === 1)).toBe(true);
    const deleted = await worker.fetch(new Request(url, { method: 'DELETE', headers }), env);
    expect(deleted.status).toBe(200);
    expect(queries.some(({ sql }) => sql.includes('DELETE FROM articles WHERE id'))).toBe(true);
  });
});
