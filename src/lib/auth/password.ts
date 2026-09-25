// Secure Password Hashing using PBKDF2-HMAC-SHA256 (Web Crypto API)

export function bufferToHex(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function hexToBuffer(hex: string): Uint8Array {
  const match = hex.match(/.{1,2}/g) || [];
  return new Uint8Array(match.map((byte) => parseInt(byte, 16)));
}

export function generateSalt(length = 16): string {
  const randomBytes = new Uint8Array(length);
  crypto.getRandomValues(randomBytes);
  return bufferToHex(randomBytes);
}

export function generateSessionToken(): string {
  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);
  return bufferToHex(randomBytes);
}

export async function hashPassword(
  password: string,
  salt = generateSalt()
): Promise<{ hash: string; salt: string }> {
  const encoder = new TextEncoder();
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: hexToBuffer(salt) as unknown as BufferSource,
      iterations: 100000,
      hash: 'SHA-256'
    },
    passwordKey,
    256
  );

  return {
    hash: bufferToHex(derivedBits),
    salt
  };
}

export async function verifyPassword(
  password: string,
  storedHash: string,
  salt: string
): Promise<boolean> {
  const computed = await hashPassword(password, salt);
  // Timing-safe comparison
  if (computed.hash.length !== storedHash.length) return false;
  let result = 0;
  for (let i = 0; i < computed.hash.length; i++) {
    result |= computed.hash.charCodeAt(i) ^ storedHash.charCodeAt(i);
  }
  return result === 0;
}
