import Link from "next/link";
import Hero from "@/components/Hero";
import Flag from "@/components/Flag";
import { Bullets, CtaSplit, PhoneLink, PhotoCollage, PhotoPair, StepCards } from "@/components/Blocks";
import { Chevron } from "@/components/Icons";
import { about, benefits, contact, hero, newCopyFlag, process, sectors } from "@/content/site";
import Reveal, { CountUp, RevealImage } from "@/components/Reveal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero
        image="/images/hero-poster.jpg"
        video="/video/hero.mp4"
        title={hero.title}
        text={hero.text}
        size="home"
        position="center 40%"
      >
        <Link href="/contact-us" className="btn btn-primary btn-lg">Start Hiring</Link>
        <a href={contact.phoneHref} className="btn btn-light btn-lg">Contact us</a>
      </Hero>

      <section className="section">
        <div className={`wrap ${styles.about}`}>
          <PhotoCollage />
          <Reveal className={styles.aboutText} delay={0.2}>
            <h2 className="h2">{about.heading}</h2>
            <p className="p">{about.p1} <PhoneLink />.</p>
            <p className="p">{about.p2}</p>
            <dl className={styles.facts}>
              {about.facts.map(([k, v]) => (
                <div key={k} className={styles.fact}><dt className="small">{k}</dt><dd className={styles.factValue}><CountUp value={v} /></dd></div>
              ))}
            </dl>
            <div><Link href="/about-us" className="btn btn-dark">Read More <Chevron /></Link></div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.split}`}>
          <Reveal className={styles.splitText}>
            <h2 className="h2">{sectors.heading}</h2>
            <p className="p">{sectors.text}</p>
            <p className="p">{sectors.extra}<Flag>{newCopyFlag}</Flag></p>
            <Bullets items={sectors.items} />
          </Reveal>
          <PhotoPair
            big="/images/team.jpg" altBig="Savera Works team at work"
            small="/images/colleagues.jpg" altSmall="Colleagues reviewing work together"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <div className={styles.howHead}>
            <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="h2">{process.heading}<Flag>{process.headingFlag}</Flag></h2>
              <p className="lead" style={{ color: "var(--text)" }}>{process.sub}</p>
              <p className="p">{about.p3}<Flag>{about.p3Flag}</Flag></p>
              <p className="p">{process.extra}<Flag>{newCopyFlag}</Flag></p>
            </Reveal>
            <RevealImage delay={0.2} src="/images/documents.jpg" alt="Reviewing candidate documents" width={440} height={300} className={styles.howPhoto} sizes="(max-width: 900px) 100vw, 440px" />
          </div>
          <StepCards />
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.split}`}>
          <Reveal className={styles.splitText}>
            <h2 className="h2">{benefits.heading}</h2>
            <p className="p">{benefits.text}</p>
            <p className="p">{benefits.extra}<Flag>{newCopyFlag}</Flag></p>
            <Bullets items={benefits.items} />
          </Reveal>
          <PhotoPair
            big="/images/agreement.jpg" altBig="Agreement across a desk"
            small="/images/lounge.jpg" altSmall="Team meeting in an office lounge"
          />
        </div>
      </section>

      <CtaSplit />
    </>
  );
}
