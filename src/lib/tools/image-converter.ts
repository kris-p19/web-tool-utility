export type ImageOutputFormat = 'image/png' | 'image/jpeg' | 'image/webp';

export interface ImageDimensions {
  width: number;
  height: number;
}

export const supportedImageFormats: ImageOutputFormat[] = ['image/png', 'image/jpeg', 'image/webp'];

export function isSupportedOutputFormat(value: string): value is ImageOutputFormat {
  return supportedImageFormats.includes(value as ImageOutputFormat);
}

export function getFileExtension(format: ImageOutputFormat): string {
  if (format === 'image/jpeg') return 'jpg';
  return format.split('/')[1] ?? 'png';
}

export function calculateDimensions(
  original: ImageDimensions,
  requestedWidth: number,
  requestedHeight: number,
  lockAspectRatio: boolean
): ImageDimensions {
  const safeWidth = Math.max(1, Math.round(requestedWidth));
  const safeHeight = Math.max(1, Math.round(requestedHeight));
  if (!lockAspectRatio) return { width: safeWidth, height: safeHeight };
  const ratio = original.width / original.height;
  if (requestedWidth > 0 && requestedHeight <= 0) {
    return { width: safeWidth, height: Math.max(1, Math.round(safeWidth / ratio)) };
  }
  if (requestedHeight > 0 && requestedWidth <= 0) {
    return { width: Math.max(1, Math.round(safeHeight * ratio)), height: safeHeight };
  }
  const widthScale = safeWidth / original.width;
  const heightScale = safeHeight / original.height;
  const scale = Math.min(widthScale, heightScale);
  return {
    width: Math.max(1, Math.round(original.width * scale)),
    height: Math.max(1, Math.round(original.height * scale))
  };
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
