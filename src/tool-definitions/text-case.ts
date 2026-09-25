import type { ToolConfig } from '../config/tools';
import TextCaseTool from '../components/tools/TextCaseTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Text Case Converter',
  'เธเนเธญเธเธงเธฒเธกเธ–เธนเธเนเธเธฅเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เธงเธฒเธเธเนเธญเธเธงเธฒเธกเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเนเธฅเนเธงเน€เธฅเธทเธญเธเธฃเธนเธเนเธเธ Case',
  'เธเธฒเธฃเนเธเธฅเธเธญเธฒเธเธฅเธเธเนเธญเธเธงเนเธฒเธเธซเธฃเธทเธญเธญเธฑเธเธเธฃเธฐเธเธดเน€เธจเธฉเนเธเธเธฒเธเธฃเธนเธเนเธเธ เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธเธฅเธฅเธฑเธเธเน'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Text Case Converter',
    benefit: 'เน€เธเธฅเธตเนเธขเธเธฃเธนเธเนเธเธเธ•เธฑเธงเธญเธฑเธเธฉเธฃเธชเธณเธซเธฃเธฑเธเธเธทเนเธญเธเธดเธฅเธ”เน slug เนเธฅเธฐเธเนเธญเธเธงเธฒเธกเนเธเนเธเนเธ”',
    detail:
      'เธฃเธญเธเธฃเธฑเธ Title, Sentence, camelCase, PascalCase, kebab-case, snake_case, CONSTANT_CASE เนเธฅเธฐ Inverse Case เธฃเธฐเธเธเนเธเนเธเธฒเธฃเนเธขเธเธเธณเธเธฒเธเธเนเธญเธเธงเนเธฒเธ เธขเธฑเธ•เธดเธ เธฑเธเธเน เนเธฅเธฐเธเธตเธ”เธเธฅเธฒเธ เธเธฃเนเธญเธกเธเธฑเธ”เธฅเธญเธเธเธฅเธฅเธฑเธเธเนเนเธ”เนเธ—เธฑเธเธ—เธต',
    caution:
      'เธเธฒเธฃเน€เธเธฅเธตเนเธขเธ case เนเธกเนเน€เธเธฅเธตเนเธขเธเธเธงเธฒเธกเธซเธกเธฒเธขเธเธญเธเธเนเธญเธกเธนเธฅเน€เธชเธกเธญเนเธ เนเธฅเธฐเธญเธฒเธเธ—เธณเนเธซเนเธเธทเนเธญ API เธซเธฃเธทเธญเธเนเธฒเธเธเธ—เธตเนเธ—เธตเนเธกเธตเธญเธขเธนเนเนเธฅเนเธงเนเธเนเนเธกเนเนเธ”เน เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธ convention เธเธญเธเนเธเธฃเน€เธเธเธ•เนเธเนเธญเธเธเธณเนเธเนเธเนเธเธฑเธเธเธฒเธเธเนเธญเธกเธนเธฅเธซเธฃเธทเธญ production'
  },
  en: {
    topic: 'The Text Case Converter',
    benefit: 'transforming labels, slugs, identifiers, and code-facing text',
    detail:
      'Supports Title, Sentence, camelCase, PascalCase, kebab-case, snake_case, CONSTANT_CASE, and Inverse Case. Words are separated using spaces, punctuation, and common separators, and the output can be copied immediately.',
    caution:
      'Changing case does not preserve meaning by itself and can break an existing API field or constant. Check the project convention before applying a result to a database or production configuration.'
  }
});
const tool: ToolConfig = {
  slug: 'text-case',
  icon: 'Aa',
  category: 'text-content',
  name: { th: 'Text Case Converter', en: 'Text Case Converter' },
  shortDescription: {
    th: 'เนเธเธฅเธเธเนเธญเธเธงเธฒเธกเน€เธเนเธ camelCase, kebab-case เนเธฅเธฐเธฃเธนเธเนเธเธเธญเธทเนเธ เน',
    en: 'Convert text to camelCase, kebab-case, and more.'
  },
  description: {
    th: 'เนเธเธฅเธ Text Case เน€เธเนเธเธฃเธนเธเนเธเธเธ—เธตเนเนเธเนเธเธฑเธเธเธทเนเธญเธ•เธฑเธงเนเธเธฃ slug เนเธฅเธฐเธเนเธญเธเธงเธฒเธกเนเธ”เนเธ—เธฑเธเธ—เธต',
    en: 'Convert text case for variables, slugs, and labels instantly.'
  },
  keywords: {
    th: ['text case', 'camelCase', 'kebab-case', 'เน€เธเธฅเธตเนเธขเธเธ•เธฑเธงเธเธดเธกเธเน'],
    en: ['text case converter', 'camelCase', 'PascalCase', 'kebab case']
  },
  component: TextCaseTool,
  howTo: {
    th: ['เธงเธฒเธเธเนเธญเธเธงเธฒเธกเธ•เนเธเธ—เธฒเธ', 'เน€เธฅเธทเธญเธเธฃเธนเธเนเธเธ Case', 'เธเธฑเธ”เธฅเธญเธเธเนเธญเธเธงเธฒเธกเธเธฅเธฅเธฑเธเธเน'],
    en: ['Paste source text', 'Choose a case style', 'Copy the converted text']
  },
  longDescription,
  faqs,
  relatedSlugs: ['slug-generator', 'json-formatter', 'markdown-html'],
  updatedAt: '2026-09-24'
};
export default tool;
