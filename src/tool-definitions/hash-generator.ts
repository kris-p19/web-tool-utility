import type { ToolConfig } from '../config/tools';
import HashTool from '../components/tools/HashTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Hash Generator',
  'ข้อความถูกประมวลผลในเบราว์เซอร์ด้วย Web Crypto หรือ MD5 implementation',
  'ป้อนข้อความ UTF-8 และเลือก MD5, SHA-1, SHA-256, SHA-384 หรือ SHA-512',
  'MD5 และ SHA-1 ไม่ควรใช้กับการตรวจสอบความปลอดภัยใหม่ และ hash ไม่ใช่การเข้ารหัส'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Hash Generator',
    benefit: 'สร้างค่า checksum ของข้อความสำหรับตรวจสอบความถูกต้องและการพัฒนาระบบ',
    detail:
      'รองรับ MD5 และตระกูบ SHA ผ่าน Web Crypto API ของเบราว์เซอร์ ยกเว้น MD5 ที่มี implementation สำหรับการทดสอบความเข้ากันได้ ผลลัพธ์แสดงเป็น hexadecimal และไม่แก้ไขข้อมูลต้นฉบับ',
    caution:
      'hash เป็นการสรุปข้อมูลแบบอ่านย้อนไม่ได้ ไม่ใช่การเข้ารหัข้อมูลลับ และอาจมี collision โดยเฉพาะ MD5 ควรใช้ SHA-256 ขึ้นไปสำหรับงานใหม่ พร้อมเก็บ salt และการตรวจสอบความถูกต้องที่เหมาะสม'
  },
  en: {
    topic: 'The Hash Generator',
    benefit: 'creating text checksums for integrity checks and development workflows',
    detail:
      'MD5 and the SHA family are available through the browser Web Crypto API, with a compatible MD5 implementation for interoperability checks. Results are shown as lowercase hexadecimal and the original text is never changed.',
    caution:
      'A hash is a one-way summary, not encryption, and collisions are possible, especially with MD5. Prefer SHA-256 or stronger for new security designs, and use appropriate salting and verification for passwords.'
  }
});
const tool: ToolConfig = {
  slug: 'hash-generator',
  icon: 'HASH',
  category: 'generators',
  name: { th: 'Hash Generator (MD5 / SHA)', en: 'Hash Generator (MD5 / SHA)' },
  shortDescription: {
    th: 'สร้าง MD5 และ SHA hash จากข้อความในเบราว์เซอร์',
    en: 'Create MD5 and SHA hashes from text in your browser.'
  },
  description: {
    th: 'สร้าง Hash MD5, SHA-1, SHA-256, SHA-384 และ SHA-512 สำหรับตรวจสอบข้อมูลและการพัฒนา',
    en: 'Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes for verification and development.'
  },
  keywords: {
    th: ['MD5', 'SHA256', 'hash', 'สร้าง hash'],
    en: ['MD5', 'SHA256', 'hash generator', 'checksum', 'SHA-512']
  },
  component: HashTool,
  howTo: {
    th: ['วางข้อความที่ต้องการ', 'เลือกอัลกอริทึม', 'กดสร้างและคัดลอก hash'],
    en: ['Paste the text', 'Choose an algorithm', 'Create and copy the hash']
  },
  longDescription,
  faqs,
  relatedSlugs: ['password-generator', 'base64', 'uuid-ulid'],
  updatedAt: '2026-09-24'
};
export default tool;
