import { type ToolConfig } from './tools';
import qrCodeTool from '../tool-definitions/qr-code';
import promptpayQrTool from '../tool-definitions/promptpay-qr';
import thaiCitizenIdTool from '../tool-definitions/thai-citizen-id';
import aiTokenCounterTool from '../tool-definitions/ai-token-counter';
import wordCounterTool from '../tool-definitions/word-counter';
import jwtDecoderTool from '../tool-definitions/jwt-decoder';
import passwordGeneratorTool from '../tool-definitions/password-generator';
import jsonCsvTool from '../tool-definitions/json-csv';
import base64Tool from '../tool-definitions/base64';
import imageConverterTool from '../tool-definitions/image-converter';
import uuidUlidTool from '../tool-definitions/uuid-ulid';
import loremIpsumTool from '../tool-definitions/lorem-ipsum';
import randomNumberPickerTool from '../tool-definitions/random-number-picker';
import colorPaletteTool from '../tool-definitions/color-palette';
import cssEditorTool from '../tool-definitions/css-editor';
import slugGeneratorTool from '../tool-definitions/slug-generator';
import hashGeneratorTool from '../tool-definitions/hash-generator';
import jsonFormatterTool from '../tool-definitions/json-formatter';
import urlEncodeDecodeTool from '../tool-definitions/url-encode-decode';
import textCaseTool from '../tool-definitions/text-case';
import unitConverterTool from '../tool-definitions/unit-converter';
import pxRemTool from '../tool-definitions/px-rem';
import timestampDateTool from '../tool-definitions/timestamp-date';
import buddhistYearTool from '../tool-definitions/buddhist-year';
import thaiBahtTextTool from '../tool-definitions/thai-baht-text';
import imageCompressorTool from '../tool-definitions/image-compressor';
import heicJpgTool from '../tool-definitions/heic-jpg';
import markdownHtmlTool from '../tool-definitions/markdown-html';
import codeBeautifierTool from '../tool-definitions/code-beautifier';
import seoContentGeneratorTool from '../tool-definitions/seo-content-generator';

export type { ToolCategory, ToolConfig, ToolFaq } from './tools';

export const toolRegistry: ToolConfig[] = [
  aiTokenCounterTool,
  codeBeautifierTool,
  seoContentGeneratorTool,
  promptpayQrTool,
  thaiCitizenIdTool,
  wordCounterTool,
  jwtDecoderTool,
  qrCodeTool,
  passwordGeneratorTool,
  jsonCsvTool,
  base64Tool,
  imageConverterTool,
  uuidUlidTool,
  loremIpsumTool,
  randomNumberPickerTool,
  colorPaletteTool,
  cssEditorTool,
  slugGeneratorTool,
  hashGeneratorTool,
  jsonFormatterTool,
  urlEncodeDecodeTool,
  textCaseTool,
  unitConverterTool,
  pxRemTool,
  timestampDateTool,
  buddhistYearTool,
  thaiBahtTextTool,
  imageCompressorTool,
  heicJpgTool,
  markdownHtmlTool
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return toolRegistry.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): ToolConfig[] {
  return toolRegistry.filter((tool) => tool.category === category);
}

export function getRelatedTools(tool: ToolConfig, limit = 4): ToolConfig[] {
  const configured = tool.relatedSlugs
    .map((slug) => toolRegistry.find((candidate) => candidate.slug === slug))
    .filter(
      (candidate): candidate is ToolConfig =>
        candidate !== undefined && candidate.slug !== tool.slug
    );
  const sameCategory = toolRegistry.filter(
    (candidate) =>
      candidate.slug !== tool.slug &&
      candidate.category === tool.category &&
      !configured.some((item) => item.slug === candidate.slug)
  );
  const otherCategories = toolRegistry.filter(
    (candidate) =>
      candidate.slug !== tool.slug &&
      candidate.category !== tool.category &&
      !configured.some((item) => item.slug === candidate.slug) &&
      !sameCategory.some((item) => item.slug === candidate.slug)
  );
  return [...configured, ...sameCategory, ...otherCategories].slice(0, limit);
}

export const popularToolSlugs = [
  'ai-token-counter',
  'code-beautifier',
  'seo-content-generator',
  'promptpay-qr',
  'thai-citizen-id',
  'jwt-decoder',
  'word-counter',
  'qr-code',
  'password-generator',
  'json-csv',
  'image-converter'
];