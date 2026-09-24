const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const urlSafeAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function cleanInput(value: string): string {
  return value.replace(/\s/g, '');
}

export function bytesToBase64(bytes: Uint8Array, urlSafe = false): string {
  const chars = urlSafe ? urlSafeAlphabet : alphabet;
  let output = '';
  for (let index = 0; index < bytes.length; index += 3) {
    const first = bytes[index] ?? 0;
    const second = bytes[index + 1];
    const third = bytes[index + 2];
    const combined = (first << 16) | ((second ?? 0) << 8) | (third ?? 0);
    output += chars[(combined >> 18) & 63];
    output += chars[(combined >> 12) & 63];
    output += second === undefined ? '=' : chars[(combined >> 6) & 63];
    output += third === undefined ? '=' : chars[combined & 63];
  }
  return output;
}

export function base64ToBytes(value: string, flexible = false): Uint8Array {
  let normalized = cleanInput(value);
  if (flexible) normalized = normalized.replace(/-/g, '+').replace(/_/g, '/');
  if (!normalized) return new Uint8Array();
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(normalized)) throw new Error('ข้อมูลไม่ใช่ Base64 ที่ถูกต้อง');
  const paddingIndex = normalized.indexOf('=');
  if (paddingIndex >= 0 && paddingIndex < normalized.length - 2)
    throw new Error('padding ไม่ถูกต้อง');
  const withoutPadding = normalized.replace(/=+$/, '');
  if (withoutPadding.length % 4 === 1) throw new Error('ความยาว Base64 ไม่ถูกต้อง');
  const padded = withoutPadding.padEnd(Math.ceil(withoutPadding.length / 4) * 4, '=');
  const bytes: number[] = [];
  for (let index = 0; index < padded.length; index += 4) {
    const a = alphabet.indexOf(padded[index] ?? '');
    const b = alphabet.indexOf(padded[index + 1] ?? '');
    const c = padded[index + 2] === '=' ? 0 : alphabet.indexOf(padded[index + 2] ?? '');
    const d = padded[index + 3] === '=' ? 0 : alphabet.indexOf(padded[index + 3] ?? '');
    if (a < 0 || b < 0 || c < 0 || d < 0) throw new Error('ข้อมูลไม่ใช่ Base64 ที่ถูกต้อง');
    bytes.push((a << 2) | (b >> 4));
    if (padded[index + 2] !== '=') bytes.push(((b & 15) << 4) | (c >> 2));
    if (padded[index + 3] !== '=') bytes.push(((c & 3) << 6) | d);
  }
  return Uint8Array.from(bytes);
}

export function encodeBase64(value: string, urlSafe = false): string {
  return bytesToBase64(new TextEncoder().encode(value), urlSafe);
}

export function decodeBase64(value: string, flexible = false): string {
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(base64ToBytes(value, flexible));
  } catch {
    throw new Error('ถอด Base64 ไม่สำเร็จ: ตรวจสอบข้อมูลและ encoding');
  }
}
