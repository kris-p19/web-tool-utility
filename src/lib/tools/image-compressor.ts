export function compressionRatio(originalBytes: number, compressedBytes: number): number {
  if (originalBytes <= 0) return 0;
  return Math.max(0, Math.round((1 - compressedBytes / originalBytes) * 100));
}
