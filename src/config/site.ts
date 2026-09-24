export const SITE = {
  name: 'ToolXHub',
  domain: 'tools.fintechxhub.com',
  url: 'https://tools.fintechxhub.com',
  parentUrl: 'https://fintechxhub.com',
  parentName: 'FinTechXHub',
  locale: 'th_TH',
  adsensePublisherId: 'ca-pub-3203802670121740',
  contactEmail: 'stackwise@fintechxhub.com',
  defaultOgImage: '/og-default.svg'
} as const;

export const AD_SLOT_IDS = {
  home: '6392731843',
  category: '2618241355',
  belowTool: '6669167002',
  inContent: '7257891180',
  sidebar: '6661184954'
} as const;

export type AdSlotName = keyof typeof AD_SLOT_IDS;
