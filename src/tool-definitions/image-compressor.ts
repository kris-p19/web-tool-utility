import type { ToolConfig } from '../config/tools';
import ImageCompressorTool from '../components/tools/ImageCompressorTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Image Compressor',
  'เนเธเธฅเนเธ เธฒเธเธ–เธนเธเธญเนเธฒเธเนเธฅเธฐเธเธตเธเธญเธฑเธ”เนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เน€เธฅเธทเธญเธเธ เธฒเธ เธเธณเธซเธเธ”เธเธธเธ“เธ เธฒเธเนเธฅเธฐเธเธงเธฒเธกเธเธงเนเธฒเธเธชเธนเธเธชเธธเธ”',
  'เธเธฅเธฅเธฑเธเธเนเธญเธฒเธเธฅเธ”เธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ”เธซเธฃเธทเธญเธเธธเธ“เธ เธฒเธ เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธ เธฒเธเธเนเธญเธเนเธเนเธเธฒเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Image Compressor',
    benefit: 'เธฅเธ”เธเธเธฒเธ”เธ เธฒเธเน€เธเธทเนเธญเน€เธเธขเนเธเธฃเนเธซเธฃเธทเธญเธญเธฑเธเนเธซเธฅเธ”เน€เธฃเนเธงเธเธถเนเธ',
    detail:
      'เน€เธฅเธทเธญเธเธ เธฒเธเธ—เธตเนเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธญเนเธฒเธเนเธ”เน เธเธฃเธฑเธ quality เนเธฅเธฐเธเธงเธฒเธกเธเธงเนเธฒเธเธชเธนเธเธชเธธเธ” เนเธฅเนเธงเนเธเน Canvas เธชเธฃเนเธฒเธ JPEG เนเธซเธกเน เธฃเธฐเธเธเนเธชเธ”เธเธเธเธฒเธ”เน€เธ”เธดเธก เธเธเธฒเธ”เนเธซเธกเน เนเธฅเธฐเน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธ—เธตเนเธเธฃเธฐเธซเธขเธฑเธ”เนเธ”เน',
    caution:
      'เธเธฒเธฃเธเธตเธเธญเธฑเธ”เธญเธฒเธเธ—เธณเนเธซเนเธเนเธญเธเธงเธฒเธก เนเธเธซเธเนเธฒ เธซเธฃเธทเธญเธ เธฒเธเนเธเธฃเนเธเนเธชเน€เธชเธตเธขเธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ” เธเธงเธฃเน€เธเธฃเธตเธขเธเน€เธ—เธตเธขเธเธ เธฒเธเธ•เนเธเธเธเธฑเธเนเธฅเธฐเธเธฅเธฅเธฑเธเธเน เนเธ”เธขเน€เธเธเธฒเธฐเธ เธฒเธเธ—เธตเนเธ•เนเธญเธเนเธเนเนเธเน€เธญเธเธชเธฒเธฃเธซเธฃเธทเธญเธเธฒเธฃเธเธดเธกเธเน'
  },
  en: {
    topic: 'The Image Compressor',
    benefit: 'reducing image size for faster sharing and uploads',
    detail:
      'Choose a browser-decodable image, adjust quality and maximum width, and create a new JPEG with Canvas. The page shows the original size, output size, and estimated percentage saved.',
    caution:
      'Compression can remove useful detail from text, faces, gradients, or transparency. Compare the source and output, especially for images used in documents, print, or medical contexts.'
  }
});
const tool: ToolConfig = {
  slug: 'image-compressor',
  icon: 'ZIP',
  category: 'image-media',
  name: { th: 'Image Compressor', en: 'Image Compressor' },
  shortDescription: {
    th: 'เธฅเธ”เธเธเธฒเธ”เธ เธฒเธเนเธฅเธฐเธเธฃเธฑเธเธเธธเธ“เธ เธฒเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
    en: 'Compress images and adjust quality in your browser.'
  },
  description: {
    th: 'เธเธตเธเธญเธฑเธ”เธ เธฒเธเน€เธเนเธ JPEG เธ”เนเธงเธขเธเธธเธ“เธ เธฒเธเนเธฅเธฐเธเธเธฒเธ”เธ—เธตเนเธเธฃเธฑเธเนเธ”เน เนเธ”เธขเนเธเธฅเนเนเธกเนเธ–เธนเธเธญเธฑเธเนเธซเธฅเธ”',
    en: 'Compress images to JPEG with adjustable quality and size, entirely in your browser.'
  },
  keywords: {
    th: ['เธเธตเธเธญเธฑเธ”เธฃเธนเธ', 'เธฅเธ”เธเธเธฒเธ”เธฃเธนเธ', 'image compressor', 'jpeg'],
    en: ['image compressor', 'compress image', 'reduce image size', 'JPEG']
  },
  component: ImageCompressorTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเธ เธฒเธเธ•เนเธเธเธเธฑเธ', 'เธ•เธฑเนเธเธเธธเธ“เธ เธฒเธเนเธฅเธฐเธเธงเธฒเธกเธเธงเนเธฒเธ', 'เธเธ”เธเธตเธเธญเธฑเธ”เนเธฅเธฐเธ”เธฒเธงเธเนเนเธซเธฅเธ”'],
    en: ['Choose the original image', 'Set quality and maximum width', 'Compress and download']
  },
  longDescription,
  faqs,
  relatedSlugs: ['image-converter', 'heic-jpg', 'color-palette'],
  updatedAt: '2026-09-24'
};
export default tool;
