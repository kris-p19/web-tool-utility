import { describe, expect, it } from 'vitest';
import {
  calculateKeywordDensity,
  generateSeoContent,
  generateSlug
} from '../lib/tools/seo-content-generator';

describe('seo-content-generator', () => {
  it('generates clean slug from keyword', () => {
    expect(generateSlug('AI Token Counter')).toBe('ai-token-counter');
    expect(generateSlug('SEO Tools 2026')).toBe('seo-tools-2026');
  });

  it('calculates keyword density accurately', () => {
    const text = 'SEO tools are important. Good SEO tools save time. Use SEO tools wisely.';
    const density = calculateKeywordDensity(text, 'SEO tools');
    expect(density).toBeGreaterThan(0);
    expect(density).toBeLessThan(100);
  });

  it('generates 100% SEO quality content with high audit score', () => {
    const result = generateSeoContent({
      primaryKeyword: 'ประกันสุขภาพ เหมาจ่าย',
      secondaryKeywords: ['ค่ารักษาพยาบาล', 'เบี้ยประกัน'],
      intent: 'guide',
      tone: 'professional',
      lang: 'th'
    });

    expect(result.titles.length).toBe(3);
    expect(result.metaDescriptions.length).toBe(2);
    expect(result.outline.length).toBeGreaterThan(4);
    expect(result.fullDraftMarkdown).toContain('ประกันสุขภาพ เหมาจ่าย');
    expect(result.metaTagsCode).toContain('<title>');
    expect(result.metaTagsCode).toContain('ประกันสุขภาพ เหมาจ่าย');

    // Audit quality score should be 100 or >= 95
    expect(result.audit.overallScore).toBeGreaterThanOrEqual(95);
    expect(result.audit.checks.length).toBe(7);
  });

  it('generates English SEO content cleanly', () => {
    const result = generateSeoContent({
      primaryKeyword: 'Cloudflare Workers',
      secondaryKeywords: ['Edge Computing', 'Serverless'],
      intent: 'guide',
      tone: 'professional',
      lang: 'en'
    });

    expect(result.titles[0]?.title).toContain('Cloudflare Workers');
    expect(result.metaDescriptions[0]?.description).toContain('Cloudflare Workers');
    expect(result.audit.overallScore).toBeGreaterThanOrEqual(90);
  });
});
