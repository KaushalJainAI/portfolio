import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { projects } from '../data/projects';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';

const ProjectsPage: React.FC = () => {
  usePageMeta(
    'Projects',
    'Selected work by Kaushal Jain across agentic AI, full-stack products, security tooling, infrastructure, and applied ML.'
  );

  const majorProjects = projects.filter(project => project.category === 'personal');
  const otherProjects = projects.filter(project => project.category !== 'personal');

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Projects</p>
          <h1>AI systems, backend platforms, and <span className="accent-band">products that ship</span>.</h1>
          <p className="lead">A concise view of the strongest work: deployed commerce, agentic automation, QA/security tooling, recommendation systems, and cloud infrastructure.</p>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.projects.aiResearchFlow} alt="AI workflow interface representing retrieval, agent orchestration, and applied AI product flows." className="feature-media" fetchPriority="high" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Featured projects</h2>
        </div>
        <div className="line-list">
          {majorProjects.map(project => (
            <article className="line-item" key={project.slug}>
              <div className="line-meta">
                <p className="mini">{project.eyebrow}</p>
              </div>
              <div className="line-body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-links">
                  <Link to={`${ROUTES.projects}/${project.slug}`} className="project-link">
                    Details
                  </Link>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
                      <Github /> Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLink /> Live
                    </a>
                  )}
                </div>
              </div>
              <div className="line-side">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <span className={`chip c${(index % 3) + 1}`} key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>More work</h2>
        </div>
        <div className="skill-grid">
          {otherProjects.map(project => (
            <article className="skill-group" key={project.slug}>
              <p className="mini">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chips">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <span className={`chip c${(index % 3) + 1}`} key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <Link to={`${ROUTES.projects}/${project.slug}`} className="project-link">
                  Details
                </Link>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
                    <Github /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Visuals</h2>
        </div>
        <div className="project-collage">
          <figure className="project-tile project-tile-wide">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.nguSpices} alt="NGU Spices homepage showing hero section, navigation, and featured spice products." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>NGU Spices</span> Production commerce platform</figcaption>
          </figure>
          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.multiAgentSystem} alt="Workflow dashboard showing multiple draft workflows in a dark interface." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>AIAAS</span> Agentic workflow platform</figcaption>
          </figure>
          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.firmwareSecurity} alt="Authentication screen demo with email and password fields and a sign in action." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>Security</span> Internship backend work</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
