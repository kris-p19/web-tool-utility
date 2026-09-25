import type { ToolConfig } from '../config/tools';
import ThaiBahtTool from '../components/tools/ThaiBahtTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'ตัวเลขเป็นข้อความบาทไทย',
  'การแปลงจำนวนทำงานในเบราว์เซอร์',
  'ใส่จำนวนเงินเป็นตัวเลข เช่น 1234.50',
  'การอ่านจำนวนไม่แทนการคำนวณภาษีใบเสร็จหรือการตรวจสอบยอดเงิน'
);
const longDescription = createLongDescription({
  th: {
    topic: 'ตัวเลขเป็นข้อความบาทไทย',
    benefit: 'อ่านและสะกดจำนวนเงินภาษาไทยได้สะดวก',
    detail:
      'ป้อนจำนวนทศนิยมได้สองตำแหน่ง ระบบปัดเศษและแยกจำนวนเต็มกับสตางค์ พร้อมแสดงคำว่า บาท หรือสตางค์ตามหลักการอ่านทั่วไป',
    caution:
      'ผลลัพธ์เป็นการอ่านจำนวน ไม่ใช่ใบเสร็จหรือคำแนะนำทางบัญชี ควรตรวจสอบเครื่องหมายลบ ทศนิยม และกฎเฉพาะขององค์กรก่อนใช้ในเอกสารทางการ'
  },
  en: {
    topic: 'The Number to Thai Baht Text tool',
    benefit: 'reading and spelling monetary amounts in Thai',
    detail:
      'Enter a number with up to two decimal places. The tool rounds the amount, separates the whole-baht and satang portions, and displays common Thai reading conventions for quick copy or review.',
    caution:
      'The output is a reading aid, not a receipt or accounting instruction. Check signs, decimal conventions, and organisation-specific wording before putting it into an official document.'
  }
});
const tool: ToolConfig = {
  slug: 'thai-baht-text',
  icon: '฿',
  category: 'thai-finance',
  name: { th: 'แปลงตัวเลขเป็นบาทไทย (BahtText)', en: 'Number to Thai Baht Text' },
  shortDescription: {
    th: 'แปลงจำนวนเงินเป็นข้อความภาษาไทย',
    en: 'Convert numeric amounts into Thai baht text.'
  },
  description: {
    th: 'แปลงตัวเลขเป็นข้อความบาทไทย รองรับทศนิยมและสตางค์ แสดงผลทันที',
    en: 'Convert numbers to Thai baht wording, including decimals and satang, instantly.'
  },
  keywords: {
    th: ['ตัวเลข บาท', 'อ่านจำนวน', 'บาทไทย', 'สตางค์'],
    en: ['Thai baht text', 'number to Thai', 'read Thai amount', 'satang']
  },
  component: ThaiBahtTool,
  howTo: {
    th: ['ใส่จำนวนเงิน', 'กดแปลงง่าย', 'คัดลอกข้อความภาษาไทย'],
    en: ['Enter an amount', 'Convert the number', 'Copy the Thai text']
  },
  longDescription,
  faqs,
  relatedSlugs: ['buddhist-year', 'timestamp-date', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
