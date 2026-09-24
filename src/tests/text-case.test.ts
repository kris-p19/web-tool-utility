import { describe, expect, it } from 'vitest';
import { generateSlug } from '../lib/tools/slug';
import { toCamelCase, toKebabCase, toSnakeCase, toTitleCase } from '../lib/tools/text-case';

describe('text helpers', () => {
  it('creates readable slugs including Thai text', () => {
    expect(generateSlug('Hello, World! สวัสดี')).toBe('hello-world-สวัสดี');
  });

  it('converts common text cases', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toCamelCase('hello world')).toBe('helloWorld');
    expect(toKebabCase('Hello World')).toBe('hello-world');
    expect(toSnakeCase('Hello World')).toBe('hello_world');
  });
});
