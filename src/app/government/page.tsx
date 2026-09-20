import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal, { CountUp } from "@/components/Reveal";
import { Bullets, CtaSplit, PhotoPair } from "@/components/Blocks";
import { Box, Chart, Clipboard, Flask, HardHat, Mail, Monitor, Phone, Pin } from "@/components/Icons";
import { governmentPage as c } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Government",
  description: `${c.intro} Virginia SWaM certified. CAGE 7R3W6, UEI STDCL6N3NC68.`,
};

const ICONS = { clipboard: Clipboard, chart: Chart, monitor: Monitor, hardhat: HardHat, box: Box, flask: Flask } as const;

export default function GovernmentPage() {
  return (
    <>
      <Hero image="/images/hero-government.jpg" title={c.title} crumb={c.crumb} text={c.lead} position="center 35%" />

      <section className="section">
        <div className={`wrap ${styles.stack}`}>
          {/* Copy beside a photo pair, the pairing used on Home, About and Services. */}
          <div className={styles.introGrid}>
            <Reveal className={styles.introText}>
              <p className="p">{c.intro}</p>
              <dl className={styles.stats}>
                {c.stats.map(([n, label]) => (
                  <div key={n} className={styles.stat}>
                    <dt className={styles.statNum}><CountUp value={n} /></dt>
                    <dd className={`small ${styles.statLabel}`}>{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <PhotoPair
              big="/images/gov-chamber.jpg" altBig="Council chamber before a session"
              small="/images/gov-session.jpg" altSmall="Council members in session"
            />
          </div>

          <div className={styles.block}>
            <Reveal><h2 className="h2">{c.capabilitiesHeading}</h2></Reveal>
            <div className={styles.capGrid}>
              {c.capabilities.map(({ icon, img, alt, title, roles }, i) => {
                const Icon = ICONS[icon];
                return (
                  <Reveal key={title} className={styles.cap} delay={(i % 3) * 0.08}>
                    <Image src={img} alt={alt} width={400} height={267} className={styles.capPhoto} sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                    <div className={styles.capBody}>
                      <span className={styles.capIcon}><Icon size={20} /></span>
                      <h3 className="h4">{title}</h3>
                      <p className={styles.capRoles}>{roles}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className={styles.block}>
            <Reveal><h2 className="h2">{c.experienceHeading}</h2></Reveal>
            <div className={styles.expGrid}>
              <Reveal className={styles.expList}>
                {c.experience.map(({ client, text }) => (
                  <div key={client} className={styles.exp}>
                    <h3 className="h4">{client}</h3>
                    <p className="p">{text}</p>
                  </div>
                ))}
              </Reveal>
              <PhotoPair
                big="/images/public-works.jpg" altBig="Public works crew on site"
                small="/images/fleet-mechanic.jpg" altSmall="Fleet mechanic at work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width statement band, built like the CTA panels: photo under a dark scrim. */}
      <section className="section">
        <div className="wrap">
          <Reveal className={styles.band}>
            <Image src="/images/gov-delivery.jpg" alt="" fill sizes="100vw" className={styles.bandBg} />
            <div className={styles.bandScrim} />
            <div className={styles.bandBody}>
              <h2 className={`h2 ${styles.bandTitle}`}>{c.deliveryHeading}</h2>
              <p className={styles.bandText}>{c.delivery}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.stack}`}>
          <div className={styles.twoUp}>
            <Reveal className={styles.panelDark}>
              <Image src="/images/panel-use.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.panelBg} />
              <div className={styles.panelScrim} />
              <div className={styles.panelBody}>
                <h2 className={`h2 ${styles.h2Sm} ${styles.onDark}`}>{c.useHeading}</h2>
                <Bullets items={c.use} cols={1} />
              </div>
            </Reveal>
            <Reveal className={styles.panelDark} delay={0.12}>
              <Image src="/images/panel-engagement.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.panelBg} />
              <div className={styles.panelScrim} />
              <div className={styles.panelBody}>
                <h2 className={`h2 ${styles.h2Sm} ${styles.onDark}`}>{c.engagementHeading}</h2>
                <Bullets items={c.engagement} cols={1} />
              </div>
            </Reveal>
          </div>

          <div className={styles.block}>
            <Reveal><h2 className="h2">{c.valueHeading}</h2></Reveal>
            <Bullets items={c.value} />
          </div>

          <div className={styles.twoUp}>
            <Reveal className={`card ${styles.panel}`}>
              <h2 className={`h2 ${styles.h2Sm}`}>{c.dataHeading}</h2>
              <dl className={styles.data}>
                {c.data.map(([k, v]) => (
                  <div key={k} className={styles.dataRow}>
                    <dt className="small">{k}</dt>
                    <dd className={styles.dataValue}>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal className={`card ${styles.panel}`} delay={0.12}>
              <h2 className={`h2 ${styles.h2Sm}`}>{c.naicsHeading}</h2>
              <dl className={styles.data}>
                {c.naics.map(([code, label]) => (
                  <div key={code} className={styles.dataRow}>
                    <dt className={styles.code}>{code}</dt>
                    <dd className={styles.dataValue}>{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className={styles.poc}>
            <Image src="/images/panel-contact.jpg" alt="" fill sizes="100vw" className={styles.panelBg} />
            <div className={styles.panelScrim} />
            <div className={styles.pocText}>
              <h2 className={`h2 ${styles.h2Sm} ${styles.onDark}`}>{c.contactHeading}</h2>
              <p className={styles.pocName}>{c.poc.name}<span className="small">, {c.poc.role}</span></p>
            </div>
            <div className={styles.pocRows}>
              <a href={`mailto:${c.poc.email}`} className={styles.row}><Mail className={styles.icon} />{c.poc.email}</a>
              <a href={c.poc.phoneHref} className={styles.row}><Phone className={styles.icon} />{c.poc.phone}</a>
              <div className={`small ${styles.row}`}><Pin />{c.poc.address}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSplit />
    </>
  );
}
