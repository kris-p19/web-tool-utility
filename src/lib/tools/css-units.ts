export function pxToRem(px: number, rootFontSize = 16): number {
  return px / Math.max(1, rootFontSize);
}

export function remToPx(rem: number, rootFontSize = 16): number {
  return rem * Math.max(1, rootFontSize);
}

export function formatCssNumber(value: number, precision = 4): string {
  return Number(value.toFixed(precision)).toString();
}
