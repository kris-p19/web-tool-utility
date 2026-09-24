import { describe, expect, it } from 'vitest';
import { calculateDimensions, formatBytes, getFileExtension } from '../lib/tools/image-converter';

describe('image converter helpers', () => {
  it('keeps aspect ratio when locked', () => {
    expect(calculateDimensions({ width: 1600, height: 900 }, 800, 800, true)).toEqual({
      width: 800,
      height: 450
    });
  });

  it('uses exact dimensions when unlocked', () => {
    expect(calculateDimensions({ width: 100, height: 50 }, 300, 200, false)).toEqual({
      width: 300,
      height: 200
    });
  });

  it('formats extensions and byte sizes', () => {
    expect(getFileExtension('image/jpeg')).toBe('jpg');
    expect(formatBytes(1024)).toBe('1.0 KB');
  });
});
