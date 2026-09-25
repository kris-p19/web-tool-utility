import type { ToolConfig } from '../config/tools';
import CodeBeautifierTool from '../components/tools/CodeBeautifierTool.astro';

const tool: ToolConfig = {
  slug: 'code-beautifier',
  icon: '</>',
  category: 'ai-dev',
  name: {
    th: 'จัดรูปแบบโค้ด (Code Beautifier & Formatter)',
    en: 'Code Beautifier & Formatter (HTML, JS, CSS, JSON)'
  },
  shortDescription: {
    th: 'จัดรูปแบบและย่อโค้ด HTML, JavaScript, CSS และ JSON แบบมืออาชีพ ตรวจจับภาษาอัตโนมัติ ย่อขนาดไฟล์',
    en: 'Professional code beautifier and minifier for HTML, JavaScript, CSS, and JSON with auto-detection.'
  },
  description: {
    th: 'เครื่องมือจัดรูปแบบโค้ด (Code Beautifier) และย่อขนาดโค้ด (Code Minifier) ระดับมืออาชีพ รองรับ 4 ภาษาหลัก: HTML, JavaScript, CSS และ JSON มาพร้อมตัวเลือกการตั้งค่าย่อหน้า (Indent 2 spaces, 4 spaces, Tab) ระบบตรวจจับภาษาอัตโนมัติ และแสดงสถิติการประหยัดพื้นที่ไฟล์ ทำงานแบบ Client-side 100% ปลอดภัย ไม่ส่งโค้ดออกนอกเครื่อง',
    en: 'Professional code beautifier and minifier supporting HTML, JavaScript, CSS, and JSON. Features custom indentation (2/4 spaces, Tab), auto language detection, syntax validation, and file size reduction analytics. 100% private and client-side.'
  },
  keywords: {
    th: [
      'จัดรูปแบบโค้ด',
      'code beautifier',
      'format html',
      'format javascript',
      'format css',
      'format json',
      'minify code',
      'ย่อโค้ด',
      'เครื่องมือนักพัฒนา'
    ],
    en: [
      'code beautifier',
      'code formatter',
      'html formatter',
      'js beautifier',
      'css formatter',
      'json beautifier',
      'code minifier',
      'minify css js'
    ]
  },
  component: CodeBeautifierTool,
  howTo: {
    th: [
      'เลือกภาษาโค้ดที่ต้องการ (HTML, JavaScript, CSS, JSON) หรือกดปุ่ม "ตรวจจับอัตโนมัติ"',
      'วางโค้ดที่ต้องการจัดรูปแบบลงในช่องซ้ายมือ (Original Code)',
      'เลือกระยะย่อหน้า (Indent) ที่ต้องการ เช่น 2 Spaces หรือ 4 Spaces',
      'กดปุ่ม "จัดรูปแบบโค้ด (Beautify)" เพื่อจัดระเบียบ หรือ "ย่อโค้ด (Minify)" เพื่อบีบอัดขนาดไฟล์',
      'กดคัดลอก (Copy) หรือดาวน์โหลดไฟล์ (Download) เพื่อนำไปใช้งานต่อได้ทันที'
    ],
    en: [
      'Select your code language (HTML, JavaScript, CSS, JSON) or click "Auto Detect".',
      'Paste your code into the left editor pane.',
      'Choose your preferred indentation (2 spaces, 4 spaces, or tab).',
      'Click "Beautify" to format cleanly, or "Minify" to compress for production.',
      'Copy the result to your clipboard or download as a formatted file.'
    ]
  },
  longDescription: {
    th: [
      'ในการพัฒนาซอฟต์แวร์และเว็บไซต์ โค้ดที่สะอาดและมีโครงสร้างย่อหน้าที่เป็นระเบียบจะช่วยให้การอ่าน ทำความเข้าใจ และบำรุงรักษาโค้ด (Maintainability) มีประสิทธิภาพยิ่งขึ้น เครื่องมือนี้ช่วยให้นักพัฒนาสามารถจัดรูปแบบโค้ด (Beautify) ที่กระจัดกระจายให้อ่านง่ายได้ในคลิกเดียว',
      'นอกจากนี้ยังมีโหมด Minify สำหรับตัดช่องว่าง บรรทัดว่าง และคอมเมนต์ที่ไม่จำเป็นออก ช่วยลดขนาดไฟล์ (File Size) ก่อนนำขึ้น Production ส่งผลให้หน้าเว็บโหลดเร็วขึ้นและประหยัด Bandwidth',
      'ความปลอดภัยสูงสุด: การประมวลผลทั้งหมดเกิดขึ้นบนเบราว์เซอร์ของคุณ ไม่มีการส่งโค้ดหรือข้อมูลใดๆ ไปยังเซิร์ฟเวอร์ เหมาะอย่างยิ่งสำหรับการทำงานกับโค้ดโปรเจกต์ที่เป็นความลับ'
    ],
    en: [
      'Clean, well-formatted code is vital for team collaboration, code reviews, and long-term maintainability. This tool helps developers instantly beautify messy code across HTML, JavaScript, CSS, and JSON.',
      'The Minify mode strips superfluous whitespace and comments, significantly reducing file sizes to accelerate production asset loading and optimize Core Web Vitals.',
      'Privacy guaranteed: All formatting and parsing take place locally in your browser without any network telemetry or server transmission.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'เครื่องมือนี้รองรับภาษาอะไรบ้าง?',
        answer: 'รองรับ 4 ภาษาหลักของเว็บ ได้แก่ HTML, JavaScript (รวมถึง TypeScript syntax พื้นฐาน), CSS และ JSON'
      },
      {
        question: 'Minify ต่างจาก Beautify อย่างไร?',
        answer: 'Beautify จะเพิ่มการเว้นวรรคและการขึ้นบรรทัดใหม่ตามโครงสร้างไวยากรณ์ให้อ่านง่าย ส่วน Minify จะตัดช่องว่างและบรรทัดว่างออกทั้งหมดเพื่อให้ไฟล์มีขนาดเล็กที่สุดสำหรับใช้งานจริง'
      },
      {
        question: 'ข้อมูลโค้ดจะถูกเก็บไว้บนเซิร์ฟเวอร์หรือไม่?',
        answer: 'ไม่ถูกเก็บครับ ทุกอย่างทำงานแบบ Local Client-side 100% บนเครื่องของคุณ'
      }
    ],
    en: [
      {
        question: 'Which languages are supported?',
        answer: 'It supports HTML, JavaScript, CSS, and JSON with automated syntax parsing and indentation.'
      },
      {
        question: 'What is the difference between Beautify and Minify?',
        answer: 'Beautify formats code with human-readable indentation and line breaks. Minify strips all extra whitespace and comments to produce the smallest possible payload for production.'
      },
      {
        question: 'Is my proprietary code kept private?',
        answer: 'Yes, 100%. No code ever leaves your browser.'
      }
    ]
  },
  relatedSlugs: ['json-formatter', 'ai-token-counter', 'css-editor', 'markdown-html'],
  updatedAt: '2026-09-25'
};

export default tool;
