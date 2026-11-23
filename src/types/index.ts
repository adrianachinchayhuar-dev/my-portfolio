export interface ProjectScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  objective?: string;
  problem?: string;
  features: string[];
  participation?: string;
  scopeNote?: string;
  technologies: string[];
  image: string;
  imageKind: 'illustration' | 'screenshot';
  imageAlt: string;
  screenshots: ProjectScreenshot[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
