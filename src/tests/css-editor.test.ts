import { describe, expect, it } from 'vitest';
import {
  createCssPreviewDocument,
  DEFAULT_CSS,
  type CssPreviewCopy
} from '../lib/tools/css-editor';

const copy: CssPreviewCopy = {
  lang: 'en',
  eyebrow: 'Preview',
  title: 'Sample <card>',
  description: 'Edit the CSS',
  action: 'Try it',
  items: ['First item', 'Second item']
};

describe('CSS editor', () => {
  it('builds a self-contained preview document', () => {
    const preview = createCssPreviewDocument(DEFAULT_CSS, copy);

    expect(preview).toContain('<!doctype html>');
    expect(preview).toContain('.preview-card');
    expect(preview).toContain('Sample &lt;card&gt;');
    expect(preview).toContain("default-src 'none'; style-src 'unsafe-inline'");
  });

  it('keeps user input inside the style element', () => {
    const preview = createCssPreviewDocument(
      '.preview-card::after { content: "</style><script>alert(1)</script>"; }',
      copy
    );

    expect(preview).not.toContain('</style><script>');
    expect(preview).toContain('<\\/style><script>alert(1)</script>');
    expect(preview.match(/<\/style>/gi)).toHaveLength(1);
  });
});
