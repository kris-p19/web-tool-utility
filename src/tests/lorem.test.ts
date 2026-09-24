import { describe, expect, it } from 'vitest';
import { generateLorem } from '../lib/tools/lorem';

describe('lorem helper', () => {
  it('creates the requested paragraph and sentence structure', () => {
    const result = generateLorem({ locale: 'en', paragraphs: 2, sentences: 3, random: () => 0 });
    expect(result.split('\n\n')).toHaveLength(2);
    expect(result.split('.')).toHaveLength(7);
  });
});
