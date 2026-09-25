import type { ToolConfig } from '../config/tools';
import HeicToJpgTool from '../components/tools/HeicToJpgTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'HEIC to JPG Converter',
  'เธ–เนเธฒเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธฃเธญเธเธฃเธฑเธ codec เธเธฒเธฃเนเธเธฅเธเธเธฐเธ—เธณเธเธฒเธเนเธเน€เธเธฃเธทเนเธญเธเธเธนเนเนเธเน',
  'เน€เธฅเธทเธญเธเนเธเธฅเน .heic เธซเธฃเธทเธญ .heif เนเธฅเนเธงเธเธ”เนเธเธฅเธ',
  'เน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธชเนเธงเธเนเธซเธเนเนเธกเนเธ–เธญเธ” HEIC เนเธ”เน เธซเธฒเธเนเธกเนเธฃเธญเธเธฃเธฑเธเนเธซเนเนเธเนเนเธญเธเธ—เธตเนเธกเธต codec เธเนเธญเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'HEIC โ’ JPG Converter',
    benefit: 'เน€เธเธฅเธตเนเธขเธเธ เธฒเธ HEIC เธซเธฃเธทเธญ HEIF เนเธซเนเน€เธเธดเธ”เธ”เนเธงเธขเธญเธธเธเธเธฃเธ“เนเธ—เธฑเนเธงเนเธเนเธ”เนเธเนเธฒเธขเธเธถเนเธ',
    detail:
      'เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธ•เธฃเธงเธเธชเธญเธเธเธเธดเธ”เนเธเธฅเนเนเธฅเธฐเนเธเน browser image decoder เน€เธกเธทเนเธญเธญเธธเธเธเธฃเธ“เนเธฃเธญเธเธฃเธฑเธ เธเธฒเธเธเธฑเนเธเธงเธฒเธ”เธ เธฒเธเธฅเธ Canvas เนเธฅเธฐเธเธฑเธเธ—เธถเธเน€เธเนเธ JPEG เธ•เธฒเธกเธเนเธฒเธเธธเธ“เธ เธฒเธเธ—เธตเนเน€เธฅเธทเธญเธ',
    caution:
      'HEIC เน€เธเนเธ codec เธ—เธตเนเนเธกเนเนเธ”เนเธฃเธญเธเธฃเธฑเธเนเธ Chrome, Firefox เนเธฅเธฐเธญเธธเธเธเธฃเธ“เนเธเธณเธเธงเธเธกเธฒเธ เธซเธฒเธเธเธถเนเธเธงเนเธฒเธ–เธญเธ”เธฃเธซเธฑเธชเนเธกเนเนเธ”เน เนเธซเนเนเธเธฅเธเธ”เนเธงเธขเนเธญเธเธซเธฃเธทเธญ desktop converter เธเนเธญเธ เนเธฅเธฐเธญเธขเนเธฒเธญเธฑเธเนเธซเธฅเธ”เธ เธฒเธเธชเนเธงเธเธ•เธฑเธงเนเธเธขเธฑเธเธเธฃเธดเธเธฒเธฃเธ—เธตเนเนเธกเนเธฃเธนเนเธเธฑเธ'
  },
  en: {
    topic: 'The HEIC to JPG Converter',
    benefit: 'making HEIC or HEIF photos easier to open on everyday devices',
    detail:
      'The tool checks the file type and uses the browser image decoder when the device supports it. The decoded image is drawn to Canvas and saved as JPEG using the selected quality setting.',
    caution:
      'HEIC is not supported by every browser or device. If decoding fails, convert the file with a compatible app first, and do not upload private photos to an unknown service merely to change the format.'
  }
});
const tool: ToolConfig = {
  slug: 'heic-jpg',
  icon: 'HEIC',
  category: 'image-media',
  name: { th: 'HEIC โ’ JPG Converter', en: 'HEIC โ’ JPG Converter' },
  shortDescription: {
    th: 'เนเธเธฅเธ HEIC เน€เธเนเธ JPG เน€เธกเธทเนเธญเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธฃเธญเธเธฃเธฑเธ',
    en: 'Convert HEIC to JPG when your browser supports it.'
  },
  description: {
    th: 'เธฅเธญเธเนเธเธฅเธ HEIC เนเธฅเธฐ HEIF เน€เธเนเธ JPG เธเธฑเนเธเธเธนเนเนเธเน เธเธฃเนเธญเธกเธเนเธญเธเธงเธฒเธกเนเธเธฐเธเธณเน€เธกเธทเนเธญเธญเธธเธเธเธฃเธ“เนเนเธกเนเธฃเธญเธเธฃเธฑเธ codec',
    en: 'Try local HEIC and HEIF to JPG conversion with clear guidance when the device lacks codec support.'
  },
  keywords: {
    th: ['HEIC JPG', 'HEIF', 'เนเธเธฅเธ HEIC', 'เธ เธฒเธ iPhone'],
    en: ['HEIC to JPG', 'HEIF converter', 'iPhone photo converter', 'HEIC JPG']
  },
  component: HeicToJpgTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเนเธเธฅเน HEIC เธซเธฃเธทเธญ HEIF', 'เธ•เธฑเนเธเธเธธเธ“เธ เธฒเธ JPG', 'เธเธ”เนเธเธฅเธเนเธฅเธฐเธ”เธฒเธงเธเนเนเธซเธฅเธ”เน€เธกเธทเนเธญเธฃเธญเธเธฃเธฑเธ'],
    en: ['Choose a HEIC or HEIF file', 'Set JPG quality', 'Convert and download when supported']
  },
  longDescription,
  faqs,
  relatedSlugs: ['image-converter', 'image-compressor', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
