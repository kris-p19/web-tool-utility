import { describe, expect, it } from 'vitest';
import { analyzeText, countWords } from '../lib/tools/word-counter';

describe('Word Counter utility', () => {
  it('handles empty input gracefully', () => {
    const stats = analyzeText('');
    expect(stats.words).toBe(0);
    expect(stats.characters).toBe(0);
    expect(stats.charactersNoSpaces).toBe(0);
    expect(stats.paragraphs).toBe(0);
  });

  it('counts English text accurately', () => {
    const text = 'The quick brown fox jumps over the lazy dog.';
    const stats = analyzeText(text);
    expect(stats.words).toBe(9);
    expect(stats.characters).toBe(44);
    expect(stats.charactersNoSpaces).toBe(36);
    expect(stats.englishCharacters).toBe(35);
  });

  it('counts Thai text accurately using word segmentation', () => {
    // "สวัสดีชาวโลก ยินดีต้อนรับ"
    const text = 'สวัสดีชาวโลก ยินดีต้อนรับ';
    const words = countWords(text);
    // สวัสดี (1) ชาว (2) โลก (3) ยินดี (4) ต้อนรับ (5) => around 4-5 words
    expect(words).toBeGreaterThanOrEqual(3);

    const stats = analyzeText(text);
    expect(stats.thaiCharacters).toBeGreaterThan(15);
    expect(stats.spaces).toBe(1);
  });

  it('calculates paragraphs and reading time', () => {
    const multiline = 'Paragraph one.\n\nParagraph two.\n\nParagraph three.';
    const stats = analyzeText(multiline);
    expect(stats.paragraphs).toBe(3);
    expect(stats.readingTimeMinutes).toBeGreaterThan(0);
  });
});