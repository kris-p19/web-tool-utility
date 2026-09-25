import type { ToolConfig } from '../config/tools';
import UnitConverterTool from '../components/tools/UnitConverterTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Unit Converter',
  'การคำนวณเกิดขึ้นในเบราว์เซอร์',
  'เลือกหมวด หน่วยต้นทาง หน่วยปลายทาง และค่า',
  'หน่วยบางชนิดอาจต้องระบุสภาวะหรือค่าคงที่เพิ่มเติม เช่น อุณหภูมิ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Unit Converter',
    benefit: 'แปลงความยาว น้ำหนัก และขนาดข้อมูลระหว่างหน่วยที่ใช้งานทั่วไป',
    detail:
      'เลือกหมวดหน่วยแล้วเลือกต้นทางกับปลายทาง ระบบคำนวณผ่านหน่วยฐานกลาง จึงรองรับการสลับหน่วยและแสดงผลทันที',
    caution:
      'หน่วยในบางกลุ่มอาจไม่ใช่ตัวแปรที่แปลงได้เสมอ เช่น อุณหภูมิและความดัน ควรตรวจสอบนิยามและความแม่นยำก่อนใช้กับงานวิทยาศาสตร์ วิศวกรรม หรือการแพทย์'
  },
  en: {
    topic: 'The Unit Converter',
    benefit: 'converting everyday length, weight, and data-size measurements',
    detail:
      'Choose a category, source unit, and target unit. The calculation uses a common base unit, so swapping the units and seeing an immediate result is straightforward on both desktop and mobile.',
    caution:
      'Some measurement categories are not simple linear conversions, especially temperature and pressure. Check the definition and precision before using results for scientific, engineering, or medical work.'
  }
});
const tool: ToolConfig = {
  slug: 'unit-converter',
  icon: 'UNIT',
  category: 'design-css',
  name: { th: 'ตัวแปลงหน่วยวัดทั่วไป (Unit Converter)', en: 'Unit Converter' },
  shortDescription: {
    th: 'แปลงหน่วยความยาว น้ำหนัก และข้อมูล',
    en: 'Convert length, weight, and data units.'
  },
  description: {
    th: 'แปลงหน่วยวัดทั่วไประหว่างมิลลิเมตร เมตร น้ำหนัก และขนาดข้อมูล',
    en: 'Convert common measurement units including millimetres, metres, weight, and data sizes.'
  },
  keywords: {
    th: ['แปลงหน่วย', 'หน่วยวัด', 'เซลเซียส', 'กิโลไบต์'],
    en: ['unit converter', 'measurement converter', 'length converter', 'weight converter']
  },
  component: UnitConverterTool,
  howTo: {
    th: ['เลือกประเภทหน่วย', 'เลือกหน่วยต้นทางและปลายทาง', 'ใส่ค่าและกดแปลง'],
    en: ['Choose a unit category', 'Select source and target units', 'Enter a value and convert']
  },
  longDescription,
  faqs,
  relatedSlugs: ['px-rem', 'timestamp-date', 'buddhist-year'],
  updatedAt: '2026-09-24'
};
export default tool;
