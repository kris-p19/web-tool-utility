export const SITE = {
  name: 'ToolXHub',
  domain: 'tools.fintechxhub.com',
  url: 'https://tools.fintechxhub.com',
  parentUrl: 'https://fintechxhub.com',
  parentLogo: 'https://fintechxhub.com/assets/img/logo.png',
  parentName: 'FinTechXHub',
  locale: 'th_TH',
  adsensePublisherId: 'ca-pub-3203802670121740',
  contactEmail: 'stackwise@fintechxhub.com',
  lastUpdated: '2026-09-24',
  defaultOgImage: '/og-default.svg'
} as const;

export const AD_SLOT_IDS = {
  home: '6392731843',
  category: '2618241355',
  belowTool: '6669167002',
  inContent: '7257891180',
  sidebar: '3563167951'
} as const;

export type AdSlotName = keyof typeof AD_SLOT_IDS;
