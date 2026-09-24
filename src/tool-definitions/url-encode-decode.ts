import type { ToolConfig } from '../config/tools';
import UrlTool from '../components/tools/UrlTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'URL Encode and Decoder',
  'ข้อความถูกเข้ารหัสหรือถอดในเบราว์เซอร์',
  'เลือกโหมด Encode หรือ Decode แล้ววางข้อความหรือ URL',
  'อย่าใช้ URL encoding แทนการเข้ารหัสข้อมูลลับ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'URL Encode และ URL Decode',
    benefit: 'เข้ารหัสหรือถอดข้อมูลที่ใช้ใน URL และ query string',
    detail:
      'เลือกโหมดแล้ววางค่า ระบบใช้ encodeURIComponent หรือ decodeURIComponent พร้อมแสดงข้อผิดพลาดเมื่อข้อมูลไม่ถูกต้อง ผลลัพธ์อยู่ใน textarea ที่คัดลอกได้',
    caution:
      'การ encode ไม่ได้ทำให้ URL ปลอดภัยหรือซ่อนข้อมูล ควรตรวจสอบโดเมนและพารามิเตอร์ก่อนเปิดลิงก์ และอย่าใส่รหัสผ่านหรือ token ลงใน URL ที่แชร์ต่อสาธารณะ'
  },
  en: {
    topic: 'The URL Encode and Decode tool',
    benefit: 'encoding or decoding values used in URLs and query strings',
    detail:
      'Choose a mode, paste the value, and use the browser URL encoding functions. Invalid escapes produce a clear error, while valid results remain in a selectable textarea for copying.',
    caution:
      'URL encoding does not make a link safe or hide information. Check the destination domain and parameters, and never place passwords or private tokens in a public URL.'
  }
});
const tool: ToolConfig = {
  slug: 'url-encode-decode',
  icon: 'URL',
  category: 'converters',
  name: { th: 'URL Encode / Decode', en: 'URL Encode / Decode' },
  shortDescription: {
    th: 'เข้ารหัสและถอดข้อความสำหรับ URL อย่างง่าย',
    en: 'Encode and decode URL text with one click.'
  },
  description: {
    th: 'URL Encode และ Decode ข้อความสำหรับ query string และลิงก์ พร้อมตรวจสอบข้อมูลผิดพลาด',
    en: 'Encode and decode text for query strings and links with validation.'
  },
  keywords: {
    th: ['URL encode', 'URL decode', 'encodeURIComponent', 'ลิงก์'],
    en: ['URL encoder', 'URL decoder', 'encode URI', 'decode URI']
  },
  component: UrlTool,
  howTo: {
    th: ['เลือก Encode หรือ Decode', 'วางข้อความหรือ URL', 'กดแปลงและคัดลอกผลลัพธ์'],
    en: ['Choose Encode or Decode', 'Paste text or a URL', 'Convert and copy the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['base64', 'slug-generator', 'json-csv'],
  updatedAt: '2026-09-24'
};
export default tool;
