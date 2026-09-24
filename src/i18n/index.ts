export const locales = ['th', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'th';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'th' || value === 'en';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'th' ? 'en' : 'th';
}

export function localizedPath(locale: Locale, path = ''): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  if (!cleanPath) return locale === 'th' ? '/' : '/en/';
  return locale === 'th' ? `/${cleanPath}/` : `/en/${cleanPath}/`;
}

export function pathLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'th';
}

export const messages = {
  th: {
    siteName: 'ToolXHub',
    tagline: 'เครื่องมือฟรี รวมทุกงานที่ต้องทำบนเว็บ',
    description:
      'ToolXHub รวมเครื่องมือสร้างและแปลงข้อมูลสำหรับงานดิจิทัล ทำงานในเบราว์เซอร์ ใช้ฟรี และไม่อัปโหลดข้อมูลของคุณ',
    searchLabel: 'ค้นหาเครื่องมือ',
    searchPlaceholder: 'ค้นหา เช่น QR, password, JSON',
    search: 'ค้นหา',
    categories: 'หมวดหมวด',
    allTools: 'เครื่องมือทั้งหมด',
    popularTools: 'เครื่องมือยอดนิยม',
    generators: 'สร้าง',
    converters: 'แปลง',
    viewAll: 'ดูทั้งหมด',
    tryTool: 'ใช้เครื่องมือ',
    noResults: 'ไม่พบเครื่องมือที่ค้นหา',
    noResultsHint: 'ลองใช้คำค้นอื่น หรือเลือกจากหมวดหมวดหมู่',
    clear: 'ล้าง',
    copy: 'คัดลอก',
    copied: 'คัดลอกแล้ว',
    download: 'ดาวน์โหลด',
    reset: 'รีเซ็ต',
    input: 'ข้อมูลนำเข้า',
    output: 'ผลลัพธ์',
    error: 'เกิดข้อผิดพลาด',
    theme: 'สลับโหมดสว่าง/มืด',
    languageSwitcher: 'English',
    languageSwitcherLabel: 'Switch to English',
    openMenu: 'เปิดเมนู',
    closeMenu: 'ปิดเมนู',
    skipToContent: 'ข้ามไปยังเนื้อหา',
    privacy: 'นโยบายความเป็นส่วนตัว',
    terms: 'ข้อกำหนดการใช้งาน',
    about: 'เกี่ยวกับเรา',
    contact: 'ติดต่อเรา',
    parentSite: 'ไปที่ FinTechXHub',
    footerNote: 'เครื่องมือฟรีสำหรับทุกคน',
    howTo: 'วิธีใช้งาน',
    explanation: 'อธิบายเพิ่มเติม',
    faq: 'คำถามที่พบบ่อย',
    relatedTools: 'เครื่องมือที่เกี่ยวข้อง',
    backHome: 'กลับหน้าแรก',
    localOnly: 'ประมวลผลในเบราว์เซอร์ ไม่อัปโหลดข้อมูล',
    adPlaceholder: 'โฆษณาจะแสดงเมื่อเพิ่ม Ad Slot ID',
    adsLabel: 'โฆษณา',
    consentTitle: 'ความเป็นส่วนตัวของคุณ',
    consentText:
      'เราใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อวัดผลและแสดงโฆษณาที่เกี่ยวข้อง คุณสามารถเลือกการตั้งค่าได้',
    accept: 'ยอมรับทั้งหมด',
    reject: 'ปฏิเสธไม่จำเป็น',
    manage: 'จัดการคุกกี้',
    save: 'บันทึกการตั้งค่า',
    close: 'ปิด',
    alwaysFree: 'ใช้งานฟรี ไม่ต้องสมัครสมาชิก',
    privacyByDesign: 'ออกแบบเพื่อความเป็นส่วนตัว',
    toolCount: 'เครื่องมือ',
    latest: 'อัปเดตล่าสุด'
  },
  en: {
    siteName: 'ToolXHub',
    tagline: 'Free tools for everyday web tasks',
    description:
      'ToolXHub provides free browser-based generators and converters for everyday digital work, with privacy-first processing.',
    searchLabel: 'Search tools',
    searchPlaceholder: 'Search, for example QR, password, JSON',
    search: 'Search',
    categories: 'Categories',
    allTools: 'All tools',
    popularTools: 'Popular tools',
    generators: 'Generate',
    converters: 'Convert',
    viewAll: 'View all',
    tryTool: 'Use tool',
    noResults: 'No tools found',
    noResultsHint: 'Try another search or choose a category',
    clear: 'Clear',
    copy: 'Copy',
    copied: 'Copied',
    download: 'Download',
    reset: 'Reset',
    input: 'Input',
    output: 'Output',
    error: 'Error',
    theme: 'Toggle light and dark mode',
    languageSwitcher: 'ไทย',
    languageSwitcherLabel: 'Switch to Thai',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    about: 'About',
    contact: 'Contact',
    parentSite: 'Visit FinTechXHub',
    footerNote: 'Free tools for everyone',
    howTo: 'How to use',
    explanation: 'More explanation',
    faq: 'Frequently asked questions',
    relatedTools: 'Related tools',
    backHome: 'Back to home',
    localOnly: 'Processed in your browser; your data is not uploaded',
    adPlaceholder: 'Ad appears after an Ad Slot ID is added',
    adsLabel: 'Advertisement',
    consentTitle: 'Your privacy choices',
    consentText:
      'We use cookies and similar technologies to measure performance and show relevant ads. You can choose your settings.',
    accept: 'Accept all',
    reject: 'Reject optional',
    manage: 'Manage cookies',
    save: 'Save settings',
    close: 'Close',
    alwaysFree: 'Free to use, no sign-up required',
    privacyByDesign: 'Privacy by design',
    toolCount: 'tools',
    latest: 'Latest'
  }
} as const;

export type Messages = (typeof messages)[Locale];
