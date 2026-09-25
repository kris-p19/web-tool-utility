import type { ToolConfig } from '../config/tools';
import SlugTool from '../components/tools/SlugTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Slug Generator',
  'ข้อความถูกประมวลผลในเบราว์เซอร์',
  'ป้อนชื่อหน้า โดเมน หรือข้อความที่ต้องการทำเป็น slug',
  'ควรตรวจสอบ URL ที่ได้และหลีกเลี่ยงการเปลี่ยน slug หลังเผยแพร่'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Slug Generator',
    benefit: 'สร้าง URL slug ที่อ่านง่ายและเหมาะกับ SEO',
    detail:
      'รองรับภาษาไทยและอังกฤษ ปรับตัวพิมพ์ ตัวคั่น และความยาวสูงสุดได้ ระบบตัดอักขระที่ไม่จำเป็นและรวมช่องว่างหรือเครื่องหมายซ้ำให้เป็นตัวคั่นเดียว',
    caution:
      'slug ควรสั้น คงที่ และไม่เปิดเผยข้อมูลลับ หาก URL เดิมถูกแชร์แล้วควรใช้ redirect 301 แทนการเปลี่ยนกลับ ๆ และตรวจสอบ canonical ให้ตรงกับหน้าจริง'
  },
  en: {
    topic: 'The Slug Generator',
    benefit: 'creating readable, SEO-friendly URL segments for pages and projects',
    detail:
      'Thai and Latin text are supported, with controls for letter case, separator, and maximum length. The tool removes unnecessary characters and collapses spaces or repeated punctuation into a consistent separator.',
    caution:
      'Keep slugs short, stable, and free of secrets. If a URL has already been shared, use a 301 redirect rather than changing it back and forth, and keep the canonical tag aligned with the real destination.'
  }
});
const tool: ToolConfig = {
  slug: 'slug-generator',
  icon: 'SLG',
  category: 'text-content',
  name: { th: 'สร้างสลัก URL (Slug Generator)', en: 'Slug Generator' },
  shortDescription: {
    th: 'สร้าง slug จากข้อความภาษาไทยและอังกฤษ',
    en: 'Create slugs from Thai and English text.'
  },
  description: {
    th: 'สร้าง URL slug อ่านง่ายด้วยตัวคั่นและความยาวที่ปรับได้ รองรับภาษาไทยและอังกฤษ',
    en: 'Generate readable URL slugs with configurable separators and length for Thai and English content.'
  },
  keywords: {
    th: ['slug', 'สร้าง slug', 'URL slug', 'SEO'],
    en: ['slug generator', 'URL slug', 'SEO slug', 'permalink']
  },
  component: SlugTool,
  howTo: {
    th: ['ป้อนชื่อหรือข้อความ', 'เลือกตัวคั่นและความยาว', 'คัดลอก slug ที่ได้'],
    en: ['Enter a name or text', 'Choose separator and length', 'Copy the resulting slug']
  },
  longDescription,
  faqs,
  relatedSlugs: ['uuid-ulid', 'lorem-ipsum', 'url-encode-decode'],
  updatedAt: '2026-09-24'
};
export default tool;
