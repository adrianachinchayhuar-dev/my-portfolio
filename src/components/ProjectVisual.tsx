import Image from 'next/image';
import type { Project } from '@/types';

export default function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  return <div className="project-visual"><Image src={project.image} alt={project.imageAlt} width={740} height={332} sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) 48vw, 580px" priority={priority} fetchPriority={priority ? 'high' : undefined} /></div>;
}
