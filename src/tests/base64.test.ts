import { describe, expect, it } from 'vitest';
import { base64ToBytes, bytesToBase64, decodeBase64, encodeBase64 } from '../lib/tools/base64';

describe('base64 helpers', () => {
  it('round trips UTF-8 text including Thai and emoji', () => {
    const value = 'สวัสดี ToolXHub 🛠️';
    const encoded = encodeBase64(value);
    expect(encoded).toBe(bytesToBase64(new TextEncoder().encode(value)));
    expect(decodeBase64(encoded)).toBe(value);
  });

  it('supports URL-safe output and flexible input', () => {
    const bytes = Uint8Array.from([251, 255, 190, 1]);
    const encoded = bytesToBase64(bytes, true);
    expect(encoded).not.toContain('+');
    expect(encoded).not.toContain('/');
    expect([...base64ToBytes(encoded, true)]).toEqual([...bytes]);
  });

  it('rejects malformed input', () => {
    expect(() => decodeBase64('not base64!')).toThrow();
    expect(() => base64ToBytes('A')).toThrow();
  });
});
