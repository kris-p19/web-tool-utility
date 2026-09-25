export interface DecodedJwt {
  raw: string;
  header: Record<string, unknown> | null;
  payload: Record<string, unknown> | null;
  signature: string;
  isValidStructure: boolean;
  errorMessage?: string;
  issuedAt?: Date;
  expiresAt?: Date;
  isExpired?: boolean;
}

export function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  try {
    // Decode base64 to binary string, then decode utf8
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (m) => m.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    throw new Error('Invalid Base64Url string');
  }
}

export function decodeJwt(token: string): DecodedJwt {
  const trimmed = token.trim();
  if (!trimmed) {
    return {
      raw: '',
      header: null,
      payload: null,
      signature: '',
      isValidStructure: false,
      errorMessage: 'กรุณากรอก JWT Token'
    };
  }

  const parts = trimmed.split('.');
  if (parts.length !== 3) {
    return {
      raw: trimmed,
      header: null,
      payload: null,
      signature: '',
      isValidStructure: false,
      errorMessage: 'รูปแบบ JWT ไม่ถูกต้อง (ต้องประกอบด้วย 3 ส่วนคั่นด้วยจุด)'
    };
  }

  const [headerB64, payloadB64, signature] = parts as [string, string, string];
  let header: Record<string, unknown> | null = null;
  let payload: Record<string, unknown> | null = null;

  try {
    const headerJson = base64UrlDecode(headerB64);
    header = JSON.parse(headerJson) as Record<string, unknown>;
  } catch {
    return {
      raw: trimmed,
      header: null,
      payload: null,
      signature,
      isValidStructure: false,
      errorMessage: 'ไม่สามารถถอดรหัส Header ได้'
    };
  }

  try {
    const payloadJson = base64UrlDecode(payloadB64);
    payload = JSON.parse(payloadJson) as Record<string, unknown>;
  } catch {
    return {
      raw: trimmed,
      header,
      payload: null,
      signature,
      isValidStructure: false,
      errorMessage: 'ไม่สามารถถอดรหัส Payload ได้'
    };
  }

  let issuedAt: Date | undefined;
  let expiresAt: Date | undefined;
  let isExpired: boolean | undefined;

  if (payload && typeof payload.iat === 'number') {
    issuedAt = new Date(payload.iat * 1000);
  }

  if (payload && typeof payload.exp === 'number') {
    expiresAt = new Date(payload.exp * 1000);
    isExpired = Date.now() > expiresAt.getTime();
  }

  return {
    raw: trimmed,
    header,
    payload,
    signature,
    isValidStructure: true,
    issuedAt,
    expiresAt,
    isExpired
  };
}