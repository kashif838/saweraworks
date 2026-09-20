import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Flag from "@/components/Flag";
import { Bullets, CtaSplit, PhoneLink, PhotoCollage, PhotoPair, StepCards } from "@/components/Blocks";
import { about, benefits, hero, newCopyFlag, process, sectors, servicesPage as c } from "@/content/site";
import Reveal, { RevealImage } from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Our Services", description: hero.text };

export default function ServicesPage() {
  return (
    <>
      <Hero image="/images/hero-services.jpg" title={c.title} crumb={c.crumb} position="center 60%" />

      <section className="section">
        <div className={`wrap ${styles.stack}`}>
          <div className={styles.intro}>
            <Reveal className={styles.introText}>
              <h2 className="h2">{c.whatWeDo}</h2>
              <p className="p">{about.p2}</p>
              <p className="p">{about.p1} <PhoneLink />.</p>
              <p className="p">{hero.text}</p>
              <Bullets items={c.placements} />
            </Reveal>
            <PhotoPair
              big="/images/lounge.jpg" altBig="Team meeting in an office lounge"
              small="/images/agreement.jpg" altSmall="Agreement across a desk"
            />
          </div>

          <Reveal className={styles.competencies}>
            <h2 className="h2">{c.competenciesHeading}</h2>
            <Bullets items={c.competencies} cols={3} />
          </Reveal>

          <div className={styles.sectorsGrid}>
            <Reveal className={styles.sectorsText}>
              <h2 className="h2">{c.sectorsHeading}</h2>
              <p className="p">{sectors.text}</p>
              <p className="p">{sectors.extra}<Flag>{newCopyFlag}</Flag></p>
              <Bullets items={c.sectors} />
            </Reveal>
            <PhotoCollage />
          </div>

          <div className={styles.steps}>
            <div className={styles.stepsHead}>
              <RevealImage src="/images/documents.jpg" alt="Reviewing candidate documents" width={480} height={380} className={styles.stepsPhoto} sizes="(max-width: 900px) 100vw, 480px" />
              <Reveal className={styles.stepsCopy} delay={0.2}>
                <h2 className="h2">{process.heading}</h2>
                <p className="p">{process.sub}</p>
              </Reveal>
            </div>
            <StepCards />
            <Reveal className={styles.screening}>
              <h3 className="h3">{process.screeningHeading}</h3>
              <p className="p">{process.screeningText}</p>
            </Reveal>
          </div>

          <div className={styles.benefit}>
            <Reveal className={styles.benefitLeft}>
              <Image src="/images/team.jpg" alt="Savera Works team at work" width={460} height={300} className={styles.benefitPhoto} sizes="(max-width: 900px) 100vw, 460px" />
              <h2 className="h2" style={{ fontSize: "clamp(24px, 2.4vw, 32px)" }}>{benefits.heading}</h2>
            </Reveal>
            <Reveal className={styles.benefitRight} delay={0.2}>
              <p className="p">{benefits.text}</p>
              <Bullets items={benefits.items} cols={1} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSplit />
    </>
  );
}
