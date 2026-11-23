import type { SVGProps } from 'react';
const paths = {
  phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
  code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" /></>,
  arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m13 4v-4a3 3 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 19.5 6a4.3 4.3 0 0 0-.1-3s-1-.3-3.4 1.3a12 12 0 0 0-6 0C7.6 2.7 6.6 3 6.6 3a4.3 4.3 0 0 0-.1 3 4.7 4.7 0 0 0-1.2 3.3c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 10 17v4" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M7 10v7m0-10v.1m4 10v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  moon: <path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1" /></>,
  layers: <><path d="m12 3 10 6-10 6L2 9l10-6ZM2 13l10 6 10-6M2 17l10 6 10-6" /></>,
  sparkles: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2Z" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
};
export type IconName = keyof typeof paths;
export default function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
