import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size: number, rest: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...rest,
});

export const Check = ({ size = 14, ...r }: P) => (
  <svg {...base(size, r)} strokeWidth={2.5}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Phone = ({ size = 18, ...r }: P) => (
  <svg {...base(size, r)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z" /></svg>
);
export const Mail = ({ size = 18, ...r }: P) => (
  <svg {...base(size, r)}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
);
export const Pin = ({ size = 18, ...r }: P) => (
  <svg {...base(size, r)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Menu = ({ size = 22, ...r }: P) => (
  <svg {...base(size, r)}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
export const Close = ({ size = 22, ...r }: P) => (
  <svg {...base(size, r)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Chevron = ({ size = 16, ...r }: P) => (
  <svg {...base(size, r)}><path d="m9 6 6 6-6 6" /></svg>
);
export const ChevronDown = ({ size = 18, ...r }: P) => (
  <svg {...base(size, r)}><path d="m6 9 6 6 6-6" /></svg>
);
export const Upload = ({ size = 20, ...r }: P) => (
  <svg {...base(size, r)}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
);

const social: Record<string, React.ReactNode> = {
  Facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  Instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>,
  Twitter: <path d="M4 4l16 16M20 4 4 20" />,
  LinkedIn: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
  YouTube: <><path d="M22.5 7.2a3 3 0 0 0-2.1-2.1C18.5 4.6 12 4.6 12 4.6s-6.5 0-8.4.5A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8z" /><path d="m9.8 15.3 5.4-3.3-5.4-3.3z" fill="currentColor" stroke="none" /></>,
};
export const Social = ({ name, size = 17, ...r }: P & { name: string }) => (
  <svg {...base(size, r)} strokeWidth={1.8}>{social[name]}</svg>
);
