import type { ToolConfig } from '../config/tools';
import PxRemTool from '../components/tools/PxRemTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'px to rem Converter',
  'เธเธฒเธฃเธเธณเธเธงเธ“เนเธกเนเธชเนเธเธเนเธญเธกเธนเธฅเธญเธญเธเธเธญเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เน€เธฅเธทเธญเธเนเธซเธกเธ” px เน€เธเนเธ rem เธซเธฃเธทเธญ rem เน€เธเนเธ px เนเธฅเธฐเนเธชเนเธเนเธฒ',
  'rem เธเธถเนเธเธเธฑเธ root font size เนเธฅเธฐเธเนเธฒ CSS เธเธฃเธดเธเธญเธฒเธเธ–เธนเธเธเธฑเธ”เน€เธจเธฉ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'px โ” rem Converter',
    benefit: 'เนเธเธฅเธเธเธเธฒเธ” CSS เน€เธเธทเนเธญเนเธซเนเน€เธฅเธขเนเน€เธญเธฒเธ•เนเธฃเธญเธเธฃเธฑเธเธเธฒเธฃเธเธฃเธฑเธเธเธเธฒเธ”เธเธญเธเธ•เนเนเธ”เน',
    detail:
      'เธเธณเธซเธเธ” root font size เนเธ”เนเธ•เธฑเนเธเนเธ•เน 1px เธเธถเนเธเนเธ เนเธฅเนเธงเน€เธฅเธทเธญเธเนเธเธฅเธ px เน€เธเนเธ rem เธซเธฃเธทเธญเธขเนเธญเธเธเธฅเธฑเธ เธเธฅเธฅเธฑเธเธเนเนเธชเธ”เธเน€เธเนเธเธ•เธฑเธงเน€เธฅเธเธ—เธตเนเธเธฑเธ”เน€เธจเธฉเธญเธขเนเธฒเธเน€เธซเธกเธฒเธฐเธชเธกเธเธฃเนเธญเธกเธซเธเนเธงเธข',
    caution:
      'เธเนเธฒ rem เธญเนเธฒเธเธญเธดเธ root font size เธเธฃเธดเธเธเธญเธเน€เธญเธเธชเธฒเธฃ เธเธถเนเธเธญเธฒเธเธ–เธนเธเธเธนเนเนเธเนเธซเธฃเธทเธญ media query เน€เธเธฅเธตเนเธขเธ เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธเธฅเนเธ browser เนเธฅเธฐเนเธกเนเธเธงเธฃเนเธ—เธเธ—เธธเธเธเนเธฒ px เธ”เนเธงเธข rem เนเธ”เธขเนเธกเนเธเธดเธเธฒเธฃเธ“เธฒ design system'
  },
  en: {
    topic: 'The px to rem Converter',
    benefit: 'translating CSS sizes into units that respond to root typography',
    detail:
      'Set a root font size and choose px-to-rem or rem-to-px. The result is rounded to a practical precision and displayed with the appropriate unit for use in a stylesheet or design discussion.',
    caution:
      'rem depends on the actual document root font size, which users and media queries may change. Verify the result in a browser and do not replace every px value without considering the design system.'
  }
});
const tool: ToolConfig = {
  slug: 'px-rem',
  icon: 'px',
  category: 'design-css',
  name: { th: 'px โ” rem Converter', en: 'px โ” rem Converter' },
  shortDescription: {
    th: 'เนเธเธฅเธเธเธเธฒเธ” CSS เธฃเธฐเธซเธงเนเธฒเธ px เนเธฅเธฐ rem',
    en: 'Convert CSS sizes between px and rem.'
  },
  description: {
    th: 'เนเธเธฅเธ px เน€เธเนเธ rem เนเธฅเธฐ rem เน€เธเนเธ px เธ•เธฒเธก root font size เน€เธเธทเนเธญเธเนเธงเธขเธงเธฒเธเนเธเธฃเธเธชเธฃเนเธฒเธ CSS เธ—เธตเนเธขเธทเธ”เธซเธขเธธเนเธ',
    en: 'Convert px to rem and rem to px using a configurable root font size.'
  },
  keywords: {
    th: ['px rem', 'rem to px', 'CSS เธซเธเนเธงเธข', 'font size'],
    en: ['px to rem', 'rem to px', 'CSS units', 'root font size']
  },
  component: PxRemTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเนเธซเธกเธ”เธเธฒเธฃเนเธเธฅเธ', 'เนเธชเนเธเนเธฒเนเธฅเธฐ root font size', 'เธเธ”เนเธเธฅเธเนเธฅเธฐเธเธณเธเนเธฒเนเธเนเธเน'],
    en: [
      'Choose a conversion direction',
      'Enter the value and root size',
      'Convert and use the result'
    ]
  },
  longDescription,
  faqs,
  relatedSlugs: ['unit-converter', 'color-palette', 'markdown-html'],
  updatedAt: '2026-09-24'
};
export default tool;
