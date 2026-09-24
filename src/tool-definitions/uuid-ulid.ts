import type { ToolConfig } from '../config/tools';
import UuidUlidTool from '../components/tools/UuidUlidTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'UUID/ULID Generator',
  'ข้อมูลถูกสร้างในเบราว์เซอร์และไม่ถูกส่งขึ้นเซิร์ฟเวอร์',
  'เลือก UUID v4 หรือ ULID แล้วระบุจำนวนที่ต้องการ',
  'อย่าใช้ค่าเดียวกันซ้ำในระบบที่ต้องการความไม่ซ้ำ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'UUID และ ULID Generator',
    benefit: 'สร้างรหัสประจำทรัพยากรและข้อมูลแบบเรียงตามเวลา',
    detail:
      'เลือก UUID v4 สำหรับรหัสสุ่มที่ไม่เกี่ยวข้องกับเวลา หรือ ULID สำหรับรหัสที่เรียงลำดับตามเวลาได้ ระบบสร้างหลายรายการพร้อมกันและให้คัดลอกหรือดาวน์โหลดเป็นไฟล์ได้',
    caution:
      'UUID และ ULID เป็นตัวระบุ ไม่ใช่รหัสผ่านหรือกลไกยืนยันตัวตน ควรเก็บเป็นข้อมูลลับเมื่อใช้กับ API และตรวจสอบการตั้งค่าฐานข้อมูลก่อนใช้งานจริง'
  },
  en: {
    topic: 'The UUID and ULID Generator',
    benefit: 'creating resource identifiers and sortable time-oriented values',
    detail:
      'Choose UUID v4 for a random identifier that does not expose creation time, or ULID when lexicographic time ordering is useful. Generate several values at once and copy or download the list for a project, database seed, or development workflow.',
    caution:
      'UUIDs and ULIDs are identifiers, not passwords or authentication mechanisms. Treat API values as sensitive data and check your database constraints before relying on them in production.'
  }
});
const tool: ToolConfig = {
  slug: 'uuid-ulid',
  icon: 'ID',
  category: 'generators',
  name: { th: 'UUID / ULID Generator', en: 'UUID / ULID Generator' },
  shortDescription: {
    th: 'สร้าง UUID v4 และ ULID แบบสุ่มในเบราว์เซอร์',
    en: 'Generate random UUID v4 and ULID values in your browser.'
  },
  description: {
    th: 'สร้าง UUID v4 และ ULID สำหรับงานพัฒนาแอปและฐานข้อมูล พร้อมคัดลอกหรือดาวน์โหลดหลายรายการ',
    en: 'Create UUID v4 and ULID values for apps and databases, then copy or download a batch.'
  },
  keywords: {
    th: ['UUID', 'ULID', 'สร้าง UUID', 'ไอดี'],
    en: ['UUID', 'ULID', 'UUID generator', 'ULID generator', 'identifier']
  },
  component: UuidUlidTool,
  howTo: {
    th: ['เลือกชนิดตัวระบุ', 'ระบุจำนวนและกดสร้าง', 'คัดลอกหรือดาวน์โหลดรายการ'],
    en: ['Choose an identifier type', 'Set the count and generate', 'Copy or download the list']
  },
  longDescription,
  faqs,
  relatedSlugs: ['password-generator', 'slug-generator', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
