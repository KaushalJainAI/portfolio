import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, FileText } from 'lucide-react';

const Typer: React.FC = () => {
  const words = [
    "AI Engineer",
    "Builder of Practical Products",
    "Full-Stack Developer",
    "Systems Thinker"
  ];
  
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(70);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;
      
      if (shouldDelete) {
        setText(prev => prev.slice(0, -1));
        setSpeed(35);
      } else {
        setText(prev => currentWord.slice(0, prev.length + 1));
        setSpeed(70);
      }

      if (!shouldDelete && text === currentWord) {
        setSpeed(1200);
        setIsDeleting(true);
      } else if (shouldDelete && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(220);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return <div className="type-line" aria-live="polite">{text} _</div>;
};

const HomePage: React.FC = () => {
  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Building useful software with clarity and care</p>
          <h1>Hi, I am <span className="accent-band">Kaushal Jain</span>.</h1>
          <p className="lead">I am a Computer Science student with a Data Science honors specialization at PEC Chandigarh. I build across AI, backend engineering, and full-stack development with a focus on useful systems and thoughtful product execution.</p>
          <Typer />
          <div className="actions">
            <Link className="btn primary" to="/about.html">Read My Story</Link>
            <a href="/resume jan 12.pdf" download="Kaushal_Jain_Resume.pdf" className="btn secondary">
              <FileText size={18} style={{ marginRight: '0.4rem' }} />
              Resume
            </a>
            <Link className="btn" to="/projects.html">See Projects</Link>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src="/profile.jpg" alt="Portrait of Kaushal Jain" className="feature-media" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Explore my work</h2>
        </div>
        <div className="story-cards">
          <Link className="story-card" to="/about.html">
            <p className="mini">About</p>
            <h3>The fuller story behind how I think and work.</h3>
            <p>
              A deeper look at my background, career and education — along with the
              timeline, achievements, and interests that shape how I build software.
            </p>
            <span className="btn">Open About</span>
          </Link>

          <Link className="story-card" to="/projects.html">
            <p className="mini">Projects</p>
            <h3>Selected work across AI, backend systems, and product building.</h3>
            <p>My strongest project work, along with supporting visuals that show the kind of interfaces and systems I enjoy building.</p>
            <span className="btn">View Projects</span>
          </Link>

          <Link className="story-card" to="/skills.html">
            <p className="mini">Skills</p>
            <h3>The stack, the tools, and the problem-solving habits behind the work.</h3>
            <p>A more detailed look at my backend, frontend, AI/ML, cloud, and algorithms foundation.</p>
            <span className="btn">See Skills</span>
          </Link>

          <Link className="story-card" to="/research.html">
            <p className="mini">Research</p>
            <h3>Applied research across healthcare, voice, and ancient manuscripts.</h3>
            <p>The research problems I have worked on and the kinds of technical questions I enjoy exploring more deeply.</p>
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
          <p className="mini">Collaboration</p>
          <h2>Let's build something useful together.</h2>
          <p className="story-text">I am currently open to full-time roles, internships, and technical collaborations. Whether you are building an AI-driven system, a data-intensive platform, or looking for a backend engineer who cares about product quality, I would love to talk.</p>
          <p className="story-text">If you would like to explore how we might work together, my direct contact details and preferred channels are available through the link below.</p>
          <div className="actions">
            <Link className="btn primary" to="/contact.html">Get In Touch</Link>
            <a href="https://www.linkedin.com/in/kaushal-jain-72a886259/" target="_blank" rel="noreferrer" className="btn btn-icon">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src="/collaboration_modern_3d.png" alt="A sophisticated, 3D composition representing AI, Data Science, and Systems Engineering through floating glassmorphism elements over a modern workspace." className="feature-media feature-media-fit" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Resume</h2>
        </div>
        <div className="story-copy">
          <p className="story-text">For a more technical overview of my experience, projects, and skills, you can download my full resume below.</p>
          <div className="actions">
            <a href="/resume jan 12.pdf" download="Kaushal_Jain_Resume.pdf" className="btn primary">Download Resume (PDF)</a>
          </div>
        </div>
      </section>

      <div className="personal-nudge">
        <p>Curious about the person behind the portfolio? <Link to="/personal.html">Read the quieter story →</Link></p>
      </div>
    </main>
  );
};

export default HomePage;
