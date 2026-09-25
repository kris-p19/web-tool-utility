import type { ToolConfig } from '../config/tools';
import TimestampTool from '../components/tools/TimestampTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Timestamp and Date Converter',
  'การคำนวณและการจัดรูปแบบทำงานในเบราว์เซอร์ตามเวลาท้องถิ่นของผู้ใช้',
  'ใส่ Unix timestamp เป็นตัวเลขหรือวันที่ที่เบราว์เซอร์เข้าใจ',
  'timestamp มักเป็น Unix epoch และเวลาแสดงผลอาจขึ้นกับ timezone ของเครื่อง'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Timestamp ↔ Date Converter',
    benefit: 'แปลงเวลา Unix เป็นวันที่อ่านได้และแปลงวันที่กลับเป็น timestamp',
    detail:
      'เลือกทิศทาง ใส่ค่า หรือใช้เวลาปัจจุบัน แล้วดูวันที่พร้อมเวลาและค่า epoch ผลลัพธ์ช่วยตรวจสอบ log, API response และการกำหนดเวลาในระบบต่าง ๆ',
    caution:
      'Unix timestamp มักนับจาก epoch UTC ขณะที่การแสดงวันที่อาศัย timezone และ locale ของเครื่อง ควรระบุ timezone ในระบบจริงและตรวจสอบกับ server เพื่อป้องกันความคลาดเคลื่อน'
  },
  en: {
    topic: 'The Timestamp and Date Converter',
    benefit: 'turning Unix times into readable dates and dates back into epoch values',
    detail:
      'Choose a direction, enter a value or use the current-time action, and see a formatted date together with its epoch result. This is useful when checking logs, API responses, and scheduling data.',
    caution:
      'Unix timestamps usually count from a UTC epoch, while displayed dates depend on the device timezone and locale. Make the timezone explicit in a real system and compare with the server to prevent offset errors.'
  }
});
const tool: ToolConfig = {
  slug: 'timestamp-date',
  icon: 'DATE',
  category: 'design-css',
  name: { th: 'แปลง Unix Timestamp ↔ วันที่เวลา', en: 'Timestamp ↔ Date' },
  shortDescription: {
    th: 'แปลง Unix timestamp เป็นวันที่และกลับกัน',
    en: 'Convert Unix timestamps to dates and back.'
  },
  description: {
    th: 'แปลง Timestamp เป็นวันที่เวลา หรือแปลงวันที่เป็น Unix timestamp แบบทันที',
    en: 'Instantly convert timestamps to readable dates or dates to Unix timestamps.'
  },
  keywords: {
    th: ['timestamp', 'unix time', 'วันที่', 'epoch'],
    en: ['timestamp converter', 'Unix timestamp', 'date converter', 'epoch']
  },
  component: TimestampTool,
  howTo: {
    th: ['เลือกทิศทาง', 'ใส่ timestamp หรือวันที่', 'กดแปลงหรือใช้เวลาปัจจุบัน'],
    en: ['Choose a direction', 'Enter a timestamp or date', 'Convert or use the current time']
  },
  longDescription,
  faqs,
  relatedSlugs: ['buddhist-year', 'unit-converter', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
