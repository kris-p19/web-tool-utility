export function timestampToDate(timestamp: number): Date {
  if (!Number.isFinite(timestamp)) throw new Error('timestamp ไม่ถูกต้อง');
  return new Date(timestamp);
}

export function dateToTimestamp(date: Date): number {
  if (Number.isNaN(date.getTime())) throw new Error('วันที่ไม่ถูกต้อง');
  return date.getTime();
}

export function toBuddhistYear(year: number): number {
  return year + 543;
}

export function toGregorianYear(year: number): number {
  return year - 543;
}

export function formatDateTime(value: Date, locale: 'th' | 'en' = 'th', timeZone?: string): string {
  return new Intl.DateTimeFormat(locale === 'th' ? 'th-TH' : 'en-GB', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone
  }).format(value);
}
