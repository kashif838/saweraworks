"use client";

import { useState } from "react";
import styles from "../submit-resume/ResumeForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending"); setError(null);
    const body = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    if (res.ok) { setStatus("sent"); return; }
    const data = await res.json().catch(() => ({}));
    setError(data.error ?? "Something went wrong. Please try again or call us.");
    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div className={`card-w ${styles.form}`} role="status">
        <h2 className="h3">Message sent</h2>
        <p className="p">Thank you. We have received your enquiry.</p>
      </div>
    );
  }

  return (
    <form className={`card-w ${styles.form}`} onSubmit={onSubmit}>
      <fieldset className={styles.group}>
        <legend className="h3">Start Hiring</legend>
        <div className="form-row">
          <div className="field"><label htmlFor="c-name">Name <span className="req">*</span></label><input id="c-name" name="name" className="input" required autoComplete="name" /></div>
          <div className="field"><label htmlFor="c-company">Organization</label><input id="c-company" name="company" className="input" autoComplete="organization" /></div>
        </div>
        <div className="form-row">
          <div className="field"><label htmlFor="c-email">Email Address <span className="req">*</span></label><input id="c-email" name="email" type="email" className="input" required autoComplete="email" /></div>
          <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" name="phone" type="tel" inputMode="tel" className="input" autoComplete="tel" /></div>
        </div>
        <div className="field"><label htmlFor="c-message">How can we help? <span className="req">*</span></label><textarea id="c-message" name="message" className="input" required /></div>
      </fieldset>
      <div className={styles.footer}>
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"} style={{ alignSelf: "flex-start", padding: "0 40px" }}>
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
