import type { ToolConfig } from '../config/tools';
import PasswordGeneratorTool from '../components/tools/PasswordGeneratorTool.astro';

const tool: ToolConfig = {
  slug: 'password-generator',
  icon: 'PWD',
  category: 'ai-dev',
  name: { th: 'Password Generator', en: 'Password Generator' },
  shortDescription: {
    th: 'เธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเนเธฒเธเนเธเธเธชเธธเนเธกเนเธฅเธฐเธเธฅเธญเธ”เธ เธฑเธข เธเธงเธเธเธธเธกเธเธงเธฒเธกเธขเธฒเธงเนเธฅเธฐเธ•เธฑเธงเธญเธฑเธเธฉเธฃเนเธ”เน',
    en: 'Generate strong random passwords with control over length and characters.'
  },
  description: {
    th: 'เธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเนเธฒเธเธชเธธเนเธกเนเธเธเธเธฅเธญเธ”เธ เธฑเธขเธ”เนเธงเธขเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เน€เธฅเธทเธญเธเธเธงเธฒเธกเธขเธฒเธง เธ•เธฑเธงเธญเธฑเธเธฉเธฃ เธ•เธฑเธงเน€เธฅเธ เนเธฅเธฐเธชเธฑเธเธฅเธฑเธเธฉเธ“เนเนเธ”เน เธเธฃเนเธญเธกเธเธฑเธ”เธฅเธญเธเธฃเธซเธฑเธชเนเธ”เนเธ—เธฑเธเธ—เธต',
    en: 'Create secure random passwords in your browser with configurable length, letters, numbers, and symbols, then copy them instantly.'
  },
  keywords: {
    th: ['เธฃเธซเธฑเธชเธเนเธฒเธ', 'เธชเธธเนเธกเธฃเธซเธฑเธชเธเนเธฒเธ', 'password', 'เธชเธธเนเธกเธฃเธซเธฑเธช'],
    en: ['password generator', 'random password', 'secure password', 'strong password']
  },
  component: PasswordGeneratorTool,
  howTo: {
    th: [
      'เน€เธฅเธทเธญเธเธเธงเธฒเธกเธขเธฒเธงเนเธฅเธฐเธเธเธดเธ”เธ•เธฑเธงเธญเธฑเธเธฉเธฃเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃ',
      'เธเธ”เธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเนเธฒเธเน€เธเธทเนเธญเธชเธฃเนเธฒเธเธเนเธฒเนเธซเธกเนเนเธเธเธชเธธเนเธก',
      'เธเธฑเธ”เธฅเธญเธเธฃเธซเธฑเธชเนเธเธขเธฑเธเธ•เธฑเธงเธเธฑเธ”เธเธฒเธฃเธฃเธซเธฑเธชเธเนเธฒเธเธ—เธตเนเธเธฅเธญเธ”เธ เธฑเธข'
    ],
    en: [
      'Choose a length and the character groups you need',
      'Select Generate password to create a new random value',
      'Copy the password to a trusted password manager'
    ]
  },
  longDescription: {
    th: [
      'Password Generator เธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเนเธฒเธเนเธเธเธชเธธเนเธกเนเธ”เธขเนเธเน Web Crypto API เธเธญเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเน เธ—เธณเนเธซเนเนเธ•เนเธฅเธฐเธฃเธซเธฑเธชเธกเธตเธเธงเธฒเธกเนเธ•เธเธ•เนเธฒเธเนเธฅเธฐเนเธกเนเธ•เนเธญเธเธชเนเธเธเนเธฒเธ—เธตเนเธชเธธเนเธกเนเธเธขเธฑเธเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเน เธเธธเธ“เธชเธฒเธกเธฒเธฃเธ–เธเธฃเธฑเธเธเธงเธฒเธกเธขเธฒเธงเนเธ”เนเธ•เธฑเนเธเนเธ•เน 8 เธ–เธถเธ 64 เธ•เธฑเธงเธญเธฑเธเธฉเธฃ เนเธฅเธฐเน€เธฅเธทเธญเธเนเธเนเธ•เธฑเธงเธเธดเธกเธเนเน€เธฅเนเธ เธ•เธฑเธงเธเธดเธกเธเนเนเธซเธเน เธ•เธฑเธงเน€เธฅเธ เนเธฅเธฐเธชเธฑเธเธฅเธฑเธเธฉเธ“เนเนเธ”เนเธ•เธฒเธกเธเธงเธฒเธกเธ•เนเธญเธเธเธฒเธฃ',
      'เธฃเธซเธฑเธชเธเนเธฒเธเธ—เธตเนเธขเธฒเธงเนเธฅเธฐเธกเธตเธซเธฅเธฒเธขเธเธเธดเธ”เธ•เธฑเธงเธญเธฑเธเธฉเธฃเธกเธตเนเธญเธเธฒเธชเธ–เธนเธเน€เธ”เธฒเธขเธฒเธเธเธงเนเธฒเธฃเธซเธฑเธชเธชเธฑเนเธ เนเธเธฐเธเธณเนเธซเนเนเธเนเธเธงเธฒเธกเธขเธฒเธงเธญเธขเนเธฒเธเธเนเธญเธข 16 เธ•เธฑเธงเธญเธฑเธเธฉเธฃเธชเธณเธซเธฃเธฑเธเธเธฑเธเธเธตเธ—เธฑเนเธงเนเธ เนเธฅเธฐเธขเธฒเธงเธเธงเนเธฒเธเธฑเนเธเธชเธณเธซเธฃเธฑเธเธเธฑเธเธเธตเธชเธณเธเธฑเธ เธญเธขเนเธฒเนเธเนเธเธทเนเธญ เธงเธฑเธเน€เธเธดเธ” เน€เธเธญเธฃเนเนเธ—เธฃเธจเธฑเธเธ—เน เธซเธฃเธทเธญเธเธณเธ—เธตเนเน€เธ”เธฒเนเธ”เนเธเนเธฒเธข เนเธกเนเธเธฐเธเธชเธกเธ•เธฑเธงเธเธดเธกเธเนเนเธซเธเนเนเธฅเธฐเธ•เธฑเธงเน€เธฅเธเนเธฅเนเธงเธเนเธ•เธฒเธก เน€เธเธฃเธทเนเธญเธเธกเธทเธญเธเธตเนเนเธกเนเธ•เธฃเธงเธเธชเธญเธเธงเนเธฒเธฃเธซเธฑเธชเธเนเธฒเธเธ–เธนเธเนเธเนเนเธเน€เธงเนเธเนเธเธ•เนเธญเธทเนเธเธซเธฃเธทเธญเธฃเธฑเนเธงเนเธซเธฅเนเธฅเนเธง',
      'เน€เธกเธทเนเธญเธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเนเธฒเธเนเธซเธกเน เนเธซเนเน€เธเนเธเธฃเธซเธฑเธชเนเธ password manager เธ—เธตเนเน€เธเธทเนเธญเธ–เธทเธญเนเธ”เน เนเธฅเธฐเน€เธเธดเธ” two-factor authentication เน€เธกเธทเนเธญเธเธฑเธเธเธตเธฃเธญเธเธฃเธฑเธ เธซเธฅเธตเธเน€เธฅเธตเนเธขเธเธเธฒเธฃเธชเนเธเธฃเธซเธฑเธชเธเนเธฒเธเธ—เธฒเธเนเธเธ• เนเธเธฃเธ•เธเธญเธฅ เธซเธฃเธทเธญเธญเธตเน€เธกเธฅ เน€เธเธฃเธฒเธฐเธเนเธญเธเธ—เธฒเธเน€เธซเธฅเนเธฒเธเธตเนเธญเธฒเธเน€เธเนเธเธเนเธญเธเธงเธฒเธกเนเธงเน เธซเธฒเธเน€เธเธฅเธตเนเธขเธเธฃเธซเธฑเธชเธเนเธฒเธ เธเธงเธฃเน€เธเธฅเธตเนเธขเธเนเธเธ—เธธเธเธเธฑเธเธเธตเธ—เธตเนเนเธเนเธฃเธซเธฑเธชเน€เธ”เธดเธก เนเธฅเธฐเธ•เธฃเธงเธเธชเธญเธเธเธดเธเธเธฃเธฃเธกเธฅเนเธญเธเธญเธดเธเธซเธฅเธฑเธเธเธฒเธเน€เธเธฅเธตเนเธขเธ',
      'เธเธฅเธฅเธฑเธเธเนเธเธฐเธ–เธนเธเธชเธธเนเธกเนเธซเธกเนเธ—เธธเธเธเธฃเธฑเนเธเธ—เธตเนเธเธ”เธเธธเนเธก เนเธฅเธฐเนเธกเนเธ–เธนเธเธเธฑเธเธ—เธถเธเนเธเธเธฃเธฐเธงเธฑเธ•เธดเน€เธงเนเธเนเธเธ•เน เธญเธขเนเธฒเธเนเธฃเธเนเธ•เธฒเธก เธซเธฒเธเน€เธเธดเธ”เนเธเนเธเธธเธ“เธฅเธฑเธเธฉเธ“เธฐเธเธงเธฒเธกเธเธ”เธเธณเธซเธฃเธทเธญเธกเธตเธชเนเธงเธเธเธขเธฒเธขเธ—เธตเนเธญเนเธฒเธเธซเธเนเธฒเน€เธงเนเธ เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธชเธดเธ—เธเธดเนเธเธญเธเธชเนเธงเธเธเธขเธฒเธขเธ”เนเธงเธข เธงเธดเธเธตเธเธตเนเธเนเธงเธขเนเธซเนเธเธฒเธฃเธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเนเธฒเธเน€เธเนเธเธชเนเธงเธเธซเธเธถเนเธเธเธญเธเนเธเธงเธ—เธฒเธเธ”เธนเนเธฅเธเธฑเธเธเธตเธ—เธตเนเธเธฅเธญเธ”เธ เธฑเธขเนเธฅเธฐเธชเธฐเธ”เธงเธเธเธถเนเธ'
    ],
    en: [
      'The Password Generator uses the browser Web Crypto API to create random values locally. No generated password is sent to or stored by this website. Choose a length from 8 to 64 characters and decide whether to include lowercase letters, uppercase letters, numbers, and symbols.',
      'Longer passwords with a wider character set are harder to guess. A length of at least 16 characters is a practical baseline for an online account, and a longer passphrase can be even stronger. Avoid names, dates, phone numbers, and predictable substitutions. This tool cannot check whether a password has already appeared in a data breach or is used on another service.',
      'Store new credentials in a trusted password manager rather than a spreadsheet or notes file, and enable two-factor authentication whenever an account supports it. Do not send passwords through chat, email, or ordinary messaging services. If a password is reused, change it everywhere it was used and review recent account activity after the change.',
      'The displayed value changes each time you select the generate button, and this page does not intentionally save it in browsing history. Extensions with broad page access can still read anything displayed on a page, so review installed browser extensions. Keeping these habits makes a generated password more useful as part of a complete account-security routine.'
    ]
  },
  faqs: {
    th: [
      {
        question: 'เธฃเธซเธฑเธชเธเนเธฒเธเธ–เธนเธเธชเนเธเนเธเธ—เธตเนเน€เธเธดเธฃเนเธเน€เธงเธญเธฃเนเธซเธฃเธทเธญเนเธกเน?',
        answer: 'เนเธกเน เธเธฒเธฃเธชเธธเนเธกเน€เธเธดเธ”เธเธถเนเธเนเธเน€เธเธฃเธฒเธงเนเน€เธเธญเธฃเนเธ”เนเธงเธข Web Crypto API เนเธฅเธฐเน€เธงเนเธเนเธเธ•เนเนเธกเนเธเธฑเธเธ—เธถเธเธฃเธซเธฑเธชเธเนเธฒเธ'
      },
      {
        question: 'เธเธงเธฃเนเธเนเธฃเธซเธฑเธชเธเนเธฒเธเธขเธฒเธงเน€เธ—เนเธฒเนเธฃ?',
        answer:
          'เนเธเธฐเธเธณเธญเธขเนเธฒเธเธเนเธญเธข 16 เธ•เธฑเธงเธญเธฑเธเธฉเธฃเธชเธณเธซเธฃเธฑเธเธเธฑเธเธเธตเธญเธญเธเนเธฅเธเน เนเธฅเธฐเนเธเนเธเธงเธฒเธกเธขเธฒเธงเธกเธฒเธเธเธถเนเธเธซเธฃเธทเธญ password manager เธชเธณเธซเธฃเธฑเธเธเธฑเธเธเธตเธชเธณเธเธฑเธ'
      },
      {
        question: 'เธ—เธณเนเธกเธ•เนเธญเธเน€เธฅเธทเธญเธเธชเธฑเธเธฅเธฑเธเธฉเธ“เนเธเธดเน€เธจเธฉ?',
        answer:
          'เธชเธฑเธเธฅเธฑเธเธฉเธ“เนเน€เธเธดเนเธกเธเธงเธฒเธกเธซเธฅเธฒเธเธซเธฅเธฒเธขเนเธซเนเธฃเธซเธฑเธชเธเนเธฒเธ เนเธ•เนเธเธฒเธเน€เธงเนเธเนเธเธ•เนเธญเธฒเธเนเธกเนเธฃเธญเธเธฃเธฑเธ เธเธงเธฃเธ•เธฃเธงเธเธชเธญเธเธเนเธขเธเธฒเธขเธเธญเธเน€เธงเนเธเนเธเธ•เนเธเธฅเธฒเธขเธ—เธฒเธ'
      },
      {
        question: 'เธชเธฒเธกเธฒเธฃเธ–เธชเธฃเนเธฒเธเธฃเธซเธฑเธชเธเนเธฒเธเนเธเธเธญเนเธฒเธเธเนเธฒเธขเนเธ”เนเนเธซเธก?',
        answer: 'เนเธ”เน เนเธ•เนเธเธงเธฒเธกเธญเนเธฒเธเธเนเธฒเธขเนเธกเนเธเธงเธฃเธฅเธ”เธเธงเธฒเธกเธขเธฒเธงเธซเธฃเธทเธญเนเธเนเธฃเธนเธเนเธเธเธ—เธตเนเน€เธ”เธฒเธเนเธฒเธข เธเธงเธฒเธกเธเธฅเธญเธ”เธ เธฑเธขเธชเธณเธเธฑเธเธเธงเนเธฒ'
      },
      {
        question: 'เธ•เนเธญเธเน€เธเธดเธ” two-factor authentication เธซเธฃเธทเธญเนเธกเน?',
        answer: 'เธเธงเธฃเน€เธเธดเธ”เน€เธกเธทเนเธญเธเธฃเธดเธเธฒเธฃเธฃเธญเธเธฃเธฑเธ เน€เธเธฃเธฒเธฐเธเนเธงเธขเน€เธเธดเนเธกเธเธฑเนเธเธเธงเธฒเธกเธเธฅเธญเธ”เธ เธฑเธขเนเธกเนเธฃเธซเธฑเธชเธเนเธฒเธเธ–เธนเธเน€เธเธดเธ”เน€เธเธข'
      }
    ],
    en: [
      {
        question: 'Are passwords sent to a server?',
        answer:
          'No. Random values are created in the browser with the Web Crypto API, and this site does not store the password.'
      },
      {
        question: 'How long should my password be?',
        answer:
          'Use at least 16 characters for an online account, and consider a longer passphrase or a password manager for important accounts.'
      },
      {
        question: 'Why include special characters?',
        answer:
          'Symbols increase character variety, but some websites do not accept them. Check the destination site policy.'
      },
      {
        question: 'Can I generate an easy-to-read password?',
        answer:
          'Yes, but do not reduce the length or use a predictable pattern. Security is more important than readability.'
      },
      {
        question: 'Should I enable two-factor authentication?',
        answer: 'Yes, when available. It adds protection even if a password is exposed.'
      }
    ]
  },
  relatedSlugs: ['qr-code', 'hash-generator', 'uuid-ulid'],
  updatedAt: '2026-09-24'
};

export default tool;
