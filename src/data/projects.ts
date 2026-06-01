import projectData from './projects.json';

export type ProjectCategory = 'personal' | 'supporting' | 'research' | 'internship';

export type ArchitectureTier = {
  label: string;
  nodes: string[];
};

export type DesignPattern = {
  name: string;
  detail: string;
};

/** A real, hand-entered headline number (e.g. FEMH "43.79% test accuracy"). */
export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectArchitecture = {
  /** One-line framing of the high-level design shown in the diagram. */
  caption: string;
  /** High-level design: top-down layered flow of the system. */
  tiers: ArchitectureTier[];
  /** Low-level design / engineering patterns utilised in the build. */
  patterns: DesignPattern[];
  /** How the system scales (and where the limits are). */
  scalability: string[];
  /** Optional real outcome numbers; prioritised over derived scope stats. */
  metrics?: ProjectMetric[];
};

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
  /** Recruiter-facing selling points — what makes this project stand out. */
  highlights?: string[];
  architecture?: ProjectArchitecture;
};

export const projects = projectData.projects as PortfolioProject[];
export const researchProjects = projectData.researchProjects as PortfolioProject[];
export const allProjects = [...projects, ...researchProjects];
