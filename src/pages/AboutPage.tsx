import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { assetLinks } from '../assets/assetLinks';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';

const AboutPage: React.FC = () => {
  usePageMeta(
    'About',
    'The fuller story behind Kaushal Jain — background, academic and professional timeline, achievements, and the interests that shape how he builds software.'
  );

  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => setLightbox(null);

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

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
          <p className="kicker">About me</p>
          <h1>A closer look at <span className="accent-band">how I build</span>.</h1>
          <p className="lead">I am a backend and applied AI engineer in training, shaped by PEC coursework, hands-on projects, internship work, and a steady bias toward building things that hold up outside a demo.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.projects}>See Projects</Link>
            <Link className="btn" to={ROUTES.contact}>Contact Me</Link>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.avatar} alt="Portrait of Kaushal Jain" className="feature-media" fetchPriority="high" />
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
                  <h4>Started B.Tech CSE at PEC Chandigarh</h4>
                  <p>Began my Computer Science degree with a Data Science honors focus, building foundations in software engineering, algorithms, ML, and systems thinking.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-year">2023-2024</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Focused on backend engineering</h4>
                  <p>As my projects grew, I gravitated toward APIs, databases, auth flows, deployment, and the practical decisions that make software dependable.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-year">2026</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Final year</h4>
                  <p>Now in the final stretch of the degree, I am sharpening my backend, ML, and full-stack skills while preparing for professional engineering roles.</p>
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
                  <h4>Intern, Statcon Electronics</h4>
                  <p>Worked on predictive-maintenance models and a Django REST platform with OTP authentication and role-based access for firmware IP workflows.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-year">Now</div>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <h4>Building and applying</h4>
                  <p>Currently building applied AI and backend projects while looking for a full-time role where I can contribute, learn quickly, and ship useful systems.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      {/* ── 1. Projects ── */}
      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.profile.heroWorkspace} alt="A professional software engineering workspace with an ultra-wide monitor showing code." className="feature-media" loading="lazy" decoding="async" />
        </div>
        <div className="story-copy">
          <p className="mini">Projects</p>
          <h2>What I build.</h2>
          <p className="story-text">Most of my projects sit at the intersection of backend systems, applied AI, and product thinking. I prefer problems with a real user, a clear workflow, and enough complexity to demand careful engineering.</p>
          <p className="story-text">I care about whether the system is understandable, testable, reliable, and usable end to end, not just whether the first demo works.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.projects}>See Projects</Link>
          </div>
        </div>
      </section>

      {/* ── 2. Skills ── */}
      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Technical Skills</p>
          <h2>The stack I work in.</h2>
          <p className="story-text">Backend: Python, Django, FastAPI, and Node.js. Frontend: React and TypeScript. ML/AI: PyTorch, scikit-learn, LangChain, LangGraph, and vector databases for retrieval-augmented generation.</p>
          <p className="story-text">I have also worked across the surrounding pieces: API design, Docker, CI/CD, authentication, and deployment. My strongest areas are backend engineering and applied ML.</p>
          <div className="chips">
            <span className="chip c1">Python</span>
            <span className="chip c2">Django &amp; FastAPI</span>
            <span className="chip c3">React &amp; TypeScript</span>
            <span className="chip c1">PyTorch</span>
            <span className="chip c2">LangGraph</span>
            <span className="chip c3">Docker &amp; CI/CD</span>
          </div>
          <div className="actions">
            <Link className="btn" to={ROUTES.skills}>See All Skills</Link>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.skills.techStack} alt="A professional 3D composition of tech logos (Python, Django, React, Docker, etc.) floating over a modern glassmorphism background." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* ── 3. Research ── */}
      <section className="story-block story-block-reverse section" style={{ gridTemplateColumns: 'minmax(16rem, 0.7fr) minmax(0, 1.3fr)' }}>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.projects.aiResearchFlow} alt="A detailed 3D collage of machine learning research elements: neural networks, heatmaps for feature importance, fMRI voxels, and ensemble outputs over a modern translucent background." className="feature-media" loading="lazy" decoding="async" />
        </div>
        <div className="story-copy">
          <p className="mini">Research Interests</p>
          <h2>Research I've worked on.</h2>
          <p className="story-text">My research-style work has ranged from ink detection on the Vesuvius Challenge manuscript data to remaining-useful-life prediction for Li-ion batteries using time-series models.</p>
          <p className="story-text">The common thread is pulling a usable signal out of messy data — whether that's sensor data, fMRI scans, or audio — and turning it into something dependable, like a RAG pipeline.</p>
          <div className="chips">
            <span className="chip c1">Semantic Retrieval</span>
            <span className="chip c2">RAG Architectures</span>
            <span className="chip c3">Multi-Agent Systems</span>
            <span className="chip c1">NLP &amp; Transformers</span>
          </div>
          <div className="actions">
            <Link className="btn" to={ROUTES.research}>Explore Research</Link>
          </div>
        </div>
      </section>

      {/* ── 4. Non-professional ── */}
      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">How I work</p>
          <h2>Engineering and product, together.</h2>
          <p className="story-text">I like the engineering side: how systems are built, how they scale, why they fail, and how to make them easier to reason about. I also care about the person using the result.</p>
          <p className="story-text">My best work happens when there is both a meaningful technical problem and a real user on the other end.</p>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.chess} alt="A personal workspace with a laptop, chess board, and piano, reflecting a balance between technical and creative work." className="feature-media" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="story-block story-block-reverse story-block-visual-sm section">
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.piano} alt="Kaushal Jain playing melodies outdoors" className="feature-media" loading="lazy" decoding="async" />
        </div>
        <div className="story-copy">
          <p className="mini">Hobbies</p>
          <h2>Music and chess.</h2>
          <p className="story-text">Outside of tech I play piano, write music, and play chess. I've performed competitively with the music club at PEC.</p>
          <p className="story-text">They're a good counterweight to screen time, and the practice habit carries over more than I expected.</p>
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
              <button className="testimony-avatar" type="button" onClick={() => openLightbox(musicImages, 0)} aria-label="Open music achievement photos">
                <img src={musicImages[0]} alt="Trophy" className="avatar-img" />
              </button>
              <p className="mini">Music</p>
            </div>
            <div className="line-body">
              <h3>1st place — Battle of Bands, PEC Fest</h3>
              <p>One of the things I'm most proud of outside academics. Music's been a big part of my time at college.</p>
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
              <h3>Other podium finishes</h3>
              <p>2nd at Palaksha and 3rd at Amity Mohali — a few years of fairly regular live performance.</p>
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
              <h3>500+ problems solved on LeetCode</h3>
              <p>Regular DSA practice, mostly in Python and C++. It's made me noticeably faster at reasoning about data structures and edge cases.</p>
            </div>
            <div className="line-side">
              <span className="chip c1">LeetCode</span>
              <span className="chip c2">500+ Solved</span>
            </div>
          </article>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Contact</p>
          <h2>Open to roles and collaborations.</h2>
          <p className="story-text">If you're working on something in AI, backend, or full-stack and need another engineer, I'd be glad to talk.</p>
          <p className="story-text">The contact page has the best ways to reach me.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.contact}>Get In Touch</Link>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.profile.teamCollab} alt="Engineering professionals collaborating in a modern office." className="feature-media" loading="lazy" decoding="async" />
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
