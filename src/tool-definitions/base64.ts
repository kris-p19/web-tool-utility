import type { ToolConfig } from '../config/tools';
import Base64Tool from '../components/tools/Base64Tool.astro';

const tool: ToolConfig = {
  slug: 'base64',
  icon: '64',
  category: 'ai-dev',
  name: { th: 'Base64 Encode / Decode', en: 'Base64 Encode / Decode' },
  shortDescription: {
    th: 'เน€เธเนเธฒเธฃเธซเธฑเธชเนเธฅเธฐเธ–เธญเธ”เธฃเธซเธฑเธช Base64 เธฃเธญเธเธฃเธฑเธเธเนเธญเธเธงเธฒเธกเธ เธฒเธฉเธฒเนเธ—เธขเนเธฅเธฐ Unicode',
    en: 'Encode and decode Base64 with Thai and Unicode text support.'
  },
  description: {
    th: 'เนเธเธฅเธเธเนเธญเธเธงเธฒเธกเน€เธเนเธ Base64 เนเธฅเธฐเธ–เธญเธ”เธเธฅเธฑเธเนเธ”เนเธญเธขเนเธฒเธเธเธฅเธญเธ”เธ เธฑเธขเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เธฃเธญเธเธฃเธฑเธเธเนเธญเธเธงเธฒเธก UTF-8 เนเธฅเธฐเธเนเธญเธกเธนเธฅเนเธเธ URL-safe',
    en: 'Convert text to Base64 and decode it safely in your browser with UTF-8 and URL-safe support.'
  },
  keywords: {
    th: ['Base64', 'เน€เธเนเธฒเธฃเธซเธฑเธช Base64', 'เธ–เธญเธ” Base64', 'encode decode'],
    en: ['Base64', 'Base64 encode', 'Base64 decode', 'text converter']
  },
  component: Base64Tool,
  howTo: {
    th: [
      'เธงเธฒเธเธเนเธญเธเธงเธฒเธกเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธชเธซเธฃเธทเธญเธ–เธญเธ”เธฃเธซเธฑเธช',
      'เน€เธฅเธทเธญเธเนเธซเธกเธ” Encode เธซเธฃเธทเธญ Decode',
      'เธเธ”เนเธเธฅเธ เนเธฅเนเธงเธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเธฅเธฅเธฑเธเธเน'
    ],
    en: [
      'Paste the text to encode or decode',
      'Choose Encode or Decode mode',
      'Select Convert, then copy or download the result'
    ]
  },
  longDescription: {
    th: [
      'Base64 เน€เธเนเธเธงเธดเธเธตเนเธ—เธเธเนเธญเธกเธนเธฅเนเธเธเธฒเธฃเธตเธ”เนเธงเธขเธญเธฑเธเธเธฃเธฐ ASCII เน€เธเธทเนเธญเนเธซเนเธชเนเธเธเนเธฒเธเธเนเธญเธเธ—เธฒเธเธ—เธตเนเธฃเธญเธเธฃเธฑเธเน€เธเธเธฒเธฐเธเนเธญเธเธงเธฒเธกเนเธ”เนเธญเธขเนเธฒเธเธเธฅเธญเธ”เธ เธฑเธข เน€เธเนเธ เธเนเธญเธเธงเธฒเธกเนเธ URL เธซเธฃเธทเธญเธเนเธฒเนเธ configuration เธ•เธฑเธงเนเธเธฅเธเธเธตเนเน€เธเนเธฒเธฃเธซเธฑเธชเนเธฅเธฐเธ–เธญเธ”เธเนเธญเธเธงเธฒเธก UTF-8 เนเธ”เน เธฃเธงเธกเธ–เธถเธเธญเธฑเธเธฉเธฃเนเธ—เธข เธญเธฑเธเธฉเธฃเธเธดเน€เธจเธฉ เนเธฅเธฐเธญเธตเนเธกเธเธด เนเธ”เธขเนเธกเนเน€เธชเธตเธขเธซเธฒเธขเธเธฒเธเธเธฒเธฃเนเธเธฅเธ encoding',
      'เธเธฒเธฃเธ–เธญเธ” Base64 เธเธฐเธ•เธฃเธงเธเธชเธญเธเธญเธฑเธเธเธฃเธฐเธ—เธตเนเนเธกเนเนเธเนเธชเนเธงเธเธซเธเธถเนเธเธเธญเธเธฃเธนเธเนเธเธเนเธฅเธฐเนเธเนเธเธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เธ—เธตเนเน€เธเนเธฒเนเธเนเธ”เน เนเธ—เธเธเธฒเธฃเนเธชเธ”เธเธเธฅเธเธดเธ”เธเธฅเธฒเธ”เนเธเธเนเธกเนเธกเธตเธเธณเธญเธเธดเธเธฒเธข เธเธนเนเนเธเนเธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธงเนเธฒเธเนเธญเธกเธนเธฅเน€เธเนเธ Base64 เธเนเธญเธเธงเธฒเธกเธเธฃเธดเธ เนเธกเนเนเธเน URL-safe Base64 เธซเธฃเธทเธญเนเธเธฅเนเนเธเธเธฒเธฃเธต เนเธฅเธฐเธฅเธเธเนเธญเธเธงเนเธฒเธเธซเธฃเธทเธญ line breaks เธ—เธตเนเนเธกเนเธเธณเน€เธเนเธเธเนเธญเธเธเธณเน€เธเนเธฒ เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธฃเธญเธเธฃเธฑเธ padding เนเธเธเธกเธฒเธ•เธฃเธเธฒเธ',
      'Base64 เนเธกเนเนเธเนเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธช เธเนเธญเธกเธนเธฅเธชเธฒเธกเธฒเธฃเธ–เธ–เธญเธ”เธเธฅเธฑเธเนเธ”เนเธเนเธฒเธขเธ”เนเธงเธขเน€เธเธฃเธทเนเธญเธเธกเธทเธญเธ—เธตเนเนเธเธฃเธเนเธ•เธฒเธก เธเธถเธเนเธกเนเธเธงเธฃเนเธเนเนเธ—เธเธเธฒเธฃเธเนเธญเธเธเธฑเธเธฃเธซเธฑเธชเธเนเธฒเธเธซเธฃเธทเธญเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธชเธเนเธญเธกเธนเธฅเธฅเธฑเธ เนเธเน Base64 เน€เธกเธทเนเธญเธเธณเน€เธเนเธเธ•เนเธญเธเนเธซเนเธเนเธญเธกเธนเธฅเธญเธขเธนเนเนเธเธฃเธนเธเนเธเธเธ—เธตเนเธฃเธฐเธเธเธญเธทเนเธเธฃเธญเธเธฃเธฑเธ เน€เธเนเธ data URI เธซเธฃเธทเธญเธเธฒเธฃเธฒเธกเธดเน€เธ•เธญเธฃเนเนเธ URL เนเธฅเธฐเธเธงเธฃเธเธณเธเธฑเธ”เธเธฒเธฃเน€เธเนเธฒเธ–เธถเธเนเธเธฅเนเธ•เนเธเธเธเธฑเธ',
      'เธเธฒเธฃเธ—เธณเธเธฒเธเธ—เธฑเนเธเธซเธกเธ”เน€เธเธดเธ”เธเธถเนเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เธเธถเธเนเธกเนเธเธงเธฃเธงเธฒเธเธเนเธญเธกเธนเธฅเธฅเธฑเธเธฅเธเนเธเธเนเธญเธเธเธณเน€เธเนเธฒเธเธเน€เธเธฃเธทเนเธญเธเธชเธฒเธเธฒเธฃเธ“เธฐ เนเธฅเธฐเธเธงเธฃเธฅเนเธฒเธเธเนเธญเธกเธนเธฅเธซเธฅเธฑเธเนเธเนเธเธฒเธเน€เธชเธฃเนเธ เธเธฅเธฅเธฑเธเธเนเธชเธฒเธกเธฒเธฃเธ–เธเธณเนเธเนเธเนเธ•เนเธญเนเธ”เนเธ—เธฑเธเธ—เธต เนเธ•เนเธเธงเธฃเธ•เธฃเธงเธเธชเธญเธ encoding เนเธฅเธฐเธเธฃเธดเธเธ—เธเธญเธเธฃเธฐเธเธเธเธฅเธฒเธขเธ—เธฒเธเธเนเธญเธเธเธณเนเธเนเธเนเธเธฒเธเธเธฃเธดเธ'
    ],
    en: [
      'Base64 represents binary data with ASCII characters so it can travel through channels designed for text, such as URL parameters and configuration values. This converter works with UTF-8, so Thai letters, accented characters, and emoji survive a round trip without an encoding mismatch.',
      'Decoding checks for characters that are not valid Base64 and presents an understandable error instead of returning a broken result. Make sure the input is padded, standard text Base64 rather than URL-safe Base64 or a raw binary file. Whitespace can make a copied string easier to read, but invalid separators and labels should be removed before decoding.',
      'Base64 is encoding, not encryption. Anyone can reverse it with a decoder, so it must not be used to protect passwords or confidential data. It is useful when another system expects a text representation, such as a data URI or URL value. Keep access to the original file restricted and use real encryption or access control for sensitive content.',
      'Processing stays in the browser. Avoid entering secrets on a shared device, and clear the fields when you are finished. The output is ready to use immediately, but confirm the expected character encoding and the requirements of the destination system before relying on it in a production workflow.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'Base64 เน€เธเนเธเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธชเธซเธฃเธทเธญเนเธกเน?',
        answer:
          'เนเธกเนเนเธเน Base64 เน€เธเนเธเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธชเธเนเธญเธกเธนเธฅเนเธเธเธขเนเธญเธเธเธฅเธฑเธเนเธ”เนเธเนเธฒเธข เธเธงเธฃเนเธเนเน€เธเธทเนเธญเธเธฒเธฃเนเธเธฅเธเธฃเธนเธเนเธเธเน€เธ—เนเธฒเธเธฑเนเธ'
      },
      {
        question: 'เธฃเธญเธเธฃเธฑเธเธ เธฒเธฉเธฒเนเธ—เธขเธซเธฃเธทเธญเนเธกเน?',
        answer:
          'เธฃเธญเธเธฃเธฑเธ เธฃเธฐเธเธเนเธเน TextEncoder เนเธฅเธฐ TextDecoder เนเธเธ UTF-8 เธเธถเธเธฃเธฑเธเธฉเธฒเธญเธฑเธเธฉเธฃเนเธ—เธขเนเธฅเธฐ Unicode เนเธ”เน'
      },
      {
        question: 'เธ—เธณเนเธกเธ–เธญเธ”เธเนเธญเธกเธนเธฅเนเธกเนเนเธ”เน?',
        answer:
          'เธ•เธฃเธงเธเธชเธญเธเธงเนเธฒเน€เธเนเธ Base64 เธกเธฒเธ•เธฃเธเธฒเธ เนเธกเนเธกเธตเธเนเธญเธเธงเธฒเธกเธญเธทเนเธเธเธฐเธเธ เนเธฅเธฐเธกเธต padding เธซเธฃเธทเธญเธเธณเธเธงเธเธญเธฑเธเธเธฃเธฐเธ—เธตเนเธ–เธนเธเธ•เนเธญเธ'
      },
      {
        question: 'เธเนเธญเธกเธนเธฅเธ–เธนเธเธญเธฑเธเนเธซเธฅเธ”เนเธซเธก?',
        answer: 'เนเธกเน เธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธชเนเธฅเธฐเธ–เธญเธ”เธฃเธซเธฑเธชเธ—เธณเธเธฒเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธเธญเธเธเธธเธ“'
      },
      {
        question: 'เนเธเนเธเธฑเธเนเธเธฅเนเนเธ”เนเนเธซเธก?',
        answer:
          'เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธตเนเธฃเธญเธเธฃเธฑเธเธเนเธญเธเธงเธฒเธก เธซเธฒเธเน€เธเนเธเนเธเธฅเนเนเธเธเธฒเธฃเธตเธเธงเธฃเนเธเนเน€เธเธฃเธทเนเธญเธเธกเธทเธญเน€เธเธเธฒเธฐเนเธเธฅเนเนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธ encoding'
      }
    ],
    en: [
      {
        question: 'Is Base64 encryption?',
        answer:
          'No. Base64 is reversible encoding and should not protect passwords or confidential information.'
      },
      {
        question: 'Does it support Thai text?',
        answer: 'Yes. UTF-8 TextEncoder and TextDecoder preserve Thai characters and Unicode.'
      },
      {
        question: 'Why does decoding fail?',
        answer:
          'Check that the input is standard Base64, contains no labels or extra text, and has valid padding or length.'
      },
      {
        question: 'Is my text uploaded?',
        answer: 'No. Encoding and decoding happen locally in your browser.'
      },
      {
        question: 'Can I convert a file?',
        answer:
          'This page is designed for text. Use a file-specific tool for binary files and verify their encoding.'
      }
    ]
  },
  relatedSlugs: ['json-csv', 'url-encode-decode', 'hash-generator'],
  updatedAt: '2026-09-24'
};

export default tool;
