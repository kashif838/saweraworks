import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Flag from "@/components/Flag";
import { CtaSplit, PhotoCollage, PhotoPair } from "@/components/Blocks";
import { aboutPage as c } from "@/content/site";
import Reveal, { CountUp, RevealImage } from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About Us", description: c.p2 };

export default function AboutPage() {
  return (
    <>
      <Hero image="/images/hero-about.jpg" title={c.title} crumb={c.crumb} position="center 25%" />

      <section className="section">
        <div className={`wrap ${styles.grid}`}>
          <Reveal className={styles.text}>
            <h2 className="h2">{c.heading}</h2>
            <p className="p">{c.p1a}<Flag>{c.p1Flag}</Flag>{c.p1b}</p>
            <p className="p">{c.p2}</p>
            <dl className={`card ${styles.facts}`}>
              {c.facts.map(([k, v]) => (
                <div key={k}><dt className="small">{k}</dt><dd className={styles.fact}><CountUp value={v} /></dd></div>
              ))}
            </dl>
          </Reveal>
          <RevealImage delay={0.22} src="/images/hero-services.jpg" alt="Colleagues working in an open-plan office" width={440} height={620} className={styles.portrait} sizes="(max-width: 900px) 100vw, 440px" />
        </div>
      </section>

      <section className="section section-surface">
        <div className={`wrap ${styles.growth}`}>
          <div className={styles.growthGrid}>
            <Reveal className={styles.growthText}>
              <h2 className="h2">{c.growthHeading}</h2>
              <p className="p">{c.p3a}</p>
              <p className="p">{c.p3b}<Flag>{c.p3Flag}</Flag></p>
            </Reveal>
            <PhotoPair
              big="/images/team.jpg" altBig="Savera Works team at work"
              small="/images/colleagues.jpg" altSmall="Colleagues reviewing work together"
            />
          </div>
          <dl className={styles.stats}>
            {c.stats.map(([n, label], i) => (
              <Reveal key={n} className={styles.stat} delay={i * 0.16}>
                <dt className={styles.statNum}><CountUp value={n} /></dt>
                <dd className={`small ${styles.statLabel}`}>{label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.values}`}>
          <PhotoCollage />
          <Reveal className={styles.valuesText} delay={0.2}>
            <h2 className="h2">{c.valueHeading}</h2>
            <p className="p">{c.valueText}</p>
            <dl className={styles.valueList}>
              {c.values.map(([title, text]) => (
                <div key={title} className={styles.valueItem}>
                  <dt className={styles.valueTitle}>{title}</dt>
                  <dd className={styles.valueBody}>{text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaSplit />
    </>
  );
}
