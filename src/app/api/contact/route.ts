import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();
  if (!name || !email || !message) return NextResponse.json({ error: "Name, email and a message are required." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });

  // ponytail: no delivery target exists yet; log and accept. Wire to email (Resend/SES) before launch.
  console.info("[contact] enquiry", { name, email, company: body?.company, phone: body?.phone, at: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
