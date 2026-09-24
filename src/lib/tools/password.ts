export interface PasswordOptions {
  length: number;
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export const defaultPasswordOptions: PasswordOptions = {
  length: 20,
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true
};

const characterSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.?'
};

function getRandomBytes(size: number, randomSource?: (size: number) => Uint8Array): Uint8Array {
  if (randomSource) return randomSource(size);
  const bytes = new Uint8Array(size);
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
    return bytes;
  }
  for (let index = 0; index < size; index += 1) bytes[index] = Math.floor(Math.random() * 256);
  return bytes;
}

function randomIndex(max: number, bytes: Uint8Array, offset: number): number {
  const limit = 256 - (256 % max);
  let value = bytes[offset] ?? 0;
  let cursor = offset;
  while (value >= limit) {
    cursor += 1;
    if (cursor >= bytes.length) {
      const extra = getRandomBytes(1);
      value = extra[0] ?? 0;
      cursor = 0;
    } else {
      value = bytes[cursor] ?? 0;
    }
  }
  return value % max;
}

export function normalizePasswordOptions(options: Partial<PasswordOptions>): PasswordOptions {
  const normalized = { ...defaultPasswordOptions, ...options };
  normalized.length = Math.min(64, Math.max(8, Math.round(normalized.length)));
  if (!normalized.lowercase && !normalized.uppercase && !normalized.numbers && !normalized.symbols) {
    normalized.lowercase = true;
  }
  return normalized;
}

export function generatePassword(
  options: Partial<PasswordOptions>,
  randomSource?: (size: number) => Uint8Array
): string {
  const normalized = normalizePasswordOptions(options);
  const pools = [
    normalized.lowercase ? characterSets.lowercase : '',
    normalized.uppercase ? characterSets.uppercase : '',
    normalized.numbers ? characterSets.numbers : '',
    normalized.symbols ? characterSets.symbols : ''
  ].filter(Boolean);
  const allCharacters = pools.join('');
  const required = pools.map((pool) => pool[Math.floor(Math.random() * pool.length)] ?? pool[0]);
  const bytes = getRandomBytes(normalized.length * 2 + required.length, randomSource);
  let byteOffset = 0;
  const result = [...required];
  while (result.length < normalized.length) {
    const index = randomIndex(allCharacters.length, bytes, byteOffset);
    byteOffset += 1;
    result.push(allCharacters[index] ?? allCharacters[0]);
  }
  for (let index = result.length - 1; index > 0; index -= 1) {
    const random = randomIndex(index + 1, bytes, byteOffset);
    byteOffset += 1;
    const current = result[index] ?? '';
    result[index] = result[random] ?? current;
    result[random] = current;
  }
  return result.slice(0, normalized.length).join('');
}

export function passwordCharacterPool(options: Partial<PasswordOptions>): string {
  const normalized = normalizePasswordOptions(options);
  return [
    normalized.lowercase ? characterSets.lowercase : '',
    normalized.uppercase ? characterSets.uppercase : '',
    normalized.numbers ? characterSets.numbers : '',
    normalized.symbols ? characterSets.symbols : ''
  ].join('');
}

export function estimateEntropyBits(options: Partial<PasswordOptions>): number {
  const poolLength = passwordCharacterPool(options).length;
  return Math.round(normalizePasswordOptions(options).length * Math.log2(poolLength || 1));
}
