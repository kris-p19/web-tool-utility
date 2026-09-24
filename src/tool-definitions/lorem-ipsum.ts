import type { ToolConfig } from '../config/tools';
import LoremTool from '../components/tools/LoremTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Lorem Ipsum Generator',
  'ข้อความถูกสร้างในเบราว์เซอร์และไม่ถูกบันทึก',
  'เลือกจำนวนย่อหน้าและประโยค ระบบจะสร้างข้อความภาษาไทยหรืออังกฤษตามภาษาของหน้า',
  'ข้อความเป็นตัวอย่างสำหรับการออกแบบ ไม่ควรใช้เป็นเนื้อหาข้อมูลจริงโดยไม่ตรวจสอบ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Lorem Ipsum Generator แบบไทยและอังกฤษ',
    benefit: 'สร้างข้อความตัวอย่างสำหรับงานออกแบบหน้าเว็บและ mockup',
    detail:
      'กำหนดจำนวนย่อหน้าและประโยคได้ตั้งแต่หนึ่งถึงยี่สิบ ภาษาจะเลือกตามหน้าที่เปิด ผลลัพธ์เป็นข้อความเรียบเรียงใหม่ทุกครั้งและดาวน์โหลดเป็นไฟล์ UTF-8 ได้',
    caution:
      'ควรแทนข้อความตัวอย่างด้วยเนื้อหาจริงก่อนเผยแพร่ โดยเฉพาะหน้าที่อ้างอิงข้อมูล สินค้า หรือบริการ เพราะข้อความสุ่มไม่ได้ให้ความหมายทางธุรกิจ'
  },
  en: {
    topic: 'The Thai and English Lorem Ipsum Generator',
    benefit: 'creating placeholder copy for web design and mockups',
    detail:
      'Choose between one and twenty paragraphs and one to twenty sentences per paragraph. The output follows the language of the page, creates a fresh sample on demand, and can be copied or downloaded as a UTF-8 text file.',
    caution:
      'Replace placeholder copy with reviewed, meaningful content before publishing. Random text is useful for layout decisions but does not provide factual, product, or service information.'
  }
});
const tool: ToolConfig = {
  slug: 'lorem-ipsum',
  icon: 'TXT',
  category: 'generators',
  name: { th: 'Lorem Ipsum Generator', en: 'Lorem Ipsum Generator' },
  shortDescription: {
    th: 'สร้างข้อความตัวอย่างภาษาไทยและอังกฤษ',
    en: 'Generate Thai and English placeholder text.'
  },
  description: {
    th: 'สร้าง Lorem Ipsum ภาษาไทยและอังกฤษสำหรับงาน mockup โดยเลือกจำนวนย่อหน้าและประโยคได้',
    en: 'Create Thai and English lorem ipsum for mockups with configurable paragraphs and sentences.'
  },
  keywords: {
    th: ['Lorem Ipsum', 'ข้อความตัวอย่าง', 'ภาษาไทย'],
    en: ['lorem ipsum', 'placeholder text', 'dummy text', 'Thai lorem']
  },
  component: LoremTool,
  howTo: {
    th: ['เลือกจำนวนย่อหน้าและประโยค', 'กดสร้างข้อความ', 'คัดลอกหรือดาวน์โหลดข้อความ'],
    en: ['Choose paragraph and sentence counts', 'Generate the text', 'Copy or download the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['slug-generator', 'markdown-html', 'text-case'],
  updatedAt: '2026-09-24'
};
export default tool;
