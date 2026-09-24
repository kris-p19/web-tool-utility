import type { ToolConfig } from '../config/tools';
import BuddhistYearTool from '../components/tools/BuddhistYearTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'พ.ศ. และ ค.ศ. Converter',
  'การคำนวณปีทำงานในเบราว์เซอร์',
  'ใส่จำนวนปี พ.ศ. หรือ ค.ศ. แล้วเลือกทิศทาง',
  'ผลลัพธ์เหมาะกับปีปกติที่ใช้ในปฏิทิน ไม่ใช่การคำนวณวันเกิดหรือปฏิทินศักราช'
);
const longDescription = createLongDescription({
  th: {
    topic: 'พ.ศ. ↔ ค.ศ. Converter',
    benefit: 'แปลงปีพุทธศักราชและคริสต์ศักราชอย่างรวดเร็ว',
    detail:
      'ใส่ปีและเลือกทิศทาง ระบบใช้ความสัมพันธ์ 543 ปีเพื่อแสดงผลพร้อมตัวเลขที่ตรวจสอบง่าย เหมาะกับการกรอกข้อมูลเอกสารหรือปีอ้างอิง',
    caution:
      'การแปลงนี้เป็นการหักหรือบวกปีตามปฏิทินสากล ไม่ใช่การคำนวณอายุ วันที่เกิด หรือปฏิทินจันทรคติ ควรตรวจสอบบริบทก่อนใช้ในเอกสารทางการ'
  },
  en: {
    topic: 'The Buddhist and Gregorian Year Converter',
    benefit: 'switching between Buddhist Era and Gregorian year labels',
    detail:
      'Enter a year, select a direction, and use the standard 543-year relationship to display a clear numeric result. It is useful when checking a year shown on a document or filling a form.',
    caution:
      'This is a calendar-year label conversion, not an age, birthday, or lunar-calendar calculation. Confirm the context before using it in an official record.'
  }
});
const tool: ToolConfig = {
  slug: 'buddhist-year',
  icon: 'BE',
  category: 'converters',
  name: { th: 'พ.ศ. ↔ ค.ศ.', en: 'Buddhist ↔ Gregorian Year' },
  shortDescription: {
    th: 'แปลงปี พ.ศ. และ ค.ศ. อย่างง่าย',
    en: 'Convert Buddhist and Gregorian years easily.'
  },
  description: {
    th: 'แปลงปีพุทธศักราชเป็นคริสต์ศักราชหรือกลับกัน พร้อมผลลัพธ์ทันที',
    en: 'Convert Buddhist Era years to Gregorian years and back instantly.'
  },
  keywords: {
    th: ['พ.ศ.', 'ค.ศ.', 'พุทธศักราช', 'คริสต์ศักราช'],
    en: ['Buddhist year', 'Gregorian year', 'BE to CE', '2569']
  },
  component: BuddhistYearTool,
  howTo: {
    th: ['เลือกทิศทางการแปลง', 'ใส่ปี พ.ศ. หรือ ค.ศ.', 'กดแปลงและตรวจสอบผลลัพธ์'],
    en: ['Choose a direction', 'Enter a BE or CE year', 'Convert and verify the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['timestamp-date', 'thai-baht-text', 'unit-converter'],
  updatedAt: '2026-09-24'
};
export default tool;
