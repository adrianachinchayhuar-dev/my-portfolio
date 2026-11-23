import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import Icon from './Icon';
import { SocialLinks } from './PortfolioUI';
export default function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><div><Link prefetch={false} className="footer-brand" href="/"><Icon name="code" />{personalInfo.name}</Link><p className="muted">Estudiante de Diseño y Desarrollo de Software en TECSUP.</p></div><div className="footer-links"><Link prefetch={false} href="/projects">Proyectos</Link><Link prefetch={false} href="/about">Sobre mí</Link><Link prefetch={false} href="/contact">Contacto</Link></div><SocialLinks /></div><div className="shell footer-bottom"><small>© {new Date().getFullYear()} {personalInfo.name}</small><small>Desarrollado con Next.js</small></div></footer>;
}
