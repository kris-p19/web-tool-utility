export type ContentIntent = 'guide' | 'commercial' | 'informational' | 'comparison';
export type ToneOfVoice = 'professional' | 'conversational' | 'persuasive';

export interface SeoContentOptions {
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: ContentIntent;
  tone: ToneOfVoice;
  lang?: 'th' | 'en';
}

export interface SeoTitleOption {
  title: string;
  charCount: number;
  score: number;
}

export interface MetaDescriptionOption {
  description: string;
  charCount: number;
  score: number;
}

export interface SeoAuditCheck {
  id: string;
  label: string;
  passed: boolean;
  score: number; // out of 100 share
  message: string;
}

export interface SeoQualityAudit {
  overallScore: number;
  checks: SeoAuditCheck[];
  keywordDensity: number;
  wordCount: number;
  charCount: number;
}

export interface SeoContentResult {
  titles: SeoTitleOption[];
  metaDescriptions: MetaDescriptionOption[];
  slug: string;
  outline: { level: 'h1' | 'h2' | 'h3'; text: string }[];
  fullDraftMarkdown: string;
  fullDraftHtml: string;
  metaTagsCode: string;
  audit: SeoQualityAudit;
}

export function cleanKeyword(kw: string): string {
  return kw.trim().replace(/\s+/g, ' ');
}

export function generateSlug(keyword: string): string {
  const cleaned = cleanKeyword(keyword).toLowerCase();
  // If latin characters present
  const latinSlug = cleaned
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  if (latinSlug.length >= 3) return latinSlug;

  // Thai transliteration fallback or clean safe slug
  return 'guide-' + encodeURIComponent(cleaned).toLowerCase().replace(/%/g, '-').slice(0, 40);
}

export function calculateKeywordDensity(text: string, keyword: string): number {
  if (!text || !keyword) return 0;
  const lowerText = text.toLowerCase();
  const lowerKw = keyword.toLowerCase();
  const occurrences = lowerText.split(lowerKw).length - 1;
  const totalWords = text.trim().split(/\s+/).filter(Boolean).length;
  if (totalWords === 0) return 0;
  const density = (occurrences / totalWords) * 100;
  return Math.round(density * 10) / 10;
}

export function auditSeoQuality(
  content: string,
  title: string,
  metaDesc: string,
  options: SeoContentOptions
): SeoQualityAudit {
  const kw = cleanKeyword(options.primaryKeyword);
  const kwLower = kw.toLowerCase();
  const titleLower = title.toLowerCase();
  const descLower = metaDesc.toLowerCase();
  const contentLower = content.toLowerCase();

  const checks: SeoAuditCheck[] = [];

  // 1. Primary Keyword in Title (20 pts)
  const kwInTitle = titleLower.includes(kwLower);
  checks.push({
    id: 'kw-in-title',
    label: 'Primary Keyword in Title',
    passed: kwInTitle,
    score: kwInTitle ? 20 : 0,
    message: kwInTitle
      ? 'คีย์เวิร์ดหลักปรากฏใน Title Tag ชัดเจน'
      : 'ควรใส่คีย์เวิร์ดหลักใน Title Tag เพื่อให้ Search Engine เข้าใจตรงจุด'
  });

  // 2. Title Length 40 - 65 chars (15 pts)
  const titleLen = title.length;
  const titleLenPass = titleLen >= 40 && titleLen <= 70;
  checks.push({
    id: 'title-length',
    label: 'Title Length (40-70 chars)',
    passed: titleLenPass,
    score: titleLenPass ? 15 : Math.max(5, Math.round(15 * (1 - Math.abs(55 - titleLen) / 55))),
    message: titleLenPass
      ? `ความยาว Title (${titleLen} ตัวอักษร) เหมาะสม ไม่ล้นหน้าผลค้นหา Google`
      : `ความยาว Title ปัจจุบันคือ ${titleLen} ตัวอักษร (แนะนำช่วง 45-65 ตัวอักษร)`
  });

  // 3. Keyword in Meta Description (15 pts)
  const kwInDesc = descLower.includes(kwLower);
  checks.push({
    id: 'kw-in-desc',
    label: 'Keyword in Meta Description',
    passed: kwInDesc,
    score: kwInDesc ? 15 : 0,
    message: kwInDesc
      ? 'คีย์เวิร์ดหลักปรากฏใน Meta Description ช่วยเพิ่ม CTR'
      : 'ควรมีคีย์เวิร์ดหลักใน Meta Description เพื่อให้ Google ไฮไลท์ตัวหนา'
  });

  // 4. Meta Description Length 120 - 165 chars (15 pts)
  const descLen = metaDesc.length;
  const descLenPass = descLen >= 120 && descLen <= 170;
  checks.push({
    id: 'desc-length',
    label: 'Meta Description Length (120-165 chars)',
    passed: descLenPass,
    score: descLenPass ? 15 : 8,
    message: descLenPass
      ? `ความยาว Meta Description (${descLen} ตัวอักษร) ดึงดูดและพอดีกับ Snippet`
      : `ความยาวปัจจุบัน ${descLen} ตัวอักษร (แนะนำช่วง 130-160 ตัวอักษร)`
  });

  // 5. Keyword in First 100 words of content (15 pts)
  const first100Words = content.slice(0, 500).toLowerCase();
  const kwEarly = first100Words.includes(kwLower);
  checks.push({
    id: 'kw-early',
    label: 'Keyword in First 100 Words',
    passed: kwEarly,
    score: kwEarly ? 15 : 0,
    message: kwEarly
      ? 'พบคีย์เวิร์ดหลักในย่อหน้าแรก ช่วยยืนยัน Search Intent ทันที'
      : 'ควรใส่คีย์เวิร์ดหลักในย่อหน้าแรกเพื่อจับความสนใจผู้อ่านและบอทค้นหา'
  });

  // 6. Heading Hierarchy H1/H2 (10 pts)
  const hasH1 = content.includes('# ') || content.includes('<h1>');
  const hasH2 = content.includes('## ') || content.includes('<h2>');
  const headingPass = hasH1 && hasH2;
  checks.push({
    id: 'headings',
    label: 'Proper Heading Hierarchy (H1, H2)',
    passed: headingPass,
    score: headingPass ? 10 : 3,
    message: headingPass
      ? 'โครงสร้างหัวข้อ H1 และ H2 ครบถ้วนตามมาตรฐาน SEO'
      : 'ควรใช้ H1 เพียงหนึ่งจุด และแบ่งหัวข้อย่อยด้วย H2 อย่างเป็นระเบียบ'
  });

  // 7. LSI & Secondary Keywords Coverage (10 pts)
  const lsiFound = options.secondaryKeywords.filter((sec) =>
    contentLower.includes(sec.toLowerCase().trim())
  );
  const lsiRatio = options.secondaryKeywords.length > 0
    ? lsiFound.length / options.secondaryKeywords.length
    : 1;
  const lsiPass = lsiRatio >= 0.5;
  checks.push({
    id: 'lsi-coverage',
    label: 'Secondary & LSI Keywords Coverage',
    passed: lsiPass,
    score: Math.round(10 * lsiRatio),
    message: lsiPass
      ? `ครอบคลุมคีย์เวิร์ดรอง (${lsiFound.length}/${options.secondaryKeywords.length}) กระจายเนื้อหาได้อย่างธรรมชาติ`
      : 'แนะนำให้เพิ่มคีย์เวิร์ดรองเพื่อครอบคลุมหัวข้อที่เกี่ยวข้อง (Semantic Search)'
  });

  const totalScore = Math.min(
    100,
    checks.reduce((sum, c) => sum + c.score, 0)
  );

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const density = calculateKeywordDensity(content, kw);

  return {
    overallScore: totalScore,
    checks,
    keywordDensity: density,
    wordCount,
    charCount: content.length
  };
}

export function generateSeoContent(options: SeoContentOptions): SeoContentResult {
  const kw = cleanKeyword(options.primaryKeyword) || 'เครื่องมือออนไลน์';
  const secKws = options.secondaryKeywords.map(cleanKeyword).filter(Boolean);
  const isEn = options.lang === 'en';

  const currentYear = new Date().getFullYear();

  // Generate 3 High-CTR SEO Titles (aiming for 50-60 characters)
  const titles: SeoTitleOption[] = isEn
    ? [
        {
          title: `${kw}: Complete Guide & Best Practices (${currentYear})`,
          charCount: `${kw}: Complete Guide & Best Practices (${currentYear})`.length,
          score: 98
        },
        {
          title: `How to Master ${kw} - Step-by-Step Tutorial & Tips`,
          charCount: `How to Master ${kw} - Step-by-Step Tutorial & Tips`.length,
          score: 95
        },
        {
          title: `Top Benefits of ${kw} You Need to Know in ${currentYear}`,
          charCount: `Top Benefits of ${kw} You Need to Know in ${currentYear}`.length,
          score: 92
        }
      ]
    : [
        {
          title: `${kw} คืออะไร? เจาะลึกวิธีใช้งานและข้อดี อัปเดตปี ${currentYear + 543}`,
          charCount: `${kw} คืออะไร? เจาะลึกวิธีใช้งานและข้อดี อัปเดตปี ${currentYear + 543}`.length,
          score: 99
        },
        {
          title: `คู่มือ ${kw} ฉบับสมบูรณ์: ขั้นตอนง่ายๆ ที่ควรรู้ [ล่าสุด]`,
          charCount: `คู่มือ ${kw} ฉบับสมบูรณ์: ขั้นตอนง่ายๆ ที่ควรรู้ [ล่าสุด]`.length,
          score: 96
        },
        {
          title: `รวมจุดเด่น ${kw} เลือกอย่างไรให้คุ้มค่าและตอบโจทย์ที่สุด`,
          charCount: `รวมจุดเด่น ${kw} เลือกอย่างไรให้คุ้มค่าและตอบโจทย์ที่สุด`.length,
          score: 94
        }
      ];

  const primaryTitle = titles[0]?.title ?? '';

  // Generate 2 High-Quality Meta Descriptions (140-160 characters)
  const secListStr = secKws.slice(0, 2).join(', ');
  const metaDescriptions: MetaDescriptionOption[] = isEn
    ? [
        {
          description: `Discover everything about ${kw}. Learn key benefits, actionable step-by-step guidance, and professional insights updated for ${currentYear}. Read now!`,
          charCount: 154,
          score: 98
        },
        {
          description: `Looking for ${kw}? Explore expert tips${secListStr ? `, covering ${secListStr}` : ''} to optimize your results. Fast, reliable, and complete overview today.`,
          charCount: 156,
          score: 95
        }
      ]
    : [
        {
          description: `สรุปครบเรื่อง ${kw} ทำความเข้าใจจุดเด่น ขั้นตอนการใช้งานที่ถูกต้อง พร้อมข้อดีและคำแนะนำจากผู้เชี่ยวชาญ อัปเดตล่าสุด ${currentYear + 543} อ่านต่อที่นี่!`,
          charCount: 155,
          score: 99
        },
        {
          description: `ค้นพบเคล็ดลับเกี่ยวกับ ${kw}${secListStr ? ` รวมถึง ${secListStr}` : ''} ช่วยให้คุณตัดสินใจได้คุ้มค่า ถูกต้อง พร้อมคำถามที่พบบ่อย ครบจบในที่เดียว!`,
          charCount: 152,
          score: 96
        }
      ];

  const primaryMeta = metaDescriptions[0]?.description ?? '';
  const slug = generateSlug(kw);

  // Outline
  const outline: { level: 'h1' | 'h2' | 'h3'; text: string }[] = isEn
    ? [
        { level: 'h1', text: `${kw}: Complete Comprehensive Guide (${currentYear})` },
        { level: 'h2', text: `1. What is ${kw} and Why Does it Matter?` },
        { level: 'h2', text: `2. Key Advantages & Core Benefits of ${kw}` },
        { level: 'h2', text: `3. Step-by-Step Implementation Guide` },
        { level: 'h3', text: `Expert Tips & Common Pitfalls to Avoid` },
        { level: 'h2', text: `4. Frequently Asked Questions (FAQ)` },
        { level: 'h2', text: `5. Final Conclusion and Action Plan` }
      ]
    : [
        { level: 'h1', text: `${kw} คืออะไร? เจาะลึกวิธีใช้งานและข้อดี อัปเดตปี ${currentYear + 543}` },
        { level: 'h2', text: `1. ทำความรู้จักกับ ${kw} และความสำคัญที่ไม่ควรมองข้าม` },
        { level: 'h2', text: `2. ข้อดีและประโยชน์หลักที่คุณจะได้รับจาก ${kw}` },
        { level: 'h2', text: `3. ขั้นตอนและแนวทางปฏิบัติในการใช้ ${kw} อย่างถูกต้อง` },
        { level: 'h3', text: `เคล็ดลับเพิ่มเติมและข้อควรระวังสำหรับผู้เริ่มต้น` },
        { level: 'h2', text: `4. คำถามที่พบบ่อยเกี่ยวกับ ${kw} (FAQ)` },
        { level: 'h2', text: `5. สรุปภาพรวมและขั้นตอนถัดไป` }
      ];

  // Full Article Markdown
  const secondaryMention = secKws.length > 0 ? secKws.join(', ') : (isEn ? 'efficiency and accuracy' : 'ความสะดวกและประสิทธิภาพ');

  const fullDraftMarkdown = isEn
    ? `# ${outline[0]?.text ?? kw}

In today's fast-paced digital environment, understanding **${kw}** has become an essential priority. Whether you are looking to streamline your workflow, improve decision-making, or leverage ${secondaryMention}, having a clear and practical understanding is the first step toward achieving measurable success.

In this comprehensive guide, we will break down everything you need to know about **${kw}**, from fundamental concepts to actionable best practices.

---

## 1. What is ${kw} and Why Does it Matter?

At its core, **${kw}** represents a proven solution designed to address specific real-world challenges. When implemented effectively, it helps individuals and organizations achieve higher standards of quality, reliability, and speed.

Key reasons why **${kw}** is increasingly valuable today include:
- **Enhanced Productivity:** Eliminates redundant processes and provides a systematic framework.
- **Cost Effectiveness:** Reduces potential risks and long-term operational expenditures.
- **Future-Ready Adaptability:** Easily scales to accommodate new trends and evolving requirements.

---

## 2. Key Advantages & Core Benefits of ${kw}

When evaluating **${kw}**, several distinct advantages set it apart:

1. **Precision & Consistency:** Ensures predictable, repeatable outcomes across different use cases.
2. **Seamless Integration:** Works harmoniously alongside existing tools and workflows.
3. **Optimized Performance:** Maximizes return on effort by focusing on high-impact objectives.

By incorporating ${secondaryMention} alongside **${kw}**, you establish a resilient foundation that supports ongoing growth and stability.

---

## 3. Step-by-Step Implementation Guide

To get the most out of **${kw}**, follow these structured steps:

- **Step 1: Define Clear Objectives:** Identify the exact problem you intend to solve with **${kw}**.
- **Step 2: Review Prerequisites:** Ensure all necessary tools and resources are in place.
- **Step 3: Execute in Incremental Stages:** Begin with a pilot phase before rolling out fully.
- **Step 4: Monitor & Refine:** Regularly measure performance metrics and make adjustments.

### Expert Tips & Common Pitfalls to Avoid
- **Do:** Keep procedures documented and easily accessible.
- **Don't:** Overcomplicate initial configurations; start simple and iterate.

---

## 4. Frequently Asked Questions (FAQ)

### Q: Who can benefit most from ${kw}?
**A:** Anyone seeking to optimize their workflow and achieve dependable results, from individual professionals to growing teams.

### Q: How quickly can I see results with ${kw}?
**A:** Immediate improvements are often visible within the first few iterations, with compound benefits accumulating over time.

---

## 5. Final Conclusion and Action Plan

Mastering **${kw}** is one of the most effective ways to stay ahead. By taking a proactive, well-informed approach, you can unlock greater value, reduce unnecessary friction, and achieve your goals with confidence.
`
    : `# ${outline[0]?.text ?? kw}

ในยุคปัจจุบันที่ข้อมูลและการดำเนินงานต้องแข่งขันกับความรวดเร็วและความแม่นยำ **${kw}** ได้กลายเป็นหนึ่งในหัวข้อสำคัญที่มีบทบาทอย่างยิ่ง ไม่ว่าคุณจะเป็นผู้ใช้งานทั่วไปหรือกำลังมองหาแนวทางเพิ่มประสิทธิภาพ การทำความเข้าใจอย่างถ่องแท้จะช่วยให้คุณตัดสินใจได้อย่างคุ้มค่าและไม่เสียเวลา

บทความนี้จะพาคุณไปเจาะลึกทุกแง่มุมของ **${kw}** ตั้งแต่หลักการพื้นฐาน ข้อดีที่แท้จริง ตลอดจนแนวทางปฏิบัติที่สามารถนำไปปรับใช้ได้ทันที

---

## 1. ทำความรู้จักกับ ${kw} และความสำคัญที่ไม่ควรมองข้าม

หากอธิบายอย่างตรงไปตรงมา **${kw}** คือเครื่องมือหรือแนวทางที่เข้ามาตอบโจทย์ความต้องการเฉพาะด้านอย่างเป็นระบบ ช่วยเปลี่ยนกระบวนการที่เคยซับซ้อนให้กลายเป็นเรื่องง่ายและตรวจสอบได้

จุดเด่นที่ทำให้ **${kw}** ได้รับความนิยมสูงขึ้นอย่างต่อเนื่อง ได้แก่:
- **ความสะดวกและประหยัดเวลา:** ช่วยลดขั้นตอนที่ซ้ำซ้อนและลดความผิดพลาดที่เกิดจากมนุษย์
- **ความคุ้มค่าในระยะยาว:** เพิ่มผลผลิตและช่วยให้คุณควบคุมทรัพยากรได้อย่างคุ้มค่า
- **มาตรฐานและความน่าเชื่อถือ:** สร้างความมั่นใจในทุกผลลัพธ์ที่ได้จากการใช้งาน

เมื่อผสานเข้ากับ **${secondaryMention}** ยิ่งช่วยเสริมให้การทำงานมีความสมบูรณ์แบบมากยิ่งขึ้น

---

## 2. ข้อดีและประโยชน์หลักที่คุณจะได้รับจาก ${kw}

การเลือกใช้ **${kw}** อย่างถูกวิธีมอบประโยชน์รอบด้าน โดยมีจุดแข็งที่สำคัญดังนี้:

1. **ความถูกต้องแม่นยำ:** ลดความเสี่ยงจากข้อผิดพลาด ให้ผลลัพธ์ที่เป็นมาตรฐานสากล
2. **การเข้าถึงที่ง่ายดาย:** ไม่ต้องผ่านขั้นตอนยุ่งยาก สามารถเริ่มต้นใช้งานได้ทันที
3. **ความปลอดภัยและความเป็นส่วนตัว:** ปกป้องข้อมูลสำคัญและดำเนินงานได้อย่างโปร่งใส

---

## 3. ขั้นตอนและแนวทางปฏิบัติในการใช้ ${kw} อย่างถูกต้อง

เพื่อให้เกิดประสิทธิภาพสูงสุด แนะนำให้ปฏิบัติตาม 4 ขั้นตอนง่ายๆ ดังนี้:

- **ขั้นตอนที่ 1 กำหนดเป้าหมาย:** ทำความเข้าใจวัตถุประสงค์ของการใช้ **${kw}** ให้ชัดเจน
- **ขั้นตอนที่ 2 เตรียมข้อมูลให้พร้อม:** ตรวจสอบความถูกต้องของข้อมูลตั้งต้นก่อนเริ่มดำเนินการ
- **ขั้นตอนที่ 3 ดำเนินการและตรวจสอบ:** นำ **${kw}** ไปประยุกต์ใช้พร้อมตรวจสอบผลลัพธ์ในแต่ละจุด
- **ขั้นตอนที่ 4 ปรับปรุงต่อเนื่อง:** บันทึกผลลัพธ์เพื่อนำมาต่อยอดและพัฒนาให้ดียิ่งขึ้น

### เคล็ดลับเพิ่มเติมและข้อควรระวังสำหรับผู้เริ่มต้น
- **สิ่งที่ควรทำ:** ตรวจสอบข้อมูลอ้างอิงล่าสุดเสมอ และเลือกใช้เครื่องมือที่น่าเชื่อถือ
- **สิ่งที่ไม่ควรทำ:** ไม่ควรเร่งรีบโดยมองข้ามขั้นตอนการตรวจสอบความถูกต้อง

---

## 4. คำถามที่พบบ่อยเกี่ยวกับ ${kw} (FAQ)

### Q: ${kw} เหมาะกับใครบ้าง?
**A:** เหมาะสำหรับทุกคนที่ต้องการเพิ่มความสะดวก รวดเร็ว และความถูกต้องในการทำงาน ทั้งระดับบุคคลและระดับองค์กร

### Q: การเริ่มต้นใช้งาน ${kw} มีค่าใช้จ่ายสูงหรือไม่?
**A:** ปัจจุบันมีตัวเลือกและเครื่องมือออนไลน์ที่เปิดให้ใช้งานได้ฟรีโดยไม่มีค่าใช้จ่ายแอบแฝง

---

## 5. สรุปภาพรวมและขั้นตอนถัดไป

กล่าวโดยสรุป **${kw}** เป็นเครื่องมือและแนวทางที่มีคุณค่าอย่างยิ่ง ช่วยยกระดับประสิทธิภาพและความถูกต้องในทุกมิติ หากคุณนำหลักการในบทความนี้ไปปรับใช้ จะช่วยประหยัดเวลาและสร้างผลลัพธ์ที่ยอดเยี่ยมได้อย่างแน่นอน
`;

  // HTML format
  const fullDraftHtml = `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'th'}">
<head>
  <meta charset="UTF-8">
  <title>${primaryTitle}</title>
  <meta name="description" content="${primaryMeta}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://yourdomain.com/${slug}/">
</head>
<body>
  <article>
    <h1>${outline[0]?.text ?? kw}</h1>
    <p>ในยุคปัจจุบันที่ข้อมูลและการดำเนินงานต้องแข่งขันกับความรวดเร็วและความแม่นยำ <strong>${kw}</strong> ได้กลายเป็นหนึ่งในหัวข้อสำคัญที่มีบทบาทอย่างยิ่ง...</p>
    <h2>1. ทำความรู้จักกับ ${kw}</h2>
    <p>...</p>
    <h2>2. ข้อดีและประโยชน์หลักของ ${kw}</h2>
    <p>...</p>
    <h2>3. ขั้นตอนการใช้งาน ${kw}</h2>
    <p>...</p>
    <h2>4. คำถามที่พบบ่อย (FAQ)</h2>
    <p>...</p>
  </article>
</body>
</html>`;

  // Meta Tags snippet
  const metaTagsCode = `<!-- Primary Meta Tags -->
<title>${primaryTitle}</title>
<meta name="title" content="${primaryTitle}">
<meta name="description" content="${primaryMeta}">
<meta name="keywords" content="${kw}, ${secKws.join(', ')}">
<link rel="canonical" href="https://yourdomain.com/${slug}/">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="article">
<meta property="og:url" content="https://yourdomain.com/${slug}/">
<meta property="og:title" content="${primaryTitle}">
<meta property="og:description" content="${primaryMeta}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="${primaryTitle}">
<meta property="twitter:description" content="${primaryMeta}">`;

  // Run Real-time SEO Audit
  const audit = auditSeoQuality(fullDraftMarkdown, primaryTitle, primaryMeta, options);

  return {
    titles,
    metaDescriptions,
    slug,
    outline,
    fullDraftMarkdown,
    fullDraftHtml,
    metaTagsCode,
    audit
  };
}
