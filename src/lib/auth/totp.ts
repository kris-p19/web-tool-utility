// RFC 6238 TOTP (Time-Based One-Time Password) Implementation
// RFC 4648 Base32 Encoding / Decoding

const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export function base32Encode(buffer: Uint8Array): string {
  let bits = 0;
  let value = 0;
  let output = '';

  for (let i = 0; i < buffer.length; i++) {
    const byte = buffer[i]!;
    value = (value << 8) | byte;
    bits += 8;

    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }

  if (bits > 0) {
    output += BASE32_ALPHABET[(value << (5 - bits)) & 31];
  }

  return output;
}

export function base32Decode(input: string): Uint8Array {
  const cleaned = input.toUpperCase().replace(/[\s=-]/g, '');
  let bits = 0;
  let value = 0;
  const output: number[] = [];

  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i]!;
    const val = BASE32_ALPHABET.indexOf(char);
    if (val === -1) {
      throw new Error(`Invalid Base32 character: ${char}`);
    }

    value = (value << 5) | val;
    bits += 5;

    if (bits >= 8) {
      output.push((value >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }

  return new Uint8Array(output);
}

export function generateTotpSecret(length = 20): string {
  const randomBytes = new Uint8Array(length);
  crypto.getRandomValues(randomBytes);
  return base32Encode(randomBytes);
}

export function getOtpAuthUrl(
  username: string,
  secretBase32: string,
  issuer = 'ToolXHub'
): string {
  const cleanUser = encodeURIComponent(username);
  const cleanIssuer = encodeURIComponent(issuer);
  return `otpauth://totp/${cleanIssuer}:${cleanUser}?secret=${secretBase32}&issuer=${cleanIssuer}&algorithm=SHA1&digits=6&period=30`;
}

export async function generateTotpCode(
  secretBase32: string,
  time = Date.now(),
  stepSeconds = 30
): Promise<string> {
  const keyBytes = base32Decode(secretBase32);
  const counter = Math.floor(time / 1000 / stepSeconds);

  // Counter as 8-byte big-endian buffer
  const counterBuffer = new ArrayBuffer(8);
  const counterView = new DataView(counterBuffer);
  counterView.setUint32(0, 0, false);
  counterView.setUint32(4, counter, false);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyBytes as unknown as BufferSource,
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, counterBuffer);
  const hmacResult = new Uint8Array(signature);

  // Dynamic truncation (RFC 4226)
  const offset = hmacResult[hmacResult.length - 1]! & 0x0f;
  const binaryCode =
    ((hmacResult[offset]! & 0x7f) << 24) |
    ((hmacResult[offset + 1]! & 0xff) << 16) |
    ((hmacResult[offset + 2]! & 0xff) << 8) |
    (hmacResult[offset + 3]! & 0xff);

  const otp = binaryCode % 1000000;
  return otp.toString().padStart(6, '0');
}

export async function verifyTotpCode(
  token: string,
  secretBase32: string,
  window = 1,
  time = Date.now(),
  stepSeconds = 30
): Promise<boolean> {
  const cleanToken = token.trim();
  if (!/^\d{6}$/.test(cleanToken)) {
    return false;
  }

  for (let i = -window; i <= window; i++) {
    const testTime = time + i * stepSeconds * 1000;
    const generated = await generateTotpCode(secretBase32, testTime, stepSeconds);
    if (generated === cleanToken) {
      return true;
    }
  }

  return false;
}
