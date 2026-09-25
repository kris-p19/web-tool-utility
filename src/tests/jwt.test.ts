import { describe, expect, it } from 'vitest';
import { base64UrlDecode, decodeJwt } from '../lib/tools/jwt';

describe('JWT Decoder utility', () => {
  // A standard sample token: header {"alg":"HS256","typ":"JWT"}, payload {"sub":"1234567890","name":"John Doe","iat":1516239022}
  const sampleToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  it('decodes base64url correctly', () => {
    expect(base64UrlDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')).toBe(
      '{"alg":"HS256","typ":"JWT"}'
    );
  });

  it('parses valid JWT header and payload', () => {
    const result = decodeJwt(sampleToken);
    expect(result.isValidStructure).toBe(true);
    expect(result.header).toEqual({ alg: 'HS256', typ: 'JWT' });
    expect(result.payload).toEqual({
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022
    });
    expect(result.signature).toBe('SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
  });

  it('identifies expired tokens correctly', () => {
    // expired payload with exp in the past: 1000
    // header {"alg":"none"} => eyJhbGciOiJub25lIn0
    // payload {"exp":1000} => eyJleHAiOjEwMDB9
    const expiredToken = 'eyJhbGciOiJub25lIn0.eyJleHAiOjEwMDB9.';
    const result = decodeJwt(expiredToken);
    expect(result.isValidStructure).toBe(true);
    expect(result.isExpired).toBe(true);
  });

  it('rejects malformed tokens', () => {
    const invalid = decodeJwt('not-a-token');
    expect(invalid.isValidStructure).toBe(false);
    expect(invalid.isValidStructure).toBe(false);
  });
});