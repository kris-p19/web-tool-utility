import { describe, expect, it } from 'vitest';
import {
  base32Decode,
  base32Encode,
  generateTotpCode,
  generateTotpSecret,
  getOtpAuthUrl,
  verifyTotpCode
} from '../lib/auth/totp';
import {
  generateSalt,
  generateSessionToken,
  hashPassword,
  verifyPassword
} from '../lib/auth/password';

describe('TOTP (RFC 6238) Authentication', () => {
  it('encodes and decodes base32 correctly', () => {
    const raw = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
    const encoded = base32Encode(raw);
    expect(encoded).toBe('JBSWY3DP');

    const decoded = base32Decode(encoded);
    expect(Array.from(decoded)).toEqual(Array.from(raw));
  });

  it('generates random base32 secret and valid otpauth URL', () => {
    const secret = generateTotpSecret();
    expect(secret.length).toBeGreaterThanOrEqual(16);
    expect(/^[A-Z2-7]+$/.test(secret)).toBe(true);

    const otpUrl = getOtpAuthUrl('admin', secret, 'ToolXHub');
    expect(otpUrl).toContain('otpauth://totp/ToolXHub:admin?secret=' + secret);
  });

  it('generates and verifies 6-digit TOTP token', async () => {
    const secret = generateTotpSecret();
    const now = Date.now();
    const code = await generateTotpCode(secret, now);

    expect(code).toMatch(/^\d{6}$/);

    // Verify correct code
    const isValid = await verifyTotpCode(code, secret, 1, now);
    expect(isValid).toBe(true);

    // Verify invalid code
    const isInvalid = await verifyTotpCode('000000' === code ? '111111' : '000000', secret, 1, now);
    expect(isInvalid).toBe(false);

    // Verify window drift (30 seconds in future should still pass with window=1)
    const futureCode = await generateTotpCode(secret, now + 30000);
    const windowValid = await verifyTotpCode(futureCode, secret, 1, now);
    expect(windowValid).toBe(true);
  });
});

describe('Password Hashing & Sessions', () => {
  it('hashes and verifies password correctly with salt', async () => {
    const password = 'SuperSecretAdminPassword123!';
    const { hash, salt } = await hashPassword(password);

    expect(hash.length).toBe(64); // 256 bits = 64 hex chars
    expect(salt.length).toBe(32); // 16 bytes = 32 hex chars

    const isValid = await verifyPassword(password, hash, salt);
    expect(isValid).toBe(true);

    const isWrong = await verifyPassword('WrongPassword', hash, salt);
    expect(isWrong).toBe(false);
  });

  it('generates unique salts and session tokens', () => {
    const salt1 = generateSalt();
    const salt2 = generateSalt();
    expect(salt1).not.toBe(salt2);

    const session1 = generateSessionToken();
    const session2 = generateSessionToken();
    expect(session1.length).toBe(64);
    expect(session1).not.toBe(session2);
  });
});
