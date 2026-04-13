import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Let's talk</p>
          <h1>Open to <span className="accent-band">AI, Data Science, and Systems Engineering</span> work.</h1>
          <p className="lead">If you are looking for an engineer who mixes technical depth in ML and backend systems with a product-first mindset, let's talk.</p>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.contactHero} alt="A sophisticated, 3D composition representing AI, Data Science, and Systems Engineering through floating glassmorphism elements over a modern workspace." className="feature-media" />
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
              <h3>The best place to start.</h3>
              <p>Use email for role discussions, project ideas, or anything that needs a bit of context.</p>
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
              <h3>Good for networking and quick introductions.</h3>
              <p>If you want to connect professionally or follow updates, LinkedIn works well too.</p>
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
              <h3>Useful when something needs quick coordination.</h3>
              <p>Happy to use a call for scheduling, interviews, or fast-moving collaboration.</p>
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
              <h3>Best for code, recent work, and technical context.</h3>
              <p>If you want to see projects, experiments, and how I structure my work in code, GitHub is the right place.</p>
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
              <h3>Download the technical overview.</h3>
              <p>For a quick summary of my experience, education, and skills in a portable format.</p>
            </div>
            <div className="line-action">
              <a href="/resume jan 12.pdf" download="Kaushal_Jain_Resume.pdf" className="btn secondary">
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
