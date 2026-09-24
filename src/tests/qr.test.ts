import { describe, expect, it } from 'vitest';
import { normalizeQrSize, normalizeQrText } from '../lib/tools/qr';

describe('QR settings helpers', () => {
  it('limits text and rounds sizes to supported steps', () => {
    expect(normalizeQrText('  hello  ')).toBe('hello');
    expect(normalizeQrText('x'.repeat(3000), 10)).toHaveLength(10);
    expect(normalizeQrSize(321)).toBe(320);
    expect(normalizeQrSize(1)).toBe(128);
  });
});
