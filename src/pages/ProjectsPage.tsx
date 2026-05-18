import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { usePageMeta } from '../usePageMeta';

const ProjectsPage: React.FC = () => {
  usePageMeta(
    'Projects',
    'Selected work by Kaushal Jain across AI, backend systems, and product building — including the NGU Spices platform and agentic AI systems.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Projects</p>
          <h1>The work I usually <span className="accent-band">point people to</span>.</h1>
          <p className="lead">A few projects that show what I like working on and how I approach it. Source and demos are linked where they're available.</p>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.heroWorkspace} alt="A professional software engineering workspace with an ultra-wide monitor showing code." className="feature-media" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Featured work</h2>
        </div>
        <div className="line-list">
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">E-commerce + AI</p>
            </div>
            <div className="line-body">
              <h3>NGU Spices Platform</h3>
              <p>A deployed e-commerce site for a spice business, with AI-assisted search, voice ordering, and Redis caching to cut response times.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
                <a href="https://nidhimasala.kaushaljain.com" target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink /> Live Demo
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">React</span>
              <span className="chip c2">Django</span>
              <span className="chip c3">AWS</span>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Agentic AI</p>
            </div>
            <div className="line-body">
              <h3>Multi-Agent System + Bot</h3>
              <p>Specialized agents for chat, web tasks, and retrieval, built on LangGraph with a human approval step in the loop.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">LangGraph</span>
              <span className="chip c2">FAISS</span>
              <span className="chip c3">Flask</span>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Predictive Maintenance</p>
            </div>
            <div className="line-body">
              <h3>NASA Battery RUL</h3>
              <p>Time-series feature engineering and models to estimate remaining useful life from NASA's battery degradation dataset.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">Python</span>
              <span className="chip c2">ML</span>
              <span className="chip c3">Analytics</span>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Security Platform</p>
            </div>
            <div className="line-body">
              <h3>Firmware IP Protection</h3>
              <p>A Django REST platform with OTP auth, role-based access, and audit trails for firmware IP workflows. Built during the Statcon internship.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">JWT</span>
              <span className="chip c2">RBAC</span>
              <span className="chip c3">Audit</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Project visuals</h2>
        </div>
        <p className="section-intro">Screenshots from the projects above.</p>
        <div className="project-collage">
          <figure className="project-tile project-tile-wide">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.nguSpices} alt="NGU Spices homepage showing hero section, navigation, and featured spice products." className="feature-media feature-media-fit" />
            </div>
            <figcaption><span>NGU Spices</span> Storefront experience</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.multiAgentSystem} alt="Workflow dashboard showing multiple draft workflows in a dark interface." className="feature-media feature-media-fit" />
            </div>
            <figcaption><span>Multi-Agent System</span> Workflow dashboard</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.nasaBatteryRul} alt="A professional battery health and predictive maintenance visualization dashboard showing RUL metrics." className="feature-media feature-media-fit" />
            </div>
            <figcaption><span>NASA Battery RUL</span> Predictive maintenance analysis</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.firmwareSecurity} alt="Authentication screen demo with email and password fields and a sign in action." className="feature-media feature-media-fit" />
            </div>
            <figcaption><span>Firmware Security Platform</span> Secure sign-in screen</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.aiResearchFlow} alt="Dark interface showing online workspace and research query flow." className="feature-media feature-media-fit" />
            </div>
            <figcaption><span>AI Research Flow</span> Conversational interface</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
