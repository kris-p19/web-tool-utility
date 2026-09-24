import { md5 as nobleMd5, sha1 } from '@noble/hashes/legacy.js';
import { sha256, sha384, sha512 } from '@noble/hashes/sha2.js';
import { bytesToHex } from '@noble/hashes/utils.js';

export type HashAlgorithm = 'MD5' | 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';

export function md5(input: string): string {
  return bytesToHex(nobleMd5(new TextEncoder().encode(input)));
}

export async function hashText(value: string, algorithm: HashAlgorithm): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  if (algorithm === 'MD5') return md5(value);
  if (algorithm === 'SHA-1') return bytesToHex(sha1(bytes));
  if (algorithm === 'SHA-256') return bytesToHex(sha256(bytes));
  if (algorithm === 'SHA-384') return bytesToHex(sha384(bytes));
  return bytesToHex(sha512(bytes));
}
