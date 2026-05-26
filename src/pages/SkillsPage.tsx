import React from 'react';
import { Link } from 'react-router-dom';
import { assetLinks } from '../assets/assetLinks';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';

const SkillsPage: React.FC = () => {
  usePageMeta(
    'Skills',
    'Kaushal Jain\'s technical stack — backend, frontend, AI/ML, cloud, and the algorithms and engineering habits behind the work.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Skills</p>
          <h1>The <span className="accent-band">tools I actually use</span>.</h1>
          <p className="lead">This is mostly what I've picked up by building projects rather than from a course list. Where I had a choice, I leaned toward tools that let me ship and maintain things without much ceremony.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.projects}>See Skills In Projects</Link>
            <a className="btn" href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer">GitHub Profile</a>
          </div>
        </div>
        <div className="media-frame media-tall" style={{ maxWidth: '31.2rem' }}>
          <img src={assetLinks.skills.heroCollage} alt="A professional 3D collage of tech logos (AWS, Python, Django, React, etc.) floating in a modern glassmorphism-style composition." className="feature-media" style={{ transform: 'scale(1.05)', transformOrigin: 'center' }} fetchPriority="high" />
        </div>
      </section>

      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story" style={{ maxWidth: '80%', margin: '0 auto' }}>
          <img src={assetLinks.skills.techStack} alt="A sophisticated visualization of skills as architectural building blocks, showing how different technical tools assemble into a complete system." className="feature-media" style={{ width: '100%', height: 'auto', objectFit: 'cover', transform: 'scale(1)' }} loading="lazy" decoding="async" />
        </div>
        <div className="story-copy">
          <p className="mini">How I picked these up</p>
          <h2>Learned by building, not by listing.</h2>
          <p className="story-text">Most of what's below came from a specific project that needed it. The areas I've spent the most time in are backend, ML/AI, and full-stack.</p>
          <p className="story-text">That mix lets me take something from a rough idea through to a working, deployed version on my own.</p>
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
            <h3>Django, Flask, APIs, databases, system design</h3>
            <p>This is where I'm strongest. Most of my time goes into API design, data modeling, and thinking through how a service behaves under load.</p>
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
            <h3>React, TypeScript, usable interfaces</h3>
            <p>Not my main focus, but I'm comfortable building a clean, accessible frontend for the things I make — this site included.</p>
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
            <h3>ML, NLP, deep learning, LLM orchestration</h3>
            <p>I'm most interested in the applied side — getting models, retrieval, and orchestration to work together into something reliable rather than a demo.</p>
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
            <h3>AWS, Docker, CI/CD</h3>
            <p>I can take a project from local to deployed: containerizing it, setting up a basic CI/CD pipeline, and keeping the AWS bill sane.</p>
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
            <h3>Planning and documentation</h3>
            <p>For anything non-trivial I sketch the architecture and write docs first. It's saved me from a fair number of rewrites.</p>
            <div className="chips">
              <span className="chip c1">System Planning</span>
              <span className="chip c2">Documentation</span>
              <span className="chip c3">Technical Writing</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Growth</p>
            <h3>Scalability and communication</h3>
            <p>I try to design for growth without over-engineering early, and I'm comfortable explaining technical trade-offs to non-technical people.</p>
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
          <h2>DSA practice.</h2>
          <p className="story-text">Alongside projects I've kept up steady data-structures and algorithms practice — it's the main reason I'm reasonably quick at reasoning about performance and edge cases.</p>
          <p className="story-text"><strong>500+ problems solved on LeetCode</strong>, mostly Python and C++, across arrays, trees, graphs, DP, and searching.</p>
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
          <img src={assetLinks.personal.leetcode} alt="LeetCode profile screenshot showing 500 solved problems and submission activity." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
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
            <p>Python is my strongest language, used for ML, backend, and DSA. I also use C++, C, TypeScript, and JavaScript depending on the project.</p>
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
            <h3>From analysis to storage</h3>
            <p>Comfortable with EDA, feature engineering, and the database side — schema design, indexing, and query tuning.</p>
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
          <img src={assetLinks.skills.infraFlow} alt="Infrastructure deployment flow: Docker builds containers, DockerHub stores images, and AWS runs them — all inside an agile CI/CD iteration loop." className="feature-media" loading="lazy" decoding="async" />
        </div>
        <div className="story-copy">
          <p className="mini">How I approach a project</p>
          <h2>Plan, build, ship, iterate.</h2>
          <p className="story-text">I usually start with a short design doc, build the core path first, then containerize with Docker, push the image to DockerHub, and deploy to AWS once the hard part works.</p>
          <p className="story-text">From there it's the agile loop — CI/CD for safe releases, an eye on cost and scaling, and keeping whoever I'm building for in the loop on trade-offs.</p>
          <div className="chips">
            <span className="chip c1">Docker</span>
            <span className="chip c2">DockerHub</span>
            <span className="chip c3">AWS</span>
            <span className="chip c1">CI / CD</span>
            <span className="chip c2">Agile</span>
          </div>
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">GitHub</p>
          <h2>Where the actual code lives.</h2>
          <p className="story-text">The resume has the highlights, but GitHub is where the newer work and experiments end up.</p>
          <p className="story-text">It's the most up-to-date view of what I'm working on.</p>
          <div className="actions">
            <a className="btn primary" href="https://github.com/KaushalJainAI" target="_blank" rel="noreferrer">Visit GitHub</a>
          </div>
        </div>
        <div className="story-visual media-frame media-story" style={{ maxWidth: '29rem' }}>
          <img src={assetLinks.profile.githubStats} alt="Kaushal Jain GitHub profile stats card showing repository activity and contribution indicators." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
        </div>
      </section>

    </main>
  );
};

export default SkillsPage;
