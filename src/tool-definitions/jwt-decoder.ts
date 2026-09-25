import type { ToolConfig } from '../config/tools';
import JwtDecoderTool from '../components/tools/JwtDecoderTool.astro';

const tool: ToolConfig = {
  slug: 'jwt-decoder',
  icon: 'JWT',
  category: 'converters',
  name: {
    th: 'ถอดรหัส JWT (JWT Decoder)',
    en: 'JWT Decoder'
  },
  shortDescription: {
    th: 'ถอดรหัส JSON Web Token (JWT) เพื่อดู Header, Payload และตรวจสอบวันหมดอายุแบบเรียลไทม์',
    en: 'Decode JSON Web Tokens (JWT) to inspect Header, Payload claims, and expiration status in real-time.'
  },
  description: {
    th: 'เครื่องมือถอดรหัส JSON Web Token (JWT Decoder) ออนไลน์ฟรี สำหรับนักพัฒนาซอฟต์แวร์ ถอดรหัสส่วน Header (Algorithm) และ Payload (Claims) ออกมาเป็น JSON ที่อ่านง่าย พร้อมตรวจสอบวันเวลาหมดอายุ (exp) และเวลาออกโทเค็น (iat) อัตโนมัติ โดยประมวลผลบนเบราว์เซอร์อย่างปลอดภัย ไม่มีการส่ง Token ออกไปยังภายนอก',
    en: 'Free online JSON Web Token (JWT) decoder for developers. Decode Header and Payload into readable JSON format, inspect claims, and check expiration time (exp) and issued-at (iat) status in real-time. 100% private and client-side.'
  },
  keywords: {
    th: [
      'JWT decoder',
      'ถอดรหัส JWT',
      'อ่าน JWT',
      'JSON Web Token',
      'เช็ควันหมดอายุ JWT',
      'jwt io',
      'decode jwt online'
    ],
    en: [
      'jwt decoder',
      'decode jwt',
      'jwt parser',
      'json web token decoder',
      'jwt inspector',
      'jwt expiration check'
    ]
  },
  component: JwtDecoderTool,
  howTo: {
    th: [
      'คัดลอก JWT Token (สตริงที่คั่นด้วยจุด 3 ส่วน ขึ้นต้นด้วย eyJ...) แล้ววางลงในช่องกรอกข้อมูล',
      'ระบบจะทำการถอดรหัส Base64Url และแปลง Header และ Payload ออกมาเป็นรูปแบบ JSON สวยงามทันที',
      'ตรวจสอบสถานะความถูกต้อง วันเวลาที่ออกโทเค็น (iat) และสถานะการหมดอายุ (exp)',
      'กดปุ่ม "คัดลอก Header" หรือ "คัดลอก Payload" เพื่อนำข้อมูล JSON ไปใช้งานต่อ'
    ],
    en: [
      'Paste your encoded JWT string (starting with eyJ...) into the input field.',
      'The tool decodes Base64Url data into formatted JSON for both Header and Payload in real-time.',
      'Check expiration (exp) and issued-at (iat) timestamps along with token validity status.',
      'Use the copy buttons to copy the decoded JSON payload or header.'
    ]
  },
  longDescription: {
    th: [
      'JSON Web Token (JWT) คือมาตรฐานเปิด (RFC 7519) ที่ใช้ในการส่งต่อข้อมูลระหว่างกันอย่างกะทัดรัดและปลอดภัยในรูปแบบ JSON อ็อบเจกต์ ซึ่งนิยมใช้งานอย่างแพร่หลายในระบบยืนยันตัวตน (Authentication) เช่น OAuth 2.0, OpenID Connect และระบบ Single Sign-On (SSO)',
      'โครงสร้างของ JWT ประกอบด้วย 3 ส่วนหลักที่คั่นด้วยเครื่องหมายจุด (.): 1. Header (ระบุประเภทและอัลกอริทึมการเข้ารหัส เช่น HS256, RS256), 2. Payload (ข้อมูลหรือ Claims เช่น รหัสผู้ใช้, สิทธิ์การเข้าถึง, เวลาหมดอายุ exp), และ 3. Signature (ลายเซ็นดิจิทัลสำหรับตรวจสอบความถูกต้อง)',
      'เครื่องมือ JWT Decoder ของ ToolXHub ช่วยให้นักพัฒนาสามารถตรวจสอบและ Debug ข้อมูลภายใน Token ได้อย่างสะดวก รวดเร็ว และที่สำคัญที่สุดคือ ความปลอดภัยระดับสูงสุด เนื่องจากโค้ดทำงานบนเบราว์เซอร์ของคุณ (Client-side) แบบ 100% ไม่มีการบันทึกหรือส่ง Secret/Token ของคุณไปยังเซิร์ฟเวอร์ใดๆ'
    ],
    en: [
      'JSON Web Token (JWT) is an open industry standard (RFC 7519) for securely transmitting information between parties as a compact JSON object. It is extensively used in modern web APIs, OAuth 2.0, OpenID Connect, and user session management.',
      'A JWT consists of three parts separated by dots (.): Header (signing algorithm & token type), Payload (claims data including user identities, scopes, and expiration timestamps), and Signature (used to verify authenticity).',
      'ToolXHub JWT Decoder provides an intuitive and private environment for inspecting JWT contents. Processing occurs entirely in your local browser, ensuring credentials and sensitive tokens never travel over the network.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'การวาง JWT Token ในหน้านี้ปลอดภัยหรือไม่?',
        answer:
          'ปลอดภัย 100% ครับ ระบบประมวลผลด้วย JavaScript ภายในเบราว์เซอร์ของคุณเท่านั้น (Client-side) ไม่มีการส่งข้อมูล Token ไปยังเซิร์ฟเวอร์ใดๆ ทั้งสิ้น'
      },
      {
        question: 'เครื่องมือนี้สามารถตรวจสอบลายเซ็น (Verify Signature) ได้หรือไม่?',
        answer:
          'เครื่องมือนี้เน้นการถอดรหัสเพื่อดูข้อมูล Header และ Payload เพื่อความปลอดภัยสูงสุดของผู้ใช้ เราจึงไม่มีการขอ Secret Key หรือ Private Key ของคุณ'
      },
      {
        question: 'JWT ต่างจาก Access Token ทั่วไปอย่างไร?',
        answer:
          'JWT เป็น Self-contained Token ที่มีข้อมูล Claims และเวลาหมดอายุบรรจุอยู่ในตัว Token เอง ทำให้เซิร์ฟเวอร์ปลายทางสามารถอ่านและตรวจสอบข้อมูลได้ทันทีโดยไม่ต้องคิวรีฐานข้อมูลซ้ำ'
      }
    ],
    en: [
      {
        question: 'Is it safe to paste sensitive tokens here?',
        answer:
          'Yes, completely safe. The decoding is performed 100% locally in your browser using JavaScript. No tokens are sent over the network or saved.'
      },
      {
        question: 'Does this tool verify token signatures?',
        answer:
          'This tool focuses on decoding and inspecting the claims inside the Header and Payload without asking you to expose your secret keys.'
      },
      {
        question: 'What is the format of standard claims in JWT?',
        answer:
          'Common standard claims include `sub` (subject/user ID), `iat` (issued at epoch seconds), `exp` (expiration epoch seconds), and `iss` (issuer).'
      }
    ]
  },
  relatedSlugs: ['base64', 'hash-generator', 'json-formatter', 'word-counter'],
  updatedAt: '2026-09-25'
};

export default tool;