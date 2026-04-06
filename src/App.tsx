import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ResearchPage from './pages/ResearchPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PersonalPage from './pages/PersonalPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="site-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio.html" element={<HomePage />} />
          <Route path="/about.html" element={<AboutPage />} />
          <Route path="/skills.html" element={<SkillsPage />} />
          <Route path="/research.html" element={<ResearchPage />} />
          <Route path="/projects.html" element={<ProjectsPage />} />
          <Route path="/contact.html" element={<ContactPage />} />
          <Route path="/personal.html" element={<PersonalPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
