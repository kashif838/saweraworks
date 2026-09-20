import { NextResponse } from "next/server";

const MAX_BYTES = 5 * 1024 * 1024;
const TYPES = new Set(["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]);

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const consent = form.get("consent");
  const resume = form.get("resume");

  if (!name || !phone) return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  if (!consent) return NextResponse.json({ error: "Please confirm the information provided is true and accurate." }, { status: 400 });
  if (!(resume instanceof File) || resume.size === 0) return NextResponse.json({ error: "Please attach your resume." }, { status: 400 });
  if (resume.size > MAX_BYTES) return NextResponse.json({ error: "Resume must be under 5 MB." }, { status: 400 });
  if (resume.type && !TYPES.has(resume.type)) return NextResponse.json({ error: "Resume must be a PDF or Word document." }, { status: 400 });

  // ponytail: no delivery target exists yet; log and accept. Wire to email (Resend/SES) or storage (S3) before launch.
  console.info("[resume] submission", { name, phone, email, file: resume.name, bytes: resume.size, at: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
