import type { ToolConfig } from '../config/tools';
import ColorPaletteTool from '../components/tools/ColorPaletteTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Color Palette Generator',
  'ค่าสีถูกคำนวณในเบราว์เซอร์และไม่ถูกส่งออกไป',
  'เลือกสีหลักและชนิดความสัมพันธ์ของสี',
  'ควรตรวจสอบ contrast และการมองเห็นสีกับผู้ใช้จริงก่อนใช้ในงานถาวร'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Color Palette Generator',
    benefit: 'สร้างชุดสีที่กลมกลืนสำหรับอินเทอร์เฟซและงานออกแบบ',
    detail:
      'เลือกสีหลักและความสัมพันธ์แบบตรงข้าม ใกล้เคียง สามสี หรือโทนเดียว ระบบแสดงตัวอย่างสี ค่า CSS และอัตราส่วน contrast กับสีขาวเพื่อช่วยตรวจสอบการอ่าน',
    caution:
      'ค่าความสว่างและความกลมกลืนของหน้าจอแต่ละเครื่องต่างกัน ควรทดสอบกับผู้ใช้ที่มีความผิดปกติการมองสี และไม่ควรใช้สีเป็นช่องทางสื่อความหมายเพียงอย่างเดียว'
  },
  en: {
    topic: 'The Color Palette Generator',
    benefit: 'creating coordinated palettes for interfaces and visual design',
    detail:
      'Choose a base color and a complementary, analogous, triadic, or monochromatic relationship. The page shows swatches, CSS custom properties, and a contrast ratio against white so the starting palette is easier to evaluate.',
    caution:
      'Screen rendering and colour perception vary. Test important palettes with users, maintain sufficient contrast, and never use colour as the only way to communicate status or meaning.'
  }
});
const tool: ToolConfig = {
  slug: 'color-palette',
  icon: 'CLR',
  category: 'generators',
  name: { th: 'Color Palette Generator', en: 'Color Palette Generator' },
  shortDescription: {
    th: 'สร้างชุดสีและค่า CSS จากสีหลัก',
    en: 'Generate coordinated palettes and CSS values from a base colour.'
  },
  description: {
    th: 'สร้าง Color Palette จากสีหลัก พร้อมชุดสี harmonized ค่า CSS และตัวชี้วัด contrast',
    en: 'Create a colour palette from a base colour with harmonies, CSS values, and contrast guidance.'
  },
  keywords: {
    th: ['สี', 'ชุดสี', 'color palette', 'CSS สี'],
    en: ['color palette', 'colour generator', 'CSS colors', 'palette generator']
  },
  component: ColorPaletteTool,
  howTo: {
    th: ['เลือกสีหลักและชนิดชุดสี', 'กดสร้างชุดสี', 'คัดลอกค่า CSS หรือทดสอบ contrast'],
    en: [
      'Choose a base colour and harmony',
      'Generate the palette',
      'Copy CSS values or check contrast'
    ]
  },
  longDescription,
  faqs,
  relatedSlugs: ['px-rem', 'markdown-html', 'random-number-picker'],
  updatedAt: '2026-09-24'
};
export default tool;
