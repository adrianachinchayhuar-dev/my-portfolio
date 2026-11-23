import type { Metadata } from 'next';
import { contactLinks,personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';
import { SocialLinks } from '@/components/PortfolioUI';
const description=`Contacta con ${personalInfo.name}, desarrolladora Full Stack en formación, para conversar sobre proyectos web, backend y desarrollo móvil.`;
export const metadata:Metadata={title:'Contacto',description,alternates:{canonical:'/contact'},openGraph:{title:`Contacto | ${personalInfo.shortName}`,description,url:'/contact',type:'website'},twitter:{card:'summary_large_image',title:`Contacto | ${personalInfo.shortName}`,description}};
export default function ContactPage(){const recipient=contactLinks.find(c=>c.field==='email'&&c.href)?.value;return <div className="shell page-shell"><div className="contact-layout"><div className="contact-intro"><span className="eyebrow">Contacto</span><h1>Contacto</h1><p className="muted">Puedes escribirme para conversar sobre mis proyectos, colaborar o compartir una oportunidad de aprendizaje.</p><p className="contact-signature">Adriana Camila<span>Chinchayhuara Chumpitaz</span></p><SocialLinks cards/></div><ContactForm recipient={recipient}/></div></div>}
