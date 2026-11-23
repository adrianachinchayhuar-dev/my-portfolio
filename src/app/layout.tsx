import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';
export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: { default: `${personalInfo.name} | Portafolio`, template: `%s | ${personalInfo.name}` },
  description: personalInfo.description,
  keywords: ['desarrollo web', 'Next.js', 'React', 'TypeScript', 'portafolio', personalInfo.name],
  authors: [{ name: personalInfo.name }], creator: personalInfo.name,
  openGraph: { type: 'website', locale: 'es_PE', url: personalInfo.siteUrl, title: `${personalInfo.name} | Portafolio`, description: personalInfo.description, siteName: personalInfo.name },
  twitter: { card: 'summary_large_image', title: `${personalInfo.name} | Portafolio`, description: personalInfo.description, images: ['/opengraph-image'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};
const themeScript = `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className="antialiased"><a className="skip-link" href="#main-content">Saltar al contenido</a><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
