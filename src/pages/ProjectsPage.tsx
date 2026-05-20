import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { usePageMeta } from '../usePageMeta';

const ProjectsPage: React.FC = () => {
  usePageMeta(
    'Projects',
    'Selected work by Kaushal Jain across backend systems, applied AI, ML pipelines, and deployed full-stack products.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Projects</p>
          <h1>Projects with <span className="accent-band">real product and engineering surface area</span>.</h1>
          <p className="lead">A focused set of systems I use to show how I think: backend architecture, applied AI, authentication, deployment, and user-facing workflows.</p>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.heroWorkspace} alt="A professional software engineering workspace with an ultra-wide monitor showing code." className="feature-media" fetchPriority="high" />
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Featured Case Study</p>
          <h2>NGU Spices Platform</h2>
          <p className="story-text">A deployed e-commerce platform for a spice business, built around product discovery, ordering flows, and faster customer interactions.</p>
          <p className="story-text">I worked across the product surface: React storefront, Django APIs, AI-assisted search, voice ordering, caching, deployment, and the practical details needed to make the site usable for a real business.</p>
          <div className="case-study-grid">
            <div>
              <p className="mini">Problem</p>
              <p>Turn a traditional product catalog into a usable online ordering experience.</p>
            </div>
            <div>
              <p className="mini">Built</p>
              <p>Storefront, product browsing, backend APIs, AI search, voice ordering, and caching.</p>
            </div>
            <div>
              <p className="mini">Stack</p>
              <p>React, Django, Redis, AWS, REST APIs, Cloudflare routing.</p>
            </div>
            <div>
              <p className="mini">Result</p>
              <p>A live product that demonstrates full-stack ownership, not just a local demo.</p>
            </div>
          </div>
          <div className="chips">
            <span className="chip c1">React</span>
            <span className="chip c2">Django</span>
            <span className="chip c3">Redis</span>
            <span className="chip c1">AWS</span>
            <span className="chip c2">AI Search</span>
            <span className="chip c3">Voice Ordering</span>
          </div>
          <div className="actions">
            <a href="https://nidhimasala.kaushaljain.com" target="_blank" rel="noreferrer" className="btn primary">Open Live Demo</a>
            <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="btn">View Code</a>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.projects.nguSpices} alt="NGU Spices homepage showing navigation, product browsing, and storefront layout." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
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
              <p>Built and deployed a full-stack commerce platform with product browsing, AI-assisted search, voice ordering, Redis caching, and a live customer-facing demo.</p>
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
              <span className="chip c3">Redis</span>
            </div>
          </article>

          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Agentic AI</p>
            </div>
            <div className="line-body">
              <h3>Multi-Agent System + Bot</h3>
              <p>Designed specialized agents for chat, web tasks, and retrieval workflows using LangGraph, FAISS, Flask, and a human-approval step for safer execution.</p>
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
              <p>Built a time-series ML pipeline for remaining-useful-life prediction using NASA battery degradation data, feature engineering, and model comparison.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">Python</span>
              <span className="chip c2">Time Series</span>
              <span className="chip c3">ML</span>
            </div>
          </article>

          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Security Platform</p>
            </div>
            <div className="line-body">
              <h3>Firmware IP Protection</h3>
              <p>Developed a Django REST platform for firmware IP workflows with OTP authentication, JWT sessions, role-based access, and audit trails during the Statcon internship.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">Django REST</span>
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
              <img src={assetLinks.projects.nguSpices} alt="NGU Spices homepage showing hero section, navigation, and featured spice products." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>NGU Spices</span> Storefront experience</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.multiAgentSystem} alt="Workflow dashboard showing multiple draft workflows in a dark interface." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>Multi-Agent System</span> Workflow dashboard</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.nasaBatteryRul} alt="A professional battery health and predictive maintenance visualization dashboard showing RUL metrics." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>NASA Battery RUL</span> Predictive maintenance analysis</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.firmwareSecurity} alt="Authentication screen demo with email and password fields and a sign in action." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>Firmware Security Platform</span> Secure sign-in screen</figcaption>
          </figure>

          <figure className="project-tile">
            <div className="media-frame project-photo">
              <img src={assetLinks.projects.aiResearchFlow} alt="Dark interface showing online workspace and research query flow." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>AI Research Flow</span> Conversational interface</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
