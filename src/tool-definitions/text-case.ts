import type { ToolConfig } from '../config/tools';
import TextCaseTool from '../components/tools/TextCaseTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Text Case Converter',
  'ข้อความถูกแปลงในเบราว์เซอร์',
  'วางข้อความที่ต้องการแล้วเลือกรูปแบบ Case',
  'การแปลงอาจลบช่องว่างหรืออักขระพิเศษในบางรูปแบบ ควรตรวจสอบผลลัพธ์'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Text Case Converter',
    benefit: 'เปลี่ยนรูปแบบตัวอักษรสำหรับชื่อฟิลด์ slug และข้อความในโค้ด',
    detail:
      'รองรับ Title, Sentence, camelCase, PascalCase, kebab-case, snake_case, CONSTANT_CASE และ Inverse Case ระบบใช้การแยกคำจากช่องว่าง ยัติภังค์ และขีดกลาง พร้อมคัดลอกผลลัพธ์ได้ทันที',
    caution:
      'การเปลี่ยน case ไม่เปลี่ยนความหมายของข้อมูลเสมอไป และอาจทำให้ชื่อ API หรือค่าคงที่ที่มีอยู่แล้วใช้ไม่ได้ ควรตรวจสอบ convention ของโปรเจกต์ก่อนนำไปใช้กับฐานข้อมูลหรือ production'
  },
  en: {
    topic: 'The Text Case Converter',
    benefit: 'transforming labels, slugs, identifiers, and code-facing text',
    detail:
      'Supports Title, Sentence, camelCase, PascalCase, kebab-case, snake_case, CONSTANT_CASE, and Inverse Case. Words are separated using spaces, punctuation, and common separators, and the output can be copied immediately.',
    caution:
      'Changing case does not preserve meaning by itself and can break an existing API field or constant. Check the project convention before applying a result to a database or production configuration.'
  }
});
const tool: ToolConfig = {
  slug: 'text-case',
  icon: 'Aa',
  category: 'text-content',
  name: { th: 'สลับตัวพิมพ์เล็ก-ใหญ่ (Text Case)', en: 'Text Case Converter' },
  shortDescription: {
    th: 'แปลงข้อความเป็น camelCase, kebab-case และรูปแบบอื่น ๆ',
    en: 'Convert text to camelCase, kebab-case, and more.'
  },
  description: {
    th: 'แปลง Text Case เป็นรูปแบบที่ใช้กับชื่อตัวแปร slug และข้อความได้ทันที',
    en: 'Convert text case for variables, slugs, and labels instantly.'
  },
  keywords: {
    th: ['text case', 'camelCase', 'kebab-case', 'เปลี่ยนตัวพิมพ์'],
    en: ['text case converter', 'camelCase', 'PascalCase', 'kebab case']
  },
  component: TextCaseTool,
  howTo: {
    th: ['วางข้อความต้นทาง', 'เลือกรูปแบบ Case', 'คัดลอกข้อความผลลัพธ์'],
    en: ['Paste source text', 'Choose a case style', 'Copy the converted text']
  },
  longDescription,
  faqs,
  relatedSlugs: ['slug-generator', 'json-formatter', 'markdown-html'],
  updatedAt: '2026-09-24'
};
export default tool;
