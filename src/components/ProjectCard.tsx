import Link from 'next/link';
import type { Project } from '@/types';
import Icon from './Icon';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, index = 0, headingLevel = 3, priority = false }: { project: Project; index?: number; headingLevel?: 2 | 3; priority?: boolean }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <article className="project-card">
      <div className="project-card-link">
        <div className="project-image-link"><ProjectVisual project={project} priority={priority} /></div>
        <div className="project-content">
          <span className="project-category"><span>{String(index + 1).padStart(2, '0')}</span>{project.category}</span>
          <Heading><Link prefetch={false} href={`/projects/${project.slug}`} className="project-title-link">{project.title}</Link></Heading>
          <p className="muted">{project.description}</p>
          <div className="project-card-bottom">
            <div className="pills">{project.technologies.slice(0, 3).map(tech => <span className="pill" key={tech}>{tech}</span>)}</div>
            <span className="project-arrow" aria-hidden="true"><Icon name="arrow" /></span>
          </div>
        </div>
      </div>
    </article>
  );
}
