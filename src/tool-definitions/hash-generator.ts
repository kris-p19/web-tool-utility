import type { ToolConfig } from '../config/tools';
import HashTool from '../components/tools/HashTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Hash Generator',
  'เธเนเธญเธเธงเธฒเธกเธ–เธนเธเธเธฃเธฐเธกเธงเธฅเธเธฅเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธ”เนเธงเธข Web Crypto เธซเธฃเธทเธญ MD5 implementation',
  'เธเนเธญเธเธเนเธญเธเธงเธฒเธก UTF-8 เนเธฅเธฐเน€เธฅเธทเธญเธ MD5, SHA-1, SHA-256, SHA-384 เธซเธฃเธทเธญ SHA-512',
  'MD5 เนเธฅเธฐ SHA-1 เนเธกเนเธเธงเธฃเนเธเนเธเธฑเธเธเธฒเธฃเธ•เธฃเธงเธเธชเธญเธเธเธงเธฒเธกเธเธฅเธญเธ”เธ เธฑเธขเนเธซเธกเน เนเธฅเธฐ hash เนเธกเนเนเธเนเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธช'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Hash Generator',
    benefit: 'เธชเธฃเนเธฒเธเธเนเธฒ checksum เธเธญเธเธเนเธญเธเธงเธฒเธกเธชเธณเธซเธฃเธฑเธเธ•เธฃเธงเธเธชเธญเธเธเธงเธฒเธกเธ–เธนเธเธ•เนเธญเธเนเธฅเธฐเธเธฒเธฃเธเธฑเธ’เธเธฒเธฃเธฐเธเธ',
    detail:
      'เธฃเธญเธเธฃเธฑเธ MD5 เนเธฅเธฐเธ•เธฃเธฐเธเธนเธ SHA เธเนเธฒเธ Web Crypto API เธเธญเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เธขเธเน€เธงเนเธ MD5 เธ—เธตเนเธกเธต implementation เธชเธณเธซเธฃเธฑเธเธเธฒเธฃเธ—เธ”เธชเธญเธเธเธงเธฒเธกเน€เธเนเธฒเธเธฑเธเนเธ”เน เธเธฅเธฅเธฑเธเธเนเนเธชเธ”เธเน€เธเนเธ hexadecimal เนเธฅเธฐเนเธกเนเนเธเนเนเธเธเนเธญเธกเธนเธฅเธ•เนเธเธเธเธฑเธ',
    caution:
      'hash เน€เธเนเธเธเธฒเธฃเธชเธฃเธธเธเธเนเธญเธกเธนเธฅเนเธเธเธญเนเธฒเธเธขเนเธญเธเนเธกเนเนเธ”เน เนเธกเนเนเธเนเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธเนเธญเธกเธนเธฅเธฅเธฑเธ เนเธฅเธฐเธญเธฒเธเธกเธต collision เนเธ”เธขเน€เธเธเธฒเธฐ MD5 เธเธงเธฃเนเธเน SHA-256 เธเธถเนเธเนเธเธชเธณเธซเธฃเธฑเธเธเธฒเธเนเธซเธกเน เธเธฃเนเธญเธกเน€เธเนเธ salt เนเธฅเธฐเธเธฒเธฃเธ•เธฃเธงเธเธชเธญเธเธเธงเธฒเธกเธ–เธนเธเธ•เนเธญเธเธ—เธตเนเน€เธซเธกเธฒเธฐเธชเธก'
  },
  en: {
    topic: 'The Hash Generator',
    benefit: 'creating text checksums for integrity checks and development workflows',
    detail:
      'MD5 and the SHA family are available through the browser Web Crypto API, with a compatible MD5 implementation for interoperability checks. Results are shown as lowercase hexadecimal and the original text is never changed.',
    caution:
      'A hash is a one-way summary, not encryption, and collisions are possible, especially with MD5. Prefer SHA-256 or stronger for new security designs, and use appropriate salting and verification for passwords.'
  }
});
const tool: ToolConfig = {
  slug: 'hash-generator',
  icon: 'HASH',
  category: 'ai-dev',
  name: { th: 'Hash Generator (MD5 / SHA)', en: 'Hash Generator (MD5 / SHA)' },
  shortDescription: {
    th: 'เธชเธฃเนเธฒเธ MD5 เนเธฅเธฐ SHA hash เธเธฒเธเธเนเธญเธเธงเธฒเธกเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
    en: 'Create MD5 and SHA hashes from text in your browser.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธ Hash MD5, SHA-1, SHA-256, SHA-384 เนเธฅเธฐ SHA-512 เธชเธณเธซเธฃเธฑเธเธ•เธฃเธงเธเธชเธญเธเธเนเธญเธกเธนเธฅเนเธฅเธฐเธเธฒเธฃเธเธฑเธ’เธเธฒ',
    en: 'Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes for verification and development.'
  },
  keywords: {
    th: ['MD5', 'SHA256', 'hash', 'เธชเธฃเนเธฒเธ hash'],
    en: ['MD5', 'SHA256', 'hash generator', 'checksum', 'SHA-512']
  },
  component: HashTool,
  howTo: {
    th: ['เธงเธฒเธเธเนเธญเธเธงเธฒเธกเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃ', 'เน€เธฅเธทเธญเธเธญเธฑเธฅเธเธญเธฃเธดเธ—เธถเธก', 'เธเธ”เธชเธฃเนเธฒเธเนเธฅเธฐเธเธฑเธ”เธฅเธญเธ hash'],
    en: ['Paste the text', 'Choose an algorithm', 'Create and copy the hash']
  },
  longDescription,
  faqs,
  relatedSlugs: ['password-generator', 'base64', 'uuid-ulid'],
  updatedAt: '2026-09-24'
};
export default tool;
