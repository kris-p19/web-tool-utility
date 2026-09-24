import type { ToolConfig } from '../config/tools';
import JsonFormatterTool from '../components/tools/JsonFormatterTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'JSON Formatter and Validator',
  'ข้อมูลถูกประมวลผลในเบราว์เซอร์',
  'วาง JSON ที่เป็น object, array, string, number, boolean หรือ null',
  'JSON ที่มี comment, trailing comma หรือ single quote จะไม่ถูกยอมรับตามมาตรฐาน'
);
const longDescription = createLongDescription({
  th: {
    topic: 'JSON Formatter และ Validator',
    benefit: 'ตรวจสอบ syntax และจัดรูปแบบข้อมูล JSON ให้อ่านง่ายขึ้น',
    detail:
      'วางข้อมูลแล้วเลือกจัดรูปแบบ ย่อขนาด หรือตรวจสอบ ผลลัพธ์แสดงข้อผิดพลาดพร้อมข้อความจาก parser และสามารถคัดลอกไปใช้ต่อได้ทันที',
    caution:
      'การจัดรูปแบบไม่เปลี่ยนค่าของ JSON แต่จำนวนและชนิดข้อมูลอาจดูต่างไปเมื่อนำไปใช้กับ API ควรตรวจสอบ schema ของปลายทางและอย่าแก้ไขข้อมูลต้นฉบับโดยไม่มีสำเนา'
  },
  en: {
    topic: 'The JSON Formatter and Validator',
    benefit: 'checking JSON syntax and making data easier to read',
    detail:
      'Paste a value and choose Format, Minify, or Validate. The page shows parser feedback when the input is invalid and places a ready-to-copy result in the output field for the next step.',
    caution:
      'Formatting does not change JSON values, although number representation and downstream types can still differ. Check the destination API schema and keep a copy before editing an original payload.'
  }
});
const tool: ToolConfig = {
  slug: 'json-formatter',
  icon: '{ }',
  category: 'converters',
  name: { th: 'JSON Formatter / Validator', en: 'JSON Formatter / Validator' },
  shortDescription: {
    th: 'จัดรูปแบบ ย่อ และตรวจสอบ JSON',
    en: 'Format, minify, and validate JSON.'
  },
  description: {
    th: 'ตรวจสอบ JSON และจัดรูปแบบหรือย่อข้อมูลได้ทันที พร้อมข้อความแจ้งข้อผิดพลาดที่เข้าใจง่าย',
    en: 'Validate JSON and format or minify it instantly with understandable error messages.'
  },
  keywords: {
    th: ['JSON formatter', 'JSON validator', 'จัดรูปแบบ JSON', 'ย่อ JSON'],
    en: ['JSON formatter', 'JSON validator', 'format JSON', 'minify JSON']
  },
  component: JsonFormatterTool,
  howTo: {
    th: ['วางข้อมูล JSON', 'เลือกจัดรูปแบบ ย่อ หรือตรวจสอบ', 'คัดลอกผลลัพธ์'],
    en: ['Paste JSON', 'Choose format, minify, or validate', 'Copy the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['json-csv', 'base64', 'markdown-html'],
  updatedAt: '2026-09-24'
};
export default tool;
