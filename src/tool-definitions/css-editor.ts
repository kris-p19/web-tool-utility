import type { ToolConfig } from '../config/tools';
import CssEditorTool from '../components/tools/CssEditorTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'CSS Editor & Live Preview',
  'เนเธเนเธ” CSS เธ–เธนเธเธเธฃเธฐเธกเธงเธฅเธเธฅเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเนเธฅเธฐเนเธกเนเธ–เธนเธเธชเนเธเธญเธญเธเนเธ',
  'เน€เธเธตเธขเธ CSS เธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธ—เธ”เธฅเธญเธเนเธเธเนเธญเธเธ•เธฑเธงเนเธเนเนเธ',
  'เธ•เธฑเธงเธญเธขเนเธฒเธเนเธเน HTML เธ—เธตเนเธเธณเธซเธเธ”เนเธงเน เธเธถเธเน€เธซเธกเธฒเธฐเธเธฑเธเธเธฒเธฃเธ—เธ”เธฅเธญเธเธชเนเธ•เธฅเน เนเธ•เนเนเธกเนเนเธเนเธ•เธฑเธงเธ•เธฃเธงเธเธชเธญเธ CSS เธซเธฃเธทเธญเน€เธเธฃเธทเนเธญเธเธกเธทเธญเนเธเนเนเธเนเธเนเธ”เธเธฃเธเธงเธเธเธฃ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'CSS Editor เนเธฅเธฐ Live Preview',
    benefit: 'เน€เธเธตเธขเธเนเธฅเธฐเธ—เธ”เธฅเธญเธ CSS เธเธฑเธเธ•เธฑเธงเธญเธขเนเธฒเธเธ—เธตเนเธญเธฑเธเน€เธ”เธ•เธ—เธฑเธเธ—เธต',
    detail:
      'เธเธดเธกเธเน CSS เนเธเธ•เธฑเธงเนเธเนเนเธเนเธฅเนเธงเน€เธซเนเธเธเธฅเธเธฑเธเธเธฒเธฃเนเธ”เธ•เธฑเธงเธญเธขเนเธฒเธเนเธ iframe เนเธเธ sandbox เธ—เธฑเธเธ—เธต เธฃเธญเธเธฃเธฑเธเธเธฑเธ”เธฅเธญเธเนเธเนเธ” เธเธทเธเธเนเธฒเธ•เธฑเธงเธญเธขเนเธฒเธ เนเธฅเธฐเธฅเนเธฒเธเธเนเธญเธกเธนเธฅ เธเธฃเนเธญเธกเธ•เธฑเธงเธญเธขเนเธฒเธ selector เนเธฅเธฐ CSS custom properties',
    caution:
      'เธ•เธฑเธงเธญเธขเนเธฒเธเธกเธต HTML เนเธฅเธฐเธเนเธญเธเธงเธฒเธกเธเธณเธซเธเธ”เนเธงเนเธฅเนเธงเธเธซเธเนเธฒ เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธเน HTML เธซเธฃเธทเธญเธฃเธฑเธ JavaScript เนเธ”เน เนเธฅเธฐเธเธฒเธฃเนเธซเธฅเธ”เธ—เธฃเธฑเธเธขเธฒเธเธฃเธ เธฒเธขเธเธญเธเธ–เธนเธเธเธดเธ” เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธเธฅเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเนเธฅเธฐเน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธฃเธดเธเธเนเธญเธเธเธณ CSS เนเธเนเธเนเนเธ production'
  },
  en: {
    topic: 'The CSS Editor and Live Preview',
    benefit: 'writing CSS and testing it against an instantly updated sample',
    detail:
      'Type CSS in the editor and see the sample card update immediately inside a sandboxed iframe. Copy the code, restore the example, or clear the editor, with sample selectors and CSS custom properties provided for quick experimentation.',
    caution:
      'The sample HTML and text are fixed, so the preview cannot edit HTML or run JavaScript, and external resources are blocked. Validate the result in target browsers and the production application before publishing CSS.'
  }
});
const tool: ToolConfig = {
  slug: 'css-editor',
  icon: 'CSS',
  category: 'design-css',
  name: { th: 'CSS Editor เนเธฅเธฐ Live Preview', en: 'CSS Editor & Live Preview' },
  shortDescription: {
    th: 'เน€เธเธตเธขเธ CSS เนเธฅเธฐเธ”เธนเธเธฅเธฅเธฑเธเธเนเนเธเธเน€เธฃเธตเธขเธฅเนเธ—เธกเน',
    en: 'Write CSS and see a live preview instantly.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธเนเธฅเธฐเธ—เธ”เธฅเธญเธ CSS เธ”เนเธงเธข editor เธเธฃเนเธญเธกเธชเนเธงเธเนเธชเธ”เธเธเธฅเนเธเธเน€เธฃเธตเธขเธฅเนเธ—เธกเนเนเธเธเธทเนเธเธ—เธตเนเนเธขเธเนเธเธ sandbox',
    en: 'Create and experiment with CSS in a code editor with a sandboxed live preview.'
  },
  keywords: {
    th: ['เธชเธฃเนเธฒเธ CSS', 'เธ•เธฑเธงเนเธเนเนเธ CSS', 'CSS preview', 'เน€เธเธตเธขเธ CSS เธญเธญเธเนเธฅเธเน'],
    en: ['CSS editor', 'CSS preview', 'live CSS playground', 'write CSS online']
  },
  component: CssEditorTool,
  howTo: {
    th: [
      'เธเธดเธกเธเนเธซเธฃเธทเธญเธงเธฒเธ CSS เนเธเธ•เธฑเธงเนเธเนเนเธ',
      'เธ”เธนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเนเธเธชเนเธงเธเธ•เธฑเธงเธญเธขเนเธฒเธ',
      'เธเธฑเธ”เธฅเธญเธ CSS เน€เธเธทเนเธญเธเธณเนเธเนเธเน'
    ],
    en: [
      'Type or paste CSS in the editor',
      'Watch the preview update',
      'Copy the CSS for your project'
    ]
  },
  longDescription,
  faqs,
  relatedSlugs: ['color-palette', 'px-rem', 'markdown-html'],
  updatedAt: '2026-09-25'
};
export default tool;
