/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ADSENSE_CLIENT?: string;
  readonly PUBLIC_CONSENT_CMP_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
