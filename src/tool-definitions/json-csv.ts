import type { ToolConfig } from '../config/tools';
import JsonCsvTool from '../components/tools/JsonCsvTool.astro';

const tool: ToolConfig = {
  slug: 'json-csv',
  icon: '{}',
  category: 'ai-dev',
  name: { th: 'JSON โ” CSV Converter', en: 'JSON โ” CSV Converter' },
  shortDescription: {
    th: 'เนเธเธฅเธเธเนเธญเธกเธนเธฅเธฃเธฐเธซเธงเนเธฒเธ JSON เนเธฅเธฐ CSV เธเธฃเนเธญเธกเธ•เธฃเธงเธเธชเธญเธเธฃเธนเธเนเธเธ',
    en: 'Convert data between JSON and CSV with format validation.'
  },
  description: {
    th: 'เนเธเธฅเธ JSON เน€เธเนเธ CSV เธซเธฃเธทเธญ CSV เน€เธเนเธ JSON เนเธเธเธ—เธฑเธเธ—เธต เธ•เธฃเธงเธเธชเธญเธเธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เนเธฅเธฐเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเธฅเธฅเธฑเธเธเนเนเธ”เนเธเธฒเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
    en: 'Convert JSON to CSV or CSV to JSON instantly, validate errors, and download the result from your browser.'
  },
  keywords: {
    th: ['JSON CSV', 'เนเธเธฅเธ JSON', 'เนเธเธฅเธ CSV', 'JSON to CSV', 'CSV to JSON'],
    en: ['JSON CSV', 'JSON to CSV', 'CSV to JSON', 'CSV converter', 'JSON converter']
  },
  component: JsonCsvTool,
  howTo: {
    th: [
      'เธงเธฒเธเธเนเธญเธกเธนเธฅ JSON เธซเธฃเธทเธญ CSV เนเธเธเนเธญเธเธเนเธญเธกเธนเธฅ',
      'เน€เธฅเธทเธญเธเธ—เธดเธจเธ—เธฒเธเธเธฒเธฃเนเธเธฅเธเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃ',
      'เธเธ”เนเธเธฅเธเธเนเธญเธกเธนเธฅ เนเธฅเนเธงเธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเธฅเธฅเธฑเธเธเน'
    ],
    en: [
      'Paste JSON or CSV into the input area',
      'Choose the conversion direction',
      'Select Convert, then copy or download the result'
    ]
  },
  longDescription: {
    th: [
      'JSON เนเธฅเธฐ CSV เน€เธเนเธเธฃเธนเธเนเธเธเธเนเธญเธกเธนเธฅเธ—เธตเนเธเธเธเนเธญเธขเนเธเธเธฒเธเธเธฑเธ’เธเธฒเน€เธงเนเธ เธเธฒเธฃเธงเธดเน€เธเธฃเธฒเธฐเธซเนเธเนเธญเธกเธนเธฅ เนเธฅเธฐเธเธฒเธฃเธเธณเน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธ•เนเธฒเธ เน JSON เน€เธซเธกเธฒเธฐเธเธฑเธเธเนเธญเธกเธนเธฅเธ—เธตเนเธกเธตเนเธเธฃเธเธชเธฃเนเธฒเธเธเนเธญเธเธเธฑเธ เธชเนเธงเธ CSV เน€เธซเธกเธฒเธฐเธเธฑเธเธ•เธฒเธฃเธฒเธเธ—เธตเนเธ•เนเธญเธเน€เธเธดเธ”เนเธเนเธเธฃเนเธเธฃเธกเธชเน€เธเธฃเธ”เธเธตเธ• เธ•เธฑเธงเนเธเธฅเธเธเธตเนเธฃเธญเธเธฃเธฑเธ JSON เธ—เธตเนเน€เธเนเธเธญเธฒเธฃเนเน€เธฃเธขเนเธเธญเธเธญเธญเธเน€เธเธเธ•เน เนเธฅเธฐ CSV เธ—เธตเนเธกเธตเธซเธฑเธงเธ•เธฒเธฃเธฒเธ เธฃเธงเธกเธ–เธถเธเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธข quote เธ•เธฒเธกเธกเธฒเธ•เธฃเธเธฒเธ',
      'เธฃเธฐเธซเธงเนเธฒเธเนเธเธฅเธเธเธฒเธ JSON เน€เธเนเธ CSV เธเนเธฒเธ—เธตเนเน€เธเนเธ object เธซเธฃเธทเธญ array เธเนเธญเธเธเธฑเธเธเธฐเธ–เธนเธเนเธเธฅเธเน€เธเนเธ JSON string เนเธเธเนเธญเธเธเธฑเนเธ เน€เธเธทเนเธญเนเธกเนเนเธซเนเนเธเธฃเธเธชเธฃเนเธฒเธเธซเธฒเธข เธชเนเธงเธเธเนเธฒเธ—เธตเนเน€เธเนเธ null เธเธฐเธเธฅเธฒเธขเน€เธเนเธเธเนเธญเธเธงเนเธฒเธ เธซเธฒเธเธ•เนเธญเธเธเธฒเธฃเธเธงเธเธเธธเธกเธฃเธนเธเนเธเธเธเธญเธเธงเธฑเธเธ—เธตเน เธ•เธฑเธงเน€เธฅเธ เธซเธฃเธทเธญ boolean เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธเธฅเธฅเธฑเธเธเนเธเนเธญเธเธเธณเนเธเนเธเน เนเธ”เธขเน€เธเธเธฒเธฐเน€เธกเธทเนเธญเนเธเธฅเธเธเธฅเธฑเธเน€เธเนเธ JSON',
      'เธ•เธฑเธงเนเธเธฅเธ CSV เธญเนเธฒเธเธเนเธฒเธ—เธตเนเธกเธต comma, quote เนเธฅเธฐ newline เนเธ”เน เนเธฅเธฐเธเธฐเน€เธ•เธดเธก quote เนเธซเนเธเนเธฒเธ—เธตเนเธเธณเน€เธเนเธเน€เธกเธทเนเธญเธชเธฃเนเธฒเธเนเธเธฅเนเนเธซเธกเน เธซเธฒเธเนเธเธฅเนเธกเธต encoding เธซเธฃเธทเธญ delimiter เนเธกเนเธ•เธฃเธเธเธฑเธเธกเธฒเธ•เธฃเธเธฒเธ เนเธซเนเน€เธ•เธฃเธตเธขเธกเธเนเธญเธกเธนเธฅเนเธซเนเน€เธเนเธ UTF-8 เนเธฅเธฐเนเธเน comma เธเนเธญเธเนเธเนเน€เธเธฃเธทเนเธญเธเธกเธทเธญ เธเนเธญเธกเธนเธฅเธเธเธฒเธ”เนเธซเธเนเธญเธฒเธเธ—เธณเนเธซเนเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธ—เธณเธเธฒเธเธเนเธฒเธฅเธเน€เธฅเนเธเธเนเธญเธข เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธถเธเธเธงเธฃเนเธเนเธเธฑเธเธเนเธญเธกเธนเธฅเธ—เธตเนเธเธญเน€เธซเธกเธฒเธฐเธเธฑเธเธซเธเนเธงเธขเธเธงเธฒเธกเธเธณเธเธญเธเธญเธธเธเธเธฃเธ“เน',
      'เธเธฒเธฃเธ•เธฃเธงเธเธชเธญเธเธเธฅเธฅเธฑเธเธเนเน€เธเนเธเธชเนเธงเธเธชเธณเธเธฑเธ เนเธ”เธขเน€เธเธเธฒเธฐเธเธฒเธเธ—เธตเนเธ•เนเธญเธเธชเนเธเธ•เนเธญเธเนเธญเธกเธนเธฅเนเธซเนเธ—เธตเธกเธญเธทเนเธ เธเธงเธฃเน€เธเธฃเธตเธขเธเน€เธ—เธตเธขเธเธเธณเธเธงเธเนเธ–เธงเนเธฅเธฐเธเธทเนเธญเธเธญเธฅเธฑเธกเธเนเธเธฑเธเธ•เนเธเธเธเธฑเธ เนเธฅเธฐเน€เธเนเธเนเธเธฅเนเธ•เนเธเธเธเธฑเธเนเธงเน เธซเธฒเธเธกเธตเธเนเธญเธกเธนเธฅเธชเนเธงเธเธเธธเธเธเธฅเธญเธขเธนเนเนเธเนเธเธฅเน เนเธซเนเธฅเธเธซเธฃเธทเธญเธเธเธเธดเธ”เธเนเธญเธกเธนเธฅเธ”เธฑเธเธเธฅเนเธฒเธงเธเนเธญเธเนเธเธฃเนเธ•เธฑเธงเธญเธขเนเธฒเธเธชเธฒเธเธฒเธฃเธ“เธฐ เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธตเนเธเธฃเธฐเธกเธงเธฅเธเธฅเนเธเธเธฑเนเธเธเธนเนเนเธเน เธเธถเธเนเธกเนเธเธงเธฃเนเธเนเน€เธเนเธเธ—เธตเนเน€เธเนเธเธเนเธญเธกเธนเธฅเธ–เธฒเธงเธฃ'
    ],
    en: [
      'JSON and CSV are common formats in web development, data analysis, and importing information into operational systems. JSON works well for nested structures, while CSV is convenient for tables opened in spreadsheet software. This converter accepts an array of objects as JSON and a headed CSV document, including standard quoted fields.',
      'During JSON-to-CSV conversion, nested objects and arrays are stored as JSON text in their cell so that structure is not silently lost. Null values become empty cells. Dates, numbers, and booleans should be checked after a round trip if the receiving system expects a particular type. The converter is intended for data sets that comfortably fit in browser memory.',
      'The CSV parser understands commas, quoted values, and line breaks, and it quotes generated fields when needed. If an imported file uses another encoding or delimiter, convert it to UTF-8 and comma-separated values first. For a large file, the browser may need more time and memory. Keep the source file as a backup and compare row counts and column names before replacing the original.',
      'Always review sensitive fields before sharing an exported example. This page processes content in the browser, but the result is not a permanent storage location. A successful conversion is a useful starting point; use the target application schema or documentation when field types and naming rules need to be exact.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'เธฃเธญเธเธฃเธฑเธ JSON เธ—เธตเนเนเธกเนเนเธเนเธญเธฒเธฃเนเน€เธฃเธขเนเธซเธฃเธทเธญเนเธกเน?',
        answer:
          'เธเธฒเธฃเนเธเธฅเธเน€เธเนเธ CSV เนเธเธเธกเธฒเธ•เธฃเธเธฒเธเธ•เนเธญเธเธเธฒเธฃเธญเธฒเธฃเนเน€เธฃเธขเนเธเธญเธเธญเธญเธเน€เธเธเธ•เน เธซเธฃเธทเธญเธญเธญเธเน€เธเธเธ•เนเน€เธ”เธตเธขเธง เธซเธฒเธเธ•เนเธญเธเธเธฒเธฃเธฃเธญเธเธฃเธฑเธเธ—เธธเธเนเธเธฃเธเธชเธฃเนเธฒเธ เนเธซเนเธเธฑเธ”เธเนเธญเธกเธนเธฅเนเธซเนเน€เธเนเธเธฃเธนเธเนเธเธเธ•เธฒเธฃเธฒเธเธเนเธญเธ'
      },
      {
        question: 'CSV เธ—เธตเนเธกเธต quote เนเธฅเธฐ comma เธเธฐเธ–เธนเธเธเธฑเธ”เธเธฒเธฃเธญเธขเนเธฒเธเนเธฃ?',
        answer:
          'เธ•เธฑเธงเนเธเธฅเธเธเธฐเธญเนเธฒเธเนเธฅเธฐ escape เธเนเธฒเธ•เธฒเธกเธฃเธนเธเนเธเธ CSV เธ—เธตเนเธกเธต quote เนเธ”เน เธ—เธณเนเธซเนเธเนเธฒเธ—เธตเนเธกเธตเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธขเน€เธซเธฅเนเธฒเธเธตเนเนเธกเนเธ—เธณเนเธซเนเธเธญเธฅเธฑเธกเธเนเน€เธเธตเนเธขเธ'
      },
      {
        question: 'เธเนเธญเธกเธนเธฅเธ–เธนเธเธชเนเธเธเธถเนเธเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเนเนเธซเธก?',
        answer: 'เนเธกเน เธเธฒเธฃเนเธเธฅเธเน€เธเธดเธ”เธเธถเนเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เนเธฅเธฐเน€เธงเนเธเนเธเธ•เนเนเธกเนเธเธฑเธเธ—เธถเธเธเนเธญเธกเธนเธฅเธเธณเน€เธเนเธฒ'
      },
      {
        question: 'เธ—เธณเนเธกเธเนเธฒ object เธเนเธญเธเธเธฑเธเธเธฅเธฒเธขเน€เธเนเธเธเนเธญเธเธงเธฒเธก?',
        answer: 'CSV เธกเธตเน€เธเธตเธขเธเธเธญเธฅเธฑเธกเธเนเนเธฅเธฐเนเธ–เธง เธเธถเธเน€เธเนเธเธเนเธฒเธเนเธญเธเธเธฑเธเน€เธเนเธ JSON string เน€เธเธทเนเธญเธฃเธฑเธเธฉเธฒเธเนเธญเธกเธนเธฅเนเธงเน'
      },
      {
        question: 'เธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเธฅเธฅเธฑเธเธเนเนเธ”เนเนเธซเธก?',
        answer: 'เนเธ”เน เธเธ”เธเธธเนเธกเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธซเธฅเธฑเธเนเธเธฅเธเธชเธณเน€เธฃเนเธ เน€เธเธทเนเธญเธเธฑเธเธ—เธถเธเน€เธเนเธเนเธเธฅเน JSON เธซเธฃเธทเธญ CSV'
      }
    ],
    en: [
      {
        question: 'Does it support JSON that is not an array?',
        answer:
          'Standard CSV conversion expects an array of objects or one object. Reshape other structures into tabular data first.'
      },
      {
        question: 'How are quoted commas handled?',
        answer:
          'The converter reads and escapes standard quoted CSV values, so commas and quotes do not unexpectedly create columns.'
      },
      {
        question: 'Is the data uploaded?',
        answer: 'No. Conversion happens in your browser, and this site does not store the input.'
      },
      {
        question: 'Why are nested objects stored as text?',
        answer:
          'CSV has rows and columns rather than nested fields, so JSON text preserves the nested value inside one cell.'
      },
      {
        question: 'Can I download the result?',
        answer:
          'Yes. After a successful conversion, use the download button to save the JSON or CSV result.'
      }
    ]
  },
  relatedSlugs: ['json-formatter', 'base64', 'url-encode-decode'],
  updatedAt: '2026-09-24'
};

export default tool;
