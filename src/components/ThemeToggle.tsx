"use client";
import { useEffect, useSyncExternalStore } from 'react';
import Icon from './Icon';
function snapshot() {
  try { const saved = localStorage.getItem('portfolio-theme'); if (saved === 'dark' || saved === 'light') return saved; } catch {}
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function subscribe(callback: () => void) {
  const media = matchMedia('(prefers-color-scheme: dark)');
  window.addEventListener('storage', callback); window.addEventListener('portfolio-theme', callback); media.addEventListener('change', callback);
  return () => { window.removeEventListener('storage', callback); window.removeEventListener('portfolio-theme', callback); media.removeEventListener('change', callback); };
}
export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, snapshot, () => 'light');
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  return <button className="icon-button theme-toggle" type="button" aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'} onClick={() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('portfolio-theme', next); } catch {}
    document.documentElement.dataset.theme = next;
    window.dispatchEvent(new Event('portfolio-theme'));
  }}><Icon name={theme === 'light' ? 'moon' : 'sun'} /></button>;
}
