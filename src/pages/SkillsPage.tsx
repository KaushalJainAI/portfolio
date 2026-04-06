import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SkillsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Skills and the story behind them</p>
          <h1>I enjoy building a <span className="accent-band">practical technical stack</span>.</h1>
          <p className="lead">My skills grew from building real projects rather than collecting tools for the sake of it. I usually move toward technologies that help me ship useful products, keep systems reliable, and make the product experience feel clean.</p>
          <div className="actions">
            <Link className="btn primary" to="/projects.html">See Skills In Projects</Link>
            <a className="btn" href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer">GitHub Profile</a>
          </div>
        </div>
        <div className="media-frame media-tall" style={{ maxWidth: '31.2rem' }}>
          <img src="/Gemini_Generated_Image_lfw8nolfw8nolfw8.png" alt="A professional 3D collage of tech logos (AWS, Python, Django, React, etc.) floating in a modern glassmorphism-style composition." className="feature-media" style={{ transform: 'scale(1.05)', transformOrigin: 'center' }} />
        </div>
      </section>

      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story" style={{ maxWidth: '80%', margin: '0 auto' }}>
          <img src="/skills_building_blocks.png" alt="A sophisticated visualization of skills as architectural building blocks, showing how different technical tools assemble into a complete system." className="feature-media" style={{ width: '100%', height: 'auto', objectFit: 'cover', transform: 'scale(1)' }} />
        </div>
        <div className="story-copy">
          <p className="mini">How I think about skills</p>
          <h2>I do not see skills as a checklist. I see them as building blocks.</h2>
          <p className="story-text">Some tools help me build fast, some help me build reliably, and some help me think better about the product itself. Over time, I have become most interested in the mix of AI, backend engineering, and full-stack development.</p>
          <p className="story-text">That combination lets me work across the full journey, from idea and architecture to implementation and user-facing polish.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Core skill areas</h2>
        </div>
        <div className="skill-grid">
          <article className="skill-group">
            <p className="mini">Backend</p>
            <h3>Django, Flask, APIs, databases, and system design</h3>
            <p>I enjoy backend work because it sits at the heart of product reliability. This is where I spend a lot of time thinking about structure, performance, and how a system will behave as it grows.</p>
            <div className="chips">
              <span className="chip c1">Django REST</span>
              <span className="chip c2">Flask</span>
              <span className="chip c3">JWT</span>
              <span className="chip c1">REST API Design</span>
              <span className="chip c2">RBAC</span>
              <span className="chip c3">Postman</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Frontend</p>
            <h3>UI, UX, and clean, usable interfaces</h3>
            <p>I focus on the intersection of design and functionality. I prioritize clear UI/UX principles to ensure that products are not only visually appealing but also intuitive and accessible.</p>
            <div className="chips">
              <span className="chip c1">UI Design</span>
              <span className="chip c2">UX Logic</span>
              <span className="chip c3">React</span>
              <span className="chip c1">TypeScript</span>
              <span className="chip c2">HTML/CSS</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">AI and ML</p>
            <h3>AI systems that are useful, grounded, and product-aware</h3>
            <p>I am especially interested in the practical side of AI, where models, retrieval, orchestration, and user experience all need to work together. My work spans ML foundations, NLP, deep learning, and LLM orchestration.</p>
            <div className="chips">
              <span className="chip c1">Python</span>
              <span className="chip c2">LangGraph</span>
              <span className="chip c3">FAISS</span>
              <span className="chip c1">LangChain</span>
              <span className="chip c2">PyTorch</span>
              <span className="chip c3">TensorFlow</span>
              <span className="chip c1">scikit-learn</span>
              <span className="chip c2">Pandas</span>
              <span className="chip c3">Transformers</span>
              <span className="chip c1">Transfer Learning</span>
              <span className="chip c2">Sentence Transformers</span>
              <span className="chip c3">Hugging Face</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Cloud and flow</p>
            <h3>CI/CD, infrastructure, and cost optimization</h3>
            <p>I manage the full path from local code to production. I focus on automated CI/CD pipelines, scalable cloud infrastructure (AWS), and optimizing deployment costs.</p>
            <div className="chips">
              <span className="chip c1">AWS</span>
              <span className="chip c2">CI/CD</span>
              <span className="chip c3">Cost Optimization</span>
              <span className="chip c1">Docker</span>
              <span className="chip c2">Git</span>
              <span className="chip c3">Nginx</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>System engineering and planning</h2>
        </div>
        <div className="skill-grid">
          <article className="skill-group">
            <p className="mini">Strategy</p>
            <h3>System planning and documentation</h3>
            <p>I treat planning as a core technical skill. I build architectural maps and deep documentation to ensure systems are robust, understandable, and built to last.</p>
            <div className="chips">
              <span className="chip c1">System Planning</span>
              <span className="chip c2">Documentation</span>
              <span className="chip c3">Technical Writing</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Growth</p>
            <h3>Scalability and communication</h3>
            <p>I build with growth in mind, ensuring systems can handle load. I value clear communication to keep technical decisions aligned with product and business goals.</p>
            <div className="chips">
              <span className="chip c1">Scalability</span>
              <span className="chip c2">Communication</span>
              <span className="chip c3">Agile</span>
            </div>
          </article>
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Algorithms</p>
          <h2>Problem solving is one of the habits behind everything else I build.</h2>
          <p className="story-text">Alongside projects, I have consistently practiced data structures and algorithms to strengthen the way I reason about performance, edge cases, and clean solutions.</p>
          <p className="story-text">I have solved <strong>500+ problems on LeetCode</strong>, mostly in Python and C++, and that practice has helped me build stronger fundamentals in arrays, trees, graphs, dynamic programming, searching, and system-level thinking.</p>
          <div className="chips">
            <span className="chip c1">500+ LeetCode</span>
            <span className="chip c2">Python</span>
            <span className="chip c3">C++</span>
            <span className="chip c1">DSA</span>
          </div>
          <div className="actions">
            <a className="btn primary" href="https://leetcode.com/u/user1211TH/" target="_blank" rel="noreferrer">View LeetCode</a>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src="/leetcode-photo.jpg" alt="LeetCode profile screenshot showing 500 solved problems and submission activity." className="feature-media feature-media-fit" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Detailed stack</h2>
        </div>
        <div className="skill-grid">
          <article className="skill-group">
            <p className="mini">Programming</p>
            <h3>Languages and fundamentals</h3>
            <p>Python is my strongest language for AI, backend work, and problem solving. I also work with C++, C, TypeScript, and JavaScript depending on the problem and product layer.</p>
            <div className="chips">
              <span className="chip c1">Python</span>
              <span className="chip c2">C++</span>
              <span className="chip c3">C</span>
              <span className="chip c1">TypeScript</span>
              <span className="chip c2">JavaScript</span>
              <span className="chip c3">OOP</span>
              <span className="chip c1">Operating Systems</span>
              <span className="chip c2">Computer Networks</span>
              <span className="chip c3">Agile</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Data and databases</p>
            <h3>From analysis to storage design</h3>
            <p>I work comfortably with structured data, feature engineering, exploratory analysis, and the database layer that supports product performance.</p>
            <div className="chips">
              <span className="chip c1">EDA</span>
              <span className="chip c2">Feature Engineering</span>
              <span className="chip c3">Hypothesis Testing</span>
              <span className="chip c1">Time Series Analysis</span>
              <span className="chip c2">NLP</span>
              <span className="chip c3">Statistical Analysis</span>
              <span className="chip c1">Normalization</span>
              <span className="chip c2">Indexing</span>
              <span className="chip c3">Query Optimization</span>
            </div>
          </article>
        </div>
      </section>

      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story" style={{ maxWidth: '80%', margin: '0 auto' }}>
          <img src="/engineering_capabilities_mindset_1775505478422.png" alt="A professional 3D visualization showing a developer's holistic thinking process: system planning, UI/UX design, CI/CD pipelines, documentation, and scalability." className="feature-media" />
        </div>
        <div className="story-copy">
          <p className="mini">Engineering Mindset</p>
          <h2>I build for the full lifecycle, from planning to deployment.</h2>
          <p className="story-text">I approach development as a holistic process. This starts with <strong>system planning</strong> and <strong>documentation</strong> to create a solid foundation, followed by <strong>UI/UX</strong> design to ensure a clean user experience.</p>
          <p className="story-text">I focus on <strong>scalability</strong> and <strong>deployment cost</strong> optimization to ensure long-term viability, while maintaining <strong>CI/CD</strong> pipelines for rapid and reliable releases. At every stage, clear <strong>communication</strong> helps keep the technical work aligned with the product's ultimate vision.</p>
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">GitHub</p>
          <h2>I treat GitHub like a living record of how I learn and build.</h2>
          <p className="story-text">My resume captures the core projects and skills, but my GitHub profile is where I continue adding newer work, experiments, and code that reflects what I am currently exploring.</p>
          <p className="story-text">That makes it the best place to see the latest direction of my work as it evolves.</p>
          <div className="actions">
            <a className="btn primary" href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer">Visit GitHub</a>
          </div>
        </div>
        <div className="story-visual media-frame media-story" style={{ maxWidth: '29rem' }}>
          <img src="/dual_monitor_setup.png" alt="A professional dual-monitor setup with one screen showing a modern code editor and the other displaying Kaushal Jain's GitHub profile, complete with a mechanical keyboard and sleek desk." className="feature-media" />
        </div>
      </section>

    </main>
  );
};

export default SkillsPage;
