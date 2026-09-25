import type { ToolConfig } from '../config/tools';
import MarkdownTool from '../components/tools/MarkdownTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'Markdown to HTML Converter',
  'เธเนเธญเธกเธนเธฅเธ–เธนเธเนเธเธฅเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
  'เธงเธฒเธ Markdown เธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเนเธเธฅเธ',
  'เธ•เธฑเธงเนเธเธฅเธเธฃเธญเธเธฃเธฑเธ Markdown เธเธทเนเธเธเธฒเธเนเธฅเธฐ escape HTML เนเธ•เนเนเธกเนเนเธเน renderer เธเธฃเธเธ—เธธเธ specification'
);
const longDescription = createLongDescription({
  th: {
    topic: 'Markdown โ’ HTML Converter',
    benefit: 'เนเธเธฅเธเน€เธเธทเนเธญเธซเธฒ Markdown เน€เธเนเธ HTML เน€เธเธทเนเธญเธเธณเนเธเนเธชเธ”เธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”',
    detail:
      'เธฃเธญเธเธฃเธฑเธเธซเธฑเธงเธเนเธญ เธฃเธฒเธขเธเธฒเธฃ เธเนเธญเธเธงเธฒเธกเธซเธเธฒ เธ•เธฑเธงเน€เธญเธตเธขเธ code เนเธฅเธฐเธฅเธดเธเธเนเธ—เธตเนเนเธเนเนเธเธฃเนเธ•เธเธญเธฅเธเธฅเธญเธ”เธ เธฑเธข เธเธฃเนเธญเธกเนเธชเธ”เธเธ•เธฑเธงเธญเธขเนเธฒเธเนเธฅเธฐ HTML เธเธฃเนเธญเธกเธเธฑเธ เธเธนเนเนเธเนเธชเธฒเธกเธฒเธฃเธ–เธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเธฅเธฅเธฑเธเธเนเนเธ”เน',
    caution:
      'HTML เธ—เธตเนเธเนเธญเธเธ–เธนเธ escape เน€เธเธทเนเธญเธฅเธ”เธเธงเธฒเธกเน€เธชเธตเนเธขเธ XSS เนเธ•เนเธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธฅเธดเธเธเนเนเธฅเธฐ attribute เธเนเธญเธเน€เธเธขเนเธเธฃเน เธ•เธฑเธงเนเธเธฅเธเธเธตเนเนเธกเนเธฃเธญเธเธฃเธฑเธ extension เธ—เธธเธเธเธเธดเธ”เนเธฅเธฐเนเธกเนเธเธงเธฃเนเธเนเนเธ—เธ sanitiser เธเธญเธเธฃเธฐเธเธ production'
  },
  en: {
    topic: 'The Markdown to HTML Converter',
    benefit: 'turning Markdown content into HTML for publishing or download',
    detail:
      'Supports headings, lists, emphasis, code, and links with safe protocols while showing the rendered preview beside the source HTML. The result can be copied or saved as a UTF-8 file.',
    caution:
      'Input HTML is escaped to reduce XSS risk, but links and attributes should still be reviewed. This is a basic converter, not a complete Markdown specification renderer or production sanitiser.'
  }
});
const tool: ToolConfig = {
  slug: 'markdown-html',
  icon: 'MD',
  category: 'text-content',
  name: { th: 'Markdown โ’ HTML', en: 'Markdown to HTML' },
  shortDescription: {
    th: 'เนเธเธฅเธ Markdown เน€เธเนเธ HTML เธเธฃเนเธญเธกเธ•เธฑเธงเธญเธขเนเธฒเธ',
    en: 'Convert Markdown to HTML with a live preview.'
  },
  description: {
    th: 'เนเธเธฅเธ Markdown เน€เธเนเธ HTML เธญเธขเนเธฒเธเธเธฅเธญเธ”เธ เธฑเธขเธเธฑเนเธเธเธทเนเธเธเธฒเธ เธเธฃเนเธญเธก preview เนเธฅเธฐเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธเธฅเธฅเธฑเธเธเน',
    en: 'Convert Markdown to safely escaped HTML with a preview and downloadable result.'
  },
  keywords: {
    th: ['Markdown HTML', 'เนเธเธฅเธ Markdown', 'MD to HTML'],
    en: ['Markdown to HTML', 'Markdown converter', 'MD to HTML', 'Markdown preview']
  },
  component: MarkdownTool,
  howTo: {
    th: ['เธงเธฒเธ Markdown', 'เธเธ”เธชเธฃเนเธฒเธเธ•เธฑเธงเธญเธขเนเธฒเธ', 'เธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ” HTML'],
    en: ['Paste Markdown', 'Render the preview', 'Copy or download the HTML']
  },
  longDescription,
  faqs,
  relatedSlugs: ['json-formatter', 'text-case', 'slug-generator'],
  updatedAt: '2026-09-24'
};
export default tool;
