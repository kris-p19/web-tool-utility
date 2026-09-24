import { tools, type ToolConfig } from './tools';
import qrCodeTool from '../content/tools/qr-code';
import passwordGeneratorTool from '../content/tools/password-generator';
import jsonCsvTool from '../content/tools/json-csv';
import base64Tool from '../content/tools/base64';
import imageConverterTool from '../content/tools/image-converter';

export type { ToolCategory, ToolConfig, ToolFaq } from './tools';

export const toolRegistry: ToolConfig[] = [
  qrCodeTool,
  passwordGeneratorTool,
  jsonCsvTool,
  base64Tool,
  imageConverterTool
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return toolRegistry.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): ToolConfig[] {
  return toolRegistry.filter((tool) => tool.category === category);
}

export function getRelatedTools(tool: ToolConfig, limit = 4): ToolConfig[] {
  const preferred = toolRegistry.filter(
    (candidate) => candidate.slug !== tool.slug && candidate.category === tool.category
  );
  const fallback = toolRegistry.filter(
    (candidate) => candidate.slug !== tool.slug && candidate.category !== tool.category
  );
  return [...preferred, ...fallback].slice(0, limit);
}

export const popularToolSlugs = ['qr-code', 'password-generator', 'json-csv', 'image-converter'];
