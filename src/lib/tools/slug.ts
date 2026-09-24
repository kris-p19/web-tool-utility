export interface SlugOptions {
  lowercase?: boolean;
  separator?: string;
  maxLength?: number;
}

export function generateSlug(value: string, options: SlugOptions = {}): string {
  const separator =
    options.separator === '-' || options.separator === '_' ? options.separator : '-';
  const normalized = value.normalize('NFKC').trim();
  const separated = normalized.replace(/['’]/g, '').replace(/[^\p{L}\p{N}\p{M}]+/gu, separator);
  const cleaned = separated
    .replace(new RegExp(`${separator}{2,}`, 'g'), separator)
    .replace(new RegExp(`^${separator}|${separator}$`, 'g'), '');
  const result = options.lowercase === false ? cleaned : cleaned.toLocaleLowerCase();
  return result
    .slice(0, Math.max(1, options.maxLength ?? 120))
    .replace(new RegExp(`${separator}$`), '');
}
