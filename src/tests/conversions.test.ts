import { describe, expect, it } from 'vitest';
import { convertUnit } from '../lib/tools/units';
import { pxToRem, remToPx } from '../lib/tools/css-units';
import { toBuddhistYear, toGregorianYear } from '../lib/tools/date-time';

describe('conversion helpers', () => {
  it('converts common units', () => {
    expect(convertUnit(1, 'length', 'm', 'cm')).toBe(100);
  });

  it('converts CSS units and calendar years', () => {
    expect(pxToRem(32)).toBe(2);
    expect(remToPx(2)).toBe(32);
    expect(toBuddhistYear(2026)).toBe(2569);
    expect(toGregorianYear(2569)).toBe(2026);
  });
});
