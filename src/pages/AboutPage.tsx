import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { assetLinks } from '../assets/assetLinks';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => setLightbox(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
    }
  };

  const musicImages = [
    assetLinks.personal.piano,
    assetLinks.personal.chess,
    assetLinks.personal.battleOfBands
  ];

  return (
    <main className="container page about-page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">The story behind the work</p>
          <h1>A closer look at <span className="accent-band">who I am</span>.</h1>
          <p className="lead">Beyond the projects and the code — my background, the timeline that shaped my thinking, and the interests that keep me curious. This page is the fuller picture of how I got here and where I am headed.</p>
          <div className="actions">
            <Link className="btn primary" to="/projects.html">See Projects</Link>
            <Link className="btn" to="/contact.html">Contact Me</Link>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.avatar} alt="Portrait of Kaushal Jain" className="feature-media" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Academic and Professional Journey</h2>
        </div>
        <div className="timeline-grid">
          <section className="timeline-panel">
            <div className="timeline-heading">
              <p className="mini">Education</p>
              <h3>Academic journey</h3>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Started Computer Science at PEC Chandigarh</h4>
                  <p>I began my B.Tech journey in Computer Science with a Data Science honors specialization and started building a stronger foundation in software, machine learning, and systems.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-year">2023-2024</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Moved deeper into practical engineering</h4>
                  <p>As I built more projects, I found myself drawn to backend architecture, APIs, databases, and the side of engineering that directly shapes product quality.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-year">2026</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Continuing toward graduation</h4>
                  <p>I am currently in the final stretch of my degree, focused on sharpening the combination of AI, software engineering, and product-oriented execution.</p>
                </div>
              </article>
            </div>
          </section>

          <section className="timeline-panel">
            <div className="timeline-heading">
              <p className="mini">Career</p>
              <h3>Professional journey</h3>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Interned at Statcon Electronics</h4>
                  <p>I worked on predictive maintenance models and a secure Django REST platform for firmware IP workflows, which gave me hands-on experience with real constraints and business needs.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-year">Now</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Building practical products across AI and software engineering</h4>
                  <p>Right now, I am focused on AI systems, backend reliability, and full-stack delivery, while looking for opportunities where I can keep shipping useful software with strong engineering foundations.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      {/* ── 1. Projects ── */}
      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.profile.heroWorkspace} alt="A professional software engineering workspace with an ultra-wide monitor showing code." className="feature-media" />
        </div>
        <div className="story-copy">
          <p className="mini">Projects</p>
          <h2>I like building software that solves real problems.</h2>
          <p className="story-text">Most of my work sits around AI systems, backend engineering, and full-stack products. I am drawn to projects that are useful in the real world, not just interesting in theory.</p>
          <p className="story-text">What matters most to me is whether a product feels dependable, thoughtful, and ready to be used by actual people.</p>
          <div className="actions">
            <Link className="btn primary" to="/projects.html">See Projects</Link>
          </div>
        </div>
      </section>

      {/* ── 2. Skills ── */}
      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Technical Skills</p>
          <h2>My skill set spans the full ML stack and modern backend engineering.</h2>
          <p className="story-text">I work with Python, Django, FastAPI, and Node.js on the backend, and React and TypeScript on the frontend. On the AI side, I build with PyTorch, scikit-learn, LangChain, LangGraph, and vector databases for retrieval-augmented generation pipelines.</p>
          <p className="story-text">I am comfortable across the entire delivery chain — from training models and designing APIs to deploying containers and writing CI/CD pipelines — and I focus on keeping systems reliable, testable, and production-ready.</p>
          <div className="chips">
            <span className="chip c1">Python</span>
            <span className="chip c2">Django &amp; FastAPI</span>
            <span className="chip c3">React &amp; TypeScript</span>
            <span className="chip c1">PyTorch</span>
            <span className="chip c2">LangGraph</span>
            <span className="chip c3">Docker &amp; CI/CD</span>
          </div>
          <div className="actions">
            <Link className="btn" to="/skills.html">See All Skills</Link>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.skills.techStack} alt="A professional 3D composition of tech logos (Python, Django, React, Docker, etc.) floating over a modern glassmorphism background." className="feature-media feature-media-fit" />
        </div>
      </section>

      {/* ── 3. Research ── */}
      <section className="story-block story-block-reverse section" style={{ gridTemplateColumns: 'minmax(16rem, 0.7fr) minmax(0, 1.3fr)' }}>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.projects.aiResearchFlow} alt="A detailed 3D collage of machine learning research elements: neural networks, heatmaps for feature importance, fMRI voxels, and ensemble outputs over a modern translucent background." className="feature-media" />
        </div>
        <div className="story-copy">
          <p className="mini">Research Interests</p>
          <h2>I tackle complex discovery problems across computer vision, medical AI, and signal processing.</h2>
          <p className="story-text">My research work has spanned from detecting hidden ink traces in ancient folded manuscripts using the Vesuvius dataset to predicting the remaining useful life of Li-ion batteries through complex time-series modeling.</p>
          <p className="story-text">I focus on extracting meaningful signals from difficult data—whether it's neuroimaging fMRI scans or voice spectral patterns—and engineering those insights into reliable, grounded systems like multi-agent RAG architectures.</p>
          <div className="chips">
            <span className="chip c1">Semantic Retrieval</span>
            <span className="chip c2">RAG Architectures</span>
            <span className="chip c3">Multi-Agent Systems</span>
            <span className="chip c1">NLP &amp; Transformers</span>
          </div>
          <div className="actions">
            <Link className="btn" to="/research.html">Explore Research</Link>
          </div>
        </div>
      </section>

      {/* ── 4. Non-professional ── */}
      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Beyond the code</p>
          <h2>I enjoy the balance between systems thinking and product feel.</h2>
          <p className="story-text">Some of my interest comes from engineering itself, understanding how things work, how they scale, and how they stay reliable. The other part comes from the product side, where simplicity, clarity, and usefulness matter just as much as the code underneath.</p>
          <p className="story-text">That is usually the space I work best in: technical enough to enjoy the complexity, but practical enough to keep the end user in view.</p>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.chess} alt="A personal workspace with a laptop, chess board, and piano, reflecting a balance between technical and creative work." className="feature-media" />
        </div>
      </section>

      <section className="story-block story-block-reverse story-block-visual-sm section">
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.piano} alt="Kaushal Jain playing melodies outdoors" className="feature-media" />
        </div>
        <div className="story-copy">
          <p className="mini">Hobbies</p>
          <h2>Outside tech, music and chess keep me grounded.</h2>
          <p className="story-text">I enjoy piano, composition, and chess. They bring a different kind of patience, rhythm, and focus that quietly shapes the way I approach my work.</p>
          <p className="story-text">For me, those interests are not separate from engineering. They are part of what helps me stay creative and calm while building.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Achievements</h2>
        </div>
        <div className="line-list">
          <article className="line-item">
            <div className="line-meta">
              <div className="testimony-avatar" onClick={() => openLightbox(musicImages, 0)}>
                <img src={musicImages[0]} alt="Trophy" className="avatar-img" />
              </div>
              <p className="mini">Music</p>
            </div>
            <div className="line-body">
              <h3>1st place at Battle of Bands, PEC Fest</h3>
              <p>Music has been one of the strongest parts of my life outside engineering, and winning Battle of Bands at PEC Fest is one of the moments I value the most.</p>
            </div>
            <div className="line-side">
              <span className="chip c1">1st Place</span>
              <span className="chip c2">PEC Music Club</span>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Performance</p>
            </div>
            <div className="line-body">
              <h3>Podium finishes across college music events</h3>
              <p>I also placed 2nd at Palaksha and 3rd at Amity Mohali, which reflects the consistency of my involvement in live performance and music competitions.</p>
            </div>
            <div className="line-side">
              <span className="chip c2">2nd Place</span>
              <span className="chip c3">3rd Place</span>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Problem Solving</p>
            </div>
            <div className="line-body">
              <h3>Solved 500+ problems on LeetCode</h3>
              <p>Consistent algorithm practice has helped me improve problem solving, coding fluency, and the way I think about data structures, performance, and clean implementation.</p>
            </div>
            <div className="line-side">
              <span className="chip c1">LeetCode</span>
              <span className="chip c2">500+ Solved</span>
              <div className="testimony-avatar" style={{ marginLeft: '1rem' }} onClick={() => openLightbox([assetLinks.personal.leetcode], 0)}>
                <img src={assetLinks.personal.leetcode} alt="LeetCode Progress" className="avatar-img" />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Contact</p>
          <h2>I am open to internships, full-time roles, and freelance conversations.</h2>
          <p className="story-text">If the work involves AI, backend systems, or building useful software, I would love to talk. I am especially excited by teams that care about both technical depth and thoughtful product execution.</p>
          <p className="story-text">If that sounds like what you are building, let's connect.</p>
          <div className="actions">
            <Link className="btn primary" to="/contact.html">Get In Touch</Link>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.profile.teamCollab} alt="Engineering professionals collaborating in a modern office." className="feature-media" />
        </div>
      </section>
      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
            <img src={lightbox.images[lightbox.index]} alt="Magnified achievement" className="lightbox-img" />
            
            {lightbox.images.length > 1 && (
              <>
                <div className="lightbox-nav">
                  <button className="lightbox-btn" onClick={prevImage} aria-label="Previous image">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button className="lightbox-btn" onClick={nextImage} aria-label="Next image">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
                <div className="lightbox-counter">
                  <span>{lightbox.index + 1}</span> / {lightbox.images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default AboutPage;
