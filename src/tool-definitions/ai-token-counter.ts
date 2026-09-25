import type { ToolConfig } from '../config/tools';
import AiTokenCounterTool from '../components/tools/AiTokenCounterTool.astro';

const tool: ToolConfig = {
  slug: 'ai-token-counter',
  icon: 'AI',
  category: 'ai-dev',
  name: {
    th: 'คำนวณ AI Token & ค่าใช้จ่าย (Token Counter)',
    en: 'AI Token Counter & Cost Estimator'
  },
  shortDescription: {
    th: 'นับจำนวน AI Token และประเมินค่าใช้จ่าย API สำหรับ GPT-4o, Gemini 1.5, Claude 3.5 พร้อม Token Visualizer',
    en: 'Count AI tokens and estimate API costs for GPT-4o, Gemini 1.5, and Claude 3.5 with color visualizer.'
  },
  description: {
    th: 'เครื่องมือนับจำนวน AI Token (AI Tokenizer) และประเมินราคา API (Cost Estimator) แบบเรียลไทม์ รองรับโมเดลชั้นนำ เช่น OpenAI GPT-4o, Google Gemini 1.5/2.0, และ Anthropic Claude 3.5 พร้อมระบบ Token Visualizer ไฮไลท์การตัดชิ้นส่วน Token ด้วยสีสันชัดเจน คำนวณค่าใช้จ่ายทั้งสกุล USD ($) และเงินบาทไทย (THB) ประมวลผลบนเบราว์เซอร์อย่างปลอดภัย 100%',
    en: 'Real-time AI Token Counter and API Cost Estimator for leading LLMs including OpenAI GPT-4o, Google Gemini 1.5/2.0, and Anthropic Claude 3.5. Includes an interactive color-coded Token Visualizer and dual currency (USD/THB) cost calculation. 100% private and browser-based.'
  },
  keywords: {
    th: [
      'นับ token',
      'AI token counter',
      'คำนวณ token',
      'คำนวณราคา AI',
      'GPT-4o token',
      'Gemini token',
      'Claude token',
      'tokenizer ภาษาไทย',
      'API cost calculator'
    ],
    en: [
      'ai token counter',
      'token calculator',
      'llm tokenizer',
      'gpt4o token count',
      'gemini token counter',
      'claude token counter',
      'api cost estimator',
      'thai tokenizer'
    ]
  },
  component: AiTokenCounterTool,
  howTo: {
    th: [
      'เลือกโมเดล AI ที่คุณใช้งาน (เช่น GPT-4o, Gemini 1.5 Flash, Claude 3.5 Sonnet)',
      'พิมพ์หรือวาง Prompt หรือข้อความที่ต้องการทดสอบลงในช่องกรอกข้อความ',
      'ดูจำนวน Token ทั้งหมด ค่าใช้จ่ายประเมินฝั่ง Input และ Output (ทั้ง USD และ THB)',
      'ดูการตัดแบ่งชิ้นส่วน Token ในกล่อง "Token Visualizer" ด้านล่าง เพื่อศึกษาพฤติกรรมการ tokenize ของคำ'
    ],
    en: [
      'Select your target AI model (e.g., GPT-4o, Gemini 1.5 Flash, Claude 3.5 Sonnet).',
      'Type or paste your prompt or code into the text area.',
      'Review total token count, character count, and estimated API costs in both USD and THB.',
      'Explore token boundaries in the interactive Token Visualizer section.'
    ]
  },
  longDescription: {
    th: [
      'ในการใช้งานโมเดลภาษาขนาดใหญ่ (Large Language Models - LLMs) เช่น GPT-4o, Gemini หรือ Claude โมเดลไม่ได้อ่านข้อจำเป็นประโยคหรือตัวอักษรโดยตรง แต่จะทำการแปลงข้อความเป็นหน่วยย่อยที่เรียกว่า "Token" ซึ่งอาจเป็นคำเต็ม ส่วนหนึ่งของคำ หรือแม้แต่ตัวอักษรเดี่ยวๆ ตามกระบวนการ Byte Pair Encoding (BPE)',
      'สำหรับภาษาไทย โทเค็นมีความสำคัญอย่างยิ่ง เนื่องจากภาษาไทยไม่มีช่องว่างเว้นวรรคระหว่างคำ และพยัญชนะ สระ วรรณยุกต์มักถูกเข้ารหัสด้วย Unicode หลายไบต์ ทำให้คำภาษาไทย 1 คำอาจใช้ตั้งแต่ 1 ถึง 3 Token ขึ้นอยู่กับการตัดคำ เครื่องมือนี้จำลองการตัดคำและโทเค็นของโมเดล AI สมัยใหม่ ช่วยให้คุณทราบจำนวน Token ล่วงหน้าเพื่อควบคุมขนาด Context Window ไม่ให้เกินขีดจำกัด',
      'นอกจากนี้ เครื่องมือยังมีระบบประเมินราคา API Cost คำนวณเป็นเงินดอลลาร์สหรัฐ ($) และแปลงเป็นเงินบาทไทย (THB) โดยอัตโนมัติ ช่วยให้นักพัฒนาและองค์กรสามารถประเมินงบประมาณการเรียกใช้ API ได้อย่างแม่นยำ ปลอดภัยสูงสุดเพราะการประมวลผลทั้งหมดเกิดขึ้นบนอุปกรณ์ของคุณ (Client-side) เท่านั้น ไม่มีการส่งข้อมูลใดๆ ไปยังเซิร์ฟเวอร์'
    ],
    en: [
      'Large Language Models (LLMs) such as GPT-4o, Gemini, and Claude process text not as raw characters, but as chunks called "Tokens". A token can represent a single character, a subword fragment, or an entire word depending on Byte Pair Encoding (BPE) vocabularies.',
      'For non-Latin languages like Thai, understanding token counts is critical. Because Thai does not use spaces between words, Thai text typically requires between 1 to 3 tokens per word. This tool helps developers and prompt engineers optimize prompts within context length limits and prevent unexpected truncation.',
      'The integrated Cost Estimator calculates both Input and Output API costs based on current official pricing tables in USD and THB. All calculations are executed locally within your browser, ensuring absolute privacy for your proprietary prompts and codebase.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'ทำไมภาษาไทยถึงใช้จำนวน Token มากกว่าภาษาอังกฤษ?',
        answer:
          'เนื่องจากคำศัพท์ภาษาอังกฤษส่วนใหญ่มีอยู่ในพจนานุกรม Tokenizer ของโมเดลอยู่แล้ว 1 คำจึงมักเท่ากับ 1 Token แต่สำหรับภาษาไทยและภาษาเอเชียอื่นๆ ตัวอักษรและสระจะถูกแบ่งออกเป็นส่วนย่อย (Subwords) ทำให้คำ 1 คำอาจใช้ 1 ถึง 3 Token'
      },
      {
        question: 'ราคาที่คำนวณเป็นราคาล่าสุดหรือไม่?',
        answer:
          'ระบบอ้างอิงราคา API มาตรฐานล่าสุดของผู้ให้บริการ (OpenAI, Google Cloud, Anthropic) โดยคิดอัตราแลกเปลี่ยนประมาณ 36 บาท / 1 ดอลลาร์สหรัฐ'
      },
      {
        question: 'ข้อความหรือ Prompt ที่วางในหน้านี้จะถูกบันทึกหรือไม่?',
        answer:
          'ไม่ถูกบันทึกและไม่ถูกส่งไปที่ใดทั้งสิ้นครับ การคำนวณทั้งหมดทำงานด้วย JavaScript บนเครื่องของคุณ (Client-side) แบบ 100%'
      }
    ],
    en: [
      {
        question: 'Why does Thai text consume more tokens than English?',
        answer:
          'BPE vocabularies in LLMs are predominantly trained on Latin scripts. Non-Latin scripts like Thai are typically broken down into subword fragments or multi-byte pieces, requiring 1-3 tokens per word.'
      },
      {
        question: 'Are the API prices up to date?',
        answer:
          'Yes, calculations are based on standard official developer pricing for OpenAI, Google, and Anthropic models.'
      },
      {
        question: 'Is my prompt data private?',
        answer:
          'Completely private. All tokenization and estimation occur locally in your browser. Nothing is stored or transmitted over the network.'
      }
    ]
  },
  relatedSlugs: ['word-counter', 'jwt-decoder', 'json-formatter', 'hash-generator'],
  updatedAt: '2026-09-25'
};

export default tool;