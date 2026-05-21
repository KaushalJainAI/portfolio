import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { usePageMeta } from '../usePageMeta';

const ProjectsPage: React.FC = () => {
  usePageMeta(
    'Projects',
    'AIAAS and selected work by Kaushal Jain across backend systems, applied AI, ML pipelines, and deployed full-stack products.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Projects</p>
          <h1><span className="accent-band">AIAAS</span> is the main build.</h1>
          <p className="lead">Supporting projects show the range behind it: AI product architecture, backend services, authentication, deployment, and user-facing workflows.</p>
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Hero Project</p>
          <h2>AIAAS</h2>
          <p className="story-text">An AI-as-a-service platform concept for packaging reusable AI capabilities into practical workflows that teams can use without rebuilding the same agent, retrieval, and automation layers from scratch.</p>
          <p className="story-text">The project sits closest to the kind of engineering I want to do: backend-first AI systems, configurable workflows, retrieval, human approval, and a product surface that makes complex AI behavior easier to use.</p>
          <div className="case-study-grid">
            <div>
              <p className="mini">Problem</p>
              <p>Make AI workflows reusable, configurable, and easier to integrate into real product or business use cases.</p>
            </div>
            <div>
              <p className="mini">Built</p>
              <p>Agent workflow structure, retrieval-oriented flows, backend APIs, UI surfaces, and approval-aware automation patterns.</p>
            </div>
            <div>
              <p className="mini">Stack</p>
              <p>React, Python backend services, LLM orchestration, vector retrieval, REST APIs, and deployment-focused architecture.</p>
            </div>
            <div>
              <p className="mini">Result</p>
              <p>A strong portfolio anchor for applied AI engineering, backend ownership, and product thinking.</p>
            </div>
          </div>
          <div className="chips">
            <span className="chip c1">React</span>
            <span className="chip c2">Python</span>
            <span className="chip c3">LLM Workflows</span>
            <span className="chip c1">RAG</span>
            <span className="chip c2">Agents</span>
            <span className="chip c3">APIs</span>
          </div>
          <div className="actions">
            <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="btn primary">View Code</a>
            <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="btn">GitHub Profile</a>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.projects.aiResearchFlow} alt="AI workflow interface representing retrieval, agent orchestration, and applied AI product flows." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Supporting projects</h2>
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

          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Infrastructure AI</p>
            </div>
            <div className="line-body">
              <h3>FaultLine</h3>
              <p>Built around fault detection and issue triage workflows, with a focus on turning noisy signals into clearer engineering decisions and faster diagnosis.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">Python</span>
              <span className="chip c2">ML</span>
              <span className="chip c3">Diagnostics</span>
            </div>
          </article>

          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Health + AI</p>
            </div>
            <div className="line-body">
              <h3>FitGenius</h3>
              <p>A fitness-focused application concept for personalized workout and wellness guidance, combining user inputs with recommendation-style product logic.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">React</span>
              <span className="chip c2">AI</span>
              <span className="chip c3">Recommendations</span>
            </div>
          </article>

          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Career Tech</p>
            </div>
            <div className="line-body">
              <h3>Career Navigator</h3>
              <p>A career-guidance product idea for helping users map skills, roles, resumes, and next actions into a clearer job-search path.</p>
              <div className="project-links">
                <a href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer" className="project-link">
                  <Github /> Source Code
                </a>
              </div>
            </div>
            <div className="line-side">
              <span className="chip c1">LLM</span>
              <span className="chip c2">Career</span>
              <span className="chip c3">Full-Stack</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>More builds</h2>
        </div>
        <p className="section-intro">Smaller projects and experiments that show range across AI products, backend services, and applied ML workflows.</p>
        <div className="skill-grid">
          <article className="skill-group">
            <p className="mini">AI Assistant</p>
            <h3>AI Research Flow</h3>
            <p>Conversational research and retrieval workflow experiments for structuring queries, responses, and context across technical material.</p>
            <div className="chips">
              <span className="chip c1">RAG</span>
              <span className="chip c2">NLP</span>
              <span className="chip c3">Research</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Developer Practice</p>
            <h3>DSA and systems practice</h3>
            <p>Algorithm and data-structure practice connected to backend reasoning, edge cases, performance, and interview preparation.</p>
            <div className="chips">
              <span className="chip c1">500+ LeetCode</span>
              <span className="chip c2">Python</span>
              <span className="chip c3">C++</span>
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
