import React from 'react';
import { FileText } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { RESUME_URL, RESUME_DOWNLOAD_NAME } from '../site';
import { usePageMeta } from '../usePageMeta';

const ContactPage: React.FC = () => {
  usePageMeta(
    'Contact',
    'Get in touch with Kaushal Jain — open to AI, data science, and systems engineering roles, internships, and technical collaborations.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Contact</p>
          <h1>Open to <span className="accent-band">backend, ML, and full-stack</span> roles.</h1>
          <p className="lead">If you're hiring or have a project in mind, email is the fastest way to reach me. Details below.</p>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.contactHero} alt="A sophisticated, 3D composition representing AI, Data Science, and Systems Engineering through floating glassmorphism elements over a modern workspace." className="feature-media" fetchPriority="high" />
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
              <h3>Best for anything substantial.</h3>
              <p>Roles, project ideas, or anything that needs context — I check it regularly.</p>
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
              <h3>Fine for a quick intro.</h3>
              <p>Good if you'd rather connect there or follow what I'm working on.</p>
            </div>
            <div className="line-action">
              <a className="btn" href="https://www.linkedin.com/in/kaushal-jain-72a886259/" target="_blank" rel="noreferrer">Visit LinkedIn</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Phone</p>
            </div>
            <div className="line-body">
              <h3>For scheduling and interviews.</h3>
              <p>Happy to take a call for interviews or anything time-sensitive.</p>
            </div>
            <div className="line-action">
              <a className="btn" href="tel:+917000742122">+91 7000742122</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">GitHub</p>
            </div>
            <div className="line-body">
              <h3>For the actual code.</h3>
              <p>Projects, experiments, and how I structure things — it's the most current view of my work.</p>
            </div>
            <div className="line-action">
              <a className="btn" href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer">Visit GitHub</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Resume</p>
            </div>
            <div className="line-body">
              <h3>Download (PDF).</h3>
              <p>One page: experience, education, and skills. Updated April 2026.</p>
            </div>
            <div className="line-action">
              <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="btn secondary">
                <FileText size={18} style={{ marginRight: '0.4rem' }} />
                Download CV
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
