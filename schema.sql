-- SQL Insert Script สำหรับเพิ่มบทความทั้ง 10 เรื่อง พร้อมรูปภาพประกอบ (Cover Image) และจัดหมวดหมู่สวยงามสำหรับ ToolXHub

INSERT INTO articles (slug, title, summary, content, category, tags, cover_image, author, is_published) VALUES
(
  'windows-11-essential-shortcuts',
  '10 คีย์ลัด Windows 11 ที่ช่วยเพิ่มความเร็วในการทำงาน 3 เท่า',
  'รวมคีย์ลัดลับและคีย์ลัดจำเป็นบน Windows 11 ที่ช่วยให้คุณสลับหน้าจอ จัดการ Virtual Desktop และเรียกใช้งานฟีเจอร์ด่วนได้ทันทีโดยไม่ต้องใช้เมาส์',
  '# 10 คีย์ลัด Windows 11 ที่ช่วยเพิ่มความเร็วในการทำงาน 3 เท่า\n\nการใช้งานคีย์ลัด (Keyboard Shortcuts) เป็นวิธีที่ง่ายที่สุดในการเพิ่ม Productvity และประหยัดเวลาในการทำงานประจำวันของคุณบน Windows 11\n\n## 1. Snap Layouts ด่วนด้วย Win + Arrow Keys\nกดปุ่ม `Windows + ลูกศรซ้าย/ขวา` เพื่อจัดหน้าต่างแอปพลิเคชันให้ชิดแบ่งครึ่งจอ หรือใช้ `Windows + ลูกศรขึ้น/ลง` เพื่อขยายเต็มจอและย่อหน้าต่าง\n\n## 2. เปิดหน้าต่าง Emoji & Symbols ด้วย Win + Period (.)\nไม่ต้องเสียเวลาค้นหาอิโมจิใน Google อีกต่อไป เพียงกด `Windows + .` (จุด) จะปรากฏหน้าต่างเลือก Emoji, GIFs และสัญลักษณ์พิเศษทันที\n\n## 3. เรียกใช้งาน Task View และจัดการ Desktop ด้วย Win + Tab\nกด `Windows + Tab` เพื่อดูหน้าต่างที่เปิดอยู่ทั้งหมด รวมถึงสร้าง Virtual Desktop ใหม่เพื่อแยกโหมดการทำงานและส่วนตัวออกจากกัน\n\n---\n\nการฝึกใช้คีย์ลัดเหล่านี้เป็นประจำจะช่วยลดการละสายตาและลดอาการเมื่อยล้าจากการใช้เมาส์ได้เป็นอย่างดี',
  'windows',
  'windows11,shortcuts,productivity,tips',
  'https://images.unsplash.com/photo-1585076641933-0c4767c9ea15?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'excel-xlookup-tutorial',
  'เจาะลึกสูตร XLOOKUP ใน Excel: วิธีใช้แทน VLOOKUP แบบขั้นเทพ',
  'เรียนรู้การใช้งาน XLOOKUP ฟังก์ชันค้นหาข้อมูลสุดทรงพลังใน Microsoft Excel ที่เก่งกว่า ยืดหยุ่นกว่า และใช้งานง่ายกว่า VLOOKUP และ HLOOKUP แบบเดิมๆ',
  '# เจาะลึกสูตร XLOOKUP ใน Excel: วิธีใช้แทน VLOOKUP แบบขั้นเทพ\n\nหากคุณยังใช้ VLOOKUP แบบเดิมๆ อยู่ ถึงเวลาอัปเกรดมาใช้ **XLOOKUP** ฟังก์ชันค้นหาข้อมูลยุคใหม่ที่แก้ปัญหาข้อจำกัดเดิมๆ ทั้งหมด\n\n## รูปแบบการใช้งานพื้นฐาน (Syntax)\n```excel\n=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])\n```\n\n## จุดเด่นที่เหนือกว่า VLOOKUP\n- **ค้นหาได้ทั้งซ้ายและขวา:** ไม่จำเป็นต้องให้คอลัมน์ที่ค้นหาอยู่ซ้ายสุดอีกต่อไป\n- **ไม่ต้องระบุ Index Number:** ป้องกันข้อผิดพลาดเมื่อมีการแทรกคอลัมน์ใหม่\n- **กำหนดค่าสำรองได้ทันที:** มีช่องใส่ข้อความกรณีไม่พบข้อมูลในตัวสูตร\n\n---',
  'office',
  'excel,xlookup,formula,spreadsheet',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'ai-prompt-engineering-guide',
  'คู่มือ Prompt Engineering สำหรับนักพัฒนา: เขียนคำสั่งอย่างไรให้ได้โค้ดแม่นยำ',
  'เทคนิคการเขียน Prompt ให้ AI (ChatGPT, Claude, Gemini) ช่วยเขียนโค้ดและ Debug บั๊กได้อย่างแม่นยำ ลดเวลาพัฒนาซอฟต์แวร์และได้โครงสร้างโค้ดที่มีคุณภาพสูง',
  '# คู่มือ Prompt Engineering สำหรับนักพัฒนา: เขียนคำสั่งอย่างไรให้ได้โค้ดแม่นยำ\n\nการใช้งาน Generative AI ในการเขียนโปรแกรมให้ได้ผลลัพธ์ที่ดีเยี่ยม หัวใจสำคัญอยู่ที่ **การเขียน Prompt** ที่ชัดเจนและมีโครงสร้าง\n\n## 4 องค์ประกอบสำคัญของ Developer Prompt\n1. **Role / Persona:** กำหนดบทบาทให้ AI เช่น "คุณคือ Senior TypeScript Architect"\n2. **Context:** อธิบายบริบทของโปรเจกต์และเทคโนโลยีที่ใช้\n3. **Task:** ระบุงานที่ต้องการอย่างเจาะจง\n4. **Constraints:** กำหนดข้อจำกัด เช่น ห้ามใช้ Library ภายนอก หรือต้องรองรับ TypeScript Strict Mode\n\n---',
  'ai',
  'ai,promptengineering,chatgpt,coding',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'linux-bash-scripting-basics',
  'เริ่มต้นเขียน Bash Script บน Linux สำหรับงาน automation พื้นฐาน',
  'คู่มือฉบับเร่งรัดในการสร้าง Bash Script เพื่อ automates งานซ้ำๆ บน Linux server เช่น การสำรองข้อมูล การจัดการไฟล์ และเช็คสถานะระบบ',
  '# เริ่มต้นเขียน Bash Script บน Linux สำหรับงาน automation พื้นฐาน\n\nการทำ Task Automation บน Linux ช่วยลดความผิดพลาดของมนุษย์และประหยัดเวลาได้อย่างมหาศาล\n\n## โครงสร้างเบื้องต้น\n```bash\n#!/bin/bash\n# My First Script\necho "Starting backup..."\ntar -czf backup.tar.gz /var/www/html\necho "Backup completed successfully!"\n```\n\nอย่าลืมให้สิทธิ์รันไฟล์ด้วยคำสั่ง `chmod +x script.sh` ก่อนใช้งานจริง',
  'linux',
  'linux,bash,automation,scripting',
  'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'sql-indexing-performance-tuning',
  'เทคนิคการสร้าง Database Index อย่างไรให้ Query เร็วขึ้น 100 เท่า',
  'เจาะลึกหลักการทำงานของ B-Tree Index, Composite Index และวิธีวิเคราะห์ Query Performance ด้วย EXPLAIN บน PostgreSQL และ MySQL',
  '# เทคนิคการสร้าง Database Index อย่างไรให้ Query เร็วขึ้น 100 เท่า\n\nเมื่อฐานข้อมูลมีขนาดใหญ่ขึ้น การทำ Full Table Scan จะทำให้แอปพลิเคชันช้าลงอย่างเห็นได้ชัด การสร้าง Index ที่ถูกต้องคือทางออก\n\n## ข้อควรระวังในการใช้ Index\n- อย่าสร้าง Index ทุกคอลัมน์ เพราะจะทำให้การทำ INSERT / UPDATE ช้าลง\n- เหมาะกับคอลัมน์ที่ถูกนำมาใช้ในเงื่อนไข `WHERE`, `JOIN` และ `ORDER BY` บ่อยๆ\n\n---',
  'database',
  'sql,database,performance,indexing',
  'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'git-branching-strategy-guide',
  'Git Branching Strategies: เลือกใช้ Git Flow หรือ GitHub Flow ดี?',
  'เปรียบเทียบข้อดีและข้อจำกัดของโมเดลการจัดการ Branch ยอดนิยม เพื่อให้ทีมพัฒนาซอฟต์แวร์ทำงานร่วมกันได้อย่างราบรื่นและมีประสิทธิภาพสูงสุด',
  '# Git Branching Strategies: เลือกใช้ Git Flow หรือ GitHub Flow ดี?\n\nการบริหารจัดการ Branch ใน Git มีผลโดยตรงต่อความเร็วในการ Release ฟีเจอร์และการแก้ Bug ของทีม\n\n## GitHub Flow (เน้นความรวดเร็ว CI/CD)\n- มี Main Branch หลักเพียงสายเดียว\n- ทุกฟีเจอร์หรือ Bugfix ให้สร้าง Branch แยกจาก Main\n- ทำ Pull Request และ Code Review ก่อน Merge กลับเข้า Main\n\nเหมาะสำหรับเว็บแอปพลิเคชันยุคใหม่ที่มีการ Deploy แบบContinuous Deployment',
  'ai',
  'git,github,devops,workflow',
  'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'css-grid-vs-flexbox-guide',
  'CSS Grid vs Flexbox: เลือกใช้เครื่องมือไหนเมื่อไหร่ดีที่สุด',
  'สรุปความแตกต่างและการใช้งาน CSS Layout สองรูปแบบทรงพลัง พร้อมตัวอย่างเคสการใช้งานจริงสำหรับนักพัฒนา Frontend',
  '# CSS Grid vs Flexbox: เลือกใช้เครื่องมือไหนเมื่อไหร่ดีที่สุด\n\nในยุค Modern CSS การจัดเลย์アウトกลายเป็นเรื่องง่ายด้วย Flexbox และ Grid\n\n## เลือกใช้ Flexbox เมื่อไหร่?\n- จัดเรียงไอเทมในแนวแกนเดียว (1 Dimension) เช่น แถบเมนูปุ่มเรียงแนวนอน หรือการจัดกึ่งกลาง\n\n## เลือกใช้ CSS Grid เมื่อไหร่?\n- จัดเลย์เอาต์โครงสร้างหน้าเว็บทั้งหน้าหรือตาราง (2 Dimensions) ที่ซับซ้อนทั้งแถวและคอลัมน์ในเวลาเดียวกัน',
  'design',
  'css,frontend,webdev,flexbox,grid',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'rest-api-best-practices',
  '10 กฎทองในการออกแบบ RESTful API ให้สะอาด ปลอดภัย และใช้ง่าย',
  'แนวปฏิบัติที่ดีที่สุด (Best Practices) สำหรับการออกแบบ API Endpoints, HTTP Status Codes, Authentication และการจัดการ Error อย่างเป็นมาตรฐาน',
  '# 10 กฎทองในการออกแบบ RESTful API ให้สะอาด ปลอดภัย และใช้ง่าย\n\nการออกแบบ API ที่ดีช่วยให้ฝั่ง Frontend และ Mobile App เชื่อมต่อได้อย่างราบรื่น\n\n## หลักการสำคัญ\n1. **ใช้的名詞 (Nouns) สำหรับ Resource Endpoints** เช่น `/api/users` แทนที่จะเป็น `/api/getUsers`\n2. **ใช้ HTTP Status Codes ให้ถูกต้อง** เช่น `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`\n3. **รองรับ Versioning** เช่น `/api/v1/posts` เพื่อป้องกัน Breaking Changes ในอนาคต',
  'ai',
  'api,restful,backend,security',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'cybersecurity-essentials-developers',
  'Web Security เบื้องต้นสำหรับนักพัฒนา: ป้องกันช่องโหว่ OWASP Top 10',
  'ทำความเข้าใจช่องโหว่ยอดฮิต เช่น SQL Injection, XSS และ CSRF พร้อมวิธีป้องกันโค้ดของคุณให้ปลอดภัยจาก Hacker ยุคใหม่',
  '# Web Security เบื้องต้นสำหรับนักพัฒนา: ป้องกันช่องโหว่ OWASP Top 10\n\nความปลอดภัยของแอปพลิเคชันเป็นเรื่องที่ละเลยไม่ได้ การป้องกันตั้งแต่วันแรกช่วยประหยัดค่าใช้จ่ายในการแก้ปัญหาภายหลัง\n\n## จุดที่ต้องระวังเป็นพิเศษ\n- **SQL Injection:** ห้ามนำ Input จากผู้ใช้มาต่อสตริง SQL โดยตรง ให้ใช้ Prepared Statements เสมอ\n- **Cross-Site Scripting (XSS):** ทำการ Sanitize และ Escape ข้อมูลทุกครั้งก่อนแสดงผลบนหน้าเว็บ',
  'ai',
  'security,owasp,webdev,cybersecurity',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
),
(
  'cloudflare-workers-d1-guide',
  'สร้าง Serverless Web App ด้วย Cloudflare Workers และ D1 SQLite',
  'แนะนำการพัฒนาและdeploy เว็บแอปพลิเคชันความเร็วสูงระดับ Edge Network ด้วย Cloudflare Workers และฐานข้อมูล Serverless SQL (D1)',
  '# สร้าง Serverless Web App ด้วย Cloudflare Workers และ D1 SQLite\n\nCloudflare Workers เปิดมิติใหม่ให้กับการพัฒนาเว็บด้วยสถาปัตยกรรม Edge Computing ที่รวดเร็วและประหยัดต้นทุน\n\n## จุดเด่นของ D1 SQLite\n- รันบน Edge ใกล้ตัวผู้ใช้งานมากที่สุด\n- ใช้งานร่วมกับ SQL ภาษาคุ้นเคยได้ทันที\n- เหมาะสำหรับทำ Blog, CMS และ Web Utilities แบบทรงพลัง',
  'database',
  'cloudflare,serverless,sqlite,edge',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  'ToolXHub Editor',
  1
)
ON CONFLICT(slug) DO UPDATE SET cover_image = excluded.cover_image;

-- Replace the retired image URL used by the Windows article.
UPDATE articles SET cover_image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
WHERE slug = 'windows-11-essential-shortcuts'
  AND cover_image = 'https://images.unsplash.com/photo-1585076641933-0c4767c9ea15?q=80&w=1200&auto=format&fit=crop';
