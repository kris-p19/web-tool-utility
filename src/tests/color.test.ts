import { describe, expect, it } from 'vitest';
import { contrastRatio, hexToRgb, rgbToHex, rotateHue } from '../lib/tools/color';

describe('color helpers', () => {
  it('converts hex and RGB values', () => {
    expect(hexToRgb('#abc')).toEqual({ r: 170, g: 187, b: 204 });
    expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe('#ff0000');
  });

  it('rotates hue and calculates contrast', () => {
    expect(rotateHue('#ff0000', 120)).toBe('#00ff00');
    expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 1);
  });
});
