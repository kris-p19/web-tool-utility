import type { ToolConfig } from '../config/tools';
import SlugTool from '../components/tools/SlugTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Slug Generator',
  'เธเนเธญเธเธงเธฒเธกเธ–เธนเธเธเธฃเธฐเธกเธงเธฅเธเธฅเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เธเนเธญเธเธเธทเนเธญเธซเธเนเธฒ เนเธ”เน€เธกเธ เธซเธฃเธทเธญเธเนเธญเธเธงเธฒเธกเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธ—เธณเน€เธเนเธ slug',
  'เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธ URL เธ—เธตเนเนเธ”เนเนเธฅเธฐเธซเธฅเธตเธเน€เธฅเธตเนเธขเธเธเธฒเธฃเน€เธเธฅเธตเนเธขเธ slug เธซเธฅเธฑเธเน€เธเธขเนเธเธฃเน'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Slug Generator',
    benefit: 'เธชเธฃเนเธฒเธ URL slug เธ—เธตเนเธญเนเธฒเธเธเนเธฒเธขเนเธฅเธฐเน€เธซเธกเธฒเธฐเธเธฑเธ SEO',
    detail:
      'เธฃเธญเธเธฃเธฑเธเธ เธฒเธฉเธฒเนเธ—เธขเนเธฅเธฐเธญเธฑเธเธเธคเธฉ เธเธฃเธฑเธเธ•เธฑเธงเธเธดเธกเธเน เธ•เธฑเธงเธเธฑเนเธ เนเธฅเธฐเธเธงเธฒเธกเธขเธฒเธงเธชเธนเธเธชเธธเธ”เนเธ”เน เธฃเธฐเธเธเธ•เธฑเธ”เธญเธฑเธเธเธฃเธฐเธ—เธตเนเนเธกเนเธเธณเน€เธเนเธเนเธฅเธฐเธฃเธงเธกเธเนเธญเธเธงเนเธฒเธเธซเธฃเธทเธญเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธขเธเนเธณเนเธซเนเน€เธเนเธเธ•เธฑเธงเธเธฑเนเธเน€เธ”เธตเธขเธง',
    caution:
      'slug เธเธงเธฃเธชเธฑเนเธ เธเธเธ—เธตเน เนเธฅเธฐเนเธกเนเน€เธเธดเธ”เน€เธเธขเธเนเธญเธกเธนเธฅเธฅเธฑเธ เธซเธฒเธ URL เน€เธ”เธดเธกเธ–เธนเธเนเธเธฃเนเนเธฅเนเธงเธเธงเธฃเนเธเน redirect 301 เนเธ—เธเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเธเธฅเธฑเธ เน เนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธ canonical เนเธซเนเธ•เธฃเธเธเธฑเธเธซเธเนเธฒเธเธฃเธดเธ'
  },
  en: {
    topic: 'The Slug Generator',
    benefit: 'creating readable, SEO-friendly URL segments for pages and projects',
    detail:
      'Thai and Latin text are supported, with controls for letter case, separator, and maximum length. The tool removes unnecessary characters and collapses spaces or repeated punctuation into a consistent separator.',
    caution:
      'Keep slugs short, stable, and free of secrets. If a URL has already been shared, use a 301 redirect rather than changing it back and forth, and keep the canonical tag aligned with the real destination.'
  }
});
const tool: ToolConfig = {
  slug: 'slug-generator',
  icon: 'SLG',
  category: 'text-content',
  name: { th: 'Slug Generator', en: 'Slug Generator' },
  shortDescription: {
    th: 'เธชเธฃเนเธฒเธ slug เธเธฒเธเธเนเธญเธเธงเธฒเธกเธ เธฒเธฉเธฒเนเธ—เธขเนเธฅเธฐเธญเธฑเธเธเธคเธฉ',
    en: 'Create slugs from Thai and English text.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธ URL slug เธญเนเธฒเธเธเนเธฒเธขเธ”เนเธงเธขเธ•เธฑเธงเธเธฑเนเธเนเธฅเธฐเธเธงเธฒเธกเธขเธฒเธงเธ—เธตเนเธเธฃเธฑเธเนเธ”เน เธฃเธญเธเธฃเธฑเธเธ เธฒเธฉเธฒเนเธ—เธขเนเธฅเธฐเธญเธฑเธเธเธคเธฉ',
    en: 'Generate readable URL slugs with configurable separators and length for Thai and English content.'
  },
  keywords: {
    th: ['slug', 'เธชเธฃเนเธฒเธ slug', 'URL slug', 'SEO'],
    en: ['slug generator', 'URL slug', 'SEO slug', 'permalink']
  },
  component: SlugTool,
  howTo: {
    th: ['เธเนเธญเธเธเธทเนเธญเธซเธฃเธทเธญเธเนเธญเธเธงเธฒเธก', 'เน€เธฅเธทเธญเธเธ•เธฑเธงเธเธฑเนเธเนเธฅเธฐเธเธงเธฒเธกเธขเธฒเธง', 'เธเธฑเธ”เธฅเธญเธ slug เธ—เธตเนเนเธ”เน'],
    en: ['Enter a name or text', 'Choose separator and length', 'Copy the resulting slug']
  },
  longDescription,
  faqs,
  relatedSlugs: ['uuid-ulid', 'lorem-ipsum', 'url-encode-decode'],
  updatedAt: '2026-09-24'
};
export default tool;
