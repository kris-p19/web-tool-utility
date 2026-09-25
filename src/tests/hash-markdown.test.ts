import { describe, expect, it } from 'vitest';
import { md5, hashText } from '../lib/tools/hash';
import { markdownToHtml } from '../lib/tools/markdown';

describe('hash and markdown helpers', () => {
  it('matches known MD5 and SHA-256 values', async () => {
    expect(md5('hello')).toBe('5d41402abc4b2a76b9719d911017c592');
    await expect(hashText('hello', 'SHA-256')).resolves.toBe(
      '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
    );
  });

  it('escapes unsafe HTML while rendering markdown', () => {
    expect(markdownToHtml('# Hi\n\n<script>alert(1)</script>')).toContain('&lt;script&gt;');
    expect(markdownToHtml('[safe](https://example.com)')).toContain('rel="noopener noreferrer"');
  });

  it('renders SQL seeded article formatting and escaped code', () => {
    const html = markdownToHtml('# Title\\n\\n- **first**\\n- second\\n\\n```js\\n<script>alert(1)</script>\\n```');
    expect(html).toContain('<h1>Title</h1>');
    expect(html).toContain('<ul><li><strong>first</strong></li><li>second</li></ul>');
    expect(html).toContain('<pre><code>&lt;script&gt;alert(1)&lt;/script&gt;</code></pre>');
    expect(html).not.toContain('\\n');
  });
});
