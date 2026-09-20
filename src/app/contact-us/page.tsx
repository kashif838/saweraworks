import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { Mail, Phone, Pin } from "@/components/Icons";
import { contact, contactPage as c, cta } from "@/content/site";
import ContactForm from "./ContactForm";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Contact Us", description: `${cta.hire.text} ${contact.phone}.` };

export default function ContactPage() {
  return (
    <>
      <Hero image="/images/hero-home.jpg" title={c.title} crumb={c.crumb} position="center 40%" />
      <section className="section">
        <div className={`wrap ${styles.grid}`}>
          <Reveal className={styles.side}>
            <p className="lead">{cta.hire.text} <a href={contact.phoneHref} style={{ fontWeight: 600 }}>{contact.phoneDisplay}</a>.</p>
            <div className={`card ${styles.panel}`}>
              <h2 className="h3" style={{ fontSize: 19 }}>Contact Information</h2>
              <a href={contact.phoneHref} className={styles.row}><Phone className={styles.icon} />{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className={styles.row}><Mail className={styles.icon} />{contact.email}</a>
              <div className={`small ${styles.row}`}><Pin />{contact.location}</div>
            </div>
          </Reveal>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
