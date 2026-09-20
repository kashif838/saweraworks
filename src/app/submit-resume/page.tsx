import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Flag from "@/components/Flag";
import { Mail, Phone, Pin } from "@/components/Icons";
import { about, contact, process, resumePage as c } from "@/content/site";
import ResumeForm from "./ResumeForm";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Submit Resume", description: about.p3 };

export default function SubmitResumePage() {
  return (
    <>
      <Hero image="/images/hero-resume.jpg" title={c.title} crumb={c.crumb} position="center 30%" />

      <section className="section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <p className="lead" style={{ maxWidth: 760 }}>{about.p3}<Flag>{about.p3Flag}</Flag></p>
          <div className={styles.grid}>
            <ResumeForm />
            <Reveal className={styles.aside} delay={0.2}>
              <div className={`card ${styles.panel}`}>
                <h2 className="h3" style={{ fontSize: 19 }}>{c.processHeading}</h2>
                <ol className={styles.steps}>
                  {process.steps.map((s) => (
                    <li key={s.n}><span className="num">{s.n}</span><span>{s.title}</span></li>
                  ))}
                </ol>
              </div>
              <div className={`card ${styles.panel}`}>
                <h2 className="h3" style={{ fontSize: 19 }}>Contact Information</h2>
                <a href={contact.phoneHref} className={styles.row}><Phone className={styles.icon} />{contact.phone}</a>
                <a href={`mailto:${contact.email}`} className={styles.row}><Mail className={styles.icon} />{contact.email}</a>
                <div className={`small ${styles.row}`}><Pin />{contact.location}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
