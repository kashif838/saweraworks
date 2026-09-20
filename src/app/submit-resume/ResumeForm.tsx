"use client";

import { useState } from "react";
import { ChevronDown, Upload } from "@/components/Icons";
import { resumePage as c } from "@/content/site";
import { COUNTRIES } from "./countries";
import styles from "./ResumeForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ResumeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending"); setError(null);
    const res = await fetch("/api/resume", { method: "POST", body: new FormData(e.currentTarget) });
    if (res.ok) { setStatus("sent"); return; }
    const data = await res.json().catch(() => ({}));
    setError(data.error ?? "Something went wrong. Please try again or call us.");
    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div className={`card-w ${styles.form}`} role="status">
        <h2 className="h3">Resume received</h2>
        <p className="p">Thank you. Your details and resume have been submitted.</p>
      </div>
    );
  }

  return (
    <form className={`card-w ${styles.form}`} onSubmit={onSubmit} noValidate={false}>
      <fieldset className={styles.group}>
        <legend className="h3">Your details</legend>
        <div className="form-row">
          <div className="field"><label htmlFor="name">Name <span className="req">*</span></label><input id="name" name="name" className="input" required autoComplete="name" placeholder="Full name" /></div>
          <div className="field"><label htmlFor="phone">Phone <span className="req">*</span></label><input id="phone" name="phone" type="tel" inputMode="tel" className="input" required autoComplete="tel" placeholder="(703) 000-0000" /></div>
        </div>
        <div className="field"><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" className="input" autoComplete="email" placeholder="name@example.com" /></div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className="h3">Address</legend>
        <div className="field"><label htmlFor="street">Street Address</label><input id="street" name="street" className="input" autoComplete="address-line1" /></div>
        <div className="field"><label htmlFor="apt">Apartment, suite, etc</label><input id="apt" name="apt" className="input" autoComplete="address-line2" /></div>
        <div className="form-row">
          <div className="field"><label htmlFor="city">City</label><input id="city" name="city" className="input" autoComplete="address-level2" /></div>
          <div className="field"><label htmlFor="state">State/Province</label><input id="state" name="state" className="input" autoComplete="address-level1" /></div>
        </div>
        <div className="form-row">
          <div className="field"><label htmlFor="zip">ZIP / Postal Code</label><input id="zip" name="zip" className="input" inputMode="numeric" autoComplete="postal-code" /></div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <div className="select-wrap">
              <select id="country" name="country" className="input" defaultValue="United States of America (USA)" autoComplete="country-name">
                {COUNTRIES.map((n) => <option key={n}>{n}</option>)}
              </select>
              <ChevronDown />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className="h3">Resume Upload</legend>
        <label className={styles.drop} htmlFor="resume">
          <span className={styles.dropIcon}><Upload /></span>
          <span className={styles.dropText}><span className="h4" style={{ fontSize: 16 }}>Choose File</span><span className="small">{fileName ?? "No file chosen"}</span></span>
          <span className="btn btn-outline btn-sm" aria-hidden="true">Choose File</span>
          <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className={styles.file} onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} />
        </label>
      </fieldset>

      <div className={styles.footer}>
        <label className={styles.consent} htmlFor="consent">
          <input id="consent" name="consent" type="checkbox" required />
          <span><strong>Consent <span className="req">*</span></strong><br />{c.consent}</span>
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"} style={{ alignSelf: "flex-start", padding: "0 40px" }}>
          {status === "sending" ? "Sending…" : "Apply"}
        </button>
      </div>
    </form>
  );
}
