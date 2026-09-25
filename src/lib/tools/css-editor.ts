export interface CssPreviewCopy {
  lang: 'th' | 'en';
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  items: string[];
}

export const DEFAULT_CSS = `:root {
  --accent: #7c3aed;
  --accent-dark: #5b21b6;
  --card: #ffffff;
}

body {
  background: #f5f3ff;
}

.preview-stage {
  background: radial-gradient(circle at top, #ddd6fe, #f8fafc 65%);
}

.preview-card {
  border-top: 6px solid var(--accent);
  background: var(--card);
  box-shadow: 0 24px 60px rgb(91 33 182 / 18%);
}

.preview-eyebrow {
  color: var(--accent-dark);
}

.preview-title {
  color: #1e1b4b;
}

.preview-action {
  background: linear-gradient(135deg, var(--accent), var(--accent-dark));
  box-shadow: 0 10px 22px rgb(124 58 237 / 28%);
}`;

const previewBaseCss = `:where(*) {
  box-sizing: border-box;
}

:root {
  color-scheme: light;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html,
body {
  min-height: 100%;
}

body {
  margin: 0;
  color: #334155;
}

.preview-stage {
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 2rem;
  background: #f8fafc;
}

.preview-card {
  width: min(100%, 28rem);
  padding: 2rem;
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0 18px 45px rgb(15 23 42 / 12%);
}

.preview-eyebrow {
  display: inline-flex;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: #ede9fe;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.preview-title {
  margin: 1.1rem 0 0;
  color: #0f172a;
  font-size: clamp(1.65rem, 7vw, 2.25rem);
  line-height: 1.15;
}

.preview-text {
  margin: 0.85rem 0 0;
  line-height: 1.7;
}

.preview-list {
  display: grid;
  gap: 0.6rem;
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;
}

.preview-list li {
  position: relative;
  padding-left: 1.35rem;
  font-size: 0.92rem;
}

.preview-list li::before {
  position: absolute;
  left: 0;
  color: #7c3aed;
  content: "✓";
  font-weight: 900;
}

.preview-actions {
  display: flex;
  margin-top: 1.5rem;
}

.preview-action {
  min-height: 2.75rem;
  border: 0;
  border-radius: 0.75rem;
  padding: 0.65rem 1.1rem;
  background: #2563eb;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 750;
}

@media (max-width: 32rem) {
  .preview-stage {
    padding: 1rem;
  }

  .preview-card {
    padding: 1.35rem;
  }

  .preview-actions,
  .preview-action {
    width: 100%;
  }
}`;

const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => htmlEntities[character] ?? character);
}

function protectStyleElement(css: string): string {
  return css.replace(/<\/style/gi, '<\\/style');
}

export function createCssPreviewDocument(css: string, copy: CssPreviewCopy): string {
  const items = copy.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  return `<!doctype html>
<html lang="${escapeHtml(copy.lang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src data:; base-uri 'none'; form-action 'none'">
    <title>CSS preview</title>
    <style>
${previewBaseCss}
${protectStyleElement(css)}
    </style>
  </head>
  <body>
    <main class="preview-stage">
      <article class="preview-card">
        <span class="preview-eyebrow">${escapeHtml(copy.eyebrow)}</span>
        <h1 class="preview-title">${escapeHtml(copy.title)}</h1>
        <p class="preview-text">${escapeHtml(copy.description)}</p>
        <ul class="preview-list">${items}</ul>
        <div class="preview-actions">
          <button class="preview-action" type="button">${escapeHtml(copy.action)}</button>
        </div>
      </article>
    </main>
  </body>
</html>`;
}
