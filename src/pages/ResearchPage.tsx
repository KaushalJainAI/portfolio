import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResearchPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Research interests and exploration</p>
          <h1>I tackle <span className="accent-band">complex discovery problems</span> across medical AI and computer vision.</h1>
          <p className="lead">My research background spans from the digital restoration of ancient manuscripts to high-frequency medical sensors and predictive maintenance. I am drawn to the challenge of extracting signal from complex, noisy data and building the systems that make those insights useful.</p>
          <div className="actions">
            <Link className="btn primary" to="/projects.html">See Related Projects</Link>
            <Link className="btn" to="/skills.html">View Skills</Link>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src="/research_visual.png" alt="A detailed 3D collage of machine learning research: neural network architectures, heatmaps, fMRI voxels, and ensemble models over a sophisticated glassmorphism background." className="feature-media" />
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">What I am drawn to</p>
          <h2>I am most interested in research that can become something real.</h2>
          <p className="story-text">The research projects I have worked on are different on the surface, medical imaging, voice classification, battery health, and ancient manuscripts, but they all connect through one theme: making difficult data understandable and useful.</p>
          <p className="story-text">That is the kind of work I enjoy most, where experimentation, modeling, and interpretation all matter at once.</p>
        </div>
        <div className="story-visual media-frame media-story">
          <img src="/leetcode-photo.jpg" alt="Analytical dashboard view showing activity and problem solving metrics." className="feature-media feature-media-fit" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Research work</h2>
        </div>
        <div className="skill-grid">
          <article className="skill-group">
            <p className="mini">Ancient Manuscripts</p>
            <h3>Ink detection in the folded manuscript scans of the Vesuvius dataset</h3>
            <p>I explored the problem of detecting hidden ink traces in ancient folded manuscripts using the Vesuvius dataset. What drew me to this problem was the challenge of working with unusual image data where the signal is faint and the historical value is high.</p>
            <div className="chips">
              <span className="chip c1">Computer Vision</span>
              <span className="chip c2">Image Analysis</span>
              <span className="chip c3">Pattern Detection</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Predictive Maintenance</p>
            <h3>Battery degradation and RUL prediction for Li-ion batteries</h3>
            <p>I worked on battery degradation analysis and remaining useful life prediction using both deep learning and traditional machine learning methods. This research was especially interesting because it combines time-series behavior, feature engineering, and practical industrial relevance.</p>
            <div className="chips">
              <span className="chip c1">RUL Prediction</span>
              <span className="chip c2">Time Series</span>
              <span className="chip c3">Deep Learning</span>
              <span className="chip c1">Machine Learning</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Voice Disorder Classification</p>
            <h3>Classification using the FEMH dataset with an ensemble approach</h3>
            <p>I worked on voice disorder classification using the FEMH dataset, combining spectrogram-based segmentation with metadata-driven features in an ensemble model. This project was a strong example of how signal-based and structured features can complement each other.</p>
            <div className="chips">
              <span className="chip c1">Spectrograms</span>
              <span className="chip c2">Feature Fusion</span>
              <span className="chip c3">Ensemble Models</span>
              <span className="chip c1">Classification</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Neuroimaging</p>
            <h3>Autism detection using fMRI data with LSTM and autoencoders</h3>
            <p>I researched autism detection using fMRI data with a combination of LSTM models and autoencoders. I found this problem especially meaningful because it sits at the intersection of deep learning, healthcare, and the challenge of extracting signal from high-dimensional brain data.</p>
            <div className="chips">
              <span className="chip c1">fMRI</span>
              <span className="chip c2">LSTM</span>
              <span className="chip c3">Autoencoders</span>
              <span className="chip c1">Healthcare AI</span>
            </div>
          </article>
        </div>
      </section>

      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story">
          <img src="/Screenshot 2026-04-03 230706.png" alt="Dark research interface with query flow and response output." className="feature-media feature-media-fit" />
        </div>
        <div className="story-copy">
          <p className="mini">How it shows up in my work</p>
          <h2>Research has shaped the way I build and think.</h2>
          <p className="story-text">These projects taught me how to work with difficult datasets, how to compare modeling approaches, and how to think more carefully about whether a model is actually learning something meaningful.</p>
          <p className="story-text">They also pushed me to see research not just as experimentation, but as a way of developing judgment, one that carries directly into product work and engineering decisions.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>Current direction</h2>
        </div>
        <div className="line-list">
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Focus</p>
            </div>
            <div className="line-body">
              <h3>Applied AI, deep learning, and data-driven systems</h3>
              <p>I want to keep working on research that combines machine learning depth with practical outcomes, especially in domains where the data is complex and the problem matters.</p>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Data</p>
            </div>
            <div className="line-body">
              <h3>Signal, sequence, and pattern-heavy datasets</h3>
              <p>I am particularly interested in research problems where extracting useful structure from noisy, high-dimensional, or unusual data is part of the challenge.</p>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Goal</p>
            </div>
            <div className="line-body">
              <h3>Keep turning research understanding into useful systems</h3>
              <p>My long-term goal is to keep combining research thinking with engineering execution so that models, experiments, and insights can turn into systems people can actually use.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ResearchPage;
