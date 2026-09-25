import type { ToolConfig } from '../config/tools';
import JsonFormatterTool from '../components/tools/JsonFormatterTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'JSON Formatter and Validator',
  'เธเนเธญเธกเธนเธฅเธ–เธนเธเธเธฃเธฐเธกเธงเธฅเธเธฅเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เธงเธฒเธ JSON เธ—เธตเนเน€เธเนเธ object, array, string, number, boolean เธซเธฃเธทเธญ null',
  'JSON เธ—เธตเนเธกเธต comment, trailing comma เธซเธฃเธทเธญ single quote เธเธฐเนเธกเนเธ–เธนเธเธขเธญเธกเธฃเธฑเธเธ•เธฒเธกเธกเธฒเธ•เธฃเธเธฒเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'JSON Formatter เนเธฅเธฐ Validator',
    benefit: 'เธ•เธฃเธงเธเธชเธญเธ syntax เนเธฅเธฐเธเธฑเธ”เธฃเธนเธเนเธเธเธเนเธญเธกเธนเธฅ JSON เนเธซเนเธญเนเธฒเธเธเนเธฒเธขเธเธถเนเธ',
    detail:
      'เธงเธฒเธเธเนเธญเธกเธนเธฅเนเธฅเนเธงเน€เธฅเธทเธญเธเธเธฑเธ”เธฃเธนเธเนเธเธ เธขเนเธญเธเธเธฒเธ” เธซเธฃเธทเธญเธ•เธฃเธงเธเธชเธญเธ เธเธฅเธฅเธฑเธเธเนเนเธชเธ”เธเธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เธเธฃเนเธญเธกเธเนเธญเธเธงเธฒเธกเธเธฒเธ parser เนเธฅเธฐเธชเธฒเธกเธฒเธฃเธ–เธเธฑเธ”เธฅเธญเธเนเธเนเธเนเธ•เนเธญเนเธ”เนเธ—เธฑเธเธ—เธต',
    caution:
      'เธเธฒเธฃเธเธฑเธ”เธฃเธนเธเนเธเธเนเธกเนเน€เธเธฅเธตเนเธขเธเธเนเธฒเธเธญเธ JSON เนเธ•เนเธเธณเธเธงเธเนเธฅเธฐเธเธเธดเธ”เธเนเธญเธกเธนเธฅเธญเธฒเธเธ”เธนเธ•เนเธฒเธเนเธเน€เธกเธทเนเธญเธเธณเนเธเนเธเนเธเธฑเธ API เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธ schema เธเธญเธเธเธฅเธฒเธขเธ—เธฒเธเนเธฅเธฐเธญเธขเนเธฒเนเธเนเนเธเธเนเธญเธกเธนเธฅเธ•เนเธเธเธเธฑเธเนเธ”เธขเนเธกเนเธกเธตเธชเธณเน€เธเธฒ'
  },
  en: {
    topic: 'The JSON Formatter and Validator',
    benefit: 'checking JSON syntax and making data easier to read',
    detail:
      'Paste a value and choose Format, Minify, or Validate. The page shows parser feedback when the input is invalid and places a ready-to-copy result in the output field for the next step.',
    caution:
      'Formatting does not change JSON values, although number representation and downstream types can still differ. Check the destination API schema and keep a copy before editing an original payload.'
  }
});
const tool: ToolConfig = {
  slug: 'json-formatter',
  icon: '{ }',
  category: 'ai-dev',
  name: { th: 'JSON Formatter / Validator', en: 'JSON Formatter / Validator' },
  shortDescription: {
    th: 'เธเธฑเธ”เธฃเธนเธเนเธเธ เธขเนเธญ เนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธ JSON',
    en: 'Format, minify, and validate JSON.'
  },
  description: {
    th: 'เธ•เธฃเธงเธเธชเธญเธ JSON เนเธฅเธฐเธเธฑเธ”เธฃเธนเธเนเธเธเธซเธฃเธทเธญเธขเนเธญเธเนเธญเธกเธนเธฅเนเธ”เนเธ—เธฑเธเธ—เธต เธเธฃเนเธญเธกเธเนเธญเธเธงเธฒเธกเนเธเนเธเธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เธ—เธตเนเน€เธเนเธฒเนเธเธเนเธฒเธข',
    en: 'Validate JSON and format or minify it instantly with understandable error messages.'
  },
  keywords: {
    th: ['JSON formatter', 'JSON validator', 'เธเธฑเธ”เธฃเธนเธเนเธเธ JSON', 'เธขเนเธญ JSON'],
    en: ['JSON formatter', 'JSON validator', 'format JSON', 'minify JSON']
  },
  component: JsonFormatterTool,
  howTo: {
    th: ['เธงเธฒเธเธเนเธญเธกเธนเธฅ JSON', 'เน€เธฅเธทเธญเธเธเธฑเธ”เธฃเธนเธเนเธเธ เธขเนเธญ เธซเธฃเธทเธญเธ•เธฃเธงเธเธชเธญเธ', 'เธเธฑเธ”เธฅเธญเธเธเธฅเธฅเธฑเธเธเน'],
    en: ['Paste JSON', 'Choose format, minify, or validate', 'Copy the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['json-csv', 'base64', 'markdown-html'],
  updatedAt: '2026-09-24'
};
export default tool;
