export interface RandomNumberOptions {
  min: number;
  max: number;
  count: number;
  unique?: boolean;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomNumbers(options: RandomNumberOptions): number[] {
  const min = Math.min(options.min, options.max);
  const max = Math.max(options.min, options.max);
  const count = Math.min(10000, Math.max(1, Math.round(options.count)));
  const values: number[] = [];
  if (options.unique && Number.isInteger(min) && Number.isInteger(max) && count <= max - min + 1) {
    const pool = Array.from({ length: max - min + 1 }, (_, index) => min + index);
    for (let index = pool.length - 1; index > 0; index -= 1) {
      const swapIndex = randomInt(0, index);
      [pool[index], pool[swapIndex]] = [pool[swapIndex] ?? pool[index] ?? min, pool[index] ?? min];
    }
    return pool.slice(0, count);
  }
  while (values.length < count) {
    const value = randomInt(min, max);
    if (!options.unique || !values.includes(value)) values.push(value);
  }
  return values;
}

export function pickRandom<T>(values: T[], count = 1): T[] {
  const pool = [...values];
  const result: T[] = [];
  const limit = Math.min(pool.length, Math.max(0, Math.round(count)));
  while (result.length < limit && pool.length > 0) {
    const index = randomInt(0, pool.length - 1);
    const [value] = pool.splice(index, 1);
    if (value !== undefined) result.push(value);
  }
  return result;
}
