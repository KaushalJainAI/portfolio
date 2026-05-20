import React from 'react';
import { Link } from 'react-router-dom';
import { assetLinks } from '../assets/assetLinks';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';

const ResearchPage: React.FC = () => {
  usePageMeta(
    'Research',
    'Applied research by Kaushal Jain across medical AI, computer vision, voice, and ancient manuscript restoration.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Research</p>
          <h1>Applied ML work in <span className="accent-band">medical AI and computer vision</span>.</h1>
          <p className="lead">A few research-style projects, from manuscript scans to medical signals to battery health. The recurring interest is getting a usable result out of noisy, high-dimensional data.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.projects}>See Related Projects</Link>
            <Link className="btn" to={ROUTES.skills}>View Skills</Link>
          </div>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.projects.aiResearchFlow} alt="A detailed 3D collage of machine learning research: neural network architectures, heatmaps, fMRI voxels, and ensemble models over a sophisticated glassmorphism background." className="feature-media" fetchPriority="high" />
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">What interests me</p>
          <h2>Research that can turn into something usable.</h2>
          <p className="story-text">On the surface these projects are unrelated — medical imaging, voice, battery health, manuscripts — but they all came down to the same thing: making hard data give up a useful answer.</p>
          <p className="story-text">That's the part I like: the experiment, the model, and figuring out whether the result actually means anything.</p>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.leetcode} alt="Analytical dashboard view showing activity and problem solving metrics." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
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
            <p>Worked on detecting ink traces in scans from the Vesuvius Challenge data. The interesting part was the faint signal — the ink is barely separable from the substrate.</p>
            <div className="chips">
              <span className="chip c1">Computer Vision</span>
              <span className="chip c2">Image Analysis</span>
              <span className="chip c3">Pattern Detection</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="mini">Predictive Maintenance</p>
            <h3>Battery degradation and RUL prediction for Li-ion batteries</h3>
            <p>Battery degradation analysis and remaining-useful-life prediction with both deep learning and classical ML. Heavy on time-series feature engineering, and directly relevant to the work I did at Statcon.</p>
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
            <p>Voice disorder classification on the FEMH dataset, combining spectrogram segmentation with metadata features in an ensemble. A good case of signal and structured features complementing each other.</p>
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
            <p>Autism detection from fMRI data using LSTMs and autoencoders. High-dimensional, low-sample data — most of the work was in not overfitting.</p>
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
          <img src={assetLinks.projects.aiResearchFlow} alt="Dark research interface with query flow and response output." className="feature-media feature-media-fit" loading="lazy" decoding="async" />
        </div>
        <div className="story-copy">
          <p className="mini">What it taught me</p>
          <h2>It changed how I build.</h2>
          <p className="story-text">These taught me to be skeptical of good-looking metrics, to compare approaches properly, and to check whether a model is actually learning the thing I think it is.</p>
          <p className="story-text">That habit of questioning results carries over directly into regular engineering work.</p>
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
              <h3>Applied AI and data-driven systems</h3>
              <p>I'd like to keep working where ML depth meets a concrete outcome, ideally in a domain where the data is genuinely hard.</p>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Data</p>
            </div>
            <div className="line-body">
              <h3>Signal, sequence, and pattern-heavy data</h3>
              <p>I'm drawn to problems where just getting structure out of the data is half the work.</p>
            </div>
          </article>
          <article className="line-item">
            <div className="line-meta">
              <p className="mini">Goal</p>
            </div>
            <div className="line-body">
              <h3>Turn research into systems people use</h3>
              <p>Long term, I want to keep pairing the research side with engineering so experiments don't just stay in a notebook.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ResearchPage;
