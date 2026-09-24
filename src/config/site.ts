export const SITE = {
  name: 'ToolXHub',
  domain: 'tools.fintechxhub.com',
  url: 'https://tools.fintechxhub.com',
  parentUrl: 'https://fintechxhub.com',
  parentName: 'FinTechXHub',
  locale: 'th_TH',
  adsensePublisherId: 'ca-pub-3203802670121740',
  defaultOgImage: '/og-default.svg'
} as const;

export const AD_SLOT_IDS = {
  belowTool: '',
  inContent: '',
  sidebar: ''
} as const;

export type AdSlotName = keyof typeof AD_SLOT_IDS;
