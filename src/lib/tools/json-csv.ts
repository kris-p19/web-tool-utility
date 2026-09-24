export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

export function parseCsvRows(input: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = '';
  let quoted = false;
  let index = 0;

  while (index < input.length) {
    const character = input[index] ?? '';
    if (quoted) {
      if (character === '"') {
        if (input[index + 1] === '"') {
          value += '"';
          index += 2;
          continue;
        }
        quoted = false;
        index += 1;
        continue;
      }
      value += character;
      index += 1;
      continue;
    }
    if (character === '"' && value.length === 0) {
      quoted = true;
      index += 1;
      continue;
    }
    if (character === ',') {
      row.push(value);
      value = '';
      index += 1;
      continue;
    }
    if (character === '\n' || character === '\r') {
      if (character === '\r' && input[index + 1] === '\n') index += 1;
      row.push(value);
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      value = '';
      index += 1;
      continue;
    }
    value += character;
    index += 1;
  }

  if (quoted) throw new Error('CSV มี quote ที่ไม่ปิด');
  if (value.length > 0 || row.length > 0) {
    row.push(value);
    if (row.some((cell) => cell.length > 0)) rows.push(row);
  }
  return rows;
}

function parseCsvValue(value: string): JsonValue {
  const trimmed = value.trim();
  if (trimmed === '') return '';
  if (/^(true|false)$/i.test(trimmed)) return trimmed.toLowerCase() === 'true';
  if (/^null$/i.test(trimmed)) return null;
  if (/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(trimmed)) {
    const numberValue = Number(trimmed);
    if (Number.isFinite(numberValue) && String(numberValue) === trimmed) return numberValue;
  }
  return value;
}

export function csvToJson(input: string): JsonValue[] {
  const rows = parseCsvRows(input);
  if (rows.length === 0) return [];
  const headers = rows[0]?.map((header, index) => header.trim() || `column_${index + 1}`) ?? [];
  return rows.slice(1).map((row) => {
    const record: Record<string, JsonValue> = {};
    headers.forEach((header, index) => {
      record[header] = parseCsvValue(row[index] ?? '');
    });
    return record;
  });
}

function escapeCsvValue(value: JsonValue): string {
  const text = typeof value === 'string' ? value : JSON.stringify(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function jsonToCsv(input: string): string {
  const parsed = JSON.parse(input) as JsonValue;
  const records = Array.isArray(parsed) ? parsed : [parsed];
  if (records.length === 0) return '';
  if (!records.every((record) => record !== null && typeof record === 'object' && !Array.isArray(record))) {
    return records.map((record) => escapeCsvValue(record)).join(',');
  }
  const objects = records as Record<string, JsonValue>[];
  const headers = [...new Set(objects.flatMap((record) => Object.keys(record)))];
  const lines = [headers.map(escapeCsvValue).join(',')];
  objects.forEach((record) => {
    lines.push(headers.map((header) => escapeCsvValue(record[header] ?? null)).join(','));
  });
  return lines.join('\n');
}

export function validateJson(input: string): { valid: boolean; error?: string; value?: JsonValue } {
  if (!input.trim()) return { valid: false, error: 'กรุณากรอกข้อมูล JSON' };
  try {
    return { valid: true, value: JSON.parse(input) as JsonValue };
  } catch (error) {
    return { valid: false, error: error instanceof Error ? error.message : 'JSON ไม่ถูกต้อง' };
  }
}
