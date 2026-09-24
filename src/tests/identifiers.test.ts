import { describe, expect, it } from 'vitest';
import { generateUlid, generateUuid } from '../lib/tools/identifiers';

describe('identifier helpers', () => {
  it('generates a valid UUID v4 shape', () => {
    expect(generateUuid()).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  });

  it('generates a 26 character ULID', () => {
    expect(generateUlid(0, new Uint8Array(10))).toHaveLength(26);
  });
});
