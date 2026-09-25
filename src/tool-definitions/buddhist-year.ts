import type { ToolConfig } from '../config/tools';
import BuddhistYearTool from '../components/tools/BuddhistYearTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'เธ.เธจ. เนเธฅเธฐ เธ.เธจ. Converter',
  'เธเธฒเธฃเธเธณเธเธงเธ“เธเธตเธ—เธณเธเธฒเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เนเธชเนเธเธณเธเธงเธเธเธต เธ.เธจ. เธซเธฃเธทเธญ เธ.เธจ. เนเธฅเนเธงเน€เธฅเธทเธญเธเธ—เธดเธจเธ—เธฒเธ',
  'เธเธฅเธฅเธฑเธเธเนเน€เธซเธกเธฒเธฐเธเธฑเธเธเธตเธเธเธ•เธดเธ—เธตเนเนเธเนเนเธเธเธเธดเธ—เธดเธ เนเธกเนเนเธเนเธเธฒเธฃเธเธณเธเธงเธ“เธงเธฑเธเน€เธเธดเธ”เธซเธฃเธทเธญเธเธเธดเธ—เธดเธเธจเธฑเธเธฃเธฒเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'เธ.เธจ. โ” เธ.เธจ. Converter',
    benefit: 'เนเธเธฅเธเธเธตเธเธธเธ—เธเธจเธฑเธเธฃเธฒเธเนเธฅเธฐเธเธฃเธดเธชเธ•เนเธจเธฑเธเธฃเธฒเธเธญเธขเนเธฒเธเธฃเธงเธ”เน€เธฃเนเธง',
    detail:
      'เนเธชเนเธเธตเนเธฅเธฐเน€เธฅเธทเธญเธเธ—เธดเธจเธ—เธฒเธ เธฃเธฐเธเธเนเธเนเธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเน 543 เธเธตเน€เธเธทเนเธญเนเธชเธ”เธเธเธฅเธเธฃเนเธญเธกเธ•เธฑเธงเน€เธฅเธเธ—เธตเนเธ•เธฃเธงเธเธชเธญเธเธเนเธฒเธข เน€เธซเธกเธฒเธฐเธเธฑเธเธเธฒเธฃเธเธฃเธญเธเธเนเธญเธกเธนเธฅเน€เธญเธเธชเธฒเธฃเธซเธฃเธทเธญเธเธตเธญเนเธฒเธเธญเธดเธ',
    caution:
      'เธเธฒเธฃเนเธเธฅเธเธเธตเนเน€เธเนเธเธเธฒเธฃเธซเธฑเธเธซเธฃเธทเธญเธเธงเธเธเธตเธ•เธฒเธกเธเธเธดเธ—เธดเธเธชเธฒเธเธฅ เนเธกเนเนเธเนเธเธฒเธฃเธเธณเธเธงเธ“เธญเธฒเธขเธธ เธงเธฑเธเธ—เธตเนเน€เธเธดเธ” เธซเธฃเธทเธญเธเธเธดเธ—เธดเธเธเธฑเธเธ—เธฃเธเธ•เธด เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธเธฃเธดเธเธ—เธเนเธญเธเนเธเนเนเธเน€เธญเธเธชเธฒเธฃเธ—เธฒเธเธเธฒเธฃ'
  },
  en: {
    topic: 'The Buddhist and Gregorian Year Converter',
    benefit: 'switching between Buddhist Era and Gregorian year labels',
    detail:
      'Enter a year, select a direction, and use the standard 543-year relationship to display a clear numeric result. It is useful when checking a year shown on a document or filling a form.',
    caution:
      'This is a calendar-year label conversion, not an age, birthday, or lunar-calendar calculation. Confirm the context before using it in an official record.'
  }
});
const tool: ToolConfig = {
  slug: 'buddhist-year',
  icon: 'BE',
  category: 'thai-finance',
  name: { th: 'เธ.เธจ. โ” เธ.เธจ.', en: 'Buddhist โ” Gregorian Year' },
  shortDescription: {
    th: 'เนเธเธฅเธเธเธต เธ.เธจ. เนเธฅเธฐ เธ.เธจ. เธญเธขเนเธฒเธเธเนเธฒเธข',
    en: 'Convert Buddhist and Gregorian years easily.'
  },
  description: {
    th: 'เนเธเธฅเธเธเธตเธเธธเธ—เธเธจเธฑเธเธฃเธฒเธเน€เธเนเธเธเธฃเธดเธชเธ•เนเธจเธฑเธเธฃเธฒเธเธซเธฃเธทเธญเธเธฅเธฑเธเธเธฑเธ เธเธฃเนเธญเธกเธเธฅเธฅเธฑเธเธเนเธ—เธฑเธเธ—เธต',
    en: 'Convert Buddhist Era years to Gregorian years and back instantly.'
  },
  keywords: {
    th: ['เธ.เธจ.', 'เธ.เธจ.', 'เธเธธเธ—เธเธจเธฑเธเธฃเธฒเธ', 'เธเธฃเธดเธชเธ•เนเธจเธฑเธเธฃเธฒเธ'],
    en: ['Buddhist year', 'Gregorian year', 'BE to CE', '2569']
  },
  component: BuddhistYearTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเธ—เธดเธจเธ—เธฒเธเธเธฒเธฃเนเธเธฅเธ', 'เนเธชเนเธเธต เธ.เธจ. เธซเธฃเธทเธญ เธ.เธจ.', 'เธเธ”เนเธเธฅเธเนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธเธเธฅเธฅเธฑเธเธเน'],
    en: ['Choose a direction', 'Enter a BE or CE year', 'Convert and verify the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['timestamp-date', 'thai-baht-text', 'unit-converter'],
  updatedAt: '2026-09-24'
};
export default tool;
