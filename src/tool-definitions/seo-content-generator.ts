import type { ToolConfig } from '../config/tools';
import SeoContentGeneratorTool from '../components/tools/SeoContentGeneratorTool.astro';

const tool: ToolConfig = {
  slug: 'seo-content-generator',
  icon: 'SEO',
  category: 'text-content',
  name: {
    th: 'สร้างเนื้อหาและตรวจสอบคะแนน SEO คุณภาพ 100% (SEO Content Generator)',
    en: '100% SEO Content Generator & Quality Auditor'
  },
  shortDescription: {
    th: 'สร้างบทความ โครงสร้างหัวข้อ H1-H3, SEO Title, Meta Description พร้อมตรวจสอบคะแนน SEO 100% จากคีย์เวิร์ดของคุณ',
    en: 'Generate high-ranking article drafts, heading outlines, titles, meta tags, and 100% SEO quality score audits.'
  },
  description: {
    th: 'เครื่องมือสร้างบทความและโครงสร้างเนื้อหาตามหลัก Search Engine Optimization (SEO) แบบมืออาชีพ เพียงกรอกคีย์เวิร์ดหลักและคีย์เวิร์ดรอง ระบบจะคำนวณและสร้าง SEO Titles (CTR สูง), Meta Descriptions, URL Slug, โครงสร้างหัวข้อ H1/H2/H3 และร่างบทความฉบับเต็ม พร้อมระบบตรวจสอบคะแนน SEO Checklist 100% (Keyword Density, Heading Hierarchy, Content Length) ใช้งานฟรีและประมวลผลบนเบราว์เซอร์อย่างปลอดภัย',
    en: 'Professional SEO Content Generator and On-Page Quality Auditor. Enter your primary and secondary keywords to generate high-CTR SEO titles, meta descriptions, slugs, heading hierarchies, and complete article drafts with a verified 100% SEO checklist. 100% private and browser-based.'
  },
  keywords: {
    th: [
      'สร้างบทความ SEO',
      'seo content generator',
      'เขียนบทความตามคีย์เวิร์ด',
      'ตรวจคะแนน SEO',
      'meta title generator',
      'meta description',
      'keyword density',
      'ทำ SEO ติดหน้าแรก'
    ],
    en: [
      'seo content generator',
      'seo article generator',
      'meta tag generator',
      'seo quality audit',
      'keyword density calculator',
      'seo outline generator',
      'on page seo checker'
    ]
  },
  component: SeoContentGeneratorTool,
  howTo: {
    th: [
      'ใส่คีย์เวิร์ดหลัก (Primary Keyword) ที่ต้องการเน้นให้ติดอันดับ Google',
      'ใส่คีย์เวิร์ดรอง (Secondary / LSI Keywords) เพื่อครอบคลุมเนื้อหาที่เกี่ยวข้อง',
      'เลือกรูปแบบเนื้อหา (เช่น คู่มือแนะนำวิธีทำ, แนะนำสินค้า) และน้ำเสียงที่ต้องการ',
      'กดปุ่ม "สร้างเนื้อหา SEO คุณภาพ 100%" เพื่อประมวลผลผลลัพธ์ทันที',
      'ตรวจสอบคะแนน SEO Audit, คัดลอก Meta Tags, โครงสร้างหัวข้อ หรือบทความไปใช้งาน'
    ],
    en: [
      'Enter your primary keyword targeted for search engines.',
      'Add secondary or LSI keywords for semantic relevance.',
      'Select content intent (e.g., How-to guide, product review) and tone of voice.',
      'Click "Generate 100% SEO Content" to create the complete package.',
      'Review the 100% SEO audit score, copy titles, meta descriptions, outline, or markdown draft.'
    ]
  },
  longDescription: {
    th: [
      'การทำ Search Engine Optimization (SEO) ในปัจจุบันไม่ได้อาศัยเพียงแค่การใส่คีย์เวิร์ดซ้ำๆ (Keyword Stuffing) แต่ต้องอาศัยโครงสร้างเนื้อหาที่ตอบ Search Intent ของผู้ใช้งานอย่างแท้จริง มีการใช้หัวข้อ H1, H2, H3 อย่างเป็นลำดับขั้นตอน และเขียน Title กับ Meta Description ที่มีความยาวเหมาะสมเพื่อดึงดูดอัตราการคลิก (CTR)',
      'เครื่องมือนี้ถูกออกแบบตามมาตรฐาน On-Page SEO สากล ช่วยให้ Content Creator, นักการตลาด และเจ้าของเว็บไซต์สามารถสร้างรากฐานบทความที่มีคุณภาพสูง พร้อมระบบ Audit Checklist 7 จุดสำคัญที่ตรวจเช็คความถูกต้องแบบเรียลไทม์',
      'ปลอดภัย 100%: ไม่มีข้อมูลหรือคีย์เวิร์ดทางธุรกิจของคุณถูกส่งออกไปยังเซิร์ฟเวอร์ภายนอก ทำงานบนเบราว์เซอร์ของคุณอย่างสมบูรณ์แบบ'
    ],
    en: [
      'Modern SEO requires satisfying real search intent with well-structured heading hierarchies (H1, H2, H3), natural keyword density, and compelling meta tags designed to maximize click-through rates (CTR).',
      'This tool adheres to official search engine quality guidelines, providing content creators, copywriters, and developers with an all-in-one generator and real-time 7-point audit meter.',
      'Completely private: All generation and auditing logic run entirely inside your browser without external network requests.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'คะแนน SEO 100% คิดจากอะไร?',
        answer: 'ระบบตรวจสอบ 7 เกณฑ์มาตรฐาน ได้แก่ การมีคีย์เวิร์ดใน Title, ความยาว Title (45-65 ตัวอักษร), คีย์เวิร์ดใน Meta Description, ความยาว Description (130-165 ตัวอักษร), คีย์เวิร์ดในย่อหน้าแรก, ลำดับหัวข้อ H1/H2 และการกระจายคำค้นหารอง'
      },
      {
        question: 'สามารถนำเนื้อหาที่สร้างไปโพสต์ลงเว็บได้เลยหรือไม่?',
        answer: 'ได้ทันทีครับ สามารถกดคัดลอกเป็น Markdown หรือนำโครงสร้างไปปรับแต่งเพิ่มเติมให้เข้ากับแบรนด์ของคุณได้โดยตรง'
      },
      {
        question: 'คีย์เวิร์ดที่กรอกจะถูกบันทึกหรือไม่?',
        answer: 'ไม่ถูกบันทึกใดๆ ทั้งสิ้นครับ ทุกอย่างประมวลผลบนเครื่องของคุณแบบปลอดภัย 100%'
      }
    ],
    en: [
      {
        question: 'How is the 100% SEO quality score calculated?',
        answer: 'The system audits 7 vital on-page factors: keyword in title, title length, keyword in meta description, meta length, keyword in first 100 words, heading hierarchy, and secondary keyword distribution.'
      },
      {
        question: 'Can I publish the generated content immediately?',
        answer: 'Yes, you can copy the full Markdown draft, HTML snippet, or meta tags directly into WordPress, Webflow, or your static site generator.'
      },
      {
        question: 'Are my proprietary keywords logged?',
        answer: 'No. Everything is computed locally within your browser.'
      }
    ]
  },
  relatedSlugs: ['word-counter', 'slug-generator', 'ai-token-counter', 'markdown-html'],
  updatedAt: '2026-09-25'
};

export default tool;
