import type { ToolConfig } from '../config/tools';
import MarkdownTool from '../components/tools/MarkdownTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Markdown to HTML Converter',
  'ข้อมูลถูกแปลงในเบราว์เซอร์',
  'วาง Markdown ที่ต้องการแปลง',
  'ตัวแปลงรองรับ Markdown พื้นฐานและ escape HTML แต่ไม่ใช่ renderer ครบทุก specification'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Markdown → HTML Converter',
    benefit: 'แปลงเนื้อหา Markdown เป็น HTML เพื่อนำไปแสดงหรือดาวน์โหลด',
    detail:
      'รองรับหัวข้อ รายการ ข้อความหนา ตัวเอียง code และลิงก์ที่ใช้โปรโตคอลปลอดภัย พร้อมแสดงตัวอย่างและ HTML พร้อมกัน ผู้ใช้สามารถคัดลอกหรือดาวน์โหลดผลลัพธ์ได้',
    caution:
      'HTML ที่ป้อนถูก escape เพื่อลดความเสี่ยง XSS แต่ควรตรวจสอบลิงก์และ attribute ก่อนเผยแพร่ ตัวแปลงนี้ไม่รองรับ extension ทุกชนิดและไม่ควรใช้แทน sanitiser ของระบบ production'
  },
  en: {
    topic: 'The Markdown to HTML Converter',
    benefit: 'turning Markdown content into HTML for publishing or download',
    detail:
      'Supports headings, lists, emphasis, code, and links with safe protocols while showing the rendered preview beside the source HTML. The result can be copied or saved as a UTF-8 file.',
    caution:
      'Input HTML is escaped to reduce XSS risk, but links and attributes should still be reviewed. This is a basic converter, not a complete Markdown specification renderer or production sanitiser.'
  }
});
const tool: ToolConfig = {
  slug: 'markdown-html',
  icon: 'MD',
  category: 'converters',
  name: { th: 'Markdown → HTML', en: 'Markdown to HTML' },
  shortDescription: {
    th: 'แปลง Markdown เป็น HTML พร้อมตัวอย่าง',
    en: 'Convert Markdown to HTML with a live preview.'
  },
  description: {
    th: 'แปลง Markdown เป็น HTML อย่างปลอดภัยขั้นพื้นฐาน พร้อม preview และดาวน์โหลดผลลัพธ์',
    en: 'Convert Markdown to safely escaped HTML with a preview and downloadable result.'
  },
  keywords: {
    th: ['Markdown HTML', 'แปลง Markdown', 'MD to HTML'],
    en: ['Markdown to HTML', 'Markdown converter', 'MD to HTML', 'Markdown preview']
  },
  component: MarkdownTool,
  howTo: {
    th: ['วาง Markdown', 'กดสร้างตัวอย่าง', 'คัดลอกหรือดาวน์โหลด HTML'],
    en: ['Paste Markdown', 'Render the preview', 'Copy or download the HTML']
  },
  longDescription,
  faqs,
  relatedSlugs: ['json-formatter', 'text-case', 'slug-generator'],
  updatedAt: '2026-09-24'
};
export default tool;
