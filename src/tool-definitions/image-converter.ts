import type { ToolConfig } from '../config/tools';
import ImageConverterTool from '../components/tools/ImageConverterTool.astro';

const tool: ToolConfig = {
  slug: 'image-converter',
  icon: 'IMG',
  category: 'image-media',
  name: { th: 'Image Converter', en: 'Image Converter' },
  shortDescription: {
    th: 'เนเธเธฅเธเธฃเธนเธเธ เธฒเธเน€เธเนเธ PNG, JPG เธซเธฃเธทเธญ WebP เธ”เนเธงเธข Canvas เนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
    en: 'Convert images to PNG, JPG, or WebP with browser Canvas.'
  },
  description: {
    th: 'เนเธเธฅเธเนเธฅเธฐเธเธฃเธฑเธเธเธเธฒเธ”เธ เธฒเธเน€เธเนเธ PNG, JPG เธซเธฃเธทเธญ WebP เนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เธเธฃเนเธญเธกเธ•เธฑเนเธเธเนเธฒเธเธธเธ“เธ เธฒเธเนเธฅเธฐเธ”เธฒเธงเธเนเนเธซเธฅเธ” เนเธ”เธขเนเธเธฅเนเนเธกเนเธ–เธนเธเธญเธฑเธเนเธซเธฅเธ”',
    en: 'Convert and resize images to PNG, JPG, or WebP in your browser with quality controls and local download.'
  },
  keywords: {
    th: ['เนเธเธฅเธเธฃเธนเธ', 'PNG', 'JPG', 'WebP', 'Image Converter', 'เธฅเธ”เธเธเธฒเธ”เธฃเธนเธ'],
    en: ['image converter', 'PNG to JPG', 'WebP converter', 'JPG to WebP', 'resize image']
  },
  component: ImageConverterTool,
  howTo: {
    th: [
      'เน€เธฅเธทเธญเธเนเธเธฅเนเธ เธฒเธเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเนเธเธฅเธ',
      'เน€เธฅเธทเธญเธเธฃเธนเธเนเธเธ เธเธงเธฒเธกเธเธงเนเธฒเธ เธเธงเธฒเธกเธชเธนเธ เนเธฅเธฐเธเธธเธ“เธ เธฒเธ',
      'เธเธ”เนเธเธฅเธเธ เธฒเธ เนเธฅเนเธงเธ”เธฒเธงเธเนเนเธซเธฅเธ”เนเธเธฅเนเนเธซเธกเน'
    ],
    en: [
      'Choose the image file you want to convert',
      'Select a format, dimensions, and quality',
      'Select Convert image, then download the new file'
    ]
  },
  longDescription: {
    th: [
      'Image Converter เนเธเน Canvas API เธเธญเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเน€เธเธทเนเธญเธญเนเธฒเธเธ เธฒเธเนเธฅเธฐเธเธฑเธเธ—เธถเธเน€เธเนเธเธฃเธนเธเนเธเธเนเธซเธกเน เธเธธเธ“เธชเธฒเธกเธฒเธฃเธ–เน€เธฅเธทเธญเธ PNG, JPG เธซเธฃเธทเธญ WebP เนเธฅเธฐเธเธฃเธฑเธเธเธงเธฒเธกเธเธงเนเธฒเธ เธเธงเธฒเธกเธชเธนเธ เธเธธเธ“เธ เธฒเธ เนเธฅเธฐเธเธทเนเธเธซเธฅเธฑเธเนเธ”เน เนเธเธฅเนเธ•เนเธเธเธเธฑเธเนเธกเนเธ–เธนเธเธชเนเธเธญเธญเธเธเธญเธเธญเธธเธเธเธฃเธ“เน เธ—เธณเนเธซเนเน€เธซเธกเธฒเธฐเธเธฑเธเธเธฒเธเธ—เธตเนเนเธกเนเธ•เนเธญเธเธเธฒเธฃเธชเนเธเธ เธฒเธเธชเนเธงเธเธ•เธฑเธงเนเธเธขเธฑเธเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเน',
      'เธเธฒเธฃเน€เธฅเธทเธญเธเธฃเธนเธเนเธเธเธเธงเธฃเธ”เธนเธเธฒเธฃเนเธเนเธเธฒเธเธเธฃเธดเธ PNG เน€เธซเธกเธฒเธฐเธเธฑเธเธ เธฒเธเธ—เธตเนเธกเธตเธเธงเธฒเธกเนเธเธฃเนเธเนเธช เธ เธฒเธเธเธฃเธฒเธ เนเธฅเธฐเธ เธฒเธเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธเธธเธ“เธ เธฒเธเธชเธนเธ เนเธ•เนเนเธเธฅเนเธกเธฑเธเนเธซเธเนเธเธงเนเธฒ JPG เน€เธซเธกเธฒเธฐเธเธฑเธเธ เธฒเธเธ–เนเธฒเธขเธ—เธตเนเนเธกเนเธ•เนเธญเธเธเธฒเธฃเธเธงเธฒเธกเนเธเธฃเนเธเนเธช เธชเนเธงเธ WebP เธกเธฑเธเนเธซเนเธเธเธฒเธ”เน€เธฅเนเธเนเธฅเธฐเธเธธเธ“เธ เธฒเธเธ”เธตเน€เธกเธทเนเธญเน€เธงเนเธเนเธเธ•เนเธชเธกเธฑเธขเนเธซเธกเนเธฃเธญเธเธฃเธฑเธ เธเธงเธฃเธ—เธ”เธฅเธญเธเธซเธฅเธฒเธขเธเนเธฒเธเธธเธ“เธ เธฒเธเน€เธเธทเนเธญเธซเธฒเธเธธเธ”เธชเธกเธ”เธธเธฅเธฃเธฐเธซเธงเนเธฒเธเธเธเธฒเธ”เนเธเธฅเนเนเธฅเธฐเธเธงเธฒเธกเธเธกเธเธฑเธ”',
      'เธซเธฒเธเธฅเธ”เธเธเธฒเธ”เธ เธฒเธ เนเธซเนเธเธณเธเธงเธ“เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเนเธซเธกเนเน€เธเธทเนเธญเนเธกเนเนเธซเนเธ เธฒเธเธเธดเธ”เน€เธเธตเนเธขเธง เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธกเธตเธ•เธฑเธงเน€เธฅเธทเธญเธเธฅเนเธญเธเธญเธฑเธ•เธฃเธฒเธชเนเธงเธ เนเธฅเธฐเธชเธฒเธกเธฒเธฃเธ–เธเธดเธ”เธเธทเนเธเธซเธฅเธฑเธเนเธ”เนเน€เธกเธทเนเธญเนเธเธฅเธเธ เธฒเธเธ—เธตเนเธกเธตเนเธเธฃเนเธเนเธชเนเธเน€เธเนเธ JPG เน€เธเธฃเธฒเธฐ JPG เนเธกเนเธฃเธญเธเธฃเธฑเธเธเนเธญเธเนเธเธฃเนเธเนเธช เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธ เธฒเธเธ•เธฑเธงเธญเธขเนเธฒเธเธซเธฅเธฑเธเนเธเธฅเธเธ—เธธเธเธเธฃเธฑเนเธ เนเธ”เธขเน€เธเธเธฒเธฐเธเนเธญเธเธงเธฒเธกเธซเธฃเธทเธญเธเธญเธเนเธเธฃเนเธเนเธชเธ—เธตเนเธญเธฒเธเธ–เธนเธเธ•เธฑเธ”',
      'เธเธฒเธฃเนเธเธฅเธเนเธเธฅเนเธเธเธฒเธ”เนเธซเธเนเธซเธฃเธทเธญเนเธเธฅเนเธเธณเธเธงเธเธกเธฒเธเธญเธฒเธเนเธเนเธซเธเนเธงเธขเธเธงเธฒเธกเธเธณเธเธญเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เธเธงเธฃเธ—เธณเธ—เธตเธฅเธฐเนเธเธฅเนเนเธฅเธฐเธเธดเธ”เนเธ—เนเธเน€เธกเธทเนเธญเนเธเนเน€เธชเธฃเนเธ เน€เธเธฃเธทเนเธญเธเธกเธทเธญเนเธกเนเธฃเธญเธเธฃเธฑเธ HEIC เนเธ”เธขเธ•เธฃเธเนเธเธ—เธธเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เน€เธเธฃเธฒเธฐ HEIC เธ•เนเธญเธเนเธเน codec เน€เธเธเธฒเธฐ เธซเธฒเธเธ•เนเธญเธเธเธฒเธฃเนเธเธฅเธ HEIC เนเธซเนเน€เธเธฅเธตเนเธขเธเน€เธเนเธ JPG เธ”เนเธงเธขเนเธญเธเธ—เธตเนเธฃเธญเธเธฃเธฑเธเธเนเธญเธ เนเธฅเนเธงเธเธณเนเธเธฅเนเธเธฑเนเธเธกเธฒเนเธเนเธเธฑเธเน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธตเน'
    ],
    en: [
      'The Image Converter uses the browser Canvas API to read an image and save a new version. You can choose PNG, JPG, or WebP and adjust width, height, quality, and a background colour. The original file remains on your device and is not uploaded to a server.',
      'Choose a format based on where the image will be used. PNG preserves transparency and works well for diagrams, but usually creates a larger file. JPG is useful for photographs that do not need transparency. WebP can provide a smaller file with good quality in modern browsers. Try several quality settings and compare the result before publishing.',
      'When resizing, keep the aspect ratio so the image does not stretch. The tool provides a lock option and lets you choose a background when converting transparent images to JPG, because JPG does not support alpha transparency. Inspect text, edges, and transparent areas after every conversion. A smaller file is not useful if important detail is lost.',
      'Large images and batches can consume browser memory. Work on one file at a time and close the tab when finished. HEIC is not decoded by every browser because it requires a separate codec. Convert HEIC to JPG with a compatible app first, then use that file here. This page is a local conversion utility, not a permanent image host.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'เนเธเธฅเนเธ เธฒเธเธ–เธนเธเธญเธฑเธเนเธซเธฅเธ”เธซเธฃเธทเธญเนเธกเน?',
        answer:
          'เนเธกเน เธเธฒเธฃเธญเนเธฒเธเนเธฅเธฐเนเธเธฅเธเนเธเธฅเนเน€เธเธดเธ”เธเธถเนเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เนเธเธฅเนเธ•เนเธเธเธเธฑเธเนเธกเนเธ–เธนเธเธชเนเธเนเธเธขเธฑเธเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเนเธเธญเธ ToolXHub'
      },
      {
        question: 'เนเธเธฅเธเน€เธเนเธ HEIC เนเธ”เนเนเธซเธก?',
        answer:
          'เน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธชเนเธงเธเนเธซเธเนเนเธกเนเธฃเธญเธเธฃเธฑเธเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธช HEIC เนเธ”เธขเธ•เธฃเธ เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธตเนเธฃเธญเธเธฃเธฑเธ PNG, JPG เนเธฅเธฐ WebP'
      },
      {
        question: 'เธ—เธณเนเธกเธ เธฒเธ JPG เธกเธตเธเธทเนเธเธซเธฅเธฑเธเธ—เธถเธ?',
        answer: 'JPG เนเธกเนเธฃเธญเธเธฃเธฑเธเธเธงเธฒเธกเนเธเธฃเนเธเนเธช เธเธถเธเธ•เนเธญเธเน€เธฅเธทเธญเธเธชเธตเธเธทเนเธเธซเธฅเธฑเธเธเนเธญเธเธเธฑเธเธ—เธถเธ'
      },
      {
        question: 'เธฅเธ”เธเธเธฒเธ”เธ เธฒเธเนเธ”เนเธเธฃเนเธญเธกเธเธฑเธเธซเธฃเธทเธญเนเธกเน?',
        answer: 'เนเธ”เน เธเธฃเธฑเธเธเธงเธฒเธกเธเธงเนเธฒเธเนเธฅเธฐเธเธงเธฒเธกเธชเธนเธ เธซเธฃเธทเธญเน€เธฅเธทเธญเธเธเธธเธ“เธ เธฒเธเธ•เนเธณเธฅเธเน€เธเธทเนเธญเธฅเธ”เธเธเธฒเธ”เนเธเธฅเน'
      },
      {
        question: 'เธ เธฒเธเธเธฐเธ–เธนเธเธฅเธเธซเธฅเธฑเธเธเธดเธ”เธซเธเนเธฒเน€เธงเนเธเธซเธฃเธทเธญเนเธกเน?',
        answer:
          'เธ เธฒเธเธญเธขเธนเนเนเธเธซเธเนเธงเธขเธเธงเธฒเธกเธเธณเธเธญเธเธซเธเนเธฒเน€เธงเนเธเนเธฅเธฐเธซเธฒเธขเน€เธกเธทเนเธญเธเธดเธ”เธซเธฃเธทเธญเธฃเธตเนเธซเธฅเธ”เธซเธเนเธฒ เนเธเธฃเธ”เธ”เธฒเธงเธเนเนเธซเธฅเธ”เนเธเธฅเนเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเน€เธเนเธเนเธงเน'
      }
    ],
    en: [
      {
        question: 'Are image files uploaded?',
        answer:
          'No. Reading and conversion happen in your browser. ToolXHub does not receive the original file.'
      },
      {
        question: 'Can it convert to HEIC?',
        answer: 'Most browsers cannot encode HEIC directly. This tool supports PNG, JPG, and WebP.'
      },
      {
        question: 'Why does a JPG have a solid background?',
        answer: 'JPG does not support transparency, so choose a background colour before saving.'
      },
      {
        question: 'Can I resize and compress at the same time?',
        answer: 'Yes. Adjust width and height or lower the quality setting to reduce file size.'
      },
      {
        question: 'Are images deleted when I close the page?',
        answer:
          'The image lives in the page memory and disappears when you close or reload the page. Download anything you want to keep.'
      }
    ]
  },
  relatedSlugs: ['image-compressor', 'base64', 'qr-code'],
  updatedAt: '2026-09-24'
};

export default tool;
