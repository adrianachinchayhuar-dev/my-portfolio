"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { personalInfo } from '@/lib/data';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';
const links = [['/', 'Inicio'], ['/about', 'Sobre mí'], ['/projects', 'Proyectos'], ['/contact', 'Contacto']];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell header-inner">
    <Link prefetch={false} className="brand" href="/" onClick={() => setOpen(false)} title="Volver al inicio"><span className="brand-mark" aria-hidden="true">a.</span><span className="brand-name">Adriana Camila<span className="brand-surname">Chinchayhuara Chumpitaz</span></span></Link>
    <nav aria-label="Navegación principal" id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} onKeyDown={(event) => { if (event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>{links.map(([href, label]) => {
      const active = href === '/' ? pathname === href : pathname.startsWith(href);
      return <Link prefetch={false} key={href} href={href} aria-current={active ? 'page' : undefined} className={active ? 'active' : ''} onClick={() => setOpen(false)}>{label}</Link>;
    })}</nav>
    <div className="header-actions"><ThemeToggle />{personalInfo.cvUrl && <a href={personalInfo.cvUrl} className="button button-primary cv-link" download><Icon name="download" />Descargar CV</a>}<button type="button" id="menu-toggle" className="icon-button menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span></button></div>
  </div></header>;
}
