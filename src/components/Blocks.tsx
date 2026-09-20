"use client";

import Image from "next/image";
import Link from "next/link";
import { contact, cta, process } from "@/content/site";
import { motion } from "framer-motion";
import { revealImage, revealStaggerList, revealUp, useStaggerProps } from "./Reveal";
import styles from "./Blocks.module.css";

const MotionImage = motion.create(Image);

export function PhoneLink({ display = contact.phoneDisplay }: { display?: string }) {
  return <a href={contact.phoneHref} style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{display}</a>;
}

/** Plain bulleted list, two columns on desktop. */
export function Bullets({ items, cols = 2 }: { items: readonly string[]; cols?: 1 | 2 }) {
  const { group, item } = useStaggerProps(revealUp, revealStaggerList);
  return (
    <motion.ul className={`${styles.bullets} ${cols === 1 ? styles.bulletsOne : ""}`} {...group}>
      {items.map((i) => (
        <motion.li key={i} {...item}><span className={styles.bulletDot} /><span>{i}</span></motion.li>
      ))}
    </motion.ul>
  );
}

/** Large photo with a smaller one overlapping its lower-right corner. */
export function PhotoPair({
  big, small, altBig, altSmall, posBig = "center", posSmall = "center",
}: { big: string; small: string; altBig: string; altSmall: string; posBig?: string; posSmall?: string }) {
  const { group, item } = useStaggerProps(revealImage);
  return (
    <motion.div className={styles.pair} {...group}>
      <MotionImage src={big} alt={altBig} width={440} height={380} className={styles.pairBig} style={{ objectPosition: posBig }} sizes="(max-width: 900px) 100vw, 440px" {...item} />
      <MotionImage src={small} alt={altSmall} width={300} height={220} className={styles.pairSmall} style={{ objectPosition: posSmall }} sizes="(max-width: 900px) 62vw, 300px" {...item} />
    </motion.div>
  );
}

/** Four-photo grid used beside the Home About copy. */
export function PhotoCollage({ portrait = "/images/lounge.jpg" }: { portrait?: string } = {}) {
  const { group, item } = useStaggerProps(revealImage);
  return (
    <motion.div className={styles.collage} {...group}>
      <MotionImage src={portrait} alt="Team meeting in an office lounge" width={200} height={336} className={styles.cA} style={{ objectPosition: "center 15%" }} sizes="(max-width: 900px) 50vw, 200px" {...item} />
      <MotionImage src="/images/interview.jpg" alt="Interview at a client office" width={344} height={160} className={styles.cB} sizes="(max-width: 900px) 50vw, 344px" {...item} />
      <MotionImage src="/images/hero-services.jpg" alt="Placed staff in an open-plan office" width={344} height={336} className={styles.cC} sizes="(max-width: 900px) 50vw, 344px" {...item} />
      <MotionImage src="/images/documents.jpg" alt="Reviewing candidate documents" width={200} height={160} className={styles.cD} sizes="(max-width: 900px) 50vw, 200px" {...item} />
    </motion.div>
  );
}

export function StepCards({ white = false }: { white?: boolean }) {
  const { group, item } = useStaggerProps();
  return (
    <motion.ol className={styles.steps} {...group}>
      {process.steps.map((s) => (
        <motion.li key={s.n} className={`${styles.step} ${white ? styles.white : ""}`} {...item}>
          <span className={`num ${styles.stepNum}`}>{s.n}</span>
          <span className={styles.stepBody}>
            <span className="h4">{s.title}</span>
            <span className={styles.stepText}>{s.text}</span>
          </span>
        </motion.li>
      ))}
    </motion.ol>
  );
}

export function CtaSplit() {
  const { group, item } = useStaggerProps();
  return (
    <section className={`section ${styles.ctaSection}`}>
      <motion.div className={`wrap ${styles.ctaGrid}`} {...group}>
        <motion.div className={styles.ctaCard} {...item}>
          <Image src="/images/hero-home.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.ctaBg} />
          <div className={styles.ctaScrim} />
          <div className={styles.ctaBody}>
            <h2 className={`h2 ${styles.ctaTitle}`}>{cta.hire.title}</h2>
            <p className={styles.ctaText}>{cta.hire.text} <PhoneLink />.</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact-us" className="btn btn-primary">Start Hiring</Link>
            <a href={contact.phoneHref} className="btn btn-ghost">Contact us</a>
          </div>
        </motion.div>
        <motion.div className={styles.ctaCard} {...item}>
          <Image src="/images/hero-resume.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.ctaBg} />
          <div className={styles.ctaScrim} />
          <div className={styles.ctaBody}>
            <h2 className={`h2 ${styles.ctaTitle}`}>{cta.candidate.title}</h2>
            <p className={styles.ctaText}>{cta.candidate.text}</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/submit-resume" className="btn btn-light">Submit your Resume</Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
