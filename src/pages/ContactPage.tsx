import React from 'react';
import { FileText } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { RESUME_URL, RESUME_DOWNLOAD_NAME } from '../site';
import { usePageMeta } from '../usePageMeta';

const LINKEDIN_URL = 'https://www.linkedin.com/in/kaushal-jain-72a886259/';

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
          <h1>Let's build something <span className="accent-band">useful and reliable</span>.</h1>
          <p className="lead">I'm open to backend, applied AI, ML, and full-stack engineering opportunities. LinkedIn is the easiest place to start a conversation.</p>
          <div className="actions">
            <a className="btn primary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">Discuss a Role</a>
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
              <h3>Best for roles, interviews, and detailed context.</h3>
              <p>I check it regularly and can respond with my resume, availability, project details, or anything else needed to move the conversation forward.</p>
            </div>
            <div className="line-action">
              <span className="btn primary">kaushaljain7000@gmail.com</span>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">LinkedIn</p>
            </div>
            <div className="line-body">
              <h3>Good for quick introductions.</h3>
              <p>Useful if you want to connect, share a role, send a referral, or follow what I am building.</p>
            </div>
            <div className="line-action">
              <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">Visit LinkedIn</a>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">GitHub</p>
            </div>
            <div className="line-body">
              <h3>For code, experiments, and implementation style.</h3>
              <p>Repositories, project structure, backend work, and AI experiments live there.</p>
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
              <p>Best after an initial email or LinkedIn message so I have the right context.</p>
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
