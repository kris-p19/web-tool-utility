import { describe, expect, it } from 'vitest';
import { analyzeAiTokens, estimateTokens } from '../lib/tools/ai-token-counter';

describe('AI Token Counter utility', () => {
  it('handles empty text', () => {
    const result = analyzeAiTokens('', 'gpt-4o');
    expect(result.tokenCount).toBe(0);
    expect(result.tokens).toEqual([]);
    expect(result.inputCostUsd).toBe(0);
  });

  it('tokenizes English text', () => {
    const text = 'Hello world! Welcome to AI token counter.';
    const tokens = estimateTokens(text);
    expect(tokens.length).toBeGreaterThan(5);
    const analysis = analyzeAiTokens(text, 'gpt-4o');
    expect(analysis.tokenCount).toBe(tokens.length);
    expect(analysis.model.name).toContain('GPT-4o');
  });

  it('tokenizes Thai text into realistic BPE chunks', () => {
    const thaiText = 'สวัสดีครับ ขอสอบถามข้อมูลเกี่ยวกับ AI';
    const tokens = estimateTokens(thaiText);
    expect(tokens.length).toBeGreaterThan(5);
    const analysis = analyzeAiTokens(thaiText, 'gemini-1.5-flash');
    expect(analysis.tokenCount).toBe(tokens.length);
    expect(analysis.inputCostUsd).toBeGreaterThanOrEqual(0);
  });

  it('calculates cost correctly across models', () => {
    const text = 'Sample prompt for testing costs.';
    const gpt = analyzeAiTokens(text, 'gpt-4o');
    const flash = analyzeAiTokens(text, 'gemini-1.5-flash');

    // Gemini 1.5 Flash is significantly cheaper than GPT-4o
    expect(flash.inputCostUsd).toBeLessThan(gpt.inputCostUsd);
    expect(gpt.inputCostThb).toBeGreaterThanOrEqual(0);
  });
});