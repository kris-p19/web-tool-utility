/**
 * Thai Citizen ID validation and generation utilities
 */

export interface ThaiCitizenIdAnalysis {
  isValid: boolean;
  formatted: string;
  raw: string;
  errorMessage?: string;
  categoryDescription?: string;
  checkDigit?: number;
  expectedCheckDigit?: number;
}

export function cleanThaiCitizenId(id: string): string {
  return id.replace(/\D/g, '');
}

export function formatThaiCitizenId(id: string): string {
  const clean = cleanThaiCitizenId(id);
  if (clean.length !== 13) return id;
  return `${clean.slice(0, 1)}-${clean.slice(1, 5)}-${clean.slice(5, 10)}-${clean.slice(10, 12)}-${clean.slice(12, 13)}`;
}

export function calculateThaiCitizenCheckDigit(first12Digits: string): number {
  if (first12Digits.length !== 12 || !/^\d{12}$/.test(first12Digits)) {
    throw new Error('Expected exactly 12 digits');
  }
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(first12Digits[i]!, 10) * (13 - i);
  }
  return (11 - (sum % 11)) % 10;
}

export function validateThaiCitizenId(id: string): ThaiCitizenIdAnalysis {
  const raw = cleanThaiCitizenId(id);

  if (!raw) {
    return { isValid: false, formatted: '', raw: '', errorMessage: 'กรุณากรอกเลขบัตรประชาชน' };
  }

  if (raw.length !== 13) {
    return {
      isValid: false,
      formatted: raw,
      raw,
      errorMessage: `เลขบัตรประชาชนต้องมี 13 หลัก (ปัจจุบันมี ${raw.length} หลัก)`
    };
  }

  const first12 = raw.slice(0, 12);
  const actualCheck = parseInt(raw[12]!, 10);
  const expectedCheck = calculateThaiCitizenCheckDigit(first12);
  const isValid = actualCheck === expectedCheck;

  const categoryDescriptions: Record<string, string> = {
    '1': 'คนสัญชาติไทยที่เกิดและมีสัญชาติไทย โดยแจ้งเกิดในกำหนดเวลา (ตั้งแต่ 1 ม.ค. 2527)',
    '2': 'คนสัญชาติไทยที่เกิดและมีสัญชาติไทย แต่แจ้งเกิดเกินกำหนดเวลา',
    '3': 'คนสัญชาติไทยและคนต่างด้าวที่มีใบสำคัญถิ่นที่อยู่ มีชื่อในทะเบียนบ้านก่อน 31 พ.ค. 2527',
    '4': 'คนสัญชาติไทยและคนต่างด้าวที่ขอมีเลขประจำตัวประชาชนภายหลัง (ก่อน 31 พ.ค. 2527 ไม่เคยมีเลข)',
    '5': 'คนสัญชาติไทยที่ได้รับอนุมัติให้เพิ่มชื่อเข้าในทะเบียนบ้านกรณีตกสำรวจ หรือกรณีอื่นๆ',
    '6': 'คนต่างด้าวที่เข้าเมืองโดยชอบ/ไม่ชอบด้วยกฎหมายชั่วคราว หรือได้รับการผ่อนผันให้อาศัย',
    '7': 'บุตรของบุคคลประเภทที่ 6 ที่เกิดในประเทศไทย',
    '8': 'คนต่างด้าวที่ได้รับสัญชาติไทยตามกฎหมาย'
  };

  const categoryDescription = categoryDescriptions[raw[0]!] ?? 'ประเภทอื่นๆ หรือบุคคลสถานะพิเศษ';

  return {
    isValid,
    formatted: formatThaiCitizenId(raw),
    raw,
    checkDigit: actualCheck,
    expectedCheckDigit: expectedCheck,
    categoryDescription,
    errorMessage: isValid ? undefined : `เลขตรวจสอบหลักสุดท้ายไม่ถูกต้อง (ได้ ${actualCheck} แต่ควรเป็น ${expectedCheck})`
  };
}

export function generateRandomThaiCitizenId(): string {
  const firstDigit = ['1', '2', '3'][Math.floor(Math.random() * 3)]!;
  let first12 = firstDigit;

  for (let i = 0; i < 11; i++) {
    first12 += Math.floor(Math.random() * 10).toString();
  }

  const checkDigit = calculateThaiCitizenCheckDigit(first12);
  return first12 + checkDigit.toString();
}