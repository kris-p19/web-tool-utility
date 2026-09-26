import { describe, expect, it } from 'vitest';
import { markdownToHtml } from '../lib/tools/markdown';
import { AD_SLOT_IDS } from '../config/site';

describe('article in-content ad placement', () => {
  it('renders one ad container per marker and keeps the surrounding text', () => {
    const html = markdownToHtml(
      '## หัวข้อ\n\nย่อหน้าก่อนโฆษณา\n\n{{AD}}\n\nย่อหน้าหลังโฆษณา\n\n<!-- AD:below -->\n\n{{AD:sidebar}}\n\nท้ายเรื่อง'
    );
    expect(html.match(/data-ad-slot-name/g) ?? []).toHaveLength(3);
    expect(html).toContain('class="ad-slot my-8" data-ad-container data-ad-slot-name="inline"');
    expect(html).toContain('data-ad-slot-name="below"');
    expect(html).toContain('data-ad-slot-name="sidebar"');
    expect(html).toContain('<p>ย่อหน้าก่อนโฆษณา</p>');
    expect(html).toContain('<p>ท้ายเรื่อง</p>');
  });

  it('never renders the marker as visible text', () => {
    const html = markdownToHtml('{{AD}}');
    expect(html).not.toContain('{{');
    expect(html).not.toContain('&lt;');
  });

  it('ignores markers that sit inside a code block', () => {
    const html = markdownToHtml('```\n{{AD}}\n```\n\n{{AD}}');
    expect(html).toContain('<pre><code>{{AD}}</code></pre>');
    expect(html.match(/data-ad-slot-name/g) ?? []).toHaveLength(1);
  });

  it('exposes numeric ad unit ids for every placement', () => {
    for (const slotId of Object.values(AD_SLOT_IDS)) {
      expect(slotId).toMatch(/^\d+$/);
    }
  });
});
