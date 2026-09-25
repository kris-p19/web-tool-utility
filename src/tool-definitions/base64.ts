import type { ToolConfig } from '../config/tools';
import Base64Tool from '../components/tools/Base64Tool.astro';

const tool: ToolConfig = {
  slug: 'base64',
  icon: '64',
  category: 'ai-dev',
  name: { th: 'แปลงรหัส Base64 (Encode / Decode)', en: 'Base64 Encode / Decode' },
  shortDescription: {
    th: 'เข้ารหัสและถอดรหัส Base64 รองรับข้อความภาษาไทยและ Unicode',
    en: 'Encode and decode Base64 with Thai and Unicode text support.'
  },
  description: {
    th: 'แปลงข้อความเป็น Base64 และถอดกลับได้อย่างปลอดภัยในเบราว์เซอร์ รองรับข้อความ UTF-8 และข้อมูลแบบ URL-safe',
    en: 'Convert text to Base64 and decode it safely in your browser with UTF-8 and URL-safe support.'
  },
  keywords: {
    th: ['Base64', 'เข้ารหัส Base64', 'ถอด Base64', 'encode decode'],
    en: ['Base64', 'Base64 encode', 'Base64 decode', 'text converter']
  },
  component: Base64Tool,
  howTo: {
    th: [
      'วางข้อความที่ต้องการเข้ารหัสหรือถอดรหัส',
      'เลือกโหมด Encode หรือ Decode',
      'กดแปลง แล้วคัดลอกหรือดาวน์โหลดผลลัพธ์'
    ],
    en: [
      'Paste the text to encode or decode',
      'Choose Encode or Decode mode',
      'Select Convert, then copy or download the result'
    ]
  },
  longDescription: {
    th: [
      'Base64 เป็นวิธีแทนข้อมูลไบนารีด้วยอักขระ ASCII เพื่อให้ส่งผ่านช่องทางที่รองรับเฉพาะข้อความได้อย่างปลอดภัย เช่น ข้อความใน URL หรือค่าใน configuration ตัวแปลงนี้เข้ารหัสและถอดข้อความ UTF-8 ได้ รวมถึงอักษรไทย อักษรพิเศษ และอีโมจิ โดยไม่เสียหายจากการแปลง encoding',
      'การถอด Base64 จะตรวจสอบอักขระที่ไม่ใช่ส่วนหนึ่งของรูปแบบและแจ้งข้อผิดพลาดที่เข้าใจได้ แทนการแสดงผลผิดพลาดแบบไม่มีคำอธิบาย ผู้ใช้ควรตรวจสอบว่าข้อมูลเป็น Base64 ข้อความจริง ไม่ใช่ URL-safe Base64 หรือไฟล์ไบนารี และลบช่องว่างหรือ line breaks ที่ไม่จำเป็นก่อนนำเข้า เครื่องมือรองรับ padding แบบมาตรฐาน',
      'Base64 ไม่ใช่การเข้ารหัส ข้อมูลสามารถถอดกลับได้ง่ายด้วยเครื่องมือที่ใครก็ตาม จึงไม่ควรใช้แทนการป้องกันรหัสผ่านหรือการเข้ารหัสข้อมูลลับ ใช้ Base64 เมื่อจำเป็นต้องให้ข้อมูลอยู่ในรูปแบบที่ระบบอื่นรองรับ เช่น data URI หรือพารามิเตอร์ใน URL และควรจำกัดการเข้าถึงไฟล์ต้นฉบับ',
      'การทำงานทั้งหมดเกิดขึ้นในเบราว์เซอร์ จึงไม่ควรวางข้อมูลลับลงในช่องนำเข้าบนเครื่องสาธารณะ และควรล้างข้อมูลหลังใช้งานเสร็จ ผลลัพธ์สามารถนำไปใช้ต่อได้ทันที แต่ควรตรวจสอบ encoding และบริบทของระบบปลายทางก่อนนำไปใช้งานจริง'
    ],
    en: [
      'Base64 represents binary data with ASCII characters so it can travel through channels designed for text, such as URL parameters and configuration values. This converter works with UTF-8, so Thai letters, accented characters, and emoji survive a round trip without an encoding mismatch.',
      'Decoding checks for characters that are not valid Base64 and presents an understandable error instead of returning a broken result. Make sure the input is padded, standard text Base64 rather than URL-safe Base64 or a raw binary file. Whitespace can make a copied string easier to read, but invalid separators and labels should be removed before decoding.',
      'Base64 is encoding, not encryption. Anyone can reverse it with a decoder, so it must not be used to protect passwords or confidential data. It is useful when another system expects a text representation, such as a data URI or URL value. Keep access to the original file restricted and use real encryption or access control for sensitive content.',
      'Processing stays in the browser. Avoid entering secrets on a shared device, and clear the fields when you are finished. The output is ready to use immediately, but confirm the expected character encoding and the requirements of the destination system before relying on it in a production workflow.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'Base64 เป็นการเข้ารหัสหรือไม่?',
        answer:
          'ไม่ใช่ Base64 เป็นการเข้ารหัสข้อมูลแบบย้อนกลับได้ง่าย ควรใช้เพื่อการแปลงรูปแบบเท่านั้น'
      },
      {
        question: 'รองรับภาษาไทยหรือไม่?',
        answer:
          'รองรับ ระบบใช้ TextEncoder และ TextDecoder แบบ UTF-8 จึงรักษาอักษรไทยและ Unicode ได้'
      },
      {
        question: 'ทำไมถอดข้อมูลไม่ได้?',
        answer:
          'ตรวจสอบว่าเป็น Base64 มาตรฐาน ไม่มีข้อความอื่นปะปน และมี padding หรือจำนวนอักขระที่ถูกต้อง'
      },
      {
        question: 'ข้อมูลถูกอัปโหลดไหม?',
        answer: 'ไม่ การเข้ารหัสและถอดรหัสทำงานในเบราว์เซอร์ของคุณ'
      },
      {
        question: 'ใช้กับไฟล์ได้ไหม?',
        answer:
          'เครื่องมือนี้รองรับข้อความ หากเป็นไฟล์ไบนารีควรใช้เครื่องมือเฉพาะไฟล์และตรวจสอบ encoding'
      }
    ],
    en: [
      {
        question: 'Is Base64 encryption?',
        answer:
          'No. Base64 is reversible encoding and should not protect passwords or confidential information.'
      },
      {
        question: 'Does it support Thai text?',
        answer: 'Yes. UTF-8 TextEncoder and TextDecoder preserve Thai characters and Unicode.'
      },
      {
        question: 'Why does decoding fail?',
        answer:
          'Check that the input is standard Base64, contains no labels or extra text, and has valid padding or length.'
      },
      {
        question: 'Is my text uploaded?',
        answer: 'No. Encoding and decoding happen locally in your browser.'
      },
      {
        question: 'Can I convert a file?',
        answer:
          'This page is designed for text. Use a file-specific tool for binary files and verify their encoding.'
      }
    ]
  },
  relatedSlugs: ['json-csv', 'url-encode-decode', 'hash-generator'],
  updatedAt: '2026-09-24'
};

export default tool;
