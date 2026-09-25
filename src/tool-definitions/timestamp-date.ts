import type { ToolConfig } from '../config/tools';
import TimestampTool from '../components/tools/TimestampTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Timestamp and Date Converter',
  'เธเธฒเธฃเธเธณเธเธงเธ“เนเธฅเธฐเธเธฒเธฃเธเธฑเธ”เธฃเธนเธเนเธเธเธ—เธณเธเธฒเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธ•เธฒเธกเน€เธงเธฅเธฒเธ—เนเธญเธเธ–เธดเนเธเธเธญเธเธเธนเนเนเธเน',
  'เนเธชเน Unix timestamp เน€เธเนเธเธ•เธฑเธงเน€เธฅเธเธซเธฃเธทเธญเธงเธฑเธเธ—เธตเนเธ—เธตเนเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเน€เธเนเธฒเนเธ',
  'timestamp เธกเธฑเธเน€เธเนเธ Unix epoch เนเธฅเธฐเน€เธงเธฅเธฒเนเธชเธ”เธเธเธฅเธญเธฒเธเธเธถเนเธเธเธฑเธ timezone เธเธญเธเน€เธเธฃเธทเนเธญเธ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Timestamp โ” Date Converter',
    benefit: 'เนเธเธฅเธเน€เธงเธฅเธฒ Unix เน€เธเนเธเธงเธฑเธเธ—เธตเนเธญเนเธฒเธเนเธ”เนเนเธฅเธฐเนเธเธฅเธเธงเธฑเธเธ—เธตเนเธเธฅเธฑเธเน€เธเนเธ timestamp',
    detail:
      'เน€เธฅเธทเธญเธเธ—เธดเธจเธ—เธฒเธ เนเธชเนเธเนเธฒ เธซเธฃเธทเธญเนเธเนเน€เธงเธฅเธฒเธเธฑเธเธเธธเธเธฑเธ เนเธฅเนเธงเธ”เธนเธงเธฑเธเธ—เธตเนเธเธฃเนเธญเธกเน€เธงเธฅเธฒเนเธฅเธฐเธเนเธฒ epoch เธเธฅเธฅเธฑเธเธเนเธเนเธงเธขเธ•เธฃเธงเธเธชเธญเธ log, API response เนเธฅเธฐเธเธฒเธฃเธเธณเธซเธเธ”เน€เธงเธฅเธฒเนเธเธฃเธฐเธเธเธ•เนเธฒเธ เน',
    caution:
      'Unix timestamp เธกเธฑเธเธเธฑเธเธเธฒเธ epoch UTC เธเธ“เธฐเธ—เธตเนเธเธฒเธฃเนเธชเธ”เธเธงเธฑเธเธ—เธตเนเธญเธฒเธจเธฑเธข timezone เนเธฅเธฐ locale เธเธญเธเน€เธเธฃเธทเนเธญเธ เธเธงเธฃเธฃเธฐเธเธธ timezone เนเธเธฃเธฐเธเธเธเธฃเธดเธเนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธเธเธฑเธ server เน€เธเธทเนเธญเธเนเธญเธเธเธฑเธเธเธงเธฒเธกเธเธฅเธฒเธ”เน€เธเธฅเธทเนเธญเธ'
  },
  en: {
    topic: 'The Timestamp and Date Converter',
    benefit: 'turning Unix times into readable dates and dates back into epoch values',
    detail:
      'Choose a direction, enter a value or use the current-time action, and see a formatted date together with its epoch result. This is useful when checking logs, API responses, and scheduling data.',
    caution:
      'Unix timestamps usually count from a UTC epoch, while displayed dates depend on the device timezone and locale. Make the timezone explicit in a real system and compare with the server to prevent offset errors.'
  }
});
const tool: ToolConfig = {
  slug: 'timestamp-date',
  icon: 'DATE',
  category: 'design-css',
  name: { th: 'Timestamp โ” Date', en: 'Timestamp โ” Date' },
  shortDescription: {
    th: 'เนเธเธฅเธ Unix timestamp เน€เธเนเธเธงเธฑเธเธ—เธตเนเนเธฅเธฐเธเธฅเธฑเธเธเธฑเธ',
    en: 'Convert Unix timestamps to dates and back.'
  },
  description: {
    th: 'เนเธเธฅเธ Timestamp เน€เธเนเธเธงเธฑเธเธ—เธตเนเน€เธงเธฅเธฒ เธซเธฃเธทเธญเนเธเธฅเธเธงเธฑเธเธ—เธตเนเน€เธเนเธ Unix timestamp เนเธเธเธ—เธฑเธเธ—เธต',
    en: 'Instantly convert timestamps to readable dates or dates to Unix timestamps.'
  },
  keywords: {
    th: ['timestamp', 'unix time', 'เธงเธฑเธเธ—เธตเน', 'epoch'],
    en: ['timestamp converter', 'Unix timestamp', 'date converter', 'epoch']
  },
  component: TimestampTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเธ—เธดเธจเธ—เธฒเธ', 'เนเธชเน timestamp เธซเธฃเธทเธญเธงเธฑเธเธ—เธตเน', 'เธเธ”เนเธเธฅเธเธซเธฃเธทเธญเนเธเนเน€เธงเธฅเธฒเธเธฑเธเธเธธเธเธฑเธ'],
    en: ['Choose a direction', 'Enter a timestamp or date', 'Convert or use the current time']
  },
  longDescription,
  faqs,
  relatedSlugs: ['buddhist-year', 'unit-converter', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
