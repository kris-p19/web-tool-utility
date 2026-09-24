import { describe, expect, it } from 'vitest';
import {
  estimateEntropyBits,
  generatePassword,
  normalizePasswordOptions
} from '../lib/tools/password';

describe('password helpers', () => {
  it('generates the requested length and selected character groups', () => {
    const value = generatePassword(
      { length: 24, lowercase: true, uppercase: false, numbers: true, symbols: false },
      () => Uint8Array.from({ length: 200 }, (_, index) => index)
    );
    expect(value).toHaveLength(24);
    expect(value).toMatch(/^[a-z0-9]+$/);
  });

  it('normalizes unsafe length and empty character selections', () => {
    const options = normalizePasswordOptions({
      length: 2,
      lowercase: false,
      uppercase: false,
      numbers: false,
      symbols: false
    });
    expect(options.length).toBe(8);
    expect(options.lowercase).toBe(true);
  });

  it('estimates entropy from the pool', () => {
    expect(estimateEntropyBits({ length: 10 })).toBeGreaterThan(0);
  });
});
