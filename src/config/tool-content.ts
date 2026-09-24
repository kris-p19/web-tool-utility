export interface LocalizedCopyInput {
  th: { topic: string; benefit: string; detail: string; caution: string };
  en: { topic: string; benefit: string; detail: string; caution: string };
}

export function createLongDescription(input: LocalizedCopyInput): { th: string[]; en: string[] } {
  return {
    th: [
      `${input.th.topic} เป็นเครื่องมือที่ช่วยให้งาน${input.th.benefit} โดยไม่ต้องติดตั้งโปรแกรมซับซ้อน เหมาะกับงานที่ต้องการผลลัพธ์เร็วในเว็บไซต์หรือในเครื่องมือสื่อสาร ผู้ใช้สามารถเปิดหน้านี้ได้จากคอมพิวเตอร์หรือโทรศัพท์ แล้วปรับค่าตามลักษณะงานจริงได้`,
      `${input.th.detail} หน้าเว็บแสดงผลลัพธ์ทันทีเมื่อมีการเปลี่ยนแปลงค่า และมีปุ่มสำหรับคัดลอก ดาวน์โหลด หรือล้างข้อมูลตามความเหมาะสม การออกแบบให้ปุ่มและช่องกรอกมีขนาดไม่น้อยกว่า 44px ช่วยให้ใช้งานได้ง่ายบนมือถือและผู้ใช้ที่ใช้คีย์บอร์ดหรือโปรแกรมอ่านหน้าจอ ผลลัพธ์บางส่วนอาจมีการปัดเศษเพื่อให้อ่านง่าย หากต้องการค่าดิบควรตรวจสอบจากช่องผลลัพธ์ก่อนนำไปใช้`,
      `${input.th.caution} ก่อนใช้งานควรอ่านค่าที่ป้อนและตรวจสอบผลลัพธ์กับข้อมูลต้นทาง โดยเฉพาะงานที่มีความสำคัญด้านความถูกต้อง เช่น ข้อมูลการเงิน การวัดผล และไฟล์ที่จะนำไปเผยแพร่ ควรทดลองกับตัวอย่างจำนวนน้อยก่อนใช้กับข้อมูลจำนวนมาก และเก็บต้นฉบับไว้เสมอ หากระบบปลายทางมีข้อกำหนดเรื่อง encoding ขนาดไฟล์ หรือรูปแบบวันที่ ให้ปรับผลลัพธ์ให้ตรงกับข้อกำหนดนั้น`,
      `แนวทางสำคัญของ ToolXHub คือการลดการเก็บข้อมูลที่ไม่จำเป็น การประมวลผลหลักของเครื่องมือทำงานในเบราว์เซอร์ของผู้ใช้ และไม่ควรใช้เป็นที่เก็บข้อมูลถาวร หากต้องการใช้เครื่องมือบนคอมพิวเตอร์สาธารณะ ให้ล้างช่องข้อมูลหลังใช้งานและปิดแท็บเมื่อเสร็จ ผู้ใช้ควรอ่านวิธีใช้งานและคำถามที่พบบ่อยก่อนนำผลลัพธ์ไปใช้ เพื่อให้ได้ผลลัพธ์ที่ถูกต้องและเข้าใจข้อจำกัดของเครื่องมือ`
    ],
    en: [
      `${input.en.topic} is a practical browser utility for ${input.en.benefit}. It is designed for quick, repeatable work without installing a large desktop application. You can open the page on a desktop or mobile device, adjust the available controls, and receive a result without creating an account. The interface keeps the input, output, and common actions close together so the workflow remains understandable on a small screen.`,
      `${input.en.detail}. Results update as the controls change, and the page provides copy, download, clear, or reset actions where they are useful. Controls are designed to remain comfortably tappable, with visible labels and status messages for assistive technology. Some values are rounded for readability; when precision matters, review the output field and use the original source as the authoritative record.`,
      `${input.en.caution}. Test a small example before applying a tool to a large or important data set. Check the input format, encoding, decimal or date assumptions, and the requirements of the destination system. Keep a backup of the original, compare the result with an independent method when possible, and do not treat a generated value as professional financial, legal, medical, or security advice.`,
      `ToolXHub follows a privacy-first approach. The main processing happens locally in the browser whenever the web platform allows it, and input is not intended to be retained as a permanent database record. On a shared device, clear the fields and close the tab after use. Read the step-by-step instructions and frequently asked questions before relying on a result, especially when the output will be published, imported, or used in a business workflow.`,
      `For repeatable work, save the settings or template that worked for your team and document the expected input. A short test case is often enough to catch encoding, rounding, and delimiter mistakes before they reach customers. The page is intentionally small and dependency-light, so it can load quickly on a mobile connection, but the final result still depends on the browser and the system that consumes it. Use the English or Thai route that matches your audience, check the language metadata, and update the source configuration when a tool gains new options.`
    ]
  };
}

export function createFaqs(
  topic: string,
  privacy: string,
  format: string,
  caution: string
): { th: { question: string; answer: string }[]; en: { question: string; answer: string }[] } {
  return {
    th: [
      {
        question: `${topic} ใช้ฟรีหรือไม่?`,
        answer: 'ใช้ฟรี ไม่ต้องสมัครสมาชิก และไม่ต้องติดตั้งโปรแกรมเพิ่มเติม'
      },
      { question: 'ข้อมูลถูกอัปโหลดหรือไม่?', answer: privacy },
      { question: 'ต้องใส่ข้อมูลรูปแบบใด?', answer: format },
      {
        question: 'ผลลัพธ์มีความแม่นยำเพียงใด?',
        answer:
          'ผลลัพธ์ขึ้นอยู่กับข้อมูลและข้อจำกัดของเบราว์เซอร์ ควรตรวจสอบกับต้นฉบับก่อนใช้งานจริง'
      },
      { question: 'มีข้อควรระวังหรือไม่?', answer: caution }
    ],
    en: [
      {
        question: `Is the ${topic} tool free?`,
        answer:
          'Yes. It is free to use, requires no account, and needs no additional desktop application.'
      },
      { question: 'Is my input uploaded?', answer: privacy },
      { question: 'What input format should I use?', answer: format },
      {
        question: 'How accurate is the result?',
        answer:
          'Accuracy depends on the input and browser capabilities. Verify the output against the source before using it in a production workflow.'
      },
      { question: 'Are there any limitations?', answer: caution }
    ]
  };
}
