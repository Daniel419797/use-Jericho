import { NextResponse } from "next/server";
import { verifySignature } from "../../../lib/webhook";

export async function GET() {
  return NextResponse.json({ ok: true, now: new Date().toISOString() });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const signature = req.headers.get("x-webhook-signature") ?? req.headers.get("x-signature");
    const secret = process.env.WEBHOOK_SECRET;

    if (secret) {
      const valid = verifySignature(JSON.stringify(body), signature, secret);
      if (!valid) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    // Persist a simple log (works in Node / dev; adjust for serverless)
    const fs = await import("fs");
    const path = await import("path");
    const logDir = path.join(process.cwd(), "data");
    const logFile = path.join(logDir, "webhooks.log");
    await fs.promises.mkdir(logDir, { recursive: true });
    const entry = `${new Date().toISOString()} ${signature ?? "-"} ${JSON.stringify(body)}\n`;
    await fs.promises.appendFile(logFile, entry);

    console.log("Webhook received:", body);
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}