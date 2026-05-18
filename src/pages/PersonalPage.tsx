import React from 'react';
import { Link } from 'react-router-dom';
import { assetLinks } from '../assets/assetLinks';
import { ROUTES } from '../site';
import { usePageMeta } from '../usePageMeta';

const PersonalPage: React.FC = () => {
  usePageMeta(
    'Personal',
    'The quieter story behind the portfolio — Kaushal Jain beyond the code: music, chess, and the interests that keep him grounded.'
  );

  return (
    <main className="container page">
      <section className="hero hero-inline">
        <div className="hero-copy">
          <p className="kicker">Beyond the code</p>
          <h1>The <span className="accent-band">person</span> behind the work.</h1>
          <p className="lead">This page is a little different. It's not about projects or skills — it's about the things that shaped who I am before I ever wrote a line of code. Family, roots, and the quieter parts of my story.</p>
        </div>
        <div className="media-frame media-tall">
          <img src={assetLinks.profile.avatar} alt="Kaushal Jain" className="feature-media" />
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Where I come from</p>
          <h2>I grew up in a middle-class Indian family that values hard work and education.</h2>
          <p className="story-text">I am from Madhya Pradesh, India. My family is not from a tech background — my parents built their lives through persistence, discipline, and care. Watching that shaped a lot of how I approach my own work.</p>
          <p className="story-text">Growing up, there was always an emphasis on doing things properly, being honest about what you know and don't know, and treating people with respect. Those values didn't come from a textbook — they came from home.</p>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.indiaLandscape} alt="A warm, atmospheric Indian landscape at sunset." className="feature-media" />
        </div>
      </section>

      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.indianFood} alt="Aesthetic, high-end presentation of traditional Indian home-cooked food." className="feature-media" />
        </div>
        <div className="story-copy">
          <p className="mini">Family</p>
          <h2>My family is small, close, and quietly supportive.</h2>
          <p className="story-text">My parents gave me the freedom to explore my interests without pressure, even when the path I chose — technology, AI, building things — was unfamiliar to them. That trust means a lot to me.</p>
          <p className="story-text">I don't come from privilege or connections. Everything I've built so far has come from curiosity, family support, and a genuine love for building things that work. That's something I carry into every project.</p>
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">The quieter side</p>
          <h2>Some things that matter to me have nothing to do with technology.</h2>
          <p className="story-text">I care about music — piano especially. I care about food, about cooking for people. I enjoy long walks, good conversations, and the kind of movies that stay with you for weeks. Chess keeps my mind sharp in a different way than code does.</p>
          <p className="story-text">These keep me from being only an engineer. I'd like to think they make me easier to work with and more curious about things outside my own field.</p>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.battleOfBands} alt="Kaushal Jain performing piano on stage." className="feature-media feature-media-fit" />
        </div>
      </section>

      <section className="story-block story-block-reverse section">
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.pecCampus} alt="Punjab Engineering College campus." className="feature-media feature-media-fit" />
        </div>
        <div className="story-copy">
          <p className="mini">College life</p>
          <h2>PEC Chandigarh gave me more than a degree.</h2>
          <p className="story-text">Beyond academics, college taught me how to manage my time, work with all kinds of people, and handle the pressure of balancing competitions, projects, and personal growth at the same time.</p>
          <p className="story-text">Some of my best memories are from late-night jam sessions in the music room, hackathon weekends, and long campus walks that turned into deep conversations. That environment shaped a lot of who I am today.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-bullet" aria-hidden="true"></span>
          <h2>A few things you might not guess</h2>
        </div>
        <div className="skill-grid">
          <article className="skill-group">
            <p className="mini">Food</p>
            <h3>I'm a decent cook</h3>
            <p>I enjoy making food for people. There's something satisfying about the process — choosing ingredients, timing things right, and seeing someone enjoy what you've made. It's a lot like building software, honestly.</p>
          </article>
          <article className="skill-group">
            <p className="mini">Music</p>
            <h3>Piano is my second language</h3>
            <p>I've been playing for years. It taught me discipline, pattern recognition, and the value of practicing something until it feels effortless. Winning Battle of Bands is still one of my proudest moments.</p>
          </article>
          <article className="skill-group">
            <p className="mini">Values</p>
            <h3>Honesty over impression</h3>
            <p>I'd rather tell someone what I don't know than pretend I do. I've found that teams work better when people are genuine, and I try to bring that energy wherever I go.</p>
          </article>
          <article className="skill-group">
            <p className="mini">Perspective</p>
            <h3>Grateful for the journey</h3>
            <p>I didn't have the most resources growing up, but I had support and curiosity. That combination taught me to value every opportunity and never take this path for granted.</p>
          </article>
        </div>
      </section>

      <section className="story-block section">
        <div className="story-copy">
          <p className="mini">Thanks for reading</p>
          <h2>That's the longer version.</h2>
          <p className="story-text">If any of this resonated, or you just want to talk, I'd be happy to hear from you.</p>
          <p className="story-text">Feel free to reach out, even if it's only to say hello.</p>
          <div className="actions">
            <Link className="btn primary" to={ROUTES.contact}>Say Hello</Link>
            <Link className="btn" to={ROUTES.about}>Back to About</Link>
          </div>
        </div>
        <div className="story-visual media-frame media-story">
          <img src={assetLinks.personal.warmConversation} alt="A warm and genuine conversation in a modern cafe setting." className="feature-media" />
        </div>
      </section>
    </main>
  );
};

export default PersonalPage;
