import { generateTotpSecret, getOtpAuthUrl, verifyTotpCode } from './lib/auth/totp';
import { generateSessionToken, hashPassword, verifyPassword } from './lib/auth/password';

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run(): Promise<{ success: boolean; meta: unknown }>;
  all<T = unknown>(): Promise<{ results: T[]; success: boolean; meta: unknown }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<unknown[]>;
}

export interface Fetcher {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
}

function jsonResponse(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });
}

function parseCookies(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {};
  const cookies: Record<string, string> = {};
  cookieHeader.split(';').forEach((cookie) => {
    const [name, ...rest] = cookie.trim().split('=');
    if (name) {
      cookies[name] = decodeURIComponent(rest.join('='));
    }
  });
  return cookies;
}

async function getAuthenticatedAdmin(
  request: Request,
  env: Env
): Promise<{ id: number; username: string } | null> {
  const cookies = parseCookies(request.headers.get('Cookie'));
  const sessionId = cookies['tx_session'];
  if (!sessionId) return null;

  const session = await env.DB.prepare(
    `SELECT s.session_id, a.id as admin_id, a.username 
     FROM admin_sessions s
     JOIN admin_auth a ON s.admin_id = a.id
     WHERE s.session_id = ? AND s.expires_at > CURRENT_TIMESTAMP`
  )
    .bind(sessionId)
    .first<{ session_id: string; admin_id: number; username: string }>();

  if (!session) return null;
  return { id: session.admin_id, username: session.username };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    // ─────────────────────────────────────────────
    // 1. API: Setup Admin (Allowed only if 0 admins exist)
    // ─────────────────────────────────────────────
    if (pathname === '/api/auth/setup-admin' && request.method === 'POST') {
      const adminCount = await env.DB.prepare(`SELECT count(*) as count FROM admin_auth`).first<{ count: number }>();
      if (adminCount && adminCount.count > 0) {
        return jsonResponse({ error: 'Admin account already initialized.' }, 403);
      }

      try {
        const body = (await request.json()) as { username?: string; password?: string };
        const username = body.username ? body.username.replace(/[\u200B-\u200D\uFEFF\u00A0\r\n]/g, '').trim() : '';
        const password = body.password ? body.password.replace(/[\u200B-\u200D\uFEFF\u00A0\r\n]/g, '').trim() : '';

        if (!username || !password || password.length < 8) {
          return jsonResponse({ error: 'Username and password (min 8 chars) are required.' }, 400);
        }

        const { hash, salt } = await hashPassword(password);
        const totpSecret = generateTotpSecret();

        await env.DB.prepare(
          `INSERT INTO admin_auth (username, password_hash, salt, totp_secret, is_totp_enabled)
           VALUES (?, ?, ?, ?, 0)`
        )
          .bind(username, hash, salt, totpSecret)
          .run();

        const otpAuthUrl = getOtpAuthUrl(username, totpSecret, 'ToolXHub');

        return jsonResponse({
          success: true,
          message: 'Admin account created successfully.',
          username,
          totpSecret,
          otpAuthUrl
        });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        return jsonResponse({ error: msg }, 500);
      }
    }

    // ─────────────────────────────────────────────
    // 2. API: Login (Step 1: Username + Password)
    // ─────────────────────────────────────────────
    if (pathname === '/api/auth/login' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { username?: string; password?: string };
        const username = body.username?.trim();
        const password = body.password?.trim();

        if (!username || !password) {
          return jsonResponse({ error: 'กรุณากรอก Username และ Password' }, 400);
        }

        const admin = await env.DB.prepare(
          `SELECT id, username, password_hash, salt, totp_secret, is_totp_enabled, failed_attempts, locked_until
           FROM admin_auth WHERE username = ?`
        )
          .bind(username)
          .first<{
            id: number;
            username: string;
            password_hash: string;
            salt: string;
            totp_secret: string;
            is_totp_enabled: number;
            failed_attempts: number;
            locked_until: string | null;
          }>();

        if (!admin) {
          return jsonResponse({ error: 'Username หรือ Password ไม่ถูกต้อง' }, 401);
        }

        // Check if locked
        if (admin.locked_until && new Date(admin.locked_until).getTime() > Date.now()) {
          const remainingMinutes = Math.ceil((new Date(admin.locked_until).getTime() - Date.now()) / 60000);
          return jsonResponse(
            { error: `บัญชีถูกระงับชั่วคราวเนื่องจากรหัสผ่านผิดหลายครั้ง กรุณารอ ${remainingMinutes} นาที` },
            429
          );
        }

        // Verify password
        const isPasswordValid = await verifyPassword(password, admin.password_hash, admin.salt);
        if (!isPasswordValid) {
          const failed = admin.failed_attempts + 1;
          if (failed >= 5) {
            await env.DB.prepare(
              `UPDATE admin_auth SET failed_attempts = ?, locked_until = datetime('now', '+15 minutes') WHERE id = ?`
            )
              .bind(failed, admin.id)
              .run();
            return jsonResponse(
              { error: 'รหัสผ่านผิดเกิน 5 ครั้ง บัญชีถูกระงับการเข้าสู่ระบบ 15 นาที' },
              429
            );
          } else {
            await env.DB.prepare(`UPDATE admin_auth SET failed_attempts = ? WHERE id = ?`)
              .bind(failed, admin.id)
              .run();
            return jsonResponse(
              { error: `Username หรือ Password ไม่ถูกต้อง (ผิดครั้งที่ ${failed}/5)` },
              401
            );
          }
        }

        // Password is correct! Reset failed attempts
        if (admin.failed_attempts > 0 || admin.locked_until) {
          await env.DB.prepare(`UPDATE admin_auth SET failed_attempts = 0, locked_until = NULL WHERE id = ?`)
            .bind(admin.id)
            .run();
        }

        // Check 2FA TOTP setup status
        let secret = admin.totp_secret;
        if (!secret) {
          secret = generateTotpSecret();
          await env.DB.prepare(`UPDATE admin_auth SET totp_secret = ? WHERE id = ?`)
            .bind(secret, admin.id)
            .run();
        }

        const isTotpEnabled = admin.is_totp_enabled === 1;
        const otpAuthUrl = getOtpAuthUrl(admin.username, secret, 'ToolXHub');

        return jsonResponse({
          success: true,
          require2fa: true,
          isFirstTimeSetup: !isTotpEnabled,
          secret: !isTotpEnabled ? secret : undefined,
          otpAuthUrl: !isTotpEnabled ? otpAuthUrl : undefined
        });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        return jsonResponse({ error: msg }, 500);
      }
    }

    // ─────────────────────────────────────────────
    // 3. API: Verify 2FA TOTP (Step 2: 6-digit Code)
    // ─────────────────────────────────────────────
    if (pathname === '/api/auth/verify-2fa' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { username?: string; code?: string };
        const username = body.username ? body.username.replace(/[\u200B-\u200D\uFEFF\u00A0\r\n]/g, '').trim() : '';
        const code = body.code ? body.code.replace(/[\s\u200B-\u200D\uFEFF\u00A0\r\n]/g, '').trim() : '';

        if (!username || !code) {
          return jsonResponse({ error: 'กรุณากรอกรหัส 2FA TOTP 6 หลัก' }, 400);
        }

        const admin = await env.DB.prepare(
          `SELECT id, username, totp_secret FROM admin_auth WHERE username = ?`
        )
          .bind(username)
          .first<{ id: number; username: string; totp_secret: string }>();

        if (!admin || !admin.totp_secret) {
          return jsonResponse({ error: 'ไม่พบบัญชีผู้ใช้' }, 404);
        }

        const isValidTotp = await verifyTotpCode(code, admin.totp_secret, 1);
        if (!isValidTotp) {
          return jsonResponse({ error: 'รหัส 2FA (TOTP) ไม่ถูกต้อง หรือหมดอายุแล้ว' }, 401);
        }

        // 2FA Verified Successfully!
        const sessionId = generateSessionToken();
        const userAgent = request.headers.get('User-Agent') || '';
        const clientIp = request.headers.get('CF-Connecting-IP') || '';

        // Save session (valid for 7 days)
        await env.DB.batch([
          env.DB.prepare(
            `UPDATE admin_auth 
             SET is_totp_enabled = 1, failed_attempts = 0, locked_until = NULL, last_login_at = CURRENT_TIMESTAMP
             WHERE id = ?`
          ).bind(admin.id),
          env.DB.prepare(
            `INSERT INTO admin_sessions (session_id, admin_id, user_agent, ip_address, expires_at)
             VALUES (?, ?, ?, ?, datetime('now', '+7 days'))`
          ).bind(sessionId, admin.id, userAgent, clientIp)
        ]);

        // Issue HttpOnly Cookie
        const cookie = `tx_session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800; Secure`;

        return jsonResponse(
          {
            success: true,
            message: 'เข้าสู่ระบบสำเร็จ',
            user: { username: admin.username }
          },
          200,
          { 'Set-Cookie': cookie }
        );
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        return jsonResponse({ error: msg }, 500);
      }
    }

    // ─────────────────────────────────────────────
    // 4. API: Check Session (/api/auth/me)
    // ─────────────────────────────────────────────
    if (pathname === '/api/auth/me' && request.method === 'GET') {
      const admin = await getAuthenticatedAdmin(request, env);
      if (!admin) {
        return jsonResponse({ authenticated: false }, 401);
      }
      return jsonResponse({ authenticated: true, user: admin });
    }

    // ─────────────────────────────────────────────
    // 5. API: Logout (/api/auth/logout)
    // ─────────────────────────────────────────────
    if (pathname === '/api/auth/logout' && request.method === 'POST') {
      const cookies = parseCookies(request.headers.get('Cookie'));
      const sessionId = cookies['tx_session'];
      if (sessionId) {
        await env.DB.prepare(`DELETE FROM admin_sessions WHERE session_id = ?`).bind(sessionId).run();
      }
      const expiredCookie = `tx_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; Secure`;
      return jsonResponse({ success: true }, 200, { 'Set-Cookie': expiredCookie });
    }

    // ─────────────────────────────────────────────
    // 6. API: Public Articles Feed (/api/articles)
    // ─────────────────────────────────────────────
    if (pathname === '/api/articles' && request.method === 'GET') {
      const category = url.searchParams.get('category');
      let query = `SELECT id, slug, title, summary, category, tags, cover_image, author, created_at, views 
                   FROM articles WHERE is_published = 1`;
      const params: unknown[] = [];

      if (category && category !== 'all') {
        query += ` AND category = ?`;
        params.push(category);
      }

      query += ` ORDER BY created_at DESC LIMIT 50`;
      const stmt = params.length > 0 ? env.DB.prepare(query).bind(...params) : env.DB.prepare(query);
      const { results } = await stmt.all();

      return jsonResponse({ articles: results });
    }

    // ─────────────────────────────────────────────
    // 7. API: Single Article Detail (/api/articles/:slug)
    // ─────────────────────────────────────────────
    if (pathname.startsWith('/api/articles/') && request.method === 'GET') {
      const slug = pathname.replace('/api/articles/', '').replace(/\/$/, '');
      const article = await env.DB.prepare(
        `SELECT id, slug, title, summary, content, category, tags, cover_image, author, created_at, views 
         FROM articles WHERE slug = ? AND is_published = 1`
      )
        .bind(slug)
        .first();

      if (!article) {
        return jsonResponse({ error: 'Article not found' }, 404);
      }

      // Increment view counter async
      env.DB.prepare(`UPDATE articles SET views = views + 1 WHERE slug = ?`).bind(slug).run();

      return jsonResponse({ article });
    }

    // ─────────────────────────────────────────────
    // 8. API: Admin Create Article (Protected)
    // ─────────────────────────────────────────────
    if (pathname === '/api/admin/articles' && request.method === 'POST') {
      const admin = await getAuthenticatedAdmin(request, env);
      if (!admin) {
        return jsonResponse({ error: 'Unauthorized. Please login with 2FA.' }, 401);
      }

      try {
        const body = (await request.json()) as {
          title?: string;
          slug?: string;
          summary?: string;
          content?: string;
          category?: string;
          tags?: string;
          cover_image?: string;
          is_published?: number;
        };

        if (!body.title || !body.content || !body.category) {
          return jsonResponse({ error: 'Title, content, and category are required.' }, 400);
        }

        const slug =
          body.slug?.trim() ||
          encodeURIComponent(body.title.toLowerCase().replace(/\s+/g, '-').slice(0, 50));

        await env.DB.prepare(
          `INSERT INTO articles (slug, title, summary, content, category, tags, cover_image, author, is_published)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
        )
          .bind(
            slug,
            body.title.trim(),
            body.summary?.trim() || '',
            body.content.trim(),
            body.category.trim(),
            body.tags?.trim() || '',
            body.cover_image?.trim() || '',
            admin.username,
            body.is_published ?? 1
          )
          .run();

        return jsonResponse({ success: true, slug });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        return jsonResponse({ error: msg }, 500);
      }
    }

    // ─────────────────────────────────────────────
    // 9. API: Admin List All Articles — GET (Protected)
    // ─────────────────────────────────────────────
    if (pathname === '/api/admin/articles' && request.method === 'GET') {
      const admin = await getAuthenticatedAdmin(request, env);
      if (!admin) return jsonResponse({ error: 'Unauthorized. Please login with 2FA.' }, 401);
      try {
        const { results } = await env.DB.prepare(
          `SELECT id, slug, title, summary, category, tags, cover_image, author, is_published, created_at, views
           FROM articles ORDER BY created_at DESC`
        ).all();
        return jsonResponse({ articles: results });
      } catch (err: unknown) {
        return jsonResponse({ error: err instanceof Error ? err.message : String(err) }, 500);
      }
    }

    // ─────────────────────────────────────────────
    // 10. API: Admin Update Article — PUT (Protected)
    // ─────────────────────────────────────────────
    const adminArticleMatch = pathname.match(/^\/api\/admin\/articles\/(\d+)$/);
    if (adminArticleMatch && request.method === 'PUT') {
      const admin = await getAuthenticatedAdmin(request, env);
      if (!admin) return jsonResponse({ error: 'Unauthorized. Please login with 2FA.' }, 401);
      const articleId = parseInt(adminArticleMatch[1], 10);
      try {
        const body = (await request.json()) as {
          title?: string; slug?: string; summary?: string; content?: string;
          category?: string; tags?: string; cover_image?: string; is_published?: number;
        };
        if (!body.title || !body.content || !body.category)
          return jsonResponse({ error: 'Title, content, and category are required.' }, 400);

        const slug = body.slug?.trim() ||
          encodeURIComponent(body.title.toLowerCase().replace(/\s+/g, '-').slice(0, 50));

        await env.DB.prepare(
          `UPDATE articles
           SET slug=?, title=?, summary=?, content=?, category=?, tags=?, cover_image=?, is_published=?
           WHERE id=?`
        ).bind(
          slug, body.title.trim(), body.summary?.trim() || '', body.content.trim(),
          body.category.trim(), body.tags?.trim() || '', body.cover_image?.trim() || '',
          body.is_published ?? 1, articleId
        ).run();

        return jsonResponse({ success: true, slug });
      } catch (err: unknown) {
        return jsonResponse({ error: err instanceof Error ? err.message : String(err) }, 500);
      }
    }

    // ─────────────────────────────────────────────
    // 11. API: Admin Delete Article — DELETE (Protected)
    // ─────────────────────────────────────────────
    if (adminArticleMatch && request.method === 'DELETE') {
      const admin = await getAuthenticatedAdmin(request, env);
      if (!admin) return jsonResponse({ error: 'Unauthorized. Please login with 2FA.' }, 401);
      const articleId = parseInt(adminArticleMatch[1], 10);
      try {
        await env.DB.prepare(`DELETE FROM articles WHERE id=?`).bind(articleId).run();
        return jsonResponse({ success: true });
      } catch (err: unknown) {
        return jsonResponse({ error: err instanceof Error ? err.message : String(err) }, 500);
      }
    }

    // ─────────────────────────────────────────────
    // Fallback: Serve Static Assets from Astro build
    // ─────────────────────────────────────────────
    return env.ASSETS.fetch(request);
  }
};
