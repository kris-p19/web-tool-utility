export interface QrSettings {
  size: number;
  errorCorrection: 'L' | 'M' | 'Q' | 'H';
  margin: number;
}

export const defaultQrSettings: QrSettings = {
  size: 320,
  errorCorrection: 'M',
  margin: 2
};

export function normalizeQrText(value: string, maxLength = 2048): string {
  return value.trim().slice(0, maxLength);
}

export function normalizeQrSize(value: number): number {
  return Math.min(1024, Math.max(128, Math.round(value / 16) * 16));
}
