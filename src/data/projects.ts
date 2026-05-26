import projectData from './projects.json';

export type ProjectCategory = 'personal' | 'supporting' | 'research' | 'internship';

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: string;
  eyebrow: string;
  summary: string;
  why: string;
  impact: string;
  built: string[];
  tech: string[];
  liveLink?: string | null;
  githubLink?: string | null;
  codeLinks?: Array<{
    label: string;
    url: string;
  }>;
};

export const projects = projectData.projects as PortfolioProject[];
export const researchProjects = projectData.researchProjects as PortfolioProject[];
export const allProjects = [...projects, ...researchProjects];
