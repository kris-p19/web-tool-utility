import type { ToolConfig } from '../config/tools';
import UnitConverterTool from '../components/tools/UnitConverterTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Unit Converter',
  'เธเธฒเธฃเธเธณเธเธงเธ“เน€เธเธดเธ”เธเธถเนเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เน€เธฅเธทเธญเธเธซเธกเธงเธ” เธซเธเนเธงเธขเธ•เนเธเธ—เธฒเธ เธซเธเนเธงเธขเธเธฅเธฒเธขเธ—เธฒเธ เนเธฅเธฐเธเนเธฒ',
  'เธซเธเนเธงเธขเธเธฒเธเธเธเธดเธ”เธญเธฒเธเธ•เนเธญเธเธฃเธฐเธเธธเธชเธ เธฒเธงเธฐเธซเธฃเธทเธญเธเนเธฒเธเธเธ—เธตเนเน€เธเธดเนเธกเน€เธ•เธดเธก เน€เธเนเธ เธญเธธเธ“เธซเธ เธนเธกเธด'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Unit Converter',
    benefit: 'เนเธเธฅเธเธเธงเธฒเธกเธขเธฒเธง เธเนเธณเธซเธเธฑเธ เนเธฅเธฐเธเธเธฒเธ”เธเนเธญเธกเธนเธฅเธฃเธฐเธซเธงเนเธฒเธเธซเธเนเธงเธขเธ—เธตเนเนเธเนเธเธฒเธเธ—เธฑเนเธงเนเธ',
    detail:
      'เน€เธฅเธทเธญเธเธซเธกเธงเธ”เธซเธเนเธงเธขเนเธฅเนเธงเน€เธฅเธทเธญเธเธ•เนเธเธ—เธฒเธเธเธฑเธเธเธฅเธฒเธขเธ—เธฒเธ เธฃเธฐเธเธเธเธณเธเธงเธ“เธเนเธฒเธเธซเธเนเธงเธขเธเธฒเธเธเธฅเธฒเธ เธเธถเธเธฃเธญเธเธฃเธฑเธเธเธฒเธฃเธชเธฅเธฑเธเธซเธเนเธงเธขเนเธฅเธฐเนเธชเธ”เธเธเธฅเธ—เธฑเธเธ—เธต',
    caution:
      'เธซเธเนเธงเธขเนเธเธเธฒเธเธเธฅเธธเนเธกเธญเธฒเธเนเธกเนเนเธเนเธ•เธฑเธงเนเธเธฃเธ—เธตเนเนเธเธฅเธเนเธ”เนเน€เธชเธกเธญ เน€เธเนเธ เธญเธธเธ“เธซเธ เธนเธกเธดเนเธฅเธฐเธเธงเธฒเธกเธ”เธฑเธ เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธเธดเธขเธฒเธกเนเธฅเธฐเธเธงเธฒเธกเนเธกเนเธเธขเธณเธเนเธญเธเนเธเนเธเธฑเธเธเธฒเธเธงเธดเธ—เธขเธฒเธจเธฒเธชเธ•เธฃเน เธงเธดเธจเธงเธเธฃเธฃเธก เธซเธฃเธทเธญเธเธฒเธฃเนเธเธ—เธขเน'
  },
  en: {
    topic: 'The Unit Converter',
    benefit: 'converting everyday length, weight, and data-size measurements',
    detail:
      'Choose a category, source unit, and target unit. The calculation uses a common base unit, so swapping the units and seeing an immediate result is straightforward on both desktop and mobile.',
    caution:
      'Some measurement categories are not simple linear conversions, especially temperature and pressure. Check the definition and precision before using results for scientific, engineering, or medical work.'
  }
});
const tool: ToolConfig = {
  slug: 'unit-converter',
  icon: 'UNIT',
  category: 'design-css',
  name: { th: 'Unit Converter', en: 'Unit Converter' },
  shortDescription: {
    th: 'เนเธเธฅเธเธซเธเนเธงเธขเธเธงเธฒเธกเธขเธฒเธง เธเนเธณเธซเธเธฑเธ เนเธฅเธฐเธเนเธญเธกเธนเธฅ',
    en: 'Convert length, weight, and data units.'
  },
  description: {
    th: 'เนเธเธฅเธเธซเธเนเธงเธขเธงเธฑเธ”เธ—เธฑเนเธงเนเธเธฃเธฐเธซเธงเนเธฒเธเธกเธดเธฅเธฅเธดเน€เธกเธ•เธฃ เน€เธกเธ•เธฃ เธเนเธณเธซเธเธฑเธ เนเธฅเธฐเธเธเธฒเธ”เธเนเธญเธกเธนเธฅ',
    en: 'Convert common measurement units including millimetres, metres, weight, and data sizes.'
  },
  keywords: {
    th: ['เนเธเธฅเธเธซเธเนเธงเธข', 'เธซเธเนเธงเธขเธงเธฑเธ”', 'เน€เธเธฅเน€เธเธตเธขเธช', 'เธเธดเนเธฅเนเธเธ•เน'],
    en: ['unit converter', 'measurement converter', 'length converter', 'weight converter']
  },
  component: UnitConverterTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเธเธฃเธฐเน€เธ เธ—เธซเธเนเธงเธข', 'เน€เธฅเธทเธญเธเธซเธเนเธงเธขเธ•เนเธเธ—เธฒเธเนเธฅเธฐเธเธฅเธฒเธขเธ—เธฒเธ', 'เนเธชเนเธเนเธฒเนเธฅเธฐเธเธ”เนเธเธฅเธ'],
    en: ['Choose a unit category', 'Select source and target units', 'Enter a value and convert']
  },
  longDescription,
  faqs,
  relatedSlugs: ['px-rem', 'timestamp-date', 'buddhist-year'],
  updatedAt: '2026-09-24'
};
export default tool;
