import { describe, expect, it } from 'vitest';
import {
  calculateThaiCitizenCheckDigit,
  cleanThaiCitizenId,
  formatThaiCitizenId,
  generateRandomThaiCitizenId,
  validateThaiCitizenId
} from '../lib/tools/thai-citizen-id';

describe('Thai Citizen ID utility', () => {
  it('cleans and formats citizen IDs correctly', () => {
    expect(cleanThaiCitizenId('1-2345-67890-12-1')).toBe('1234567890121');
    expect(cleanThaiCitizenId(' 1 2345 67890 12 1 ')).toBe('1234567890121');
    expect(formatThaiCitizenId('1234567890121')).toBe('1-2345-67890-12-1');
  });

  it('validates a known valid Thai Citizen ID algorithmically', () => {
    const first12 = '110200112233';
    const check = calculateThaiCitizenCheckDigit(first12);
    const fullId = first12 + check.toString();

    const result = validateThaiCitizenId(fullId);
    expect(result.isValid).toBe(true);
    expect(result.checkDigit).toBe(check);
  });

  it('detects invalid checksums', () => {
    const first12 = '110200112233';
    const realCheck = calculateThaiCitizenCheckDigit(first12);
    const wrongCheck = (realCheck + 1) % 10;
    const testWrongId = first12 + wrongCheck.toString();

    const result = validateThaiCitizenId(testWrongId);
    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBeDefined();
  });

  it('generates valid random Thai Citizen IDs', () => {
    for (let i = 0; i < 20; i++) {
      const generated = generateRandomThaiCitizenId();
      expect(generated.length).toBe(13);
      const validation = validateThaiCitizenId(generated);
      expect(validation.isValid).toBe(true);
    }
  });
});