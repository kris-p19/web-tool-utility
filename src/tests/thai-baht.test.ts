import { describe, expect, it } from 'vitest';
import { numberToThaiBaht } from '../lib/tools/thai-baht';

describe('Thai baht helper', () => {
  it('reads common amounts in Thai', () => {
    expect(numberToThaiBaht(0)).toBe('ศูนย์บาท');
    expect(numberToThaiBaht(21.5)).toBe('ยี่สิบเอ็ดบาทห้าสิบสตางค์');
    expect(numberToThaiBaht(1234)).toBe('หนึ่งพันสองร้อยสามสิบสี่บาท');
  });
});
