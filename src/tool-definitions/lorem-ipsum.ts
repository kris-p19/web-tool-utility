import type { ToolConfig } from '../config/tools';
import LoremTool from '../components/tools/LoremTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Lorem Ipsum Generator',
  'เธเนเธญเธเธงเธฒเธกเธ–เธนเธเธชเธฃเนเธฒเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเนเธฅเธฐเนเธกเนเธ–เธนเธเธเธฑเธเธ—เธถเธ',
  'เน€เธฅเธทเธญเธเธเธณเธเธงเธเธขเนเธญเธซเธเนเธฒเนเธฅเธฐเธเธฃเธฐเนเธขเธ เธฃเธฐเธเธเธเธฐเธชเธฃเนเธฒเธเธเนเธญเธเธงเธฒเธกเธ เธฒเธฉเธฒเนเธ—เธขเธซเธฃเธทเธญเธญเธฑเธเธเธคเธฉเธ•เธฒเธกเธ เธฒเธฉเธฒเธเธญเธเธซเธเนเธฒ',
  'เธเนเธญเธเธงเธฒเธกเน€เธเนเธเธ•เธฑเธงเธญเธขเนเธฒเธเธชเธณเธซเธฃเธฑเธเธเธฒเธฃเธญเธญเธเนเธเธ เนเธกเนเธเธงเธฃเนเธเนเน€เธเนเธเน€เธเธทเนเธญเธซเธฒเธเนเธญเธกเธนเธฅเธเธฃเธดเธเนเธ”เธขเนเธกเนเธ•เธฃเธงเธเธชเธญเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Lorem Ipsum Generator เนเธเธเนเธ—เธขเนเธฅเธฐเธญเธฑเธเธเธคเธฉ',
    benefit: 'เธชเธฃเนเธฒเธเธเนเธญเธเธงเธฒเธกเธ•เธฑเธงเธญเธขเนเธฒเธเธชเธณเธซเธฃเธฑเธเธเธฒเธเธญเธญเธเนเธเธเธซเธเนเธฒเน€เธงเนเธเนเธฅเธฐ mockup',
    detail:
      'เธเธณเธซเธเธ”เธเธณเธเธงเธเธขเนเธญเธซเธเนเธฒเนเธฅเธฐเธเธฃเธฐเนเธขเธเนเธ”เนเธ•เธฑเนเธเนเธ•เนเธซเธเธถเนเธเธ–เธถเธเธขเธตเนเธชเธดเธ เธ เธฒเธฉเธฒเธเธฐเน€เธฅเธทเธญเธเธ•เธฒเธกเธซเธเนเธฒเธ—เธตเนเน€เธเธดเธ” เธเธฅเธฅเธฑเธเธเนเน€เธเนเธเธเนเธญเธเธงเธฒเธกเน€เธฃเธตเธขเธเน€เธฃเธตเธขเธเนเธซเธกเนเธ—เธธเธเธเธฃเธฑเนเธเนเธฅเธฐเธ”เธฒเธงเธเนเนเธซเธฅเธ”เน€เธเนเธเนเธเธฅเน UTF-8 เนเธ”เน',
    caution:
      'เธเธงเธฃเนเธ—เธเธเนเธญเธเธงเธฒเธกเธ•เธฑเธงเธญเธขเนเธฒเธเธ”เนเธงเธขเน€เธเธทเนเธญเธซเธฒเธเธฃเธดเธเธเนเธญเธเน€เธเธขเนเธเธฃเน เนเธ”เธขเน€เธเธเธฒเธฐเธซเธเนเธฒเธ—เธตเนเธญเนเธฒเธเธญเธดเธเธเนเธญเธกเธนเธฅ เธชเธดเธเธเนเธฒ เธซเธฃเธทเธญเธเธฃเธดเธเธฒเธฃ เน€เธเธฃเธฒเธฐเธเนเธญเธเธงเธฒเธกเธชเธธเนเธกเนเธกเนเนเธ”เนเนเธซเนเธเธงเธฒเธกเธซเธกเธฒเธขเธ—เธฒเธเธเธธเธฃเธเธดเธ'
  },
  en: {
    topic: 'The Thai and English Lorem Ipsum Generator',
    benefit: 'creating placeholder copy for web design and mockups',
    detail:
      'Choose between one and twenty paragraphs and one to twenty sentences per paragraph. The output follows the language of the page, creates a fresh sample on demand, and can be copied or downloaded as a UTF-8 text file.',
    caution:
      'Replace placeholder copy with reviewed, meaningful content before publishing. Random text is useful for layout decisions but does not provide factual, product, or service information.'
  }
});
const tool: ToolConfig = {
  slug: 'lorem-ipsum',
  icon: 'TXT',
  category: 'text-content',
  name: { th: 'Lorem Ipsum Generator', en: 'Lorem Ipsum Generator' },
  shortDescription: {
    th: 'เธชเธฃเนเธฒเธเธเนเธญเธเธงเธฒเธกเธ•เธฑเธงเธญเธขเนเธฒเธเธ เธฒเธฉเธฒเนเธ—เธขเนเธฅเธฐเธญเธฑเธเธเธคเธฉ',
    en: 'Generate Thai and English placeholder text.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธ Lorem Ipsum เธ เธฒเธฉเธฒเนเธ—เธขเนเธฅเธฐเธญเธฑเธเธเธคเธฉเธชเธณเธซเธฃเธฑเธเธเธฒเธ mockup เนเธ”เธขเน€เธฅเธทเธญเธเธเธณเธเธงเธเธขเนเธญเธซเธเนเธฒเนเธฅเธฐเธเธฃเธฐเนเธขเธเนเธ”เน',
    en: 'Create Thai and English lorem ipsum for mockups with configurable paragraphs and sentences.'
  },
  keywords: {
    th: ['Lorem Ipsum', 'เธเนเธญเธเธงเธฒเธกเธ•เธฑเธงเธญเธขเนเธฒเธ', 'เธ เธฒเธฉเธฒเนเธ—เธข'],
    en: ['lorem ipsum', 'placeholder text', 'dummy text', 'Thai lorem']
  },
  component: LoremTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเธเธณเธเธงเธเธขเนเธญเธซเธเนเธฒเนเธฅเธฐเธเธฃเธฐเนเธขเธ', 'เธเธ”เธชเธฃเนเธฒเธเธเนเธญเธเธงเธฒเธก', 'เธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเนเธญเธเธงเธฒเธก'],
    en: ['Choose paragraph and sentence counts', 'Generate the text', 'Copy or download the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['slug-generator', 'markdown-html', 'text-case'],
  updatedAt: '2026-09-24'
};
export default tool;
