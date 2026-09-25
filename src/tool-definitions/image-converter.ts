import type { ToolConfig } from '../config/tools';
import ImageConverterTool from '../components/tools/ImageConverterTool.astro';

const tool: ToolConfig = {
  slug: 'image-converter',
  icon: 'IMG',
  category: 'image-media',
  name: { th: 'แปลงไฟล์รูปภาพ (WebP, PNG, JPG)', en: 'Image Converter' },
  shortDescription: {
    th: 'แปลงรูปภาพเป็น PNG, JPG หรือ WebP ด้วย Canvas ในเบราว์เซอร์',
    en: 'Convert images to PNG, JPG, or WebP with browser Canvas.'
  },
  description: {
    th: 'แปลงและปรับขนาดภาพเป็น PNG, JPG หรือ WebP ในเบราว์เซอร์ พร้อมตั้งค่าคุณภาพและดาวน์โหลด โดยไฟล์ไม่ถูกอัปโหลด',
    en: 'Convert and resize images to PNG, JPG, or WebP in your browser with quality controls and local download.'
  },
  keywords: {
    th: ['แปลงรูป', 'PNG', 'JPG', 'WebP', 'Image Converter', 'ลดขนาดรูป'],
    en: ['image converter', 'PNG to JPG', 'WebP converter', 'JPG to WebP', 'resize image']
  },
  component: ImageConverterTool,
  howTo: {
    th: [
      'เลือกไฟล์ภาพที่ต้องการแปลง',
      'เลือกรูปแบบ ความกว้าง ความสูง และคุณภาพ',
      'กดแปลงภาพ แล้วดาวน์โหลดไฟล์ใหม่'
    ],
    en: [
      'Choose the image file you want to convert',
      'Select a format, dimensions, and quality',
      'Select Convert image, then download the new file'
    ]
  },
  longDescription: {
    th: [
      'Image Converter ใช้ Canvas API ของเบราว์เซอร์เพื่ออ่านภาพและบันทึกเป็นรูปแบบใหม่ คุณสามารถเลือก PNG, JPG หรือ WebP และปรับความกว้าง ความสูง คุณภาพ และพื้นหลังได้ ไฟล์ต้นฉบับไม่ถูกส่งออกนอกอุปกรณ์ ทำให้เหมาะกับงานที่ไม่ต้องการส่งภาพส่วนตัวไปยังเซิร์ฟเวอร์',
      'การเลือกรูปแบบควรดูการใช้งานจริง PNG เหมาะกับภาพที่มีความโปร่งใส ภาพกราฟ และภาพที่ต้องการคุณภาพสูง แต่ไฟล์มักใหญ่กว่า JPG เหมาะกับภาพถ่ายที่ไม่ต้องการความโปร่งใส ส่วน WebP มักให้ขนาดเล็กและคุณภาพดีเมื่อเว็บไซต์สมัยใหม่รองรับ ควรทดลองหลายค่าคุณภาพเพื่อหาจุดสมดุลระหว่างขนาดไฟล์และความคมชัด',
      'หากลดขนาดภาพ ให้คำนวณอัตราส่วนใหม่เพื่อไม่ให้ภาพบิดเบี้ยว เครื่องมือมีตัวเลือกล็อกอัตราส่วน และสามารถปิดพื้นหลังได้เมื่อแปลงภาพที่มีโปร่งใสไปเป็น JPG เพราะ JPG ไม่รองรับช่องโปร่งใส ควรตรวจสอบภาพตัวอย่างหลังแปลงทุกครั้ง โดยเฉพาะข้อความหรือขอบโปร่งใสที่อาจถูกตัด',
      'การแปลงไฟล์ขนาดใหญ่หรือไฟล์จำนวนมากอาจใช้หน่วยความจำของเบราว์เซอร์ ควรทำทีละไฟล์และปิดแท็บเมื่อใช้เสร็จ เครื่องมือไม่รองรับ HEIC โดยตรงในทุกเบราว์เซอร์ เพราะ HEIC ต้องใช้ codec เฉพาะ หากต้องการแปลง HEIC ให้เปลี่ยนเป็น JPG ด้วยแอปที่รองรับก่อน แล้วนำไฟล์นั้นมาใช้กับเครื่องมือนี้'
    ],
    en: [
      'The Image Converter uses the browser Canvas API to read an image and save a new version. You can choose PNG, JPG, or WebP and adjust width, height, quality, and a background colour. The original file remains on your device and is not uploaded to a server.',
      'Choose a format based on where the image will be used. PNG preserves transparency and works well for diagrams, but usually creates a larger file. JPG is useful for photographs that do not need transparency. WebP can provide a smaller file with good quality in modern browsers. Try several quality settings and compare the result before publishing.',
      'When resizing, keep the aspect ratio so the image does not stretch. The tool provides a lock option and lets you choose a background when converting transparent images to JPG, because JPG does not support alpha transparency. Inspect text, edges, and transparent areas after every conversion. A smaller file is not useful if important detail is lost.',
      'Large images and batches can consume browser memory. Work on one file at a time and close the tab when finished. HEIC is not decoded by every browser because it requires a separate codec. Convert HEIC to JPG with a compatible app first, then use that file here. This page is a local conversion utility, not a permanent image host.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'ไฟล์ภาพถูกอัปโหลดหรือไม่?',
        answer:
          'ไม่ การอ่านและแปลงไฟล์เกิดขึ้นในเบราว์เซอร์ ไฟล์ต้นฉบับไม่ถูกส่งไปยังเซิร์ฟเวอร์ของ ToolXHub'
      },
      {
        question: 'แปลงเป็น HEIC ได้ไหม?',
        answer:
          'เบราว์เซอร์ส่วนใหญ่ไม่รองรับการเข้ารหัส HEIC โดยตรง เครื่องมือนี้รองรับ PNG, JPG และ WebP'
      },
      {
        question: 'ทำไมภาพ JPG มีพื้นหลังทึบ?',
        answer: 'JPG ไม่รองรับความโปร่งใส จึงต้องเลือกสีพื้นหลังก่อนบันทึก'
      },
      {
        question: 'ลดขนาดภาพได้พร้อมกันหรือไม่?',
        answer: 'ได้ ปรับความกว้างและความสูง หรือเลือกคุณภาพต่ำลงเพื่อลดขนาดไฟล์'
      },
      {
        question: 'ภาพจะถูกลบหลังปิดหน้าเว็บหรือไม่?',
        answer:
          'ภาพอยู่ในหน่วยความจำของหน้าเว็บและหายเมื่อปิดหรือรีโหลดหน้า โปรดดาวน์โหลดไฟล์ที่ต้องการเก็บไว้'
      }
    ],
    en: [
      {
        question: 'Are image files uploaded?',
        answer:
          'No. Reading and conversion happen in your browser. ToolXHub does not receive the original file.'
      },
      {
        question: 'Can it convert to HEIC?',
        answer: 'Most browsers cannot encode HEIC directly. This tool supports PNG, JPG, and WebP.'
      },
      {
        question: 'Why does a JPG have a solid background?',
        answer: 'JPG does not support transparency, so choose a background colour before saving.'
      },
      {
        question: 'Can I resize and compress at the same time?',
        answer: 'Yes. Adjust width and height or lower the quality setting to reduce file size.'
      },
      {
        question: 'Are images deleted when I close the page?',
        answer:
          'The image lives in the page memory and disappears when you close or reload the page. Download anything you want to keep.'
      }
    ]
  },
  relatedSlugs: ['image-compressor', 'base64', 'qr-code'],
  updatedAt: '2026-09-24'
};

export default tool;
