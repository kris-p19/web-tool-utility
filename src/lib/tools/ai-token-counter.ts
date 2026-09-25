export interface AiModelInfo {
  id: string;
  name: string;
  provider: 'OpenAI' | 'Google' | 'Anthropic';
  inputCostPer1M: number; // in USD
  outputCostPer1M: number; // in USD
}

export const AI_MODELS: Record<string, AiModelInfo> = {
  'gpt-4o': {
    id: 'gpt-4o',
    name: 'GPT-4o (OpenAI)',
    provider: 'OpenAI',
    inputCostPer1M: 2.5,
    outputCostPer1M: 10.0
  },
  'gpt-4o-mini': {
    id: 'gpt-4o-mini',
    name: 'GPT-4o mini (OpenAI)',
    provider: 'OpenAI',
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.6
  },
  'gemini-1.5-flash': {
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash (Google)',
    provider: 'Google',
    inputCostPer1M: 0.075,
    outputCostPer1M: 0.3
  },
  'gemini-1.5-pro': {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro (Google)',
    provider: 'Google',
    inputCostPer1M: 1.25,
    outputCostPer1M: 5.0
  },
  'claude-3-5-sonnet': {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet (Anthropic)',
    provider: 'Anthropic',
    inputCostPer1M: 3.0,
    outputCostPer1M: 15.0
  }
};

export interface TokenAnalysis {
  tokens: string[];
  tokenCount: number;
  characterCount: number;
  wordCount: number;
  model: AiModelInfo;
  inputCostUsd: number;
  inputCostThb: number;
  outputCostUsd: number;
  outputCostThb: number;
}

const USD_TO_THB = 36.0;

/**
 * Tokenizes text realistically mimicking BPE (Byte Pair Encoding)
 * for both Latin/Code and Thai scripts.
 */
export function estimateTokens(text: string): string[] {
  if (!text) return [];

  const tokens: string[] = [];

  // Match sequences of:
  // 1. Whitespace
  // 2. Numbers
  // 3. Thai words/characters
  // 4. English/Latin words
  // 5. Punctuation / symbols
  const regex = /(\s+|[\u0E00-\u0E7F]+|[a-zA-Z]+|\d+|[^\s\w\u0E00-\u0E7F]+)/g;
  const matches = text.match(regex);

  if (!matches) return [];

  for (const part of matches) {
    // 1. Whitespace: typically 1 token per space or newline block
    if (/^\s+$/.test(part)) {
      if (part.length <= 4) {
        tokens.push(part);
      } else {
        // chunk long whitespaces into 4-char chunks
        for (let i = 0; i < part.length; i += 4) {
          tokens.push(part.slice(i, i + 4));
        }
      }
      continue;
    }

    // 2. Thai script: in BPE tokenizers, Thai is chunked into 2-3 characters on average
    if (/^[\u0E00-\u0E7F]+$/.test(part)) {
      const chunkSize = 2; // ~2 Thai chars per BPE token
      for (let i = 0; i < part.length; i += chunkSize) {
        tokens.push(part.slice(i, i + chunkSize));
      }
      continue;
    }

    // 3. Numbers: typically 1-3 digits per token
    if (/^\d+$/.test(part)) {
      for (let i = 0; i < part.length; i += 3) {
        tokens.push(part.slice(i, i + 3));
      }
      continue;
    }

    // 4. English words: short words = 1 token, long words = subword chunks (~4 chars)
    if (/^[a-zA-Z]+$/.test(part)) {
      if (part.length <= 5) {
        tokens.push(part);
      } else {
        for (let i = 0; i < part.length; i += 4) {
          tokens.push(part.slice(i, i + 4));
        }
      }
      continue;
    }

    // 5. Symbols / punctuation
    for (const char of part) {
      tokens.push(char);
    }
  }

  return tokens;
}

export function analyzeAiTokens(text: string, modelId: string = 'gpt-4o'): TokenAnalysis {
  const model = AI_MODELS[modelId] ?? AI_MODELS['gpt-4o']!;
  const tokens = estimateTokens(text);
  const tokenCount = tokens.length;
  const characterCount = text.length;

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const inputCostUsd = (tokenCount / 1_000_000) * model.inputCostPer1M;
  const inputCostThb = inputCostUsd * USD_TO_THB;

  const outputCostUsd = (tokenCount / 1_000_000) * model.outputCostPer1M;
  const outputCostThb = outputCostUsd * USD_TO_THB;

  return {
    tokens,
    tokenCount,
    characterCount,
    wordCount: words,
    model,
    inputCostUsd,
    inputCostThb,
    outputCostUsd,
    outputCostThb
  };
}