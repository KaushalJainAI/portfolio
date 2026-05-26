import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { allProjects } from '../data/projects';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams();
  const project = allProjects.find(item => item.slug === slug);

  usePageMeta(
    project ? project.title : 'Project',
    project ? project.summary : 'Project details by Kaushal Jain.'
  );

  if (!project) {
    return <Navigate to={ROUTES.projects} replace />;
  }

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <div className="actions">
            {project.liveLink && (
              <a className="btn primary" href={project.liveLink} target="_blank" rel="noreferrer">
                <ExternalLink size={18} style={{ marginRight: '0.4rem' }} />
                Live Link
              </a>
            )}
            {(project.codeLinks?.length ? project.codeLinks : project.githubLink ? [{ label: 'Code', url: project.githubLink }] : []).map(link => (
              <a className="btn" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                <Github size={18} style={{ marginRight: '0.4rem' }} />
                {link.label}
              </a>
            ))}
            <Link className="btn" to={ROUTES.projects}>All Projects</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="case-study-grid">
          <div>
            <p className="mini">Why</p>
            <p>{project.why}</p>
          </div>
          <div>
            <p className="mini">Impact</p>
            <p>{project.impact}</p>
          </div>
          <div>
            <p className="mini">Status</p>
            <p>{project.status}</p>
          </div>
          <div>
            <p className="mini">Links</p>
            <p>{project.liveLink ? 'Live project available.' : 'No public live link.'} {project.githubLink || project.codeLinks?.length ? 'Code link available.' : 'Code is not public yet.'}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>What I built</h2>
        </div>
        <div className="line-list">
          {project.built.map((item, index) => (
            <article className="line-item" key={item}>
              <div className="line-meta">
                <p className="mini">{String(index + 1).padStart(2, '0')}</p>
              </div>
              <div className="line-body">
                <p>{item}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Stack</h2>
        </div>
        <div className="chips">
          {project.tech.map((tech, index) => (
            <span className={`chip c${(index % 3) + 1}`} key={tech}>{tech}</span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
