import type { ToolConfig } from '../config/tools';
import ThaiBahtTool from '../components/tools/ThaiBahtTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'เธ•เธฑเธงเน€เธฅเธเน€เธเนเธเธเนเธญเธเธงเธฒเธกเธเธฒเธ—เนเธ—เธข',
  'เธเธฒเธฃเนเธเธฅเธเธเธณเธเธงเธเธ—เธณเธเธฒเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เนเธชเนเธเธณเธเธงเธเน€เธเธดเธเน€เธเนเธเธ•เธฑเธงเน€เธฅเธ เน€เธเนเธ 1234.50',
  'เธเธฒเธฃเธญเนเธฒเธเธเธณเธเธงเธเนเธกเนเนเธ—เธเธเธฒเธฃเธเธณเธเธงเธ“เธ เธฒเธฉเธตเนเธเน€เธชเธฃเนเธเธซเธฃเธทเธญเธเธฒเธฃเธ•เธฃเธงเธเธชเธญเธเธขเธญเธ”เน€เธเธดเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'เธ•เธฑเธงเน€เธฅเธเน€เธเนเธเธเนเธญเธเธงเธฒเธกเธเธฒเธ—เนเธ—เธข',
    benefit: 'เธญเนเธฒเธเนเธฅเธฐเธชเธฐเธเธ”เธเธณเธเธงเธเน€เธเธดเธเธ เธฒเธฉเธฒเนเธ—เธขเนเธ”เนเธชเธฐเธ”เธงเธ',
    detail:
      'เธเนเธญเธเธเธณเธเธงเธเธ—เธจเธเธดเธขเธกเนเธ”เนเธชเธญเธเธ•เธณเนเธซเธเนเธ เธฃเธฐเธเธเธเธฑเธ”เน€เธจเธฉเนเธฅเธฐเนเธขเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธฑเธเธชเธ•เธฒเธเธเน เธเธฃเนเธญเธกเนเธชเธ”เธเธเธณเธงเนเธฒ เธเธฒเธ— เธซเธฃเธทเธญเธชเธ•เธฒเธเธเนเธ•เธฒเธกเธซเธฅเธฑเธเธเธฒเธฃเธญเนเธฒเธเธ—เธฑเนเธงเนเธ',
    caution:
      'เธเธฅเธฅเธฑเธเธเนเน€เธเนเธเธเธฒเธฃเธญเนเธฒเธเธเธณเธเธงเธ เนเธกเนเนเธเนเนเธเน€เธชเธฃเนเธเธซเธฃเธทเธญเธเธณเนเธเธฐเธเธณเธ—เธฒเธเธเธฑเธเธเธต เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธขเธฅเธ เธ—เธจเธเธดเธขเธก เนเธฅเธฐเธเธเน€เธเธเธฒเธฐเธเธญเธเธญเธเธเนเธเธฃเธเนเธญเธเนเธเนเนเธเน€เธญเธเธชเธฒเธฃเธ—เธฒเธเธเธฒเธฃ'
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
  icon: 'เธฟ',
  category: 'thai-finance',
  name: { th: 'เธ•เธฑเธงเน€เธฅเธ โ’ เธเนเธญเธเธงเธฒเธกเธเธฒเธ—เนเธ—เธข', en: 'Number to Thai Baht Text' },
  shortDescription: {
    th: 'เนเธเธฅเธเธเธณเธเธงเธเน€เธเธดเธเน€เธเนเธเธเนเธญเธเธงเธฒเธกเธ เธฒเธฉเธฒเนเธ—เธข',
    en: 'Convert numeric amounts into Thai baht text.'
  },
  description: {
    th: 'เนเธเธฅเธเธ•เธฑเธงเน€เธฅเธเน€เธเนเธเธเนเธญเธเธงเธฒเธกเธเธฒเธ—เนเธ—เธข เธฃเธญเธเธฃเธฑเธเธ—เธจเธเธดเธขเธกเนเธฅเธฐเธชเธ•เธฒเธเธเน เนเธชเธ”เธเธเธฅเธ—เธฑเธเธ—เธต',
    en: 'Convert numbers to Thai baht wording, including decimals and satang, instantly.'
  },
  keywords: {
    th: ['เธ•เธฑเธงเน€เธฅเธ เธเธฒเธ—', 'เธญเนเธฒเธเธเธณเธเธงเธ', 'เธเธฒเธ—เนเธ—เธข', 'เธชเธ•เธฒเธเธเน'],
    en: ['Thai baht text', 'number to Thai', 'read Thai amount', 'satang']
  },
  component: ThaiBahtTool,
  howTo: {
    th: ['เนเธชเนเธเธณเธเธงเธเน€เธเธดเธ', 'เธเธ”เนเธเธฅเธเธเนเธฒเธข', 'เธเธฑเธ”เธฅเธญเธเธเนเธญเธเธงเธฒเธกเธ เธฒเธฉเธฒเนเธ—เธข'],
    en: ['Enter an amount', 'Convert the number', 'Copy the Thai text']
  },
  longDescription,
  faqs,
  relatedSlugs: ['buddhist-year', 'timestamp-date', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
