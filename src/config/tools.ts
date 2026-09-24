import type { Locale } from '../i18n';

export const toolCategories = ['generators', 'converters'] as const;
export type ToolCategory = (typeof toolCategories)[number];

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolConfig {
  slug: string;
  icon: string;
  category: ToolCategory;
  name: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords: Record<Locale, string[]>;
  component: any;
  howTo: Record<Locale, string[]>;
  longDescription: Record<Locale, string[]>;
  faqs: Record<Locale, ToolFaq[]>;
  relatedSlugs: string[];
  updatedAt: string;
}
