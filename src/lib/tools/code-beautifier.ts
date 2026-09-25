import beautify from 'js-beautify';

export type SupportedLanguage = 'html' | 'javascript' | 'css' | 'json';
export type IndentType = '2spaces' | '4spaces' | 'tab';

export interface BeautifyOptions {
  language: SupportedLanguage;
  indent: IndentType;
  minify?: boolean;
}

export interface BeautifyResult {
  code: string;
  originalSize: number;
  formattedSize: number;
  reductionPercentage: number;
  lineCount: number;
  error?: string;
}

function getIndentConfig(indent: IndentType): { size: number; char: string } {
  switch (indent) {
    case '4spaces':
      return { size: 4, char: ' ' };
    case 'tab':
      return { size: 1, char: '\t' };
    case '2spaces':
    default:
      return { size: 2, char: ' ' };
  }
}

export function detectLanguage(input: string): SupportedLanguage {
  const trimmed = input.trim();
  if (!trimmed) return 'javascript';

  // Check JSON
  if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
    try {
      JSON.parse(trimmed);
      return 'json';
    } catch {
      // might still be JS object or CSS
    }
  }

  // Check HTML
  if (
    /<!doctype\s+html/i.test(trimmed) ||
    /<html[\s>]/i.test(trimmed) ||
    /<\/?(div|span|p|a|ul|ol|li|table|thead|tbody|tr|td|section|article|header|footer|nav|button|input|form)[\s>/]/i.test(trimmed)
  ) {
    return 'html';
  }

  // Check CSS
  if (
    /@(media|keyframes|import|supports|charset)\b/i.test(trimmed) ||
    /([.#]?[a-zA-Z0-9_-]+)\s*\{[^}]*:\s*[^}]+;?\s*\}/.test(trimmed) &&
    !/\b(function|const|let|var|class|import|export|if|else|return)\b/.test(trimmed)
  ) {
    return 'css';
  }

  return 'javascript';
}

export function minifyJson(input: string): string {
  const parsed = JSON.parse(input);
  return JSON.stringify(parsed);
}

export function minifyCss(input: string): string {
  return input
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove newlines and extra spaces
    .replace(/\s+/g, ' ')
    // Remove spaces around symbols
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove trailing semicolons before closing brace
    .replace(/;}/g, '}')
    .trim();
}

export function minifyHtml(input: string): string {
  return input
    // Remove comments (except conditional comments)
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
    // Collapse multi-spaces into single space
    .replace(/\s+/g, ' ')
    // Remove space around tag delimiters
    .replace(/>\s+</g, '><')
    .trim();
}

export function minifyJs(input: string): string {
  return input
    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove single-line comments (simple pattern)
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
    // Collapse multiple spaces
    .replace(/[ \t]+/g, ' ')
    // Collapse multiple newlines
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

export function formatCode(input: string, options: BeautifyOptions): BeautifyResult {
  const trimmed = input.trim();
  const originalSize = new TextEncoder().encode(input).length;

  if (!trimmed) {
    return {
      code: '',
      originalSize: 0,
      formattedSize: 0,
      reductionPercentage: 0,
      lineCount: 0
    };
  }

  const { language, indent, minify = false } = options;
  const { size, char } = getIndentConfig(indent);

  try {
    let output = '';

    if (minify) {
      switch (language) {
        case 'json':
          output = minifyJson(trimmed);
          break;
        case 'css':
          output = minifyCss(trimmed);
          break;
        case 'html':
          output = minifyHtml(trimmed);
          break;
        case 'javascript':
          output = minifyJs(trimmed);
          break;
      }
    } else {
      switch (language) {
        case 'json': {
          const parsed = JSON.parse(trimmed);
          const indentStr = char === '\t' ? '\t' : ' '.repeat(size);
          output = JSON.stringify(parsed, null, indentStr);
          break;
        }
        case 'html':
          output = beautify.html(trimmed, {
            indent_size: size,
            indent_char: char,
            indent_inner_html: false,
            wrap_line_length: 0,
            unformatted: ['code', 'pre', 'span']
          });
          break;
        case 'css':
          output = beautify.css(trimmed, {
            indent_size: size,
            indent_char: char,
            selector_separator_newline: true,
            newline_between_rules: true
          });
          break;
        case 'javascript':
          output = beautify.js(trimmed, {
            indent_size: size,
            indent_char: char,
            space_after_anon_function: true,
            brace_style: 'collapse',
            preserve_newlines: true,
            max_preserve_newlines: 2
          });
          break;
      }
    }

    const formattedSize = new TextEncoder().encode(output).length;
    const diff = originalSize - formattedSize;
    const reductionPercentage = originalSize > 0 ? Math.round((diff / originalSize) * 100) : 0;
    const lineCount = output ? output.split('\n').length : 0;

    return {
      code: output,
      originalSize,
      formattedSize,
      reductionPercentage,
      lineCount
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return {
      code: input,
      originalSize,
      formattedSize: originalSize,
      reductionPercentage: 0,
      lineCount: input.split('\n').length,
      error: errorMsg
    };
  }
}
