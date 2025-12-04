import crypto from "crypto";

export function computeTwilioSignature(
  authToken: string,
  url: string,
  params?: Record<string, string | string[]>
) {
  const keys = params ? Object.keys(params).sort() : [];
  let data = url;
  for (const k of keys) {
    const v = params![k];
    if (Array.isArray(v)) {
      for (const item of v) data += k + item;
    } else {
      data += k + v;
    }
  }
  return crypto.createHmac("sha1", authToken).update(data).digest("base64");
}

export function verifyTwilioSignature(
  authToken: string,
  url: string,
  params: Record<string, string | string[]> | undefined,
  signature: string | null
) {
  if (!signature || !authToken) return false;
  const expected = computeTwilioSignature(authToken, url, params);
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  } catch {
    return false;
  }
}