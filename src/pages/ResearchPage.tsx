import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { researchProjects } from '../data/projects';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';

const ResearchPage: React.FC = () => {
  usePageMeta(
    'Research',
    'Applied ML research by Kaushal Jain across Vesuvius scroll ink detection and FEMH voice disorder classification.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Research</p>
          <h1>Applied ML for <span className="accent-band">noisy real-world data</span>.</h1>
          <p className="lead">Focused work in computer vision, medical audio, and predictive-maintenance style modeling.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.projects}>See Projects</Link>
            <Link className="btn" to={ROUTES.skills}>View Skills</Link>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.projects.aiResearchFlow} alt="Machine learning research interface with neural network and analysis visuals." className="feature-media" fetchPriority="high" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Research work</h2>
        </div>
        <div className="skill-grid">
          {researchProjects.map(project => (
            <article className="skill-group" key={project.slug}>
              <p className="mini">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chips">
                {project.tech.slice(0, 4).map((tech, index) => (
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
          <h2>Highlights</h2>
        </div>
        <div className="line-list">
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">FEMH</p>
            </div>
            <div className="line-body">
              <h3>Verified experiment metrics</h3>
              <p>1,121 samples, six classes, 50.0% best validation accuracy, and 43.79% test accuracy with a multimodal audio plus metadata model.</p>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Vesuvius</p>
            </div>
            <div className="line-body">
              <h3>Pipeline, not just notebooks</h3>
              <p>CT surface volumes, ink probability maps, U-Net/TimeSformer direction, and Greek letter candidate extraction.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ResearchPage;
