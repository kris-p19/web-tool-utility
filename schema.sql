-- Schema for ToolXHub Articles & Admin 2FA Auth

CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT DEFAULT '',
  cover_image TEXT DEFAULT '',
  author TEXT DEFAULT 'ToolXHub Editor',
  is_published INTEGER DEFAULT 1,
  views INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(is_published, created_at DESC);

CREATE TABLE IF NOT EXISTS admin_auth (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  totp_secret TEXT DEFAULT '',
  is_totp_enabled INTEGER DEFAULT 0,
  failed_attempts INTEGER DEFAULT 0,
  locked_until DATETIME DEFAULT NULL,
  last_login_at DATETIME DEFAULT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_sessions (
  session_id TEXT PRIMARY KEY,
  admin_id INTEGER NOT NULL,
  user_agent TEXT DEFAULT '',
  ip_address TEXT DEFAULT '',
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES admin_auth(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_sessions_expires ON admin_sessions(expires_at);

-- Initial Seed Data: High Quality Starter Articles
INSERT OR IGNORE INTO articles (slug, title, summary, content, category, tags, cover_image, is_published)
VALUES 
(
  'windows-11-essential-shortcuts',
  '20 คีย์ลัด Windows 11 ที่ช่วยประหยัดเวลาทำงานวันละ 1 ชั่วโมง',
  'รวมคีย์ลัดคัดสรรสำหรับ Windows 11 ที่ช่วยให้คุณทำงานมัลติทาสก์ จัดการหน้าต่าง Snap Layouts และบันทึกหน้าจอได้รวดเร็วทันใจ',
  '# 20 คีย์ลัด Windows 11 ที่ช่วยประหยัดเวลาทำงาน

การใช้งานคอมพิวเตอร์ให้รวดเร็ว สิ่งสำคัญที่สุดคือการลดการพึ่งพาเมาส์และใช้ประโยชน์จาก Keyboard Shortcuts บน Windows 11 ให้เต็มประสิทธิภาพ

---

## 1. กลุ่มคีย์ลัดจัดการหน้าต่าง (Snap & Virtual Desktops)
- **Win + Z**: เปิดแผง Snap Layouts เพื่อจัดหน้าต่าง 2-4 ส่วนได้ทันที
- **Win + ซ้าย / ขวา**: ชิดหน้าต่างซ้ายหรือขวาของจอ
- **Win + Tab**: เปิด Task View สลับ Virtual Desktops
- **Ctrl + Win + D**: สร้าง Virtual Desktop ใหม่ทันที

---

## 2. กลุ่มคีย์ลัดเพิ่มความเร็วในการทำงาน (Productivity)
- **Win + V**: ประวัติ Clipboard (ก๊อปปี้หลายอย่างแล้วเลือกวางได้)
- **Win + Shift + S**: แคปเจอร์หน้าจอ (Snipping Tool) เลือกเฉพาะส่วนที่ต้องการ
- **Win + . (จุด)**: เปิดกล่อง Emoji, GIF และสัญลักษณ์พิเศษ
- **Win + E**: เปิด File Explorer ทันที
- **Win + L**: ล็อกหน้าจอทันทีเมื่อลุกออกจากโต๊ะ

---

## สรุป
ฝึกใช้เพียงวันละ 2-3 คีย์ลัด สัปดาห์เดียวคุณจะประหยัดเวลาทำงานได้มหาศาล!',
  'windows',
  'windows, shortcuts, productivity, pc',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60',
  1
),
(
  'excel-xlookup-tutorial',
  'เลิกใช้ VLOOKUP! วิธีใช้ XLOOKUP ใน Excel ฉบับใช้งานจริง',
  'สอนวิธีใช้งานสูตร XLOOKUP ที่ดีกว่า VLOOKUP ทุกด้าน ทั้งค้นหาจากขวาไปซ้าย ไม่ต้องนับคอลัมน์ และแก้ปัญหา #N/A ได้ในตัว',
  '# เลิกใช้ VLOOKUP! วิธีใช้ XLOOKUP ใน Excel ฉบับเข้าใจง่าย

หากคุณยังใช้ `VLOOKUP` อยู่ ถึงเวลาแล้วที่จะเปลี่ยนมาใช้ **`XLOOKUP`** ซึ่งเป็นฟังก์ชันค้นหาข้อมูลที่ Microsoft พัฒนาขึ้นมาเพื่อแทนที่ทั้ง VLOOKUP, HLOOKUP และ INDEX/MATCH

---

## ทำไม XLOOKUP ถึงดีกว่า VLOOKUP?
1. ค้นหาข้อมูลจาก **ขวาไปซ้าย** ได้ (VLOOKUP ทำไม่ได้)
2. **ไม่ต้องนับ Index คอลัมน์** เช่น 2, 3, 4 ให้ตาลาย
3. ใส่ค่าที่ต้องการแสดงเมื่อหาไม่พบ (if_not_found) ได้ในตัว ไม่ต้องซ้อน `IFERROR`
4. ปลอดภัย เมื่อแทรกคอลัมน์ใหม่ สูตรจะไม่พัง!

---

## โครงสร้างสูตร XLOOKUP
\`\`\`excel
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])
\`\`\`

- **lookup_value**: ค่าที่เราต้องการค้นหา (เช่น รหัสพนักงาน)
- **lookup_array**: คอลัมน์ที่เก็บค่านั้นไว้ (เช่น คอลัมน์ A)
- **return_array**: คอลัมน์ผลลัพธ์ที่เราต้องการได้กลับมา (เช่น คอลัมน์ C)
- **if_not_found**: ถ้าหาไม่เจอให้แสดงคำว่าอะไร เช่น \"ไม่พบข้อมูล\"

---

## ตัวอย่างการใช้งานจริง
\`\`\`excel
=XLOOKUP(E2, A2:A100, C2:C100, "ไม่พบข้อมูล")
\`\`\`
สูตรนี้จะมองหารหัสในช่อง E2 ในช่วง A2:A100 แล้วดึงข้อมูลจาก C2:C100 ออกมาแสดงผลทันที',
  'office',
  'excel, xlookup, office, formula, data',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
  1
),
(
  'ai-prompt-engineering-guide',
  'เทคนิคเขียน Prompt AI (ChatGPT, Claude, Gemini) ให้ได้งานคุณภาพระดับ Pro',
  'เทคนิคการสั่งงาน AI แบบมืออาชีพด้วยโครงสร้าง C-R-E-A-T-E เพื่อให้ได้ผลลัพธ์ที่ตรงจุด มีคุณภาพสูง และไม่ต้องสั่งซ้ำหลายรอบ',
  '# เทคนิคเขียน Prompt AI ให้ได้ผลลัพธ์ระดับมืออาชีพ

หลายคนสั่ง AI แล้วได้คำตอบกว้างๆ หรือไม่ตรงใจ สาเหตุหลักไม่ได้อยู่ที่ AI แต่เป็นที่ **\"โครงสร้างของ Prompt\"**

---

## สูตรลับโครงสร้าง Prompt: C-R-E-A-T-E
1. **Context (บริบท)**: บอก AI ว่าเรากำลังทำอะไร เช่น \"ฉันกำลังทำเว็บไซต์เครื่องมือสำหรับ Developer\"
2. **Role (บทบาท)**: กำหนดตัวตนให้ AI เช่น \"จงสวมบทบาทเป็น Senior Tech Writer\"
3. **Explicit Task (คำสั่งที่ชัดเจน)**: ระบุสิ่งที่ต้องทำ เช่น \"เขียนสรุป 5 ขั้นตอนสั้นๆ\"
4. **Audience (กลุ่มเป้าหมาย)**: เช่น \"เขียนให้โปรแกรมเมอร์มือใหม่เข้าใจง่าย\"
5. **Tone (น้ำเสียง)**: เช่น \"เป็นมืออาชีพ มีความกระชับ ตรงประเด็น\"
6. **Example (ตัวอย่างผลลัพธ์)**: ให้ตัวอย่าง Format เช่น Bullet points หรือตาราง Markdown

---

## ตัวอย่าง Prompt ที่แย่ vs ดีเยี่ยม
❌ **แบบแย่:** \"ช่วยคิดชื่อหัวข้อบทความเกี่ยวกับการทำ SEO ให้หน่อย\"
✅ **แบบโปร:** \"คุณคือผู้เชี่ยวชาญด้าน On-Page SEO ช่วยตั้งหัวข้อบทความภาษาไทยจำนวน 5 หัวข้อ สำหรับคีย์เวิร์ด ''ประกันสุขภาพ'' ที่เน้นดึงดูด CTR สูง ความยาวไม่เกิน 60 ตัวอักษร ขอผลลัพธ์เป็นตาราง Markdown พร้อมบอกจุดเด่นของแต่ละชื่อ\"

ลองนำไปปรับใช้กับงานของคุณวันนี้ได้เลย!',
  'ai',
  'ai, prompt, gemini, chatgpt, claude, tips',
  'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=60',
  1
);
