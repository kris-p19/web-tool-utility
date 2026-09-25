import type { ToolConfig } from '../config/tools';
import PasswordGeneratorTool from '../components/tools/PasswordGeneratorTool.astro';

const tool: ToolConfig = {
  slug: 'password-generator',
  icon: 'PWD',
  category: 'ai-dev',
  name: { th: 'สุ่มรหัสผ่านปลอดภัย (Password Generator)', en: 'Password Generator' },
  shortDescription: {
    th: 'สร้างรหัสผ่านแบบสุ่มและปลอดภัย ควบคุมความยาวและตัวอักษรได้',
    en: 'Generate strong random passwords with control over length and characters.'
  },
  description: {
    th: 'สร้างรหัสผ่านสุ่มแบบปลอดภัยด้วยเบราว์เซอร์ เลือกความยาว ตัวอักษร ตัวเลข และสัญลักษณ์ได้ พร้อมคัดลอกรหัสได้ทันที',
    en: 'Create secure random passwords in your browser with configurable length, letters, numbers, and symbols, then copy them instantly.'
  },
  keywords: {
    th: ['รหัสผ่าน', 'สุ่มรหัสผ่าน', 'password', 'สุ่มรหัส'],
    en: ['password generator', 'random password', 'secure password', 'strong password']
  },
  component: PasswordGeneratorTool,
  howTo: {
    th: [
      'เลือกความยาวและชนิดตัวอักษรที่ต้องการ',
      'กดสร้างรหัสผ่านเพื่อสร้างค่าใหม่แบบสุ่ม',
      'คัดลอกรหัสไปยังตัวจัดการรหัสผ่านที่ปลอดภัย'
    ],
    en: [
      'Choose a length and the character groups you need',
      'Select Generate password to create a new random value',
      'Copy the password to a trusted password manager'
    ]
  },
  longDescription: {
    th: [
      'Password Generator สร้างรหัสผ่านแบบสุ่มโดยใช้ Web Crypto API ของเบราว์เซอร์ ทำให้แต่ละรหัสมีความแตกต่างและไม่ต้องส่งค่าที่สุ่มไปยังเซิร์ฟเวอร์ คุณสามารถปรับความยาวได้ตั้งแต่ 8 ถึง 64 ตัวอักษร และเลือกใช้ตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่ ตัวเลข และสัญลักษณ์ได้ตามความต้องการ',
      'รหัสผ่านที่ยาวและมีหลายชนิดตัวอักษรมีโอกาสถูกเดายากกว่ารหัสสั้น แนะนำให้ใช้ความยาวอย่างน้อย 16 ตัวอักษรสำหรับบัญชีทั่วไป และยาวกว่านั้นสำหรับบัญชีสำคัญ อย่าใช้ชื่อ วันเกิด เบอร์โทรศัพท์ หรือคำที่เดาได้ง่าย แม้จะผสมตัวพิมพ์ใหญ่และตัวเลขแล้วก็ตาม เครื่องมือนี้ไม่ตรวจสอบว่ารหัสผ่านถูกใช้ในเว็บไซต์อื่นหรือรั่วไหลแล้ว',
      'เมื่อสร้างรหัสผ่านใหม่ ให้เก็บรหัสใน password manager ที่เชื่อถือได้ และเปิด two-factor authentication เมื่อบัญชีรองรับ หลีกเลี่ยงการส่งรหัสผ่านทางแชต โปรตคอล หรืออีเมล เพราะช่องทางเหล่านี้อาจเก็บข้อความไว้ หากเปลี่ยนรหัสผ่าน ควรเปลี่ยนในทุกบัญชีที่ใช้รหัสเดิม และตรวจสอบกิจกรรมล็อกอินหลังจากเปลี่ยน',
      'ผลลัพธ์จะถูกสุ่มใหม่ทุกครั้งที่กดปุ่ม และไม่ถูกบันทึกในประวัติเว็บไซต์ อย่างไรก็ตาม หากเปิดใช้คุณลักษณะความจดจำหรือมีส่วนขยายที่อ่านหน้าเว็บ ควรตรวจสอบสิทธิ์ของส่วนขยายด้วย วิธีนี้ช่วยให้การสร้างรหัสผ่านเป็นส่วนหนึ่งของแนวทางดูแลบัญชีที่ปลอดภัยและสะดวกขึ้น'
    ],
    en: [
      'The Password Generator uses the browser Web Crypto API to create random values locally. No generated password is sent to or stored by this website. Choose a length from 8 to 64 characters and decide whether to include lowercase letters, uppercase letters, numbers, and symbols.',
      'Longer passwords with a wider character set are harder to guess. A length of at least 16 characters is a practical baseline for an online account, and a longer passphrase can be even stronger. Avoid names, dates, phone numbers, and predictable substitutions. This tool cannot check whether a password has already appeared in a data breach or is used on another service.',
      'Store new credentials in a trusted password manager rather than a spreadsheet or notes file, and enable two-factor authentication whenever an account supports it. Do not send passwords through chat, email, or ordinary messaging services. If a password is reused, change it everywhere it was used and review recent account activity after the change.',
      'The displayed value changes each time you select the generate button, and this page does not intentionally save it in browsing history. Extensions with broad page access can still read anything displayed on a page, so review installed browser extensions. Keeping these habits makes a generated password more useful as part of a complete account-security routine.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'รหัสผ่านถูกส่งไปที่เซิร์ฟเวอร์หรือไม่?',
        answer: 'ไม่ การสุ่มเกิดขึ้นในเบราว์เซอร์ด้วย Web Crypto API และเว็บไซต์ไม่บันทึกรหัสผ่าน'
      },
      {
        question: 'ควรใช้รหัสผ่านยาวเท่าไร?',
        answer:
          'แนะนำอย่างน้อย 16 ตัวอักษรสำหรับบัญชีออนไลน์ และใช้ความยาวมากขึ้นหรือ password manager สำหรับบัญชีสำคัญ'
      },
      {
        question: 'ทำไมต้องเลือกสัญลักษณ์พิเศษ?',
        answer:
          'สัญลักษณ์เพิ่มความหลากหลายให้รหัสผ่าน แต่บางเว็บไซต์อาจไม่รองรับ ควรตรวจสอบนโยบายของเว็บไซต์ปลายทาง'
      },
      {
        question: 'สามารถสร้างรหัสผ่านแบบอ่านง่ายได้ไหม?',
        answer: 'ได้ แต่ความอ่านง่ายไม่ควรลดความยาวหรือใช้รูปแบบที่เดาง่าย ความปลอดภัยสำคัญกว่า'
      },
      {
        question: 'ต้องเปิด two-factor authentication หรือไม่?',
        answer: 'ควรเปิดเมื่อบริการรองรับ เพราะช่วยเพิ่มชั้นความปลอดภัยแม้รหัสผ่านถูกเปิดเผย'
      }
    ],
    en: [
      {
        question: 'Are passwords sent to a server?',
        answer:
          'No. Random values are created in the browser with the Web Crypto API, and this site does not store the password.'
      },
      {
        question: 'How long should my password be?',
        answer:
          'Use at least 16 characters for an online account, and consider a longer passphrase or a password manager for important accounts.'
      },
      {
        question: 'Why include special characters?',
        answer:
          'Symbols increase character variety, but some websites do not accept them. Check the destination site policy.'
      },
      {
        question: 'Can I generate an easy-to-read password?',
        answer:
          'Yes, but do not reduce the length or use a predictable pattern. Security is more important than readability.'
      },
      {
        question: 'Should I enable two-factor authentication?',
        answer: 'Yes, when available. It adds protection even if a password is exposed.'
      }
    ]
  },
  relatedSlugs: ['qr-code', 'hash-generator', 'uuid-ulid'],
  updatedAt: '2026-09-24'
};

export default tool;
