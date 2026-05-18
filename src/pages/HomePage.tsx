import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, FileText } from 'lucide-react';
import { assetLinks } from '../assets/assetLinks';
import { ROUTES, RESUME_URL, RESUME_DOWNLOAD_NAME } from '../site';
import { usePageMeta } from '../usePageMeta';

const ROLES = [
  "Backend Developer",
  "ML Engineer",
  "Full-Stack Developer",
  "CS Student @ PEC",
];

const Typer: React.FC = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(70);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = ROLES[wordIndex];

      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        setSpeed(35);
      } else {
        setText(prev => currentWord.slice(0, prev.length + 1));
        setSpeed(70);
      }

      if (!isDeleting && text === currentWord) {
        setSpeed(1200);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % ROLES.length);
        setSpeed(220);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <div className="type-line">
      {/* Static, comma-joined label for assistive tech; the animation itself is decorative. */}
      <span className="sr-only">{ROLES.join(', ')}</span>
      <span aria-hidden="true">{text} _</span>
    </div>
  );
};

const HomePage: React.FC = () => {
  usePageMeta(
    'Home',
    'Kaushal Jain — Computer Science student and AI Engineer at PEC Chandigarh, building useful software across AI, backend, and full-stack development.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Computer Science @ PEC Chandigarh</p>
          <h1>Hi, I'm <span className="accent-band">Kaushal Jain</span>.</h1>
          <p className="lead">Final-year Computer Science student at PEC Chandigarh, on the Data Science honors track. I mostly work on backend services, ML pipelines, and full-stack apps — and I like shipping things people actually use.</p>
          <Typer />
          <div className="actions">
            <Link className="btn primary" to={ROUTES.about}>Read My Story</Link>
            <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="btn secondary">
              <FileText size={18} style={{ marginRight: '0.4rem' }} />
              Resume
            </a>
            <Link className="btn" to={ROUTES.projects}>See Projects</Link>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.avatar} alt="Portrait of Kaushal Jain" className="feature-media" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Explore my work</h2>
        </div>
        <div className="story-cards">
          <Link className="story-card" to={ROUTES.about}>
            <p className="mini">About</p>
            <h3>Background, education, and how I got here.</h3>
            <p>
              My timeline so far — coursework at PEC, the Statcon internship, and
              the things outside code that I spend time on.
            </p>
            <span className="btn">Open About</span>
          </Link>

          <Link className="story-card" to={ROUTES.projects}>
            <p className="mini">Projects</p>
            <h3>Things I've built across AI and backend.</h3>
            <p>An e-commerce platform, a multi-agent system, a battery RUL model, and a secure API platform — with screenshots.</p>
            <span className="btn">View Projects</span>
          </Link>

          <Link className="story-card" to={ROUTES.skills}>
            <p className="mini">Skills</p>
            <h3>The tools I actually use.</h3>
            <p>Backend, frontend, AI/ML, cloud, and the DSA practice behind it.</p>
            <span className="btn">See Skills</span>
          </Link>

          <Link className="story-card" to={ROUTES.research}>
            <p className="mini">Research</p>
            <h3>Applied ML work I've done.</h3>
            <p>Projects in medical AI, time-series, and document analysis, and the problems I'd like to dig into further.</p>
            <span className="btn">Open Research</span>
          </Link>
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <div className="status-badge">
            <span className="status-dot"></span>
            Open to Work
          </div>
          <p className="mini">Availability</p>
          <h2>I'm looking for my next role.</h2>
          <p className="story-text">I'm open to full-time roles and internships in backend, ML, or full-stack engineering, as well as technical collaborations. If you're hiring or building something in that space, I'd like to hear about it.</p>
          <p className="story-text">My contact details are on the contact page.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.contact}>Get In Touch</Link>
            <a href="https://www.linkedin.com/in/kaushal-jain-72a886259/" target="_blank" rel="noreferrer" className="btn btn-icon">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.profile.teamCollab} alt="A sophisticated, 3D composition representing AI, Data Science, and Systems Engineering through floating glassmorphism elements over a modern workspace." className="feature-media feature-media-fit" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Resume</h2>
        </div>
        <div className="story-copy">
          <p className="story-text">If you'd rather skim a one-pager, here's my resume with experience, projects, and skills.</p>
          <div className="actions">
            <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="btn primary">Download Resume (PDF)</a>
          </div>
        </div>
      </section>

      <div className="personal-nudge">
        <p>There's also a less formal page about life outside code. <Link to={ROUTES.personal}>Have a look →</Link></p>
      </div>
    </main>
  );
};

export default HomePage;
