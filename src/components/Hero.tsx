import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import styles from "./Hero.module.css";

type Props = {
  image: string;
  alt?: string;
  title: string;
  text?: string;
  crumb?: string;
  size?: "home" | "page";
  position?: string;
  /** Optional muted background loop. `image` is the poster and the reduced-motion fallback. */
  video?: string;
  children?: React.ReactNode;
};

export default function Hero({ image, alt = "", title, text, crumb, size = "page", position = "center", video, children }: Props) {
  return (
    <section className={`${styles.hero} ${size === "home" ? styles.home : styles.page}`}>
      <Image src={image} alt={alt} fill priority sizes="100vw" quality={78} style={{ objectFit: "cover", objectPosition: position }} />
      {video && (
        <video className={styles.video} autoPlay muted loop playsInline poster={image} aria-hidden="true" style={{ objectPosition: position }}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className={styles.scrim} />
      <Header />
      <div className={`wrap ${styles.content}`}>
        {crumb && (
          <div className={`${styles.crumb} rise`}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">→</span>
            <span>{crumb}</span>
          </div>
        )}
        <h1 className={`h1 ${styles.title} rise`}>{title}</h1>
        {text && <p className={`${styles.text} rise rise-2`}>{text}</p>}
        {children && <div className={`${styles.actions} rise rise-3`}>{children}</div>}
      </div>
    </section>
  );
}
