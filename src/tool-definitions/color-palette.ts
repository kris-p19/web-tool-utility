import type { ToolConfig } from '../config/tools';
import ColorPaletteTool from '../components/tools/ColorPaletteTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Color Palette Generator',
  'เธเนเธฒเธชเธตเธ–เธนเธเธเธณเธเธงเธ“เนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเนเธฅเธฐเนเธกเนเธ–เธนเธเธชเนเธเธญเธญเธเนเธ',
  'เน€เธฅเธทเธญเธเธชเธตเธซเธฅเธฑเธเนเธฅเธฐเธเธเธดเธ”เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธเธญเธเธชเธต',
  'เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธ contrast เนเธฅเธฐเธเธฒเธฃเธกเธญเธเน€เธซเนเธเธชเธตเธเธฑเธเธเธนเนเนเธเนเธเธฃเธดเธเธเนเธญเธเนเธเนเนเธเธเธฒเธเธ–เธฒเธงเธฃ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Color Palette Generator',
    benefit: 'เธชเธฃเนเธฒเธเธเธธเธ”เธชเธตเธ—เธตเนเธเธฅเธกเธเธฅเธทเธเธชเธณเธซเธฃเธฑเธเธญเธดเธเน€เธ—เธญเธฃเนเน€เธเธเนเธฅเธฐเธเธฒเธเธญเธญเธเนเธเธ',
    detail:
      'เน€เธฅเธทเธญเธเธชเธตเธซเธฅเธฑเธเนเธฅเธฐเธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเนเธเธเธ•เธฃเธเธเนเธฒเธก เนเธเธฅเนเน€เธเธตเธขเธ เธชเธฒเธกเธชเธต เธซเธฃเธทเธญเนเธ—เธเน€เธ”เธตเธขเธง เธฃเธฐเธเธเนเธชเธ”เธเธ•เธฑเธงเธญเธขเนเธฒเธเธชเธต เธเนเธฒ CSS เนเธฅเธฐเธญเธฑเธ•เธฃเธฒเธชเนเธงเธ contrast เธเธฑเธเธชเธตเธเธฒเธงเน€เธเธทเนเธญเธเนเธงเธขเธ•เธฃเธงเธเธชเธญเธเธเธฒเธฃเธญเนเธฒเธ',
    caution:
      'เธเนเธฒเธเธงเธฒเธกเธชเธงเนเธฒเธเนเธฅเธฐเธเธงเธฒเธกเธเธฅเธกเธเธฅเธทเธเธเธญเธเธซเธเนเธฒเธเธญเนเธ•เนเธฅเธฐเน€เธเธฃเธทเนเธญเธเธ•เนเธฒเธเธเธฑเธ เธเธงเธฃเธ—เธ”เธชเธญเธเธเธฑเธเธเธนเนเนเธเนเธ—เธตเนเธกเธตเธเธงเธฒเธกเธเธดเธ”เธเธเธ•เธดเธเธฒเธฃเธกเธญเธเธชเธต เนเธฅเธฐเนเธกเนเธเธงเธฃเนเธเนเธชเธตเน€เธเนเธเธเนเธญเธเธ—เธฒเธเธชเธทเนเธญเธเธงเธฒเธกเธซเธกเธฒเธขเน€เธเธตเธขเธเธญเธขเนเธฒเธเน€เธ”เธตเธขเธง'
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
  category: 'design-css',
  name: { th: 'Color Palette Generator', en: 'Color Palette Generator' },
  shortDescription: {
    th: 'เธชเธฃเนเธฒเธเธเธธเธ”เธชเธตเนเธฅเธฐเธเนเธฒ CSS เธเธฒเธเธชเธตเธซเธฅเธฑเธ',
    en: 'Generate coordinated palettes and CSS values from a base colour.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธ Color Palette เธเธฒเธเธชเธตเธซเธฅเธฑเธ เธเธฃเนเธญเธกเธเธธเธ”เธชเธต harmonized เธเนเธฒ CSS เนเธฅเธฐเธ•เธฑเธงเธเธตเนเธงเธฑเธ” contrast',
    en: 'Create a colour palette from a base colour with harmonies, CSS values, and contrast guidance.'
  },
  keywords: {
    th: ['เธชเธต', 'เธเธธเธ”เธชเธต', 'color palette', 'CSS เธชเธต'],
    en: ['color palette', 'colour generator', 'CSS colors', 'palette generator']
  },
  component: ColorPaletteTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเธชเธตเธซเธฅเธฑเธเนเธฅเธฐเธเธเธดเธ”เธเธธเธ”เธชเธต', 'เธเธ”เธชเธฃเนเธฒเธเธเธธเธ”เธชเธต', 'เธเธฑเธ”เธฅเธญเธเธเนเธฒ CSS เธซเธฃเธทเธญเธ—เธ”เธชเธญเธ contrast'],
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
