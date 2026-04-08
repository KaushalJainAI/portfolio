import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Selected projects</p>
          <h1>Work that mixes <span className="accent-band">engineering and product sense</span>.</h1>
          <p className="lead">These are the projects I usually point people to first. They show the kind of problems I like solving and the way I tend to approach them.</p>
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
              <p>I built a production-focused e-commerce experience with AI search, voice ordering, and backend performance improvements using Redis.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
                <a href="#" className="project-link">
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
              <p>I designed a system of specialized agents for chat, web tasks, and retrieval, while keeping human oversight part of the workflow.</p>
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
              <p>I engineered time-series features and trained models to estimate remaining useful life from battery degradation data.</p>
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
              <p>I developed a secure API platform with OTP auth, role-based access, and audit trails for firmware IP workflows.</p>
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
        <p className="section-intro">A smaller collage of product screens, workflow views, and interface details from the projects above.</p>
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
