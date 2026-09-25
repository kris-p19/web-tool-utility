import { describe, expect, it } from 'vitest';
import { detectLanguage, formatCode, minifyCss } from '../lib/tools/code-beautifier';

describe('code-beautifier', () => {
  it('detects languages accurately', () => {
    expect(detectLanguage('{"hello":"world"}')).toBe('json');
    expect(detectLanguage('<!DOCTYPE html><html><body><h1>Hi</h1></body></html>')).toBe('html');
    expect(detectLanguage('.card { color: red; margin: 10px; }')).toBe('css');
    expect(detectLanguage('function add(a, b) { return a + b; }')).toBe('javascript');
  });

  it('formats JSON with 2 and 4 spaces', () => {
    const raw = '{"name":"ToolXHub","version":1}';
    const formatted2 = formatCode(raw, { language: 'json', indent: '2spaces' });
    expect(formatted2.code).toContain('  "name": "ToolXHub"');
    expect(formatted2.error).toBeUndefined();

    const formatted4 = formatCode(raw, { language: 'json', indent: '4spaces' });
    expect(formatted4.code).toContain('    "name": "ToolXHub"');

    const minified = formatCode(raw, { language: 'json', indent: '2spaces', minify: true });
    expect(minified.code).toBe('{"name":"ToolXHub","version":1}');
  });

  it('formats HTML and CSS properly', () => {
    const rawHtml = '<div><p>Hello <span>World</span></p></div>';
    const formattedHtml = formatCode(rawHtml, { language: 'html', indent: '2spaces' });
    expect(formattedHtml.code).toContain('<div>');
    expect(formattedHtml.code).toContain('  <p>');

    const rawCss = 'body{color:black;background:#fff;}h1{font-size:24px;}';
    const formattedCss = formatCode(rawCss, { language: 'css', indent: '2spaces' });
    expect(formattedCss.code).toContain('body {');
    expect(formattedCss.code).toContain('  color: black;');

    const minifiedCss = minifyCss('body { color: black; background: #fff; }');
    expect(minifiedCss).toBe('body{color:black;background:#fff}');
  });

  it('formats JavaScript with clean indentation', () => {
    const rawJs = 'function greet(name){if(!name){return "Anon";}return "Hello "+name;}';
    const formattedJs = formatCode(rawJs, { language: 'javascript', indent: '2spaces' });
    expect(formattedJs.code).toContain('function greet(name) {');
    expect(formattedJs.code).toContain('  if (!name) {');
  });

  it('handles invalid JSON gracefully without throwing', () => {
    const invalidJson = '{"broken": json}';
    const result = formatCode(invalidJson, { language: 'json', indent: '2spaces' });
    expect(result.error).toBeDefined();
    expect(result.code).toBe(invalidJson);
  });
});
