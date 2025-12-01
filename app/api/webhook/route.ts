import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // Handle the webhook logic here
  // For example, you can process the incoming message from WhatsApp

  return NextResponse.json({ status: 'success', message: 'Webhook received' });
}