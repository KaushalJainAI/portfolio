import React from 'react';
import { FileText } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { RESUME_URL, RESUME_DOWNLOAD_NAME } from '../site';
import { usePageMeta } from '../usePageMeta';

const ContactPage: React.FC = () => {
  usePageMeta(
    'Contact',
    'Get in touch with Kaushal Jain - open to backend, AI, ML, and full-stack engineering roles, internships, and technical collaborations.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Contact</p>
          <h1>Open to <span className="accent-band">backend, AI, and full-stack</span> roles.</h1>
          <p className="lead">If you're hiring for backend systems, applied AI products, ML pipelines, or full-stack engineering, email is the fastest way to reach me.</p>
          <div className="actions">
            <a className="btn primary" href="mailto:kaushaljain7000@gmail.com">Discuss a Role</a>
            <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="btn secondary">
              <FileText size={18} style={{ marginRight: '0.4rem' }} />
              Download Resume
            </a>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.contactHero} alt="A modern engineering collaboration scene representing AI, data science, and systems work." className="feature-media" fetchPriority="high" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Where to reach me</h2>
        </div>
        <div className="line-list">
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Email</p>
            </div>
            <div className="line-body">
              <h3>Best for roles, interviews, and project context.</h3>
              <p>I check it regularly and can respond with resume, availability, and project details.</p>
            </div>
            <div className="line-action">
              <a className="btn primary" href="mailto:kaushaljain7000@gmail.com">kaushaljain7000@gmail.com</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">LinkedIn</p>
            </div>
            <div className="line-body">
              <h3>Good for quick intros.</h3>
              <p>Useful if you want to connect, share a role, or follow what I'm working on.</p>
            </div>
            <div className="line-action">
              <a className="btn" href="https://www.linkedin.com/in/kaushal-jain-72a886259/" target="_blank" rel="noreferrer">Visit LinkedIn</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">GitHub</p>
            </div>
            <div className="line-body">
              <h3>For code and project structure.</h3>
              <p>Repositories, experiments, and implementation style live there.</p>
            </div>
            <div className="line-action">
              <a className="btn" href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer">Visit GitHub</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Phone</p>
            </div>
            <div className="line-body">
              <h3>For interviews and scheduling.</h3>
              <p>Best after an initial email or LinkedIn message so I have context.</p>
            </div>
            <div className="line-action">
              <a className="btn" href="tel:+917000742122">+91 7000742122</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Resume</p>
            </div>
            <div className="line-body">
              <h3>Download the one-page PDF.</h3>
              <p>Experience, education, projects, and skills. Updated April 2026.</p>
            </div>
            <div className="line-action">
              <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="btn secondary">
                <FileText size={18} style={{ marginRight: '0.4rem' }} />
                Download Resume
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
