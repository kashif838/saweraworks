"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { Close, Menu } from "./Icons";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* The sheet is a sibling of the bar: a backdrop-filtered ancestor would
          otherwise become its containing block and break `position: fixed`. */}
      <div id="mobile-menu" className={styles.sheet} hidden={!open}>
        <nav aria-label="Main" className={styles.sheetNav}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? styles.active : undefined} aria-current={path === n.href ? "page" : undefined}>{n.label}</Link>
          ))}
        </nav>
      </div>
      <header className={styles.bar}>
        <div className={`wrap ${styles.inner}`}>
          <Link href="/" aria-label="Savera Works home" className={styles.logo}>
            <Image src="/images/logo.webp" alt="Savera Works" width={136} height={40} priority />
          </Link>
          <nav className={styles.nav} aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={path === n.href ? styles.active : undefined} aria-current={path === n.href ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className={styles.actions}>
            <Link href="/contact-us" className="btn btn-primary btn-sm">Start Hiring</Link>
            <button type="button" className={styles.menuBtn} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
