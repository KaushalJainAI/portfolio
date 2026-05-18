import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ResearchPage from './pages/ResearchPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PersonalPage from './pages/PersonalPage';
import { ROUTES, LEGACY_REDIRECTS } from './site';

const App: React.FC = () => {
  return (
    <Router>
      <div className="site-shell">
        <Navbar />
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.skills} element={<SkillsPage />} />
          <Route path={ROUTES.research} element={<ResearchPage />} />
          <Route path={ROUTES.projects} element={<ProjectsPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.personal} element={<PersonalPage />} />

          {/* Redirect old static-site .html paths so existing links keep working. */}
          {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}

          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
