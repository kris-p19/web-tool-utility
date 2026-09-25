import type { ToolConfig } from '../config/tools';
import QrCodeTool from '../components/tools/QrCodeTool.astro';

const tool: ToolConfig = {
  slug: 'qr-code',
  icon: 'QR',
  category: 'image-media',
  name: { th: 'QR Code Generator', en: 'QR Code Generator' },
  shortDescription: {
    th: 'เธชเธฃเนเธฒเธ QR Code เธเธฒเธเธเนเธญเธเธงเธฒเธกเธซเธฃเธทเธญเธฅเธดเธเธเน เธ”เธฒเธงเธเนเนเธซเธฅเธ”เนเธ”เนเธ—เธฑเธเธ—เธต',
    en: 'Create a QR code from text or a URL and download it instantly.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธ QR Code เธเธฃเธตเธเธฒเธเธเนเธญเธเธงเธฒเธก URL เธซเธฃเธทเธญเธเนเธญเธกเธนเธฅเธ•เธดเธ”เธ•เนเธญ เธเธฃเนเธญเธกเน€เธฅเธทเธญเธเธเธเธฒเธ”เนเธฅเธฐเธเธงเธฒเธกเธเธฑเธ”เน€เธเธ เนเธ”เธขเธเธฃเธฐเธกเธงเธฅเธเธฅเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
    en: 'Create a free QR code from text, a URL, or contact details with adjustable size and clarity, processed in your browser.'
  },
  keywords: {
    th: ['QR', 'QR Code', 'เธชเธฃเนเธฒเธ QR', 'เธเธดเธงเธญเธฒเธฃเนเนเธเนเธ”'],
    en: ['QR', 'QR code generator', 'create QR code', 'QR image']
  },
  component: QrCodeTool,
  howTo: {
    th: [
      'เธงเธฒเธเธเนเธญเธเธงเธฒเธกเธซเธฃเธทเธญ URL เธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเน€เธเนเธฒเธฃเธซเธฑเธชเนเธเธเนเธญเธเธเนเธญเธกเธนเธฅ',
      'เน€เธฅเธทเธญเธเธเธเธฒเธ”เธ เธฒเธเนเธฅเธฐเธฃเธฐเธ”เธฑเธเธเธงเธฒเธกเธเธฑเธ”เน€เธเธเธ•เธฒเธกเธเธฒเธฃเนเธเนเธเธฒเธ',
      'เธเธ”เธชเธฃเนเธฒเธ QR Code เนเธฅเนเธงเธ•เธฃเธงเธเธชเธญเธเธ เธฒเธเธเนเธญเธเธ”เธฒเธงเธเนเนเธซเธฅเธ”'
    ],
    en: [
      'Enter the text or URL you want to encode in the input field',
      'Choose an image size and error-correction level for your use case',
      'Select Create QR code and verify the result before downloading'
    ]
  },
  longDescription: {
    th: [
      'QR Code Generator เธเธญเธ ToolXHub เน€เธซเธกเธฒเธฐเธเธฑเธเธเธฒเธฃเนเธเธฅเธเธเนเธญเธกเธนเธฅเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธชเนเธเธ•เนเธญเนเธ”เนเธญเธขเนเธฒเธเธฃเธงเธ”เน€เธฃเนเธง เนเธกเนเธงเนเธฒเธเธฐเน€เธเนเธเธฅเธดเธเธเนเน€เธงเนเธเนเธเธ•เน เธเนเธญเธเธงเธฒเธกเธชเธฑเนเธ เธซเธฃเธทเธญเธเนเธญเธกเธนเธฅเธ•เธดเธ”เธ•เนเธญ เน€เธกเธทเนเธญเธเนเธญเธเธฃเธซเธฑเธช เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธฐเธชเธฃเนเธฒเธเธ เธฒเธ QR เธเธฒเธเธเนเธญเธกเธนเธฅเธเธญเธเธเธธเธ“เธ—เธฑเธเธ—เธตเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เนเธกเนเธกเธตเธเธฒเธฃเธชเนเธเธเนเธญเธเธงเธฒเธกเนเธเธขเธฑเธเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเน เนเธฅเธฐเนเธกเนเน€เธเนเธเธเธฃเธฐเธงเธฑเธ•เธดเธเธฒเธฃเนเธเนเธเธฒเธ',
      'เน€เธฅเธทเธญเธเธฃเธฐเธ”เธฑเธเธเธงเธฒเธกเธ—เธเธ—เธฒเธเธเธญเธเธเนเธญเธกเธนเธฅเนเธซเนเน€เธซเธกเธฒเธฐเธเธฑเธเธชเธ–เธฒเธเธเธฒเธฃเธ“เน เธซเธฒเธเธ•เนเธญเธเธเธฒเธฃเนเธเนเธ เธฒเธเธ—เธตเนเนเธฅเนเธเนเธซเธฃเธทเธญเธกเธตเธเธธเธ”เธชเธตเธ—เธฑเธ เนเธเธฐเธเธณเธฃเธฐเธ”เธฑเธเธชเธนเธเธเธงเนเธฒ เน€เธเธฃเธฒเธฐ QR Code เธขเธฑเธเธญเนเธฒเธเนเธ”เนเนเธกเนเธเธฒเธเธชเนเธงเธเธ–เธนเธเธเธ”เธเธฑเธ เธเธเธฒเธ”เธ เธฒเธเธเธงเธฃเธกเธฒเธเธเธงเนเธฒเธเธเธฒเธ”เธ—เธตเนเนเธชเธ”เธเธเธเธซเธเนเธฒเธเธญเธญเธขเนเธฒเธเธเนเธญเธขเธชเธญเธเน€เธ—เนเธฒ เน€เธเธทเนเธญเนเธซเนเธชเนเธเธเธเนเธฒเธขเน€เธกเธทเนเธญเธเธดเธกเธเนเธฅเธเธเธฃเธฐเธ”เธฒเธฉเธซเธฃเธทเธญเนเธเนเธเธเธเธญเธเธเธฒเธ”เนเธซเธเน',
      'เธเนเธญเธเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเธงเธฃเธ—เธ”เธฅเธญเธเธชเนเธเธเธ”เนเธงเธขเธเธฅเนเธญเธเนเธ—เธฃเธจเธฑเธเธ—เนเธซเธฃเธทเธญเนเธญเธเธญเนเธฒเธ QR เธญเธตเธเน€เธเธฃเธทเนเธญเธเธซเธเธถเนเธ เนเธ”เธขเน€เธเธเธฒเธฐเน€เธกเธทเนเธญเนเธเนเนเธเน€เธญเธเธชเธฒเธฃเธซเธฃเธทเธญเธชเธดเธเธเนเธฒ เธ•เธฃเธงเธเธชเธญเธเธงเนเธฒเธเนเธญเธเธงเธฒเธกเธ•เธฃเธเธเธฑเธเธ•เนเธเธเธเธฑเธ เนเธกเนเธกเธตเธเธฒเธฃเธ•เธฑเธ”เธเธญเธ เนเธฅเธฐเธกเธตเธเธทเนเธเธ—เธตเนเธงเนเธฒเธเธฃเธญเธเธ เธฒเธเน€เธเธตเธขเธเธเธญ เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธตเนเนเธกเนเธชเธฃเนเธฒเธ QR Code เนเธเธเธเธณเธฃเธฐเน€เธเธดเธเธซเธฃเธทเธญ QR เธ—เธตเนเธเธฑเธเธเนเธญเธกเธนเธฅเธฅเธฑเธ เน€เธซเธกเธฒเธฐเธชเธณเธซเธฃเธฑเธเธเธฒเธฃเนเธเธฃเนเธเนเธญเธกเธนเธฅเธชเธฒเธเธฒเธฃเธ“เธฐ เน€เธเนเธ เน€เธกเธเธน เน€เธงเนเธเนเธเธ•เน เธซเธฃเธทเธญเธเธณเธญเธเธดเธเธฒเธขเธชเธดเธเธเนเธฒ',
      'เธซเธฒเธเธ•เนเธญเธเธเธฒเธฃเนเธเน QR Code เนเธเนเธเธกเน€เธเธเน€เธเธทเนเธญเธงเธฑเธ”เธเธฅ เนเธซเนเธชเธฃเนเธฒเธเธฅเธดเธเธเนเนเธเธเธขเนเธญเธ—เธตเนเธกเธต UTM parameters เนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธเธงเนเธฒเธ—เธธเธเธญเธธเธเธเธฃเธ“เนเธชเนเธเธเนเธ”เน เธญเธขเนเธฒเนเธชเนเธเนเธญเธกเธนเธฅเธชเนเธงเธเธเธธเธเธเธฅเธ—เธตเนเนเธกเนเธเธณเน€เธเนเธเธฅเธเนเธเนเธเนเธ” เน€เธเธฃเธฒเธฐเธเธนเนเธญเนเธฒเธเธชเธฒเธกเธฒเธฃเธ–เน€เธเธดเธ”เธเนเธญเธกเธนเธฅเนเธ”เนเธ—เธฑเธเธ—เธต เนเธเธงเธ—เธฒเธเธเธตเนเธเนเธงเธขเนเธซเนเธ เธฒเธเธ—เธตเนเธชเธฃเนเธฒเธเนเธ”เนเธกเธตเธเธเธฒเธ”เน€เธซเธกเธฒเธฐเธชเธกเนเธฅเธฐเธชเธทเนเธญเธชเธฒเธฃเนเธ”เนเธเธฑเธ”เน€เธเธเนเธเธซเธฅเธฒเธขเธชเธ–เธฒเธเธเธฒเธฃเธ“เน'
    ],
    en: [
      'The ToolXHub QR Code Generator turns information into a quick scannable image. Paste a website address, short message, contact detail, or any text you want to share. The code is generated locally in your browser, so the content is not uploaded to a server and is not stored by this page.',
      'Error correction is an important choice. A higher level creates a denser code that remains readable when part of the image is covered by a logo or a label, while a lower level produces a simpler image. Leave a clear quiet zone around the QR code and use an image size that is at least twice the size shown on your screen so it remains sharp when printed or viewed on another device.',
      'Before using a code in a poster, package, or business card, scan it with a different phone or QR reader. Confirm that the encoded text is correct, the edges are not cropped, and the code has enough contrast against its background. This generator creates ordinary QR codes and does not add payments, passwords, or hidden tracking data. Only encode information that is appropriate for public access.',
      'For campaign measurement, use a shortened link with UTM parameters and test the final destination on mobile data as well as Wi-Fi. Avoid placing unnecessary personal information in the code because anyone with a scanner can read it. These practices make the resulting image easier to scan and suitable for websites, menus, product information, events, and everyday sharing.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'QR Code Generator เธญเธฑเธเนเธซเธฅเธ”เธเนเธญเธกเธนเธฅเธเธญเธเธเธฑเธเธซเธฃเธทเธญเนเธกเน?',
        answer:
          'เนเธกเน เธเธฒเธฃเธชเธฃเนเธฒเธเธ เธฒเธเน€เธเธดเธ”เธเธถเนเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธเธญเธเธเธธเธ“ เน€เธงเนเธเนเธเธ•เนเนเธกเนเธเธฑเธเธ—เธถเธเธเนเธญเธกเธนเธฅเธเธณเน€เธเนเธฒเนเธงเนเนเธเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเน'
      },
      {
        question: 'เธ•เนเธญเธเธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเธซเธฃเธทเธญเน€เธชเธตเธขเน€เธเธดเธเนเธซเธก?',
        answer: 'เนเธกเนเธ•เนเธญเธ เนเธเนเธเธฒเธเนเธฅเธฐเธ”เธฒเธงเธเนเนเธซเธฅเธ”เนเธ”เนเธเธฃเธต เนเธกเนเธ•เนเธญเธเธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ'
      },
      {
        question: 'เธ—เธณเนเธก QR Code เธ—เธตเนเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธกเธฒเธชเนเธเธเนเธกเนเนเธ”เน?',
        answer:
          'เธ•เธฃเธงเธเธชเธญเธเธงเนเธฒเนเธกเนเธกเธตเธเธญเธเธ–เธนเธเธ•เธฑเธ” เน€เธงเนเธเธเธทเนเธเธ—เธตเนเธฃเธญเธเธ เธฒเธ เนเธฅเธฐเธกเธตเธเธงเธฒเธกเธ•เนเธฒเธเธเธญเธเธชเธตเน€เธเธตเธขเธเธเธญ เธเธงเธฃเธ—เธ”เธฅเธญเธเธชเนเธเธเธ”เนเธงเธขเธญเธธเธเธเธฃเธ“เนเธญเธทเนเธ'
      },
      {
        question: 'เนเธชเนเธเนเธญเธกเธนเธฅเนเธเธเนเธซเธเนเธ”เนเธเนเธฒเธ?',
        answer: 'เนเธชเนเธเนเธญเธเธงเธฒเธก URL เธซเธฃเธทเธญเธเนเธญเธกเธนเธฅเธ•เธดเธ”เธ•เนเธญเนเธ”เน เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธฐเน€เธเนเธฒเธฃเธซเธฑเธชเธเนเธญเธเธงเธฒเธกเธ•เธฒเธกเธ—เธตเนเธเนเธญเธ'
      },
      {
        question: 'เธ—เธณเนเธกเธ เธฒเธเธกเธตเธเธเธฒเธ”เนเธซเธเนเธเธงเนเธฒเธ—เธตเนเน€เธฅเธทเธญเธ?',
        answer:
          'เธฃเธฐเธเธเธชเธฃเนเธฒเธเธ เธฒเธเธเธงเธฒเธกเธฅเธฐเน€เธญเธตเธขเธ”เธชเธนเธเน€เธเธทเนเธญเนเธซเนเธเธดเธกเธเนเธซเธฃเธทเธญเนเธชเธ”เธเธเธเธเธญเธเธเธฒเธ”เนเธซเธเนเนเธ”เนเธเธกเธเธฑเธ” เธเธธเธ“เธชเธฒเธกเธฒเธฃเธ–เน€เธฅเธทเธญเธเธเธเธฒเธ”เธ•เธฒเธกเธเธงเธฒเธกเธ•เนเธญเธเธเธฒเธฃเนเธ”เน'
      }
    ],
    en: [
      {
        question: 'Does the QR Code Generator upload my data?',
        answer:
          'No. The image is created in your browser. This page does not save or send the input to a server.'
      },
      {
        question: 'Is it free and do I need an account?',
        answer: 'Yes. You can create and download a code without signing up or paying.'
      },
      {
        question: 'Why will my downloaded QR code not scan?',
        answer:
          'Check for cropped edges, leave a clear margin, and use enough contrast. Test the final image with another device.'
      },
      {
        question: 'What can I put in a QR code?',
        answer:
          'You can encode text, URLs, or contact details. The tool uses the exact text you enter.'
      },
      {
        question: 'Why is the downloaded image larger than the selected size?',
        answer:
          'The generator creates a high-resolution image for printing and larger screens. You can choose the output size to match your use case.'
      }
    ]
  },
  relatedSlugs: ['password-generator', 'base64', 'url-encode-decode'],
  updatedAt: '2026-09-24'
};

export default tool;
