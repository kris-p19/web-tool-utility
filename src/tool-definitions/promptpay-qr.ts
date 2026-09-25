import type { ToolConfig } from '../config/tools';
import PromptPayQrTool from '../components/tools/PromptPayQrTool.astro';

const tool: ToolConfig = {
  slug: 'promptpay-qr',
  icon: 'QR',
  category: 'generators',
  name: { th: 'PromptPay QR Generator', en: 'PromptPay QR Generator' },
  shortDescription: {
    th: 'สร้าง QR Code พร้อมเพย์สำหรับรับเงิน ระบุจำนวนเงินได้ ดาวน์โหลดทันที',
    en: 'Create a PromptPay QR code for receiving payments with an optional amount.'
  },
  description: {
    th: 'สร้าง QR Code ชำระเงินผ่านพร้อมเพย์ (PromptPay) ฟรี เพียงกรอกเบอร์โทรศัพท์ เลขบัตรประชาชน หรือเลขนิติบุคคล พร้อมระบุจำนวนเงิน รองรับการปรับขนาดและประมวลผลบนเบราว์เซอร์',
    en: 'Generate a free PromptPay QR code for payments by entering a phone number, citizen ID, or corporate ID. You can also specify an amount. Processed securely in your browser.'
  },
  keywords: {
    th: ['PromptPay', 'พร้อมเพย์', 'สร้าง QR พร้อมเพย์', 'QR Code รับเงิน', 'PromptPay QR'],
    en: ['PromptPay', 'PromptPay QR generator', 'Thai payment QR', 'QR code payment']
  },
  component: PromptPayQrTool,
  howTo: {
    th: [
      'กรอกเบอร์โทรศัพท์มือถือที่ลงทะเบียนพร้อมเพย์ หรือเลขประจำตัวประชาชน (หรือนิติบุคคล) 13 หลัก',
      'หากต้องการให้ผู้โอนชำระเงินตามยอดที่กำหนด ให้ระบุจำนวนเงิน (ใส่หรือไม่ใส่ก็ได้)',
      'กดปุ่ม สร้าง QR Code แล้วสแกนเพื่อทดสอบความถูกต้องก่อนนำไปใช้งานหรือดาวน์โหลด'
    ],
    en: [
      'Enter your registered PromptPay phone number or 13-digit Thai Citizen/Corporate ID',
      'Optionally, enter a specific payment amount',
      'Click Create QR code, then scan it with your banking app to verify before downloading'
    ]
  },
  longDescription: {
    th: [
      'เครื่องมือ PromptPay QR Generator ช่วยให้คุณสร้างคิวอาร์โค้ดสำหรับรับเงินผ่านระบบพร้อมเพย์ได้อย่างรวดเร็วและปลอดภัย โดยการประมวลผลทั้งหมดเกิดขึ้นบนเบราว์เซอร์ของคุณ ไม่มีการส่งข้อมูลส่วนตัวหรือหมายเลขบัญชีไปยังเซิร์ฟเวอร์',
      'คุณสามารถนำ QR Code ที่ได้ไปใช้งานได้หลากหลายรูปแบบ เช่น พิมพ์ติดหน้าร้านค้า แนบในใบแจ้งหนี้ (Invoice) หรือส่งต่อให้ลูกค้าเพื่อความสะดวกในการรับชำระเงิน สามารถเลือกระบุจำนวนเงินเพื่อให้ผู้โอนไม่ต้องพิมพ์ตัวเลขเอง ลดความผิดพลาดได้',
      'เพื่อให้มั่นใจว่า QR Code ใช้งานได้จริง ควรใช้แอปพลิเคชัน Mobile Banking ของคุณลองสแกนเพื่อตรวจสอบว่าชื่อบัญชีและจำนวนเงิน (ถ้ามี) แสดงผลได้อย่างถูกต้องก่อนนำรูปภาพไปใช้จริงเสมอ'
    ],
    en: [
      'The PromptPay QR Generator tool lets you quickly and securely create payment QR codes for the Thai PromptPay network. All processing happens locally in your web browser, ensuring that your ID and phone number are never sent to a server.',
      'You can use the generated QR code for various purposes: printing for a physical storefront, attaching to digital invoices, or sending directly to customers for quick payments. Specifying an exact amount eliminates typing errors for the sender.',
      'Always test the generated QR code by scanning it with your own Mobile Banking app to verify that the account name and amount appear correctly before sharing it with others.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'ข้อมูลเบอร์โทรศัพท์หรือเลขบัตรของฉันปลอดภัยไหม?',
        answer:
          'ปลอดภัย 100% เพราะระบบสร้าง QR Code ทำงานบนเบราว์เซอร์ (Client-side) ของคุณเท่านั้น ไม่มีการส่งข้อมูลเข้าเซิร์ฟเวอร์แต่อย่างใด'
      },
      {
        question: 'สามารถใช้รับเงินจากแอปธนาคารใดได้บ้าง?',
        answer: 'สามารถสแกนเพื่อโอนเงินได้จากทุกแอปพลิเคชัน Mobile Banking ของธนาคารในประเทศไทยที่รองรับระบบพร้อมเพย์'
      },
      {
        question: 'ถ้าไม่ระบุจำนวนเงิน ผู้โอนต้องทำอย่างไร?',
        answer:
          'หากคุณไม่ได้ระบุจำนวนเงิน เมื่อผู้โอนสแกน QR Code แอปธนาคารจะเว้นช่องจำนวนเงินไว้ให้ผู้โอนเป็นผู้กรอกยอดเงินด้วยตนเอง'
      },
      {
        question: 'ทำไม QR Code ถึงสแกนไม่ติด?',
        answer: 'โปรดตรวจสอบความถูกต้องของเบอร์โทรศัพท์หรือเลขบัตรประชาชน (ต้องมี 10 หรือ 13 หลัก) หรือลองเพิ่มขนาดของ QR Code ให้ใหญ่ขึ้น'
      }
    ],
    en: [
      {
        question: 'Is my phone number or ID secure?',
        answer:
          'Yes, 100% secure. The QR code generation runs entirely within your browser. We do not store or send any of your input to a server.'
      },
      {
        question: 'Which banking apps support this QR code?',
        answer: 'Any mobile banking app from a Thai bank that supports the PromptPay standard can scan and pay using this QR code.'
      },
      {
        question: 'What happens if I leave the amount empty?',
        answer:
          'If no amount is specified, the sender will be prompted to manually enter the amount in their banking app after scanning.'
      },
      {
        question: 'Why is the QR code not scannable?',
        answer: 'Ensure that the phone number or ID entered is valid (typically 10 or 13 digits), or try selecting a larger image size.'
      }
    ]
  },
  relatedSlugs: ['qr-code', 'thai-baht-text'],
  updatedAt: '2026-09-25'
};

export default tool;
