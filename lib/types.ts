export type ServiceSlug =
  | "web-development"
  | "saas-development"
  | "digital-marketing"
  | "social-media-management";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  name: string;
  category: ServiceSlug;
  summary: string;
  overview: string[];
  objectives: string[];
  challenges: { challenge: string; solution: string }[];
  technologies: string[];
  images: ProjectImage[];
  year?: number;
  featured: boolean;
  liveUrl?: string;
  caseStudy?: { intro: string; challenge: string; solution: string; highlights: string[] };
  isPlaceholder: boolean;
}

