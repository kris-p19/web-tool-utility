import type { ToolConfig } from '../config/tools';
import ThaiCitizenIdTool from '../components/tools/ThaiCitizenIdTool.astro';

const tool: ToolConfig = {
  slug: 'thai-citizen-id',
  icon: 'ID',
  category: 'thai-finance',
  name: {
    th: 'ตรวจสอบเลขบัตรประชาชน',
    en: 'Thai Citizen ID Validator'
  },
  shortDescription: {
    th: 'ตรวจสอบความถูกต้องของเลขประจำตัวประชาชน 13 หลัก พร้อมสุ่มเลขบัตรสำหรับทดสอบระบบ',
    en: 'Validate 13-digit Thai Citizen ID checksum and generate test IDs for development.'
  },
  description: {
    th: 'เครื่องมือตรวจสอบความถูกต้องของเลขประจำตัวประชาชนไทย 13 หลัก (Thai National ID) ตามสูตร Modulo 11 ของสำนักบริหารการทะเบียน พร้อมระบบสุ่มเลขบัตรประชาชนเพื่อใช้ทดสอบระบบ (Test Data) ประมวลผลบนเบราว์เซอร์อย่างปลอดภัย ไม่มีการส่งข้อมูลออกนอกเครื่อง',
    en: 'Verify 13-digit Thai Citizen ID validity using the official Modulo 11 checksum algorithm, and generate valid sample IDs for software development testing. 100% private and processed locally in your browser.'
  },
  keywords: {
    th: [
      'ตรวจบัตรประชาชน',
      'เช็คเลขบัตรประชาชน',
      'ตรวจสอบเลข 13 หลัก',
      'สุ่มเลขบัตรประชาชน',
      'Thai Citizen ID',
      'Thai National ID Validator'
    ],
    en: [
      'Thai citizen id',
      'Thai ID validator',
      'Thai national id',
      'Thai ID generator',
      '13 digit id check'
    ]
  },
  component: ThaiCitizenIdTool,
  howTo: {
    th: [
      'กรอกเลขประจำตัวประชาชน 13 หลักในช่องใส่ข้อมูล (ใส่แบบมีขีดหรือไม่มีขีดก็ได้ ระบบจะจัดรูปแบบให้อัตโนมัติ)',
      'ระบบจะตรวจสอบความถูกต้องของผลรวม Checksum ตามสูตรของกรมการปกครองทันทีแบบเรียลไทม์',
      'หากเป็นนักพัฒนาหรือผู้ทดสอบระบบ สามารถกดปุ่ม "สุ่มเลขบัตรสำหรับทดสอบระบบ" เพื่อสร้างเลขบัตรที่ถูกต้องตามหลักคณิตศาสตร์นำไปใช้กรอกฟอร์มทดสอบได้'
    ],
    en: [
      'Enter the 13-digit Thai Citizen ID in the input box (with or without dashes).',
      'The validator immediately computes the checksum according to the official DOPA algorithm in real-time.',
      'Developers and QA testers can click "Generate Random Valid ID for Testing" to create valid dummy IDs for form testing.'
    ]
  },
  longDescription: {
    th: [
      'เลขประจำตัวประชาชนไทย 13 หลัก มีโครงสร้างความหมายและการคำนวณที่ชัดเจนเพื่อป้องกันข้อผิดพลาดในการกรอกข้อมูล โดยหลักที่ 1 จะบอกถึงประเภทของบุคคล เช่น ผู้มีสัญชาติไทยที่แจ้งเกิดตามกำหนดเวลา หรือบุคคลที่ได้รับการจัดสรรตามกลุ่มสำรวจ ส่วนหลักที่ 2 ถึง 5 จะเป็นรหัสจังหวัดและอำเภอ/เทศบาลที่ออกเลขให้',
      'หลักที่ 13 (หลักสุดท้าย) คือ "เลขตรวจสอบ" หรือ Check Digit ซึ่งคำนวณมาจากผลคูณถ่วงน้ำหนักของ 12 หลักแรกด้วยตัวคูณตั้งแต่ 13 ถอยลงมาถึง 2 จากนั้นนำเศษจากการหารด้วย 11 มาลบออกจาก 11 เพื่อให้ได้ตัวเลขหลักเดียว เครื่องมือนี้ทำการคำนวณสูตรดังกล่าวให้คุณทันที',
      'เครื่องมือนี้มีประโยชน์มากสำหรับนักพัฒนาซอฟต์แวร์ ผู้ตรวจสอบคุณภาพ (QA) และผู้ดูแลระบบ ในการทดสอบฟอร์มลงทะเบียน รวมถึงประชาชนทั่วไปที่ต้องการตรวจสอบความถูกต้องของเลขเอกสารก่อนยื่นเรื่อง โดยการประมวลผลทั้งหมดเกิดขึ้นบนอุปกรณ์ของคุณ (Client-side) เท่านั้น ไม่มีการจัดเก็บหรือส่งข้อมูลออกไปยังเซิร์ฟเวอร์ใดๆ ทั้งสิ้น'
    ],
    en: [
      'The 13-digit Thai National Identification Number has a defined structure designed to prevent typographical errors. The first digit represents the category of the citizen, digits 2 to 5 denote the provincial and municipal issuing office, digits 6 to 12 represent sequence numbers, and digit 13 is the check digit.',
      'The 13th digit is computed using a weighted Modulo 11 checksum algorithm based on the first 12 digits. This tool automatically computes and verifies the check digit in real time.',
      'All calculations are performed locally on your device in the browser without uploading any input to external servers, making it completely private and secure for testing purposes.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'การตรวจสอบเลขบัตรในเว็บนี้มีความปลอดภัยหรือไม่ ข้อมูลจะหลุดไหม?',
        answer:
          'ปลอดภัย 100% ครับ ระบบทำงานด้วย JavaScript ภายในเว็บเบราว์เซอร์ของคุณเท่านั้น (Client-side) ไม่มีการส่งข้อมูลผ่านเครือข่าย หรือบันทึกเก็บไว้ในเซิร์ฟเวอร์ใดๆ'
      },
      {
        question: 'เลขที่สุ่มได้สามารถนำไปใช้ทำธุรกรรมจริงได้หรือไม่?',
        answer:
          'ไม่ได้ครับ เลขที่ระบบสุ่มสร้างขึ้นเป็นเพียงตัวเลขที่ถูกต้องตามสูตรคณิตศาสตร์ (Checksum) เท่านั้น ออกแบบมาสำหรับให้นักพัฒนาและ QA ใช้ทดสอบระบบฟอร์มลงทะเบียน โดยไม่ได้เชื่อมโยงกับฐานข้อมูลทะเบียนราษฎร์จริงของกรมการปกครอง'
      },
      {
        question: 'ทำไมเลขบัตรประชาชนถึงมี 13 หลัก?',
        answer:
          'เลข 13 หลักประกอบด้วย: หลักที่ 1 (ประเภทบุคคล), หลักที่ 2-5 (รหัสจังหวัดและสำนักทะเบียน), หลักที่ 6-10 (เล่มที่สูติบัตร/ทะเบียน), หลักที่ 11-12 (ลำดับที่), และหลักที่ 13 (ตัวเลขตรวจสอบความถูกต้องตามสูตรคณิตศาสตร์)'
      }
    ],
    en: [
      {
        question: 'Is my Thai ID number secure when entered here?',
        answer:
          'Yes, 100% secure. Everything runs locally in your browser. No data is ever transmitted or stored on any server.'
      },
      {
        question: 'Can the randomly generated ID be used for actual real-world transactions?',
        answer:
          'No. The generated numbers are purely mathematical test samples that satisfy the checksum algorithm. They are intended strictly for developer testing and QA validation.'
      },
      {
        question: 'How is the Thai Citizen ID check digit calculated?',
        answer:
          'It is calculated by multiplying each of the first 12 digits by weights from 13 down to 2, summing the products, and finding (11 - (sum % 11)) % 10.'
      }
    ]
  },
  relatedSlugs: ['thai-baht-text', 'promptpay-qr', 'random-number-picker', 'uuid-ulid'],
  updatedAt: '2026-09-25'
};

export default tool;