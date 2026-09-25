# ToolXHub

ToolXHub คือเว็บไซต์เครื่องมือฟรีของ FinTechXHub สำหรับงานสร้างและแปลงข้อมูล เน้นภาษาไทยเป็นหลักและมีภาษาอังกฤษที่ `/en/` ทุกเครื่องมือหลักทำงานในเบราว์เซอร์ ไม่อัปโหลดไฟล์หรือข้อมูลนำเข้าไปยังเซิร์ฟเวอร์

## สิ่งที่มีในโปรเจกต์

- Astro static output + TypeScript strict + Tailwind CSS v4
- หน้าไทยและอังกฤษพร้อม `hreflang`, canonical และ JSON-LD
- Tool registry แบบ config เดียวต่อ tool ใน `src/tool-definitions/`
- เครื่องมือ 23 ตัว แบ่งเป็น Generators และ Converters
- QR Code, Password, JSON ↔ CSV, Base64 และ Image Converter พร้อมใช้งานตั้งแต่ต้น
- เครื่องมือที่เหลือ: UUID/ULID, Lorem Ipsum, Random Picker, Color Palette, CSS Editor, Slug, Hash, JSON Formatter, URL, Text Case, Unit, px/rem, Timestamp, พ.ศ./ค.ศ., บาทไทย, Image Compressor, HEIC → JPG และ Markdown → HTML
- Pure functions สำหรับ logic ที่ทดสอบได้ และ Vitest
- PWA manifest, security headers, sitemap แยกภาษา, robots.txt และ ads.txt
- AdSense slot พร้อมโหลดหลัง idle/interaction และ Consent Mode v2
- Cloudflare Workers Static Assets ผ่าน `wrangler.toml`
- GitHub Actions สำหรับ deploy จาก branch `main`

## เครื่องมือที่ต้องใช้

- Node.js 22.19 ขึ้นไปแนะนำ (Node 22.15 ที่ใช้ทดสอบก็สร้างได้ แต่ npm จะเตือน engine ของ dependency บางตัว)
- npm 10 ขึ้นไป
- Cloudflare account ที่ผูก `fintechxhub.com` ไว้แล้ว
- Google AdSense account สำหรับ Publisher ID ที่ใส่ไว้แล้ว

## เริ่มใช้งานในเครื่อง

รันตามลำดับนี้:

```bash
npm install
Copy-Item .env.example .env
npm run dev
```

เปิด `http://localhost:4321/` และ `http://localhost:4321/en/`

ก่อนส่ง deploy ให้รัน:

```bash
npm run check
npm test
npm run lint
npm run build
npm run preview
```

บน macOS/Linux ใช้คำสั่งสร้างไฟล์ environment เป็น:

```bash
cp .env.example .env
```

## ค่าที่ต้องกรอกเอง

1. **AdSense slots**: ตั้งค่า slot ID จริงทั้ง 5 ตำแหน่งไว้แล้วใน `src/config/site.ts` ได้แก่ `home`, `category`, `belowTool`, `inContent` และ `sidebar`
2. **Consent CMP**: ใส่ Google-certified CMP ID ใน `.env` ด้วย `PUBLIC_CONSENT_CMP_ID=...` หากยังไม่มี ให้ใช้ banner fallback และตรวจสอบนโยบายกับ Google ก่อนเปิด AdSense เต็มรูปแบบ
3. **อีเมลติดต่อ**: ตั้งเป็น `stackwise@fintechxhub.com` แล้วใน `SITE.contactEmail` และตรวจสอบ inbox
4. **Organization logo**: ตรวจสอบ URL โลโก้ที่ใช้ใน JSON-LD ของ FinTechXHub และแก้ `SITE.parentUrl`/`logo` หากโครงสร้างโดเมนแม่เปลี่ยน
5. **OG image**: ตัวอย่างอยู่ที่ `public/og-default.svg` สามารถเปลี่ยนเป็นภาพ PNG/WebP ขนาด 1200×630 ที่แบรนด์อนุมัติได้
6. **Google Analytics**: ถ้าใช้ Google Analytics ให้เพิ่มเฉพาะ measurement ID ที่ต้องการและอัปเดต Consent Mode; ไม่ควรใส่ secret ลงใน Git
7. **Parent ads.txt**: ต้องสร้างไฟล์เดียวกันที่ `https://fintechxhub.com/ads.txt` แยกจากโปรเจกต์ subdomain

Publisher ID ถูกตั้งค่าไว้แล้วใน `src/config/site.ts`:

```text
ca-pub-3203802670121740
```

ไฟล์ `public/ads.txt` มีข้อมูลตามที่กำหนดไว้แล้ว แต่ต้องตรวจสอบว่า Google AdSense เห็นไฟล์หลัง deploy

## โครงสร้างสำคัญ

```text
src/
  components/
    BaseLayout.astro
    SEO.astro
    Header.astro
    Footer.astro
    AdSlot.astro
    ConsentBanner.astro
    HomePage.astro
    CategoryPage.astro
    ToolPage.astro
    InfoPage.astro
    tools/                 Astro client tool components
  config/
    site.ts
    registry.ts
    tools.ts
    tool-content.ts
  tool-definitions/        ไฟล์ config เดียวต่อ tool
  lib/tools/               pure functions และ business logic
  pages/                   routes และ XML endpoints
  styles/global.css
  tests/                   Vitest unit tests
public/
  _headers
  _redirects
  ads.txt
  manifest.webmanifest
  icon.svg
  og-default.svg
```

## การเพิ่ม tool ใหม่

1. สร้าง pure functions ใน `src/lib/tools/<slug>.ts`
2. สร้าง client component ใน `src/components/tools/<Slug>Tool.astro`
3. สร้าง config ใน `src/tool-definitions/<slug>.ts` ให้มี slug, category, ชื่อ/คำอธิบาย th/en, keywords, component, how-to, long description, FAQ และ related slugs
4. เพิ่ม import และ entry ใน `src/config/registry.ts`
5. เพิ่ม unit tests ใน `src/tests/<slug>.test.ts`
6. รัน `npm run check && npm test && npm run build`

ระบบสร้างหน้า `/tools/<slug>/`, `/en/tools/<slug>/`, breadcrumb, FAQ schema, related links, category listing และ sitemap ให้อัตโนมัติจาก registry

## SEO และ Performance

- `site` และ canonical ใช้ `https://tools.fintechxhub.com`
- แต่ละภาษามี `lang`, `hreflang` และ `x-default`
- มี WebSite SearchAction, WebApplication, BreadcrumbList, FAQPage และ Organization JSON-LD
- `sitemap.xml` เป็น sitemap index และมี `sitemap-th.xml` กับ `sitemap-en.xml`
- `robots.txt` ชี้ไปยัง sitemap หลัก
- มี manifest, lazy client scripts และไม่มี framework runtime
- Ad slot จองพื้นที่ล่วงหน้าเพื่อลด CLS
- ภาพ OG ปัจจุบันเป็น template SVG; ควรเปลี่ยนเป็นภาพ raster ที่ social platform รองรับก่อนเปิดแคมเปญ

Lighthouse 100 เป็นเป้าหมาย ไม่ใช่ค่าที่รับประกันจาก source code เพียงอย่างเดียว ให้ทดสอบหลัง deploy ด้วย URL production, cache และ AdSense ที่เปิดใช้งานจริง

## AdSense และ Consent

- Script โหลดแบบ async หลัง idle หรือ first interaction
- ไม่เปิด Auto ads และไม่มี unit เกิน 3 ต่อหน้า
- ตำแหน่งปัจจุบัน: Home, Category, ใต้ tool, กลางเนื้อหา และ sidebar แนวตั้ง 300×250 เฉพาะ desktop ที่ความกว้างตั้งแต่ 1024px
- ใช้ `min-height` และไม่วางโฆษณาชิด control สำคัญ
- มี Consent Mode v2 default และ fallback banner สำหรับผู้ที่อยู่ในเขต EU/EEA/UK
- เมื่อใส่ CMP ID ให้ทดสอบ Google-certified CMP และอัปเดต Privacy Policy ให้ตรงกับค่าที่เปิดใช้จริง
- ต้องอ่าน AdSense Program Policies ก่อนเปิดโฆษณา และตรวจสอบไม่ให้มีเนื้อหาผิดกฎหมาย ลิงก์หลอก หรือการเก็บข้อมูลที่ไม่จำเป็น

## Cloudflare Workers Static Assets

ค่าสำคัญอยู่ใน `wrangler.toml`:

```toml
name = "toolxhub"
compatibility_date = "2026-09-24"

[assets]
directory = "./dist"
not_found_handling = "404-page"

routes = [
  { pattern = "tools.fintechxhub.com", custom_domain = true }
]

[observability]
enabled = true
```

### Deploy ครั้งแรกแบบทีละขั้น

1. ตรวจสอบว่า account และโดเมนอยู่ใน Cloudflare แล้ว
2. Login ด้วย browser:

   ```bash
   npx wrangler login
   ```

3. ตรวจสอบ account:

   ```bash
   npx wrangler whoami
   ```

4. สร้างไฟล์ `.env` และกรอกค่าที่ต้องใช้
5. ตรวจสอบและ build:

   ```bash
   npm run check
   npm test
   npm run lint
   npm run build
   ```

6. Deploy:

   ```bash
   npx wrangler deploy
   ```

   หรือใช้สคริปต์เดียวกันกับ package scripts:

   ```bash
   npm run deploy
   ```

7. เปิด Cloudflare Dashboard แล้วตรวจสอบ Workers & Pages ว่า custom domain ถูกผูกกับ `tools.fintechxhub.com`
8. เปิด `https://tools.fintechxhub.com/` และตรวจสอบ TLS, cache, routes และ 404

ถ้าใช้ GitHub Actions ให้เพิ่ม secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

จากนั้น push เข้า `main` หรือใช้ `workflow_dispatch`

## Checklist หลัง deploy

- [ ] `https://tools.fintechxhub.com/ads.txt` เปิดได้และมีบรรทัด Publisher ID ถูกต้อง
- [ ] ใส่ ads.txt เดียวกันที่ `https://fintechxhub.com/ads.txt`
- [ ] เพิ่ม `https://tools.fintechxhub.com` ใน Google AdSense Sites และส่งตรวจสอบ
- [x] กรอก AdSense slot ID ทั้ง 5 ตำแหน่งแล้ว และจำกัดไม่เกิน 3 หน่วยต่อหน้า
- [ ] เปิด Google Search Console แบบ Domain property ให้ครอบคลุมทุก subdomain
- [ ] ส่ง `https://tools.fintechxhub.com/sitemap.xml` ใน Search Console
- [ ] ตรวจสอบ `sitemap-th.xml` และ `sitemap-en.xml`
- [ ] ทดสอบ hreflang ระหว่าง `/` และ `/en/`
- [ ] ทดสอบ URL หลัก 5 URL, mobile 320px, keyboard navigation และ dark mode
- [ ] ทดสอบ Lighthouse Performance, Accessibility, Best Practices และ SEO บน production
- [ ] ตรวจสอบ Core Web Vitals ผ่าน Search Console / CrUX หลังมีผู้ใช้จริง
- [ ] เปิด Cloudflare Web Analytics
- [ ] ตรวจสอบ Always HTTPS, Brotli, HTTP/3 และ cache rules
- [ ] ตรวจสอบ `public/_headers` ว่า CSP ไม่บล็อก AdSense, Consent หรือ Funding Choices
- [ ] ทดสอบ Consent Mode ในเขต EU/EEA/UK และตรวจสอบ Privacy Policy ให้ตรงกับ AdSense/Google
- [ ] ตรวจสอบ 404 page และ canonical trailing slash
- [x] ตั้งอีเมลติดต่อ `stackwise@fintechxhub.com` แล้ว
- [ ] เปลี่ยนภาพ OG เป็นภาพ raster ที่แบรนด์อนุมัติก่อนเปิดแคมเปญ

## ข้อจำกัดที่ต้องทราบ

- HEIC → JPG ใช้ browser decoder จึงทำงานได้เฉพาะอุปกรณ์ที่รองรับ codec; ถ้าไม่รองรับจะแจ้งให้ใช้แอปภายนอกที่รองรับ HEIC
- QR Code ใช้ไลบรารี `qrcode` และโหลดเฉพาะหน้า QR
- ฟอนต์หลักใช้ Sarabun แบบ self-host ผ่าน `@fontsource/sarabun` พร้อม `font-display: swap` เพื่อให้ตัวอักษรไทยอ่านนุ่มและชัดขึ้นโดยไม่พึ่ง third-party font CDN
- การตรวจ Lighthouse และ AdSense approval ต้องทำบนโดเมนจริงหลัง deploy ไม่ใช่ค่ารับประกันจาก local build
