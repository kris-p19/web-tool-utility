import type { ToolConfig } from '../config/tools';
import JsonCsvTool from '../components/tools/JsonCsvTool.astro';

const tool: ToolConfig = {
  slug: 'json-csv',
  icon: '{}',
  category: 'ai-dev',
  name: { th: 'แปลงไฟล์ JSON ↔ CSV', en: 'JSON ↔ CSV Converter' },
  shortDescription: {
    th: 'แปลงข้อมูลระหว่าง JSON และ CSV พร้อมตรวจสอบรูปแบบ',
    en: 'Convert data between JSON and CSV with format validation.'
  },
  description: {
    th: 'แปลง JSON เป็น CSV หรือ CSV เป็น JSON แบบทันที ตรวจสอบข้อผิดพลาดและดาวน์โหลดผลลัพธ์ได้จากเบราว์เซอร์',
    en: 'Convert JSON to CSV or CSV to JSON instantly, validate errors, and download the result from your browser.'
  },
  keywords: {
    th: ['JSON CSV', 'แปลง JSON', 'แปลง CSV', 'JSON to CSV', 'CSV to JSON'],
    en: ['JSON CSV', 'JSON to CSV', 'CSV to JSON', 'CSV converter', 'JSON converter']
  },
  component: JsonCsvTool,
  howTo: {
    th: [
      'วางข้อมูล JSON หรือ CSV ในช่องข้อมูล',
      'เลือกทิศทางการแปลงที่ต้องการ',
      'กดแปลงข้อมูล แล้วคัดลอกหรือดาวน์โหลดผลลัพธ์'
    ],
    en: [
      'Paste JSON or CSV into the input area',
      'Choose the conversion direction',
      'Select Convert, then copy or download the result'
    ]
  },
  longDescription: {
    th: [
      'JSON และ CSV เป็นรูปแบบข้อมูลที่พบบ่อยในงานพัฒนาเว็บ การวิเคราะห์ข้อมูล และการนำเข้าสู่ระบบต่าง ๆ JSON เหมาะกับข้อมูลที่มีโครงสร้างซ้อนกัน ส่วน CSV เหมาะกับตารางที่ต้องเปิดในโปรแกรมสเปรดชีต ตัวแปลงนี้รองรับ JSON ที่เป็นอาร์เรย์ของออบเจกต์ และ CSV ที่มีหัวตาราง รวมถึงเครื่องหมาย quote ตามมาตรฐาน',
      'ระหว่างแปลงจาก JSON เป็น CSV ค่าที่เป็น object หรือ array ซ้อนกันจะถูกแปลงเป็น JSON string ในช่องนั้น เพื่อไม่ให้โครงสร้างหาย ส่วนค่าที่เป็น null จะกลายเป็นช่องว่าง หากต้องการควบคุมรูปแบบของวันที่ ตัวเลข หรือ boolean ควรตรวจสอบผลลัพธ์ก่อนนำไปใช้ โดยเฉพาะเมื่อแปลงกลับเป็น JSON',
      'ตัวแปลง CSV อ่านค่าที่มี comma, quote และ newline ได้ และจะเติม quote ให้ค่าที่จำเป็นเมื่อสร้างไฟล์ใหม่ หากไฟล์มี encoding หรือ delimiter ไม่ตรงกับมาตรฐาน ให้เตรียมข้อมูลให้เป็น UTF-8 และใช้ comma ก่อนใช้เครื่องมือ ข้อมูลขนาดใหญ่อาจทำให้เบราว์เซอร์ทำงานช้าลงเล็กน้อย เครื่องมือจึงควรใช้กับข้อมูลที่พอเหมาะกับหน่วยความจำของอุปกรณ์',
      'การตรวจสอบผลลัพธ์เป็นส่วนสำคัญ โดยเฉพาะงานที่ต้องส่งต่อข้อมูลให้ทีมอื่น ควรเปรียบเทียบจำนวนแถวและชื่อคอลัมน์กับต้นฉบับ และเก็บไฟล์ต้นฉบับไว้ หากมีข้อมูลส่วนบุคคลอยู่ในไฟล์ ให้ลบหรือปกปิดข้อมูลดังกล่าวก่อนแชร์ตัวอย่างสาธารณะ เครื่องมือนี้ประมวลผลในฝั่งผู้ใช้ จึงไม่ควรใช้เป็นที่เก็บข้อมูลถาวร'
    ],
    en: [
      'JSON and CSV are common formats in web development, data analysis, and importing information into operational systems. JSON works well for nested structures, while CSV is convenient for tables opened in spreadsheet software. This converter accepts an array of objects as JSON and a headed CSV document, including standard quoted fields.',
      'During JSON-to-CSV conversion, nested objects and arrays are stored as JSON text in their cell so that structure is not silently lost. Null values become empty cells. Dates, numbers, and booleans should be checked after a round trip if the receiving system expects a particular type. The converter is intended for data sets that comfortably fit in browser memory.',
      'The CSV parser understands commas, quoted values, and line breaks, and it quotes generated fields when needed. If an imported file uses another encoding or delimiter, convert it to UTF-8 and comma-separated values first. For a large file, the browser may need more time and memory. Keep the source file as a backup and compare row counts and column names before replacing the original.',
      'Always review sensitive fields before sharing an exported example. This page processes content in the browser, but the result is not a permanent storage location. A successful conversion is a useful starting point; use the target application schema or documentation when field types and naming rules need to be exact.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'รองรับ JSON ที่ไม่ใช่อาร์เรย์หรือไม่?',
        answer:
          'การแปลงเป็น CSV แบบมาตรฐานต้องการอาร์เรย์ของออบเจกต์ หรือออบเจกต์เดียว หากต้องการรองรับทุกโครงสร้าง ให้จัดข้อมูลให้เป็นรูปแบบตารางก่อน'
      },
      {
        question: 'CSV ที่มี quote และ comma จะถูกจัดการอย่างไร?',
        answer:
          'ตัวแปลงจะอ่านและ escape ค่าตามรูปแบบ CSV ที่มี quote ได้ ทำให้ค่าที่มีเครื่องหมายเหล่านี้ไม่ทำให้คอลัมน์เพี้ยน'
      },
      {
        question: 'ข้อมูลถูกส่งขึ้นเซิร์ฟเวอร์ไหม?',
        answer: 'ไม่ การแปลงเกิดขึ้นในเบราว์เซอร์ และเว็บไซต์ไม่บันทึกข้อมูลนำเข้า'
      },
      {
        question: 'ทำไมค่า object ซ้อนกันกลายเป็นข้อความ?',
        answer: 'CSV มีเพียงคอลัมน์และแถว จึงเก็บค่าซ้อนกันเป็น JSON string เพื่อรักษาข้อมูลไว้'
      },
      {
        question: 'ดาวน์โหลดผลลัพธ์ได้ไหม?',
        answer: 'ได้ กดปุ่มดาวน์โหลดหลังแปลงสำเร็จ เพื่อบันทึกเป็นไฟล์ JSON หรือ CSV'
      }
    ],
    en: [
      {
        question: 'Does it support JSON that is not an array?',
        answer:
          'Standard CSV conversion expects an array of objects or one object. Reshape other structures into tabular data first.'
      },
      {
        question: 'How are quoted commas handled?',
        answer:
          'The converter reads and escapes standard quoted CSV values, so commas and quotes do not unexpectedly create columns.'
      },
      {
        question: 'Is the data uploaded?',
        answer: 'No. Conversion happens in your browser, and this site does not store the input.'
      },
      {
        question: 'Why are nested objects stored as text?',
        answer:
          'CSV has rows and columns rather than nested fields, so JSON text preserves the nested value inside one cell.'
      },
      {
        question: 'Can I download the result?',
        answer:
          'Yes. After a successful conversion, use the download button to save the JSON or CSV result.'
      }
    ]
  },
  relatedSlugs: ['json-formatter', 'base64', 'url-encode-decode'],
  updatedAt: '2026-09-24'
};

export default tool;
