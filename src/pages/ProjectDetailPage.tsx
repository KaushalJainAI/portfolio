import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { allProjects } from '../data/projects';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ProjectStats from '../components/ProjectStats';
import { Check } from 'lucide-react';
import type { CaseStudyItem } from '../data/projects';

const CaseStudyList: React.FC<{ items: CaseStudyItem[]; numbered?: boolean }> = ({ items, numbered = false }) => (
  <div className={numbered ? 'case-flow-list' : 'case-card-grid'}>
    {items.map((item, index) => (
      <article className={numbered ? 'case-flow-item' : 'case-card'} key={`${item.title}-${index}`}>
        {numbered ? <span className="case-step">{String(index + 1).padStart(2, '0')}</span> : null}
        <div>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </div>
      </article>
    ))}
  </div>
);

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

  const caseStudy = project.caseStudy;

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

      <ProjectStats project={project} />

      {project.highlights?.length ? (
        <section className="section">
          <div className="section-head">
            <span className="section-bullet" aria-hidden="true"></span>
            <h2>Why it stands out</h2>
          </div>
          <ul className="highlight-list">
            {project.highlights.map(point => (
              <li className="highlight" key={point}>
                <span className="highlight-icon" aria-hidden="true">
                  <Check size={16} strokeWidth={2.4} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {caseStudy ? (
        <section className="section">
          <div className="case-overview">
            <article className="case-overview-main">
              <p className="mini">Project abstract</p>
              <p>{caseStudy.abstract}</p>
            </article>
            <article>
              <p className="mini">Motivation</p>
              <p>{caseStudy.motivation}</p>
            </article>
            <article>
              <p className="mini">Problem statement</p>
              <p>{caseStudy.problemStatement}</p>
            </article>
          </div>
        </section>
      ) : null}

      {caseStudy ? (
        <section className="section">
          <div className="section-head">
            <span className="section-bullet" aria-hidden="true"></span>
            <h2>System goals</h2>
          </div>
          <ul className="goal-grid">
            {caseStudy.systemGoals.map(goal => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </section>
      ) : null}

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

      {caseStudy ? (
        <section className="section">
          <div className="section-head">
            <span className="section-bullet" aria-hidden="true"></span>
            <h2>Architecture views</h2>
          </div>
          <div className="architecture-view-grid">
            {caseStudy.architectureViews.map(view => (
              <article className="architecture-view" key={view.name}>
                <p className="mini">{view.name}</p>
                <p>{view.purpose}</p>
                <div className="chips compact">
                  {view.components.map((component, index) => (
                    <span className={`chip c${(index % 3) + 1}`} key={component}>{component}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

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

      {project.architecture && (
        <section className="section">
          <div className="section-head">
            <span className="section-bullet" aria-hidden="true"></span>
            <h2>High-level and low-level design</h2>
          </div>
          <ArchitectureDiagram architecture={project.architecture} />
        </section>
      )}

      {caseStudy ? (
        <>
          <section className="section">
            <div className="section-head">
              <span className="section-bullet" aria-hidden="true"></span>
              <h2>Key workflows</h2>
            </div>
            <CaseStudyList items={caseStudy.keyWorkflows} numbered />
          </section>

          <section className="section">
            <div className="section-head">
              <span className="section-bullet" aria-hidden="true"></span>
              <h2>Low-level design details</h2>
            </div>
            <CaseStudyList items={caseStudy.lowLevelDesign} />
          </section>

          <section className="section">
            <div className="section-head">
              <span className="section-bullet" aria-hidden="true"></span>
              <h2>Security and reliability</h2>
            </div>
            <CaseStudyList items={caseStudy.securityAndReliability} />
          </section>

          <section className="section">
            <div className="section-head">
              <span className="section-bullet" aria-hidden="true"></span>
              <h2>Tradeoffs</h2>
            </div>
            <CaseStudyList items={caseStudy.tradeoffs} />
          </section>

          <section className="section">
            <div className="recruiter-takeaway">
              <p className="mini">Recruiter takeaway</p>
              <p>{caseStudy.recruiterTakeaway}</p>
            </div>
          </section>
        </>
      ) : null}

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
