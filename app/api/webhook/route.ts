import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { verifyTwilioSignature } from "@/lib/twilio";

const RATE_LIMIT_WINDOW_MS = 60_000; // sliding window
const MAX_PER_WINDOW = 6;
const rateMap = new Map<string, { count: number; ts: number }>();

async function appendLog(line: string) {
  const logDir = path.join(process.cwd(), "data");
  await fs.promises.mkdir(logDir, { recursive: true });
  await fs.promises.appendFile(path.join(logDir, "webhooks.log"), line + "\n");
}

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = rateMap.get(key);
  if (!entry || now - entry.ts > RATE_LIMIT_WINDOW_MS) {
    rateMap.set(key, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  entry.ts = now;
  rateMap.set(key, entry);
  return entry.count > MAX_PER_WINDOW;
}

export async function GET() {
  return NextResponse.json({ ok: true, now: new Date().toISOString() });
}

export async function POST(req: Request) {
  try {
    const raw = await req.text();
    // Twilio sends application/x-www-form-urlencoded body
    const form = new URLSearchParams(raw);

    // Build params object (support multiple values)
    const params: Record<string, string | string[]> = {};
    for (const [k, v] of form.entries()) {
      if (Object.prototype.hasOwnProperty.call(params, k)) {
        const cur = params[k];
        params[k] = Array.isArray(cur) ? [...cur, v] : [cur as string, v];
      } else {
        params[k] = v;
      }
    }

    const incomingText = form.get("Body") ?? "";
    const from = form.get("From") ?? "";
    const to = form.get("To") ?? "";

    // Twilio signature verification
    const skipVerify = process.env.SKIP_TWILIO_VALIDATION === "1" || process.env.SKIP_TWILIO_VALIDATION === "true";
    const signature = req.headers.get("x-twilio-signature") ?? req.headers.get("X-Twilio-Signature");
    const authToken = process.env.TWILIO_AUTH_TOKEN ?? "";
    const fullUrl = req.url; // must match the exact URL Twilio posts to (including query if present)

    if (!skipVerify) {
      const ok = verifyTwilioSignature(authToken, fullUrl, params, signature);
      if (!ok) {
        await appendLog(`${new Date().toISOString()} TWILIO_SIG_MISMATCH ${from} ${incomingText}`);
        return NextResponse.json({ error: "invalid_signature" }, { status: 403 });
      }
    }

    // Simple rate limit per phone number
    if (isRateLimited(from || req.headers.get("x-forwarded-for") || "anon")) {
      await appendLog(`${new Date().toISOString()} RATE_LIMIT ${from} ${incomingText}`);
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }

    // (Your existing processing / AI / Twilio reply logic goes here)
    await appendLog(`${new Date().toISOString()} INCOMING ${from} ${incomingText}`);

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
}