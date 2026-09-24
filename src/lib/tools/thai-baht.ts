const thaiDigits = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];

function readThaiInteger(value: number): string {
  if (value === 0) return 'ศูนย์';
  if (value < 0) return `ลบ${readThaiInteger(-value)}`;
  if (value < 10) return thaiDigits[value] ?? 'ศูนย์';
  if (value < 20)
    return `สิบ${value % 10 ? (value % 10 === 1 ? 'เอ็ด' : thaiDigits[value % 10]) : ''}`;
  if (value < 100) {
    const tens = Math.floor(value / 10);
    const prefix = tens === 2 ? 'ยี่สิบ' : `${thaiDigits[tens] ?? ''}สิบ`;
    const unit = value % 10 === 1 ? 'เอ็ด' : (thaiDigits[value % 10] ?? '');
    return `${prefix}${value % 10 ? unit : ''}`;
  }
  if (value < 1000) {
    const remainder = value % 100;
    return `${thaiDigits[Math.floor(value / 100)] ?? ''}ร้อย${remainder ? readThaiInteger(remainder) : ''}`;
  }
  if (value < 1000000) {
    const remainder = value % 1000;
    return `${readThaiInteger(Math.floor(value / 1000))}พัน${remainder ? readThaiInteger(remainder) : ''}`;
  }
  if (value < 10000000) {
    const remainder = value % 1000000;
    return `${readThaiInteger(Math.floor(value / 1000000))}แสน${remainder ? readThaiInteger(remainder) : ''}`;
  }
  return value.toLocaleString('th-TH');
}

export function numberToThaiBaht(value: number): string {
  if (!Number.isFinite(value)) throw new Error('ตัวเลขไม่ถูกต้อง');
  const rounded = Math.round((value + Number.EPSILON) * 100) / 100;
  const absolute = Math.abs(rounded);
  const integer = Math.floor(absolute);
  const satang = Math.round((absolute - integer) * 100);
  const integerText = readThaiInteger(integer);
  const satangText =
    satang === 0 ? '' : satang === 50 ? 'ห้าสิบสตางค์' : `${readThaiInteger(satang)}สตางค์`;
  return `${rounded < 0 ? 'ลบ' : ''}${integerText || 'ศูนย์'}บาท${satangText}`;
}
