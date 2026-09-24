const base32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

function randomBytes(length: number): Uint8Array {
  const bytes = new Uint8Array(length);
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(bytes);
  else
    for (let index = 0; index < length; index += 1) bytes[index] = Math.floor(Math.random() * 256);
  return bytes;
}

export function generateUuid(): string {
  const bytes = randomBytes(16);
  bytes[6] = ((bytes[6] ?? 0) & 0x0f) | 0x40;
  bytes[8] = ((bytes[8] ?? 0) & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function encodeBase32(bytes: Uint8Array): string {
  let bits = 0;
  let value = 0;
  let output = '';
  for (const byte of bytes) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      output += base32[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) output += base32[(value << (5 - bits)) & 31];
  return output;
}

export function generateUlid(timestamp = Date.now(), bytes = randomBytes(10)): string {
  const time = Math.max(0, Math.floor(timestamp));
  const timeBytes = new Uint8Array(6);
  let remaining = time;
  for (let index = 5; index >= 0; index -= 1) {
    timeBytes[index] = remaining & 255;
    remaining = Math.floor(remaining / 256);
  }
  return `${encodeBase32(timeBytes)}${encodeBase32(bytes).slice(0, 16)}`;
}
