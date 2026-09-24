import type { ToolConfig } from '../config/tools';
import QrCodeTool from '../components/tools/QrCodeTool.astro';

const tool: ToolConfig = {
  slug: 'qr-code',
  icon: 'QR',
  category: 'generators',
  name: { th: 'QR Code Generator', en: 'QR Code Generator' },
  shortDescription: {
    th: 'สร้าง QR Code จากข้อความหรือลิงก์ ดาวน์โหลดได้ทันที',
    en: 'Create a QR code from text or a URL and download it instantly.'
  },
  description: {
    th: 'สร้าง QR Code ฟรีจากข้อความ URL หรือข้อมูลติดต่อ พร้อมเลือกขนาดและความชัดเจน โดยประมวลผลในเบราว์เซอร์',
    en: 'Create a free QR code from text, a URL, or contact details with adjustable size and clarity, processed in your browser.'
  },
  keywords: {
    th: ['QR', 'QR Code', 'สร้าง QR', 'คิวอาร์โค้ด'],
    en: ['QR', 'QR code generator', 'create QR code', 'QR image']
  },
  component: QrCodeTool,
  howTo: {
    th: [
      'วางข้อความหรือ URL ที่ต้องการเข้ารหัสในช่องข้อมูล',
      'เลือกขนาดภาพและระดับความชัดเจนตามการใช้งาน',
      'กดสร้าง QR Code แล้วตรวจสอบภาพก่อนดาวน์โหลด'
    ],
    en: [
      'Enter the text or URL you want to encode in the input field',
      'Choose an image size and error-correction level for your use case',
      'Select Create QR code and verify the result before downloading'
    ]
  },
  longDescription: {
    th: [
      'QR Code Generator ของ ToolXHub เหมาะกับการแปลงข้อมูลที่ต้องการส่งต่อได้อย่างรวดเร็ว ไม่ว่าจะเป็นลิงก์เว็บไซต์ ข้อความสั้น หรือข้อมูลติดต่อ เมื่อป้อกรหัส เครื่องมือจะสร้างภาพ QR จากข้อมูลของคุณทันทีในเบราว์เซอร์ ไม่มีการส่งข้อความไปยังเซิร์ฟเวอร์ และไม่เก็บประวัติการใช้งาน',
      'เลือกระดับความทนทานของข้อมูลให้เหมาะกับสถานการณ์ หากต้องการใช้ภาพที่โลโก้หรือมีจุดสีทับ แนะนำระดับสูงกว่า เพราะ QR Code ยังอ่านได้แม้บางส่วนถูกบดบัง ขนาดภาพควรมากกว่าขนาดที่แสดงบนหน้าจออย่างน้อยสองเท่า เพื่อให้สแกนง่ายเมื่อพิมพ์ลงกระดาษหรือใช้บนจอขนาดใหญ่',
      'ก่อนดาวน์โหลดควรทดลองสแกนด้วยกล้องโทรศัพท์หรือแอปอ่าน QR อีกเครื่องหนึ่ง โดยเฉพาะเมื่อใช้ในเอกสารหรือสินค้า ตรวจสอบว่าข้อความตรงกับต้นฉบับ ไม่มีการตัดขอบ และมีพื้นที่ว่างรอบภาพเพียงพอ เครื่องมือนี้ไม่สร้าง QR Code แบบชำระเงินหรือ QR ที่ฝังข้อมูลลับ เหมาะสำหรับการแชร์ข้อมูลสาธารณะ เช่น เมนู เว็บไซต์ หรือคำอธิบายสินค้า',
      'หากต้องการใช้ QR Code ในแคมเปญเพื่อวัดผล ให้สร้างลิงก์แบบย่อที่มี UTM parameters และตรวจสอบว่าทุกอุปกรณ์สแกนได้ อย่าใส่ข้อมูลส่วนบุคคลที่ไม่จำเป็นลงในโค้ด เพราะผู้อ่านสามารถเปิดข้อมูลได้ทันที แนวทางนี้ช่วยให้ภาพที่สร้างได้มีขนาดเหมาะสมและสื่อสารได้ชัดเจนในหลายสถานการณ์'
    ],
    en: [
      'The ToolXHub QR Code Generator turns information into a quick scannable image. Paste a website address, short message, contact detail, or any text you want to share. The code is generated locally in your browser, so the content is not uploaded to a server and is not stored by this page.',
      'Error correction is an important choice. A higher level creates a denser code that remains readable when part of the image is covered by a logo or a label, while a lower level produces a simpler image. Leave a clear quiet zone around the QR code and use an image size that is at least twice the size shown on your screen so it remains sharp when printed or viewed on another device.',
      'Before using a code in a poster, package, or business card, scan it with a different phone or QR reader. Confirm that the encoded text is correct, the edges are not cropped, and the code has enough contrast against its background. This generator creates ordinary QR codes and does not add payments, passwords, or hidden tracking data. Only encode information that is appropriate for public access.',
      'For campaign measurement, use a shortened link with UTM parameters and test the final destination on mobile data as well as Wi-Fi. Avoid placing unnecessary personal information in the code because anyone with a scanner can read it. These practices make the resulting image easier to scan and suitable for websites, menus, product information, events, and everyday sharing.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'QR Code Generator อัปโหลดข้อมูลของฉันหรือไม่?',
        answer:
          'ไม่ การสร้างภาพเกิดขึ้นในเบราว์เซอร์ของคุณ เว็บไซต์ไม่บันทึกข้อมูลนำเข้าไว้ในเซิร์ฟเวอร์'
      },
      {
        question: 'ต้องสมัครสมาชิกหรือเสียเงินไหม?',
        answer: 'ไม่ต้อง ใช้งานและดาวน์โหลดได้ฟรี ไม่ต้องสมัครสมาชิก'
      },
      {
        question: 'ทำไม QR Code ที่ดาวน์โหลดมาสแกนไม่ได้?',
        answer:
          'ตรวจสอบว่าไม่มีขอบถูกตัด เว้นพื้นที่รอบภาพ และมีความต่างของสีเพียงพอ ควรทดลองสแกนด้วยอุปกรณ์อื่น'
      },
      {
        question: 'ใส่ข้อมูลแบบไหนได้บ้าง?',
        answer: 'ใส่ข้อความ URL หรือข้อมูลติดต่อได้ เครื่องมือจะเข้ารหัสข้อความตามที่ป้อน'
      },
      {
        question: 'ทำไมภาพมีขนาดใหญ่กว่าที่เลือก?',
        answer:
          'ระบบสร้างภาพความละเอียดสูงเพื่อให้พิมพ์หรือแสดงบนจอขนาดใหญ่ได้คมชัด คุณสามารถเลือกขนาดตามความต้องการได้'
      }
    ],
    en: [
      {
        question: 'Does the QR Code Generator upload my data?',
        answer:
          'No. The image is created in your browser. This page does not save or send the input to a server.'
      },
      {
        question: 'Is it free and do I need an account?',
        answer: 'Yes. You can create and download a code without signing up or paying.'
      },
      {
        question: 'Why will my downloaded QR code not scan?',
        answer:
          'Check for cropped edges, leave a clear margin, and use enough contrast. Test the final image with another device.'
      },
      {
        question: 'What can I put in a QR code?',
        answer:
          'You can encode text, URLs, or contact details. The tool uses the exact text you enter.'
      },
      {
        question: 'Why is the downloaded image larger than the selected size?',
        answer:
          'The generator creates a high-resolution image for printing and larger screens. You can choose the output size to match your use case.'
      }
    ]
  },
  relatedSlugs: ['password-generator', 'base64', 'url-encode-decode'],
  updatedAt: '2026-09-24'
};

export default tool;
