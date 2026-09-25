import type { ToolConfig } from '../config/tools';
import RandomTool from '../components/tools/RandomTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Random Number and Picker',
  'รายการและตัวเลขถูกสุ่มในเบราว์เซอร์',
  'ใส่ช่วงตัวเลขและจำนวน หรือใส่รายการหนึ่งรายการต่อบรรทัด',
  'การสุ่มเป็นเพียงตัวช่วย ไม่ควรใช้เป็นหลักฐานความเป็นธรรมหรือระบบความปลอดภัย'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Random Number และ Random Picker',
    benefit: 'สุ่มตัวเลขและเลือกรายการสำหรับกิจกรรม การจับรางวัล และการทดสอบระบบ',
    detail:
      'กำหนดช่วงต่ำสุดและสูงสุด จำนวนรายการ และโหมดไม่ซ้ำได้ หรือสลับไปใช้ Picker โดยวางรายการคั่นด้วยบรรทัด ระบบสุ่มด้วยค่าจากเบราว์เซอร์และแสดงผลในช่องข้อความที่คัดลอกได้',
    caution:
      'ผลลัพธ์สุ่มใหม่ได้เมื่อกดปุ่ม ไม่ควรใช้เป็นตัวสุ่มที่ตรวจสอบได้สำหรับการเงิน การรับรางวัลที่มีมูลค่า หรือการรักษาความปลอดภัย'
  },
  en: {
    topic: 'The Random Number and Random Picker tool',
    benefit: 'drawing numbers and selecting entries for activities, giveaways, and test data',
    detail:
      'Set a minimum, maximum, count, and optional no-duplicates mode, or switch to Picker and enter one item per line. The result is generated in the browser and placed in a selectable output field for copying.',
    caution:
      'A new result can be produced on every click. Do not use this lightweight random tool as a verifiable source for financial transactions, high-value prize draws, or security decisions.'
  }
});
const tool: ToolConfig = {
  slug: 'random-number-picker',
  icon: 'RND',
  category: 'design-css',
  name: { th: 'สุ่มตัวเลขและสุ่มรายชื่อ (Random Picker)', en: 'Random Number / Picker' },
  shortDescription: {
    th: 'สุ่มตัวเลขหรือสุ่มเลือกรายการจากช่วงและลิสต์',
    en: 'Draw random numbers or pick entries from a range and list.'
  },
  description: {
    th: 'สุ่มตัวเลขแบบไม่ซ้ำและสุ่มเลือกรายการจากรายการที่ป้อน พร้อมจำนวนและช่วงที่ปรับได้',
    en: 'Generate non-repeating random numbers or pick list entries with adjustable range and count.'
  },
  keywords: {
    th: ['สุ่มตัวเลข', 'สุ่มรายการ', 'random picker', 'จับรางวัล'],
    en: ['random number', 'random picker', 'number generator', 'raffle picker']
  },
  component: RandomTool,
  howTo: {
    th: ['เลือกโหมดสุ่มตัวเลขหรือรายการ', 'กำหนดช่วง จำนวน และรายการ', 'กดสุ่มและคัดลอกผลลัพธ์'],
    en: [
      'Choose number or picker mode',
      'Set the range, count, and items',
      'Generate and copy the result'
    ]
  },
  longDescription,
  faqs,
  relatedSlugs: ['uuid-ulid', 'password-generator', 'color-palette'],
  updatedAt: '2026-09-24'
};
export default tool;
