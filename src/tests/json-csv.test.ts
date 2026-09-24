import { describe, expect, it } from 'vitest';
import { csvToJson, jsonToCsv, parseCsvRows, validateJson } from '../lib/tools/json-csv';

describe('JSON and CSV helpers', () => {
  it('parses quoted commas, escaped quotes, and line breaks', () => {
    const rows = parseCsvRows(
      'name,note\r\n"สวัสดี","hello, world"\r\n"line 1\nline 2","say ""hi"""'
    );
    expect(rows).toEqual([
      ['name', 'note'],
      ['สวัสดี', 'hello, world'],
      ['line 1\nline 2', 'say "hi"']
    ]);
  });

  it('converts a JSON array of objects to CSV and back', () => {
    const csv = jsonToCsv('[{"name":"A","active":true},{"name":"B","count":2}]');
    expect(csv).toBe('name,active,count\nA,true,\nB,,2');
    expect(csvToJson(csv)).toEqual([
      { name: 'A', active: true, count: '' },
      { name: 'B', active: '', count: 2 }
    ]);
  });

  it('reports invalid JSON clearly', () => {
    const result = validateJson('{"name":}');
    expect(result.valid).toBe(false);
    expect(result.error).toBeTruthy();
  });
});
