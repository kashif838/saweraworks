"use client";

import { useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion, type MotionProps, type Variants } from "framer-motion";

/** Matches the existing `.rise` language in globals.css: short, ease-out, small lift. */
const EASE = [0.23, 1, 0.32, 1] as const;

/** Trigger a little before the element is fully on screen, and only the first time. */
export const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" } as const;

/** Delay comes through `custom` so a variant transition never overrides it. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } }),
};

/** Images settle in with a fade and a barely-there scale, no zoom. */
export const revealImage: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: (delay: number = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.95, ease: EASE, delay } }),
};

/** Parent for lists and card grids: children follow each other instead of landing together. */
export const revealStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
};

/** Bullet lists sit inside a column that is fading in too, so they wait and step wider apart. */
export const revealStaggerList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22, delayChildren: 0.25 } },
};

/** Props for a single reveal; empty when the visitor asks for reduced motion. */
export function useRevealProps(variants: Variants = revealUp, delay = 0): MotionProps {
  const reduce = useReducedMotion();
  if (reduce) return {};
  return { variants, initial: "hidden", whileInView: "show", viewport: VIEWPORT, custom: delay };
}

/** Props for a group and its items. Both go empty together so nothing can stay hidden. */
export function useStaggerProps(itemVariants: Variants = revealUp, groupVariants: Variants = revealStagger): { group: MotionProps; item: MotionProps } {
  const reduce = useReducedMotion();
  if (reduce) return { group: {}, item: {} };
  return {
    group: { variants: groupVariants, initial: "hidden", whileInView: "show", viewport: VIEWPORT },
    item: { variants: itemVariants },
  };
}

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Seconds. Use sparingly, to offset a column against the one beside it. */
  delay?: number;
  variants?: Variants;
};

/**
 * Drop-in replacement for a wrapper <div>, so no element is added to the DOM and
 * no grid or flex position changes. Renders a plain div under reduced motion.
 */
export default function Reveal({ children, className, style, delay = 0, variants = revealUp }: Props) {
  const props = useRevealProps(variants, delay);
  return (
    <motion.div className={className} style={style} {...props}>
      {children}
    </motion.div>
  );
}

const MotionImage = motion.create(Image);

/** next/image's drag and animation handlers clash with motion's; motion owns them here. */
type RevealImageProps = Omit<ImageProps, "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd" | "layout" | "ref"> & { delay?: number };

/** A standalone <Image> that fades in, without wrapping it in an extra element. */
export function RevealImage({ delay = 0, ...props }: RevealImageProps) {
  const reveal = useRevealProps(revealImage, delay);
  return <MotionImage {...props} {...reveal} />;
}

/** The text around the first number in a value, e.g. "Fortune " + "500" + "". */
function splitNumber(value: string) {
  const m = value.match(/\d[\d,]*/);
  if (!m || m.index === undefined) return null;
  const digits = m[0];
  const raw = digits.replace(/,/g, "");
  // Years are dates, not quantities: counting up to one reads as a bug.
  if (/^(19|20)\d{2}$/.test(raw)) return null;
  return {
    prefix: value.slice(0, m.index),
    suffix: value.slice(m.index + digits.length),
    target: Number(raw),
    /** Keep the source formatting: leading zeros and thousand separators. */
    format: (n: number) => {
      const s = raw.startsWith("0") ? String(n).padStart(raw.length, "0") : String(n);
      return digits.includes(",") ? Number(s).toLocaleString("en-US") : s;
    },
  };
}

/**
 * Counts the number inside a value up from zero when it scrolls into view.
 * Values with no number, and reduced-motion visitors, get the plain text.
 * The server renders the real value, so the markup never holds a "0"; the count
 * writes straight to the text node, so it costs no React renders per frame.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const parts = splitNumber(value);

  useEffect(() => {
    const el = ref.current;
    const num = numRef.current;
    if (!el || !num || !parts || reduce) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const started = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - started) / 1600);
          const eased = 1 - Math.pow(1 - t, 3);
          num.textContent = parts.format(Math.round(parts.target * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        num.textContent = parts.format(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduce]);

  if (!parts) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {parts.prefix}<span ref={numRef}>{parts.format(parts.target)}</span>{parts.suffix}
    </span>
  );
}
