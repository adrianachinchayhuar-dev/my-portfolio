import Image from 'next/image';
export default function WorkspaceArt({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? 'about-art' : 'hero-art float-art'}><Image src="/illustrations/workspace.svg" alt="Ilustración de un espacio creativo con una pantalla de código, una planta y una taza" width={760} height={640} priority={!compact} sizes={compact ? '(max-width: 760px) 100vw, 450px' : '(max-width: 760px) 100vw, 620px'} /></div>;
}
