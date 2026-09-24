const thaiWords = [
  'ความคิด',
  'การเรียนรู้',
  'เทคโนโลยี',
  'ธุรกิจ',
  'ผู้คน',
  'อนาคต',
  'ความสร้างสรรค์',
  'ประสบการณ์',
  'ข้อมูล',
  'การออกแบบ',
  'พัฒนาการ',
  'ความสำเร็จ'
];
const englishWords = [
  'ideas',
  'learning',
  'technology',
  'business',
  'people',
  'future',
  'creativity',
  'experience',
  'information',
  'design',
  'growth',
  'success'
];

function pick<T>(values: T[], random: () => number): T {
  return values[Math.floor(random() * values.length)] ?? (values[0] as T);
}

export function generateLorem(options: {
  locale: 'th' | 'en';
  paragraphs: number;
  sentences: number;
  random?: () => number;
}): string {
  const words = options.locale === 'th' ? thaiWords : englishWords;
  const random = options.random ?? Math.random;
  const paragraphCount = Math.min(20, Math.max(1, Math.round(options.paragraphs)));
  const sentenceCount = Math.min(20, Math.max(1, Math.round(options.sentences)));
  const paragraphs: string[] = [];
  for (let paragraph = 0; paragraph < paragraphCount; paragraph += 1) {
    const sentences: string[] = [];
    for (let sentence = 0; sentence < sentenceCount; sentence += 1) {
      const length = 8 + Math.floor(random() * 10);
      const generated = Array.from({ length }, () => pick(words, random));
      sentences.push(`${generated.join(' ')}.`);
    }
    paragraphs.push(sentences.join(' '));
  }
  return paragraphs.join('\n\n');
}
