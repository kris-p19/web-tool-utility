import type { ToolConfig } from '../config/tools';
import ImageCompressorTool from '../components/tools/ImageCompressorTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Image Compressor',
  'ไฟล์ภาพถูกอ่านและบีบอัดในเบราว์เซอร์',
  'เลือกภาพ กำหนดคุณภาพและความกว้างสูงสุด',
  'ผลลัพธ์อาจลดรายละเอียดหรือคุณภาพ ควรตรวจสอบภาพก่อนใช้งาน'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Image Compressor',
    benefit: 'ลดขนาดภาพเพื่อเผยแพร่หรืออัปโหลดเร็วขึ้น',
    detail:
      'เลือกภาพที่เบราว์เซอร์อ่านได้ ปรับ quality และความกว้างสูงสุด แล้วใช้ Canvas สร้าง JPEG ใหม่ ระบบแสดงขนาดเดิม ขนาดใหม่ และเปอร์เซ็นต์ที่ประหยัดได้',
    caution:
      'การบีบอัดอาจทำให้ข้อความ ใบหน้า หรือภาพโปร่งใสเสียรายละเอียด ควรเปรียบเทียบภาพต้นฉบับและผลลัพธ์ โดยเฉพาะภาพที่ต้องใช้ในเอกสารหรือการพิมพ์'
  },
  en: {
    topic: 'The Image Compressor',
    benefit: 'reducing image size for faster sharing and uploads',
    detail:
      'Choose a browser-decodable image, adjust quality and maximum width, and create a new JPEG with Canvas. The page shows the original size, output size, and estimated percentage saved.',
    caution:
      'Compression can remove useful detail from text, faces, gradients, or transparency. Compare the source and output, especially for images used in documents, print, or medical contexts.'
  }
});
const tool: ToolConfig = {
  slug: 'image-compressor',
  icon: 'ZIP',
  category: 'image-media',
  name: { th: 'บีบอัดรูปภาพ ลดขนาดไฟล์ (Image Compressor)', en: 'Image Compressor' },
  shortDescription: {
    th: 'ลดขนาดภาพและปรับคุณภาพในเบราว์เซอร์',
    en: 'Compress images and adjust quality in your browser.'
  },
  description: {
    th: 'บีบอัดภาพเป็น JPEG ด้วยคุณภาพและขนาดที่ปรับได้ โดยไฟล์ไม่ถูกอัปโหลด',
    en: 'Compress images to JPEG with adjustable quality and size, entirely in your browser.'
  },
  keywords: {
    th: ['บีบอัดรูป', 'ลดขนาดรูป', 'image compressor', 'jpeg'],
    en: ['image compressor', 'compress image', 'reduce image size', 'JPEG']
  },
  component: ImageCompressorTool,
  howTo: {
    th: ['เลือกภาพต้นฉบับ', 'ตั้งคุณภาพและความกว้าง', 'กดบีบอัดและดาวน์โหลด'],
    en: ['Choose the original image', 'Set quality and maximum width', 'Compress and download']
  },
  longDescription,
  faqs,
  relatedSlugs: ['image-converter', 'heic-jpg', 'color-palette'],
  updatedAt: '2026-09-24'
};
export default tool;
