import type { ToolConfig } from '../config/tools';
import CssEditorTool from '../components/tools/CssEditorTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'CSS Editor & Live Preview',
  'โค้ด CSS ถูกประมวลผลในเบราว์เซอร์และไม่ถูกส่งออกไป',
  'เขียน CSS ที่ต้องการทดลองในช่องตัวแก้ไข',
  'ตัวอย่างใช้ HTML ที่กำหนดไว้ จึงเหมาะกับการทดลองสไตล์ แต่ไม่ใช่ตัวตรวจสอบ CSS หรือเครื่องมือแก้ไขโค้ดครบวงจร'
);
const longDescription = createLongDescription({
  th: {
    topic: 'CSS Editor และ Live Preview',
    benefit: 'เขียนและทดลอง CSS กับตัวอย่างที่อัปเดตทันที',
    detail:
      'พิมพ์ CSS ในตัวแก้ไขแล้วเห็นผลกับการ์ดตัวอย่างใน iframe แบบ sandbox ทันที รองรับคัดลอกโค้ด คืนค่าตัวอย่าง และล้างข้อมูล พร้อมตัวอย่าง selector และ CSS custom properties',
    caution:
      'ตัวอย่างมี HTML และข้อความกำหนดไว้ล่วงหน้า ไม่สามารถแก้ HTML หรือรัน JavaScript ได้ และการโหลดทรัพยากรภายนอกถูกปิด ควรตรวจสอบผลในเบราว์เซอร์และเครื่องมือจริงก่อนนำ CSS ไปใช้ใน production'
  },
  en: {
    topic: 'The CSS Editor and Live Preview',
    benefit: 'writing CSS and testing it against an instantly updated sample',
    detail:
      'Type CSS in the editor and see the sample card update immediately inside a sandboxed iframe. Copy the code, restore the example, or clear the editor, with sample selectors and CSS custom properties provided for quick experimentation.',
    caution:
      'The sample HTML and text are fixed, so the preview cannot edit HTML or run JavaScript, and external resources are blocked. Validate the result in target browsers and the production application before publishing CSS.'
  }
});
const tool: ToolConfig = {
  slug: 'css-editor',
  icon: 'CSS',
  category: 'generators',
  name: { th: 'CSS Editor และ Live Preview', en: 'CSS Editor & Live Preview' },
  shortDescription: {
    th: 'เขียน CSS และดูผลลัพธ์แบบเรียลไทม์',
    en: 'Write CSS and see a live preview instantly.'
  },
  description: {
    th: 'สร้างและทดลอง CSS ด้วย editor พร้อมส่วนแสดงผลแบบเรียลไทม์ในพื้นที่แยกแบบ sandbox',
    en: 'Create and experiment with CSS in a code editor with a sandboxed live preview.'
  },
  keywords: {
    th: ['สร้าง CSS', 'ตัวแก้ไข CSS', 'CSS preview', 'เขียน CSS ออนไลน์'],
    en: ['CSS editor', 'CSS preview', 'live CSS playground', 'write CSS online']
  },
  component: CssEditorTool,
  howTo: {
    th: [
      'พิมพ์หรือวาง CSS ในตัวแก้ไข',
      'ดูการเปลี่ยนแปลงในส่วนตัวอย่าง',
      'คัดลอก CSS เพื่อนำไปใช้'
    ],
    en: [
      'Type or paste CSS in the editor',
      'Watch the preview update',
      'Copy the CSS for your project'
    ]
  },
  longDescription,
  faqs,
  relatedSlugs: ['color-palette', 'px-rem', 'markdown-html'],
  updatedAt: '2026-09-25'
};
export default tool;
