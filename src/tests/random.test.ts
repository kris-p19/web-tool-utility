import { describe, expect, it } from 'vitest';
import { generateRandomNumbers, pickRandom } from '../lib/tools/random';

describe('random helpers', () => {
  it('generates bounded unique integers', () => {
    const values = generateRandomNumbers({ min: 1, max: 3, count: 3, unique: true });
    expect([...values].sort()).toEqual([1, 2, 3]);
  });

  it('picks distinct values', () => {
    expect(pickRandom(['a', 'b', 'c'], 3)).toHaveLength(3);
  });
});
