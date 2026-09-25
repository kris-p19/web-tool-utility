import type { ToolConfig } from '../config/tools';
import UuidUlidTool from '../components/tools/UuidUlidTool.astro';
import { createFaqs, createLongDescription } from '../config/tool-content';

const faqs = createFaqs(
  'UUID/ULID Generator',
  'เธเนเธญเธกเธนเธฅเธ–เธนเธเธชเธฃเนเธฒเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเนเธฅเธฐเนเธกเนเธ–เธนเธเธชเนเธเธเธถเนเธเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเน',
  'เน€เธฅเธทเธญเธ UUID v4 เธซเธฃเธทเธญ ULID เนเธฅเนเธงเธฃเธฐเธเธธเธเธณเธเธงเธเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃ',
  'เธญเธขเนเธฒเนเธเนเธเนเธฒเน€เธ”เธตเธขเธงเธเธฑเธเธเนเธณเนเธเธฃเธฐเธเธเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธเธงเธฒเธกเนเธกเนเธเนเธณ'
);
const longDescription = createLongDescription({
  th: {
    topic: 'UUID เนเธฅเธฐ ULID Generator',
    benefit: 'เธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเธฃเธฐเธเธณเธ—เธฃเธฑเธเธขเธฒเธเธฃเนเธฅเธฐเธเนเธญเธกเธนเธฅเนเธเธเน€เธฃเธตเธขเธเธ•เธฒเธกเน€เธงเธฅเธฒ',
    detail:
      'เน€เธฅเธทเธญเธ UUID v4 เธชเธณเธซเธฃเธฑเธเธฃเธซเธฑเธชเธชเธธเนเธกเธ—เธตเนเนเธกเนเน€เธเธตเนเธขเธงเธเนเธญเธเธเธฑเธเน€เธงเธฅเธฒ เธซเธฃเธทเธญ ULID เธชเธณเธซเธฃเธฑเธเธฃเธซเธฑเธชเธ—เธตเนเน€เธฃเธตเธขเธเธฅเธณเธ”เธฑเธเธ•เธฒเธกเน€เธงเธฅเธฒเนเธ”เน เธฃเธฐเธเธเธชเธฃเนเธฒเธเธซเธฅเธฒเธขเธฃเธฒเธขเธเธฒเธฃเธเธฃเนเธญเธกเธเธฑเธเนเธฅเธฐเนเธซเนเธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”เน€เธเนเธเนเธเธฅเนเนเธ”เน',
    caution:
      'UUID เนเธฅเธฐ ULID เน€เธเนเธเธ•เธฑเธงเธฃเธฐเธเธธ เนเธกเนเนเธเนเธฃเธซเธฑเธชเธเนเธฒเธเธซเธฃเธทเธญเธเธฅเนเธเธขเธทเธเธขเธฑเธเธ•เธฑเธงเธ•เธ เธเธงเธฃเน€เธเนเธเน€เธเนเธเธเนเธญเธกเธนเธฅเธฅเธฑเธเน€เธกเธทเนเธญเนเธเนเธเธฑเธ API เนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธเธเธฒเธฃเธ•เธฑเนเธเธเนเธฒเธเธฒเธเธเนเธญเธกเธนเธฅเธเนเธญเธเนเธเนเธเธฒเธเธเธฃเธดเธ'
  },
  en: {
    topic: 'The UUID and ULID Generator',
    benefit: 'creating resource identifiers and sortable time-oriented values',
    detail:
      'Choose UUID v4 for a random identifier that does not expose creation time, or ULID when lexicographic time ordering is useful. Generate several values at once and copy or download the list for a project, database seed, or development workflow.',
    caution:
      'UUIDs and ULIDs are identifiers, not passwords or authentication mechanisms. Treat API values as sensitive data and check your database constraints before relying on them in production.'
  }
});
const tool: ToolConfig = {
  slug: 'uuid-ulid',
  icon: 'ID',
  category: 'ai-dev',
  name: { th: 'UUID / ULID Generator', en: 'UUID / ULID Generator' },
  shortDescription: {
    th: 'เธชเธฃเนเธฒเธ UUID v4 เนเธฅเธฐ ULID เนเธเธเธชเธธเนเธกเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน',
    en: 'Generate random UUID v4 and ULID values in your browser.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธ UUID v4 เนเธฅเธฐ ULID เธชเธณเธซเธฃเธฑเธเธเธฒเธเธเธฑเธ’เธเธฒเนเธญเธเนเธฅเธฐเธเธฒเธเธเนเธญเธกเธนเธฅ เธเธฃเนเธญเธกเธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธซเธฅเธฒเธขเธฃเธฒเธขเธเธฒเธฃ',
    en: 'Create UUID v4 and ULID values for apps and databases, then copy or download a batch.'
  },
  keywords: {
    th: ['UUID', 'ULID', 'เธชเธฃเนเธฒเธ UUID', 'เนเธญเธ”เธต'],
    en: ['UUID', 'ULID', 'UUID generator', 'ULID generator', 'identifier']
  },
  component: UuidUlidTool,
  howTo: {
    th: ['เน€เธฅเธทเธญเธเธเธเธดเธ”เธ•เธฑเธงเธฃเธฐเธเธธ', 'เธฃเธฐเธเธธเธเธณเธเธงเธเนเธฅเธฐเธเธ”เธชเธฃเนเธฒเธ', 'เธเธฑเธ”เธฅเธญเธเธซเธฃเธทเธญเธ”เธฒเธงเธเนเนเธซเธฅเธ”เธฃเธฒเธขเธเธฒเธฃ'],
    en: ['Choose an identifier type', 'Set the count and generate', 'Copy or download the list']
  },
  longDescription,
  faqs,
  relatedSlugs: ['password-generator', 'slug-generator', 'json-formatter'],
  updatedAt: '2026-09-24'
};
export default tool;
