export interface TextStatistics {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  paragraphs: number;
  sentences: number;
  thaiCharacters: number;
  englishCharacters: number;
  digits: number;
  spaces: number;
  readingTimeMinutes: number;
  speakingTimeMinutes: number;
}

/**
 * Counts words accurately across languages including Thai, Chinese, and English
 * using modern Intl.Segmenter where available, with standard fallback.
 */
export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;

  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    try {
      const segmenter = new Intl.Segmenter(['th', 'en'], { granularity: 'word' });
      let count = 0;
      for (const segment of segmenter.segment(trimmed)) {
        if (segment.isWordLike) {
          count++;
        }
      }
      return count;
    } catch {
      // Fallback if Segmenter fails
    }
  }

  // Fallback word count: English regex + Thai character heuristic
  const words = trimmed.match(/[\p{L}\p{N}]+/gu);
  return words ? words.length : 0;
}

export function analyzeText(text: string): TextStatistics {
  const totalCharacters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const spaces = (text.match(/\s/g) || []).length;

  const thaiMatches = text.match(/[\u0E00-\u0E7F]/g);
  const thaiCharacters = thaiMatches ? thaiMatches.length : 0;

  const englishMatches = text.match(/[a-zA-Z]/g);
  const englishCharacters = englishMatches ? englishMatches.length : 0;

  const digitMatches = text.match(/[0-9]/g);
  const digits = digitMatches ? digitMatches.length : 0;

  // Paragraphs count: non-empty lines separated by newlines
  const paragraphs = text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0).length;

  // Sentences count: split by . ! ? or Thai sentence end markers
  const sentences = text
    .split(/[.!?]+|\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0).length;

  const words = countWords(text);

  // Reading speed: ~200 wpm for English, or ~500 chars/min for Thai
  const readingTimeMinutes = Math.max(
    0.1,
    thaiCharacters > englishCharacters
      ? Math.round((charactersNoSpaces / 500) * 10) / 10
      : Math.round((words / 200) * 10) / 10
  );

  // Speaking speed: ~130 wpm
  const speakingTimeMinutes = Math.max(
    0.1,
    thaiCharacters > englishCharacters
      ? Math.round((charactersNoSpaces / 350) * 10) / 10
      : Math.round((words / 130) * 10) / 10
  );

  return {
    words,
    characters: totalCharacters,
    charactersNoSpaces,
    paragraphs,
    sentences,
    thaiCharacters,
    englishCharacters,
    digits,
    spaces,
    readingTimeMinutes: totalCharacters === 0 ? 0 : readingTimeMinutes,
    speakingTimeMinutes: totalCharacters === 0 ? 0 : speakingTimeMinutes
  };
}