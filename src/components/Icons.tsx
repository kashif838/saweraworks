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

/* ---------- competency icons ---------- */
export const Clipboard = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><rect x="8" y="3" width="8" height="4" rx="1" /><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" /><path d="M8 12h8M8 16h5" /></svg>
);
export const Headset = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2" y="14" width="4" height="6" rx="1.5" /><rect x="18" y="14" width="4" height="6" rx="1.5" /><path d="M20 20v0a3 3 0 0 1-3 3h-3" /></svg>
);
export const Chart = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><path d="M4 20h16" /><path d="M7 20v-7M12 20V6M17 20v-4" /></svg>
);
export const Box = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" /><path d="m3 8 9 5 9-5M12 13v8" /></svg>
);
export const Monitor = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
);
export const Wrench = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><path d="M15 3a5 5 0 0 0-4.6 7L3 17.4V21h3.6l7.4-7.4A5 5 0 1 0 15 3Z" /><path d="M17.5 6.5h.01" /></svg>
);
export const HardHat = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><path d="M4 16a8 8 0 0 1 16 0" /><path d="M9 16V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9" /><rect x="2" y="16" width="20" height="4" rx="1.5" /></svg>
);
export const Flask = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><path d="M10 3v6.5L4.6 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-3L14 9.5V3" /><path d="M8.5 3h7M7.5 14h9" /></svg>
);
export const Database = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
);
export const People = ({ size = 24, ...r }: P) => (
  <svg {...base(size, r)}><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16.5 5.2a3.2 3.2 0 0 1 0 5.6M18 14.5a6.5 6.5 0 0 1 3.5 5.5" /></svg>
);

