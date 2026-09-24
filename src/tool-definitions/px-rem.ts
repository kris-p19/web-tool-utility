import type { ToolConfig } from '../config/tools';
import PxRemTool from '../components/tools/PxRemTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'px to rem Converter',
  'การคำนวณไม่ส่งข้อมูลออกนอกเบราว์เซอร์',
  'เลือกโหมด px เป็น rem หรือ rem เป็น px และใส่ค่า',
  'rem ขึ้นกับ root font size และค่า CSS จริงอาจถูกปัดเศษ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'px ↔ rem Converter',
    benefit: 'แปลงขนาด CSS เพื่อให้เลย์เอาต์รองรับการปรับขนาดฟอนต์ได้',
    detail:
      'กำหนด root font size ได้ตั้งแต่ 1px ขึ้นไป แล้วเลือกแปลง px เป็น rem หรือย้อนกลับ ผลลัพธ์แสดงเป็นตัวเลขที่ปัดเศษอย่างเหมาะสมพร้อมหน่วย',
    caution:
      'ค่า rem อ้างอิง root font size จริงของเอกสาร ซึ่งอาจถูกผู้ใช้หรือ media query เปลี่ยน ควรตรวจสอบผลใน browser และไม่ควรแทนทุกค่า px ด้วย rem โดยไม่พิจารณา design system'
  },
  en: {
    topic: 'The px to rem Converter',
    benefit: 'translating CSS sizes into units that respond to root typography',
    detail:
      'Set a root font size and choose px-to-rem or rem-to-px. The result is rounded to a practical precision and displayed with the appropriate unit for use in a stylesheet or design discussion.',
    caution:
      'rem depends on the actual document root font size, which users and media queries may change. Verify the result in a browser and do not replace every px value without considering the design system.'
  }
});
const tool: ToolConfig = {
  slug: 'px-rem',
  icon: 'px',
  category: 'converters',
  name: { th: 'px ↔ rem Converter', en: 'px ↔ rem Converter' },
  shortDescription: {
    th: 'แปลงขนาด CSS ระหว่าง px และ rem',
    en: 'Convert CSS sizes between px and rem.'
  },
  description: {
    th: 'แปลง px เป็น rem และ rem เป็น px ตาม root font size เพื่อช่วยวางโครงสร้าง CSS ที่ยืดหยุ่น',
    en: 'Convert px to rem and rem to px using a configurable root font size.'
  },
  keywords: {
    th: ['px rem', 'rem to px', 'CSS หน่วย', 'font size'],
    en: ['px to rem', 'rem to px', 'CSS units', 'root font size']
  },
  component: PxRemTool,
  howTo: {
    th: ['เลือกโหมดการแปลง', 'ใส่ค่าและ root font size', 'กดแปลงและนำค่าไปใช้'],
    en: [
      'Choose a conversion direction',
      'Enter the value and root size',
      'Convert and use the result'
    ]
  },
  longDescription,
  faqs,
  relatedSlugs: ['unit-converter', 'color-palette', 'markdown-html'],
  updatedAt: '2026-09-24'
};
export default tool;
