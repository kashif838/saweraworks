"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, footer } from "@/content/site";
import { Mail, Phone, Social } from "./Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const path = usePathname();
  const link = (l: { label: string; href: string }) => (
    <Link
      key={l.label}
      href={l.href}
      className={path === l.href ? styles.active : undefined}
      aria-current={path === l.href ? "page" : undefined}
    >
      {l.label}
    </Link>
  );

  return (
    <footer className={styles.foot}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src="/images/logo.webp" alt="Savera Works" width={129} height={38} />
          <div className={styles.col}>
            <div className={styles.head}>Contact Information</div>
            <a href={`mailto:${contact.email}`} className={styles.row}><Mail className={styles.icon} />{contact.email}</a>
            <a href={contact.phoneHref} className={styles.row}><Phone className={styles.icon} />{contact.phone}</a>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>Company</div>
          {footer.useful.map(link)}
        </div>
        <div className={styles.col}>
          <div className={styles.head}>Our Services</div>
          {footer.services.map(link)}
        </div>
        <div className={`${styles.col} ${styles.socialCol}`}>
          <div className={styles.head}>{footer.socialHeading}</div>
          {/* ponytail: no social URLs exist on the live site; wire hrefs when the client supplies them */}
          <div className={styles.social}>
            {footer.social.map((s) => (
              <span key={s} aria-label={s} className={styles.socialBtn}><Social name={s} /></span>
            ))}
          </div>
        </div>
      </div>
      <div className={`wrap ${styles.bottom}`}>
        <div>
          {footer.copyright}{" "}
          <a href={footer.builder.href} target="_blank" rel="noopener noreferrer">{footer.builder.label}</a>
        </div>
        <div>Savera Works · {contact.location}</div>
      </div>
    </footer>
  );
}
