import Image from 'next/image';
import { personalInfo } from '@/lib/data';
export default function HeroIllustration(){return <div className="hero-portrait"><Image src={personalInfo.hero.image} alt={personalInfo.hero.imageAlt} width={1400} height={933} priority fetchPriority="high" sizes="(max-width: 520px) calc(100vw - 40px), (max-width: 760px) 480px, (max-width: 1200px) 50vw, 605px" /></div>}
