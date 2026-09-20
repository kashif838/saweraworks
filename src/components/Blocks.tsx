"use client";

import Image from "next/image";
import Link from "next/link";
import { contact, cta, process, servicesPage } from "@/content/site";
import { Box, Chart, Clipboard, Database, Flask, HardHat, Headset, Monitor, People, Wrench } from "./Icons";
import { motion } from "framer-motion";
import { revealImage, revealStaggerList, revealUp, useStaggerProps } from "./Reveal";
import styles from "./Blocks.module.css";

const MotionImage = motion.create(Image);

export function PhoneLink({ display = contact.phoneDisplay }: { display?: string }) {
  return <a href={contact.phoneHref} style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{display}</a>;
}

/** Plain bulleted list, two columns on desktop. */
export function Bullets({ items, cols = 2 }: { items: readonly string[]; cols?: 1 | 2 | 3 }) {
  const { group, item } = useStaggerProps(revealUp, revealStaggerList);
  return (
    <motion.ul className={`${styles.bullets} ${cols === 1 ? styles.bulletsOne : ""} ${cols === 3 ? styles.bulletsThree : ""}`} {...group}>
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
      <MotionImage src={big} alt={altBig} width={440} height={294} className={styles.pairBig} style={{ objectPosition: posBig }} sizes="(max-width: 900px) 100vw, 440px" {...item} />
      <MotionImage src={small} alt={altSmall} width={300} height={200} className={styles.pairSmall} style={{ objectPosition: posSmall }} sizes="(max-width: 900px) 62vw, 300px" {...item} />
    </motion.div>
  );
}

/** Four-photo grid used beside the Home About copy. */
export function PhotoCollage({ portrait = "/images/lounge.jpg" }: { portrait?: string } = {}) {
  const { group, item } = useStaggerProps(revealImage);
  return (
    <motion.div className={styles.collage} {...group}>
      <MotionImage src={portrait} alt="Team meeting in an office lounge" width={360} height={240} className={styles.cA} sizes="(max-width: 900px) 50vw, 360px" {...item} />
      <MotionImage src="/images/colleagues.jpg" alt="Colleagues reviewing work together" width={360} height={240} className={styles.cB} sizes="(max-width: 900px) 50vw, 360px" {...item} />
      <MotionImage src="/images/collage-meeting.jpg" alt="Team talking things through" width={360} height={240} className={styles.cC} sizes="(max-width: 900px) 50vw, 360px" {...item} />
      <MotionImage src="/images/collage-blueprints.jpg" alt="Technical work on a laptop" width={360} height={240} className={styles.cD} sizes="(max-width: 900px) 50vw, 200px" {...item} />
    </motion.div>
  );
}

export function StepCards({ white = false }: { white?: boolean }) {
  const { group, item } = useStaggerProps();
  return (
    <motion.ol className={styles.steps} {...group}>
      {process.steps.map((s) => (
        <motion.li key={s.n} className={`${styles.step} ${white ? styles.white : ""}`} {...item}>
          <Image src={s.img} alt={s.alt} width={400} height={225} className={styles.stepPhoto} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
          <div className={styles.stepBody}>
            <span className={`num ${styles.stepNum}`}>{s.n}</span>
            <h3 className="h4">{s.title}</h3>
            <p className={styles.stepText}>{s.text}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}

const COMPETENCY_ICONS = {
  clipboard: Clipboard, headset: Headset, chart: Chart, box: Box, monitor: Monitor,
  wrench: Wrench, hardhat: HardHat, flask: Flask, database: Database, people: People,
} as const;

/** Four per row, each competency with its own mark. */
export function CompetencyCards() {
  const { group, item } = useStaggerProps();
  return (
    <motion.ul className={styles.comps} {...group}>
      {servicesPage.competencies.map(({ label, icon }) => {
        const Icon = COMPETENCY_ICONS[icon];
        return (
          <motion.li key={label} className={styles.comp} {...item}>
            <span className={styles.compIcon}><Icon size={22} /></span>
            <span className="h4">{label}</span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export function CtaSplit() {
  const { group, item } = useStaggerProps();
  return (
    <section className={`section ${styles.ctaSection}`}>
      <motion.div className={`wrap ${styles.ctaGrid}`} {...group}>
        <motion.div className={styles.ctaCard} {...item}>
          <Image src="/images/cta-hire.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.ctaBg} />
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
          <Image src="/images/cta-candidate.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.ctaBg} />
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
