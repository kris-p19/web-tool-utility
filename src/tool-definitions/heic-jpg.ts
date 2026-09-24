import type { ToolConfig } from '../config/tools';
import HeicToJpgTool from '../components/tools/HeicToJpgTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'HEIC to JPG Converter',
  'ถ้าเบราว์เซอร์รองรับ codec การแปลงจะทำงานในเครื่องผู้ใช้',
  'เลือกไฟล์ .heic หรือ .heif แล้วกดแปลง',
  'เบราว์เซอร์ส่วนใหญ่ไม่ถอด HEIC ได้ หากไม่รองรับให้ใช้แอปที่มี codec ก่อน'
);
const longDescription = createLongDescription({
  th: {
    topic: 'HEIC → JPG Converter',
    benefit: 'เปลี่ยนภาพ HEIC หรือ HEIF ให้เปิดด้วยอุปกรณ์ทั่วไปได้ง่ายขึ้น',
    detail:
      'เครื่องมือตรวจสอบชนิดไฟล์และใช้ browser image decoder เมื่ออุปกรณ์รองรับ จากนั้นวาดภาพลง Canvas และบันทึกเป็น JPEG ตามค่าคุณภาพที่เลือก',
    caution:
      'HEIC เป็น codec ที่ไม่ได้รองรับใน Chrome, Firefox และอุปกรณ์จำนวนมาก หากขึ้นว่าถอดรหัสไม่ได้ ให้แปลงด้วยแอปหรือ desktop converter ก่อน และอย่าอัปโหลดภาพส่วนตัวไปยังบริการที่ไม่รู้จัก'
  },
  en: {
    topic: 'The HEIC to JPG Converter',
    benefit: 'making HEIC or HEIF photos easier to open on everyday devices',
    detail:
      'The tool checks the file type and uses the browser image decoder when the device supports it. The decoded image is drawn to Canvas and saved as JPEG using the selected quality setting.',
    caution:
      'HEIC is not supported by every browser or device. If decoding fails, convert the file with a compatible app first, and do not upload private photos to an unknown service merely to change the format.'
  }
});
const tool: ToolConfig = {
  slug: 'heic-jpg',
  icon: 'HEIC',
  category: 'converters',
  name: { th: 'HEIC → JPG Converter', en: 'HEIC → JPG Converter' },
  shortDescription: {
    th: 'แปลง HEIC เป็น JPG เมื่อเบราว์เซอร์รองรับ',
    en: 'Convert HEIC to JPG when your browser supports it.'
  },
  description: {
    th: 'ลองแปลง HEIC และ HEIF เป็น JPG ฝั่งผู้ใช้ พร้อมข้อความแนะนำเมื่ออุปกรณ์ไม่รองรับ codec',
    en: 'Try local HEIC and HEIF to JPG conversion with clear guidance when the device lacks codec support.'
  },
  keywords: {
    th: ['HEIC JPG', 'HEIF', 'แปลง HEIC', 'ภาพ iPhone'],
    en: ['HEIC to JPG', 'HEIF converter', 'iPhone photo converter', 'HEIC JPG']
  },
  component: HeicToJpgTool,
  howTo: {
    th: ['เลือกไฟล์ HEIC หรือ HEIF', 'ตั้งคุณภาพ JPG', 'กดแปลงและดาวน์โหลดเมื่อรองรับ'],
    en: ['Choose a HEIC or HEIF file', 'Set JPG quality', 'Convert and download when supported']
  },
  longDescription,
  faqs,
  relatedSlugs: ['image-converter', 'image-compressor', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
