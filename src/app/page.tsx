import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, personalInfo, learningTopics } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import HeroIllustration from '@/components/HeroIllustration';
import Icon from '@/components/Icon';
import { ButtonLink, SectionHeading, SocialLinks, ContactBanner } from '@/components/PortfolioUI';
export const metadata: Metadata = { title: 'Inicio', description: personalInfo.description, alternates: { canonical: '/' }, openGraph: { title: `${personalInfo.name} | Full Stack en formación`, description: personalInfo.description, url: '/' } };
export default function Home() {
  return <>
    <div className="shell"><section className="hero"><div className="hero-copy"><span className="eyebrow">Adriana Camila · Portafolio personal</span><h1>Hola, soy Adriana</h1><p className="hero-profession">Full Stack Developer <span>en formación</span></p><p className="hero-description muted">{personalInfo.hero.description}</p><div className="button-row"><ButtonLink href="/projects">Ver mis proyectos</ButtonLink><ButtonLink href="/contact" secondary>Contactarme</ButtonLink></div><SocialLinks /><p className="hero-education">Diseño y Desarrollo de Software <span aria-hidden="true">—</span> TECSUP</p></div><div className="hero-art-column"><HeroIllustration /><span className="hero-vertical" aria-hidden="true">FRONTEND / BACKEND / MOBILE</span></div></section></div>
    <div className="discipline-strip"><div className="shell"><span>Frontend</span><span>Backend</span><span>Bases de datos</span><span>Desarrollo móvil</span></div></div>
    <section className="shell home-work"><div className="section-topline"><SectionHeading label="Proyectos académicos" title="Mis proyectos" description="Estos son algunos de los proyectos académicos en los que he trabajado." /><Link prefetch={false} href="/projects" className="text-link">Explorar los seis proyectos <Icon name="arrow" width="18" /></Link></div><div className="featured-projects">{projects.filter(p => p.featured).map((project,index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>
    <section className="about-band"><div className="shell about-editorial"><div className="editorial-label"><span className="eyebrow">Sobre mí</span><span className="editorial-monogram" aria-hidden="true">AC</span></div><div><h2>Mi formación en desarrollo de software</h2><p className="muted">{personalInfo.bio}</p><Link prefetch={false} className="text-link" href="/about">Un poco más sobre mí <Icon name="arrow" width="18" /></Link></div></div></section>
    <section className="shell focus-section"><SectionHeading label="Áreas de interés" title="En qué me estoy formando" /><div className="focus-grid">{learningTopics.map((topic,index) => <article className="focus-item" key={topic.title}><span className="focus-number">0{index+1}</span><Icon name={topic.icon} /><h3>{topic.title}</h3><p className="muted">{topic.description}</p><small>{topic.stack}</small></article>)}</div><ContactBanner /></section>
  </>;
}
