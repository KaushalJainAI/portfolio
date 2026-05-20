// Central site constants. Keep links and filenames in one place.

// Resume is served from /public so the download works same-origin and the
// `download` attribute is honored. Cloudflare also receives a _headers rule
// that sends the PDF as an attachment.
export const RESUME_URL = '/Kaushal_Jain_Resume.pdf';
export const RESUME_URL_CLOUDINARY =
  'https://res.cloudinary.com/dxhf4srxx/raw/upload/fl_attachment:Kaushal_Jain_Resume/v1779089770/portfolio/Kaushal_Jain_Resume.pdf';
export const RESUME_DOWNLOAD_NAME = 'Kaushal_Jain_Resume.pdf';

export const ROUTES = {
  home: '/',
  about: '/about',
  skills: '/skills',
  research: '/research',
  projects: '/projects',
  contact: '/contact',
  personal: '/personal',
} as const;

// Old static-site paths kept working via redirects.
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/portfolio.html': ROUTES.home,
  '/about.html': ROUTES.about,
  '/skills.html': ROUTES.skills,
  '/research.html': ROUTES.research,
  '/projects.html': ROUTES.projects,
  '/contact.html': ROUTES.contact,
  '/personal.html': ROUTES.personal,
};
