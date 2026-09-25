import { describe, expect, it } from 'vitest';
import { getClockParts } from '../lib/tools/live-clock';

describe('live clock time zones', () => {
  it('updates the date and time when crossing midnight in Bangkok', () => {
    const instant = new Date('2026-01-01T17:30:45Z');
    const bangkok = getClockParts(instant, 'Asia/Bangkok', 'en');
    const newYork = getClockParts(instant, 'America/New_York', 'en');

    expect(bangkok.time).toBe('00:30');
    expect(bangkok.seconds).toBe('45');
    expect(bangkok.date).toContain('January 2, 2026');
    expect(bangkok.offset).toBe('UTC+07:00');
    expect(newYork.time).toBe('12:30');
    expect(newYork.date).toContain('January 1, 2026');
    expect(newYork.offset).toBe('UTC-05:00');
    expect(newYork.unix).toBe(bangkok.unix);
  });
});
