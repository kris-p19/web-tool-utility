import type { ToolConfig } from '../config/tools';
import WordCounterTool from '../components/tools/WordCounterTool.astro';

const tool: ToolConfig = {
  slug: 'word-counter',
  icon: 'W',
  category: 'text-content',
  name: { th: 'นับจำนวนคำและตัวอักษร (Word Counter)',
    en: 'Word & Character Counter'
  },
  shortDescription: {
    th: 'นับจำนวนคำ ตัวอักษร สระ วรรณยุกต์ ย่อหน้า และประเมินเวลาอ่าน รองรับทั้งภาษาไทยและอังกฤษ',
    en: 'Count words, characters, sentences, paragraphs, and estimate reading time for Thai and English.'
  },
  description: {
    th: 'เครื่องมือนับจำนวนคำและตัวอักษรออนไลน์ (Word Counter) พร้อมระบบตัดคำภาษาไทยที่แม่นยำด้วย Intl.Segmenter นับตัวอักษรแบบรวมและไม่รวมช่องว่าง นับย่อหน้า ประโยค พร้อมคำนวณเวลาในการอ่าน (Reading Time) เหมาะสำหรับนักเขียน นักเรียน นักศึกษา และนักการตลาด SEO',
    en: 'Online word and character counter with accurate Thai word segmentation via Intl.Segmenter. Calculates total characters, characters without spaces, words, sentences, paragraphs, and reading time for writers and SEO specialists.'
  },
  keywords: {
    th: [
      'นับคำ',
      'นับตัวอักษร',
      'นับคำภาษาไทย',
      'นับจำนวนคำ',
      'word counter',
      'character counter',
      'นับตัวหนังสือ',
      'คำนวณเวลาอ่าน'
    ],
    en: [
      'word counter',
      'character counter',
      'thai word count',
      'count words online',
      'text analyzer',
      'reading time calculator'
    ]
  },
  component: WordCounterTool,
  howTo: {
    th: [
      'พิมพ์หรือวาง (Paste) ข้อความที่ต้องการตรวจสอบลงในกล่องข้อความ',
      'ระบบจะคำนวณและแสดงสถิติต่างๆ แบบเรียลไทม์ทันที ทั้งจำนวนคำ ตัวอักษร ย่อหน้า และเวลาอ่านโดยประมาณ',
      'สามารถกดปุ่ม "คัดลอกข้อความ" เพื่อนำไปใช้งานต่อ หรือกด "ล้างข้อความ" เมื่อต้องการเริ่มนับใหม่'
    ],
    en: [
      'Type or paste your content into the text area.',
      'Statistics update in real-time, displaying word count, character count, paragraphs, and reading time.',
      'Use the Copy button to copy text back to your clipboard or Clear to start fresh.'
    ]
  },
  longDescription: {
    th: [
      'การนับจำนวนคำในภาษาไทยมีความท้าทายมากกว่าภาษาอังกฤษ เนื่องจากภาษาไทยไม่มีการเว้นวรรคระหว่างคำ เครื่องมือนับคำทั่วไปที่ใช้วิธีแยกคำด้วยช่องว่างจึงไม่สามารถนับคำภาษาไทยได้อย่างถูกต้อง เครื่องมือของ ToolXHub แก้ปัญหานี้โดยใช้เทคโนโลยี Intl.Segmenter ขั้นสูงของเบราว์เซอร์ ซึ่งใช้อัลกอริทึมพจนานุกรมและกฎไวยากรณ์ในการตัดคำภาษาไทย ทำให้ได้จำนวนคำที่ใกล้เคียงความเป็นจริงมากที่สุด',
      'นอกจากจำนวนคำแล้ว เครื่องมือยังวิเคราะห์แยกย่อยระหว่างตัวอักษรภาษาไทย ภาษาอังกฤษ ตัวเลข และช่องว่าง เพื่อให้คุณสามารถตรวจสอบข้อจำกัดความยาวของเนื้อหาสำหรับแพลตฟอร์มต่างๆ ได้ง่าย เช่น การเขียนบทความ SEO (Title, Meta Description), โพสต์ Facebook, X (Twitter), หรือการเขียนรายงานวิชาการ',
      'การประมวลผลทั้งหมดเกิดขึ้นบนอุปกรณ์ของคุณ (Client-side) แบบเรียลไทม์ 100% ไม่มีการส่งข้อความหรือเนื้อหาของคุณไปยังเซิร์ฟเวอร์ภายนอก ทำให้ข้อมูลและงานเขียนที่เป็นความลับของคุณปลอดภัยอย่างแท้จริง'
    ],
    en: [
      'Counting words in Thai is uniquely challenging because Thai does not use spaces between words. Standard tools that rely on whitespace delimiters fail when processing Thai text. ToolXHub solves this by leveraging modern browser Intl.Segmenter APIs to deliver accurate lexical word segmentation.',
      'The tool also breaks down characters by language script, digits, and whitespace, assisting creators in meeting character limits across platforms such as social media posts, meta tags, and academic essays.',
      'All analysis runs entirely on your device in real-time without storing or sending your text to any server, guaranteeing privacy for confidential drafts.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'เครื่องมือนี้ตัดคำภาษาไทยได้อย่างไร แม่นยำหรือไม่?',
        answer:
          'ระบบใช้เทคโนโลยี Intl.Segmenter ซึ่งเป็นมาตรฐานเว็บสากลที่ฝังอยู่ในเบราว์เซอร์สมัยใหม่ มีการใช้อัลกอริทึมพจนานุกรมเพื่อแยกคำภาษาไทยได้อย่างแม่นยำสูง แตกต่างจากเครื่องมือทั่วไปที่นับเฉพาะช่องว่าง'
      },
      {
        question: 'เวลาในการอ่าน (Reading Time) คำนวณมาจากอะไร?',
        answer:
          'สำหรับข้อความภาษาไทย คำนวณจากความเร็วการอ่านมาตรฐานเฉลี่ยที่ประมาณ 500 ตัวอักษรต่อนาที และสำหรับภาษาอังกฤษคำนวณที่ประมาณ 200 คำต่อนาที'
      },
      {
        question: 'ข้อความที่วางลงในช่องจะถูกบันทึกหรือส่งไปที่อื่นไหม?',
        answer:
          'ไม่ถูกส่งไปไหนอย่างแน่นอนครับ การประมวลผลทั้งหมดเกิดขึ้นภายในเบราว์เซอร์บนเครื่องของคุณ (Client-side) แบบ 100% ปลอดภัยและเป็นส่วนตัว'
      }
    ],
    en: [
      {
        question: 'How does it count Thai words without spaces?',
        answer:
          'It uses the modern browser Intl.Segmenter standard API, which employs language-specific dictionaries and grammatical rules to accurately segment Thai words without requiring whitespace.'
      },
      {
        question: 'How is reading time estimated?',
        answer:
          'Reading time is calculated using standard reading speeds: approximately 200 words per minute for English text and approximately 500 characters per minute for Thai text.'
      },
      {
        question: 'Is my text safe and private?',
        answer:
          'Yes, 100% private. All processing occurs entirely in your browser. No text is ever uploaded or transmitted to any server.'
      }
    ]
  },
  relatedSlugs: ['text-case', 'lorem-ipsum', 'markdown-html', 'thai-citizen-id'],
  updatedAt: '2026-09-25'
};

export default tool;