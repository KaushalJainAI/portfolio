import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/' || path === '/portfolio.html') {
      return location.pathname === '/' || location.pathname === '/portfolio.html' ? 'active' : '';
    }
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="top-nav">
      <div className="container nav-wrap">
        <Link to="/" className="logo" aria-label="Kaushal Jain home">KJ</Link>
        <button 
          className="nav-toggle" 
          type="button" 
          aria-expanded={isOpen} 
          aria-controls="site-nav"
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" aria-hidden="true"></span>
          Menu
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="site-nav">
          <li><Link className={isActive('/')} to="/">Home</Link></li>
          <li><Link className={isActive('/about.html')} to="/about.html">About</Link></li>
          <li><Link className={isActive('/skills.html')} to="/skills.html">Skills</Link></li>
          <li><Link className={isActive('/research.html')} to="/research.html">Research</Link></li>
          <li><Link className={isActive('/projects.html')} to="/projects.html">Projects</Link></li>
          <li><a href="/resume jan 12.pdf" download="Kaushal_Jain_Resume.pdf" className="nav-resume">Resume</a></li>
          <li><Link className={isActive('/contact.html')} to="/contact.html">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
