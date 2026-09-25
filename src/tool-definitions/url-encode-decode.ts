import type { ToolConfig } from '../config/tools';
import UrlTool from '../components/tools/UrlTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'URL Encode and Decoder',
  'เธเนเธญเธเธงเธฒเธกเธ–เธนเธเน€เธเนเธฒเธฃเธซเธฑเธชเธซเธฃเธทเธญเธ–เธญเธ”เนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เน€เธฅเธทเธญเธเนเธซเธกเธ” Encode เธซเธฃเธทเธญ Decode เนเธฅเนเธงเธงเธฒเธเธเนเธญเธเธงเธฒเธกเธซเธฃเธทเธญ URL',
  'เธญเธขเนเธฒเนเธเน URL encoding เนเธ—เธเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธชเธเนเธญเธกเธนเธฅเธฅเธฑเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'URL Encode เนเธฅเธฐ URL Decode',
    benefit: 'เน€เธเนเธฒเธฃเธซเธฑเธชเธซเธฃเธทเธญเธ–เธญเธ”เธเนเธญเธกเธนเธฅเธ—เธตเนเนเธเนเนเธ URL เนเธฅเธฐ query string',
    detail:
      'เน€เธฅเธทเธญเธเนเธซเธกเธ”เนเธฅเนเธงเธงเธฒเธเธเนเธฒ เธฃเธฐเธเธเนเธเน encodeURIComponent เธซเธฃเธทเธญ decodeURIComponent เธเธฃเนเธญเธกเนเธชเธ”เธเธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เน€เธกเธทเนเธญเธเนเธญเธกเธนเธฅเนเธกเนเธ–เธนเธเธ•เนเธญเธ เธเธฅเธฅเธฑเธเธเนเธญเธขเธนเนเนเธ textarea เธ—เธตเนเธเธฑเธ”เธฅเธญเธเนเธ”เน',
    caution:
      'เธเธฒเธฃ encode เนเธกเนเนเธ”เนเธ—เธณเนเธซเน URL เธเธฅเธญเธ”เธ เธฑเธขเธซเธฃเธทเธญเธเนเธญเธเธเนเธญเธกเธนเธฅ เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเนเธ”เน€เธกเธเนเธฅเธฐเธเธฒเธฃเธฒเธกเธดเน€เธ•เธญเธฃเนเธเนเธญเธเน€เธเธดเธ”เธฅเธดเธเธเน เนเธฅเธฐเธญเธขเนเธฒเนเธชเนเธฃเธซเธฑเธชเธเนเธฒเธเธซเธฃเธทเธญ token เธฅเธเนเธ URL เธ—เธตเนเนเธเธฃเนเธ•เนเธญเธชเธฒเธเธฒเธฃเธ“เธฐ'
  },
  en: {
    topic: 'The URL Encode and Decode tool',
    benefit: 'encoding or decoding values used in URLs and query strings',
    detail:
      'Choose a mode, paste the value, and use the browser URL encoding functions. Invalid escapes produce a clear error, while valid results remain in a selectable textarea for copying.',
    caution:
      'URL encoding does not make a link safe or hide information. Check the destination domain and parameters, and never place passwords or private tokens in a public URL.'
  }
});
const tool: ToolConfig = {
  slug: 'url-encode-decode',
  icon: 'URL',
  category: 'ai-dev',
  name: { th: 'URL Encode / Decode', en: 'URL Encode / Decode' },
  shortDescription: {
    th: 'เน€เธเนเธฒเธฃเธซเธฑเธชเนเธฅเธฐเธ–เธญเธ”เธเนเธญเธเธงเธฒเธกเธชเธณเธซเธฃเธฑเธ URL เธญเธขเนเธฒเธเธเนเธฒเธข',
    en: 'Encode and decode URL text with one click.'
  },
  description: {
    th: 'URL Encode เนเธฅเธฐ Decode เธเนเธญเธเธงเธฒเธกเธชเธณเธซเธฃเธฑเธ query string เนเธฅเธฐเธฅเธดเธเธเน เธเธฃเนเธญเธกเธ•เธฃเธงเธเธชเธญเธเธเนเธญเธกเธนเธฅเธเธดเธ”เธเธฅเธฒเธ”',
    en: 'Encode and decode text for query strings and links with validation.'
  },
  keywords: {
    th: ['URL encode', 'URL decode', 'encodeURIComponent', 'เธฅเธดเธเธเน'],
    en: ['URL encoder', 'URL decoder', 'encode URI', 'decode URI']
  },
  component: UrlTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธ Encode เธซเธฃเธทเธญ Decode', 'เธงเธฒเธเธเนเธญเธเธงเธฒเธกเธซเธฃเธทเธญ URL', 'เธเธ”เนเธเธฅเธเนเธฅเธฐเธเธฑเธ”เธฅเธญเธเธเธฅเธฅเธฑเธเธเน'],
    en: ['Choose Encode or Decode', 'Paste text or a URL', 'Convert and copy the result']
  },
  longDescription,
  faqs,
  relatedSlugs: ['base64', 'slug-generator', 'json-csv'],
  updatedAt: '2026-09-24'
};
export default tool;
