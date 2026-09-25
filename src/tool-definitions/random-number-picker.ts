import type { ToolConfig } from '../config/tools';
import RandomTool from '../components/tools/RandomTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Random Number and Picker',
  'เธฃเธฒเธขเธเธฒเธฃเนเธฅเธฐเธ•เธฑเธงเน€เธฅเธเธ–เธนเธเธชเธธเนเธกเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เนเธชเนเธเนเธงเธเธ•เธฑเธงเน€เธฅเธเนเธฅเธฐเธเธณเธเธงเธ เธซเธฃเธทเธญเนเธชเนเธฃเธฒเธขเธเธฒเธฃเธซเธเธถเนเธเธฃเธฒเธขเธเธฒเธฃเธ•เนเธญเธเธฃเธฃเธ—เธฑเธ”',
  'เธเธฒเธฃเธชเธธเนเธกเน€เธเนเธเน€เธเธตเธขเธเธ•เธฑเธงเธเนเธงเธข เนเธกเนเธเธงเธฃเนเธเนเน€เธเนเธเธซเธฅเธฑเธเธเธฒเธเธเธงเธฒเธกเน€เธเนเธเธเธฃเธฃเธกเธซเธฃเธทเธญเธฃเธฐเธเธเธเธงเธฒเธกเธเธฅเธญเธ”เธ เธฑเธข'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Random Number เนเธฅเธฐ Random Picker',
    benefit: 'เธชเธธเนเธกเธ•เธฑเธงเน€เธฅเธเนเธฅเธฐเน€เธฅเธทเธญเธเธฃเธฒเธขเธเธฒเธฃเธชเธณเธซเธฃเธฑเธเธเธดเธเธเธฃเธฃเธก เธเธฒเธฃเธเธฑเธเธฃเธฒเธเธงเธฑเธฅ เนเธฅเธฐเธเธฒเธฃเธ—เธ”เธชเธญเธเธฃเธฐเธเธ',
    detail:
      'เธเธณเธซเธเธ”เธเนเธงเธเธ•เนเธณเธชเธธเธ”เนเธฅเธฐเธชเธนเธเธชเธธเธ” เธเธณเธเธงเธเธฃเธฒเธขเธเธฒเธฃ เนเธฅเธฐเนเธซเธกเธ”เนเธกเนเธเนเธณเนเธ”เน เธซเธฃเธทเธญเธชเธฅเธฑเธเนเธเนเธเน Picker เนเธ”เธขเธงเธฒเธเธฃเธฒเธขเธเธฒเธฃเธเธฑเนเธเธ”เนเธงเธขเธเธฃเธฃเธ—เธฑเธ” เธฃเธฐเธเธเธชเธธเนเธกเธ”เนเธงเธขเธเนเธฒเธเธฒเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเนเธฅเธฐเนเธชเธ”เธเธเธฅเนเธเธเนเธญเธเธเนเธญเธเธงเธฒเธกเธ—เธตเนเธเธฑเธ”เธฅเธญเธเนเธ”เน',
    caution:
      'เธเธฅเธฅเธฑเธเธเนเธชเธธเนเธกเนเธซเธกเนเนเธ”เนเน€เธกเธทเนเธญเธเธ”เธเธธเนเธก เนเธกเนเธเธงเธฃเนเธเนเน€เธเนเธเธ•เธฑเธงเธชเธธเนเธกเธ—เธตเนเธ•เธฃเธงเธเธชเธญเธเนเธ”เนเธชเธณเธซเธฃเธฑเธเธเธฒเธฃเน€เธเธดเธ เธเธฒเธฃเธฃเธฑเธเธฃเธฒเธเธงเธฑเธฅเธ—เธตเนเธกเธตเธกเธนเธฅเธเนเธฒ เธซเธฃเธทเธญเธเธฒเธฃเธฃเธฑเธเธฉเธฒเธเธงเธฒเธกเธเธฅเธญเธ”เธ เธฑเธข'
  },
  en: {
    topic: 'The Random Number and Random Picker tool',
    benefit: 'drawing numbers and selecting entries for activities, giveaways, and test data',
    detail:
      'Set a minimum, maximum, count, and optional no-duplicates mode, or switch to Picker and enter one item per line. The result is generated in the browser and placed in a selectable output field for copying.',
    caution:
      'A new result can be produced on every click. Do not use this lightweight random tool as a verifiable source for financial transactions, high-value prize draws, or security decisions.'
  }
});
const tool: ToolConfig = {
  slug: 'random-number-picker',
  icon: 'RND',
  category: 'design-css',
  name: { th: 'Random Number / Picker', en: 'Random Number / Picker' },
  shortDescription: {
    th: 'เธชเธธเนเธกเธ•เธฑเธงเน€เธฅเธเธซเธฃเธทเธญเธชเธธเนเธกเน€เธฅเธทเธญเธเธฃเธฒเธขเธเธฒเธฃเธเธฒเธเธเนเธงเธเนเธฅเธฐเธฅเธดเธชเธ•เน',
    en: 'Draw random numbers or pick entries from a range and list.'
  },
  description: {
    th: 'เธชเธธเนเธกเธ•เธฑเธงเน€เธฅเธเนเธเธเนเธกเนเธเนเธณเนเธฅเธฐเธชเธธเนเธกเน€เธฅเธทเธญเธเธฃเธฒเธขเธเธฒเธฃเธเธฒเธเธฃเธฒเธขเธเธฒเธฃเธ—เธตเนเธเนเธญเธ เธเธฃเนเธญเธกเธเธณเธเธงเธเนเธฅเธฐเธเนเธงเธเธ—เธตเนเธเธฃเธฑเธเนเธ”เน',
    en: 'Generate non-repeating random numbers or pick list entries with adjustable range and count.'
  },
  keywords: {
    th: ['เธชเธธเนเธกเธ•เธฑเธงเน€เธฅเธ', 'เธชเธธเนเธกเธฃเธฒเธขเธเธฒเธฃ', 'random picker', 'เธเธฑเธเธฃเธฒเธเธงเธฑเธฅ'],
    en: ['random number', 'random picker', 'number generator', 'raffle picker']
  },
  component: RandomTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเนเธซเธกเธ”เธชเธธเนเธกเธ•เธฑเธงเน€เธฅเธเธซเธฃเธทเธญเธฃเธฒเธขเธเธฒเธฃ', 'เธเธณเธซเธเธ”เธเนเธงเธ เธเธณเธเธงเธ เนเธฅเธฐเธฃเธฒเธขเธเธฒเธฃ', 'เธเธ”เธชเธธเนเธกเนเธฅเธฐเธเธฑเธ”เธฅเธญเธเธเธฅเธฅเธฑเธเธเน'],
    en: [
      'Choose number or picker mode',
      'Set the range, count, and items',
      'Generate and copy the result'
    ]
  },
  longDescription,
  faqs,
  relatedSlugs: ['uuid-ulid', 'password-generator', 'color-palette'],
  updatedAt: '2026-09-24'
};
export default tool;
