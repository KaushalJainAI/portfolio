import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES, RESUME_URL, RESUME_DOWNLOAD_NAME } from '../site';

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

  const getLinkProps = (path: string) => {
    const active = location.pathname === path;
    return {
      className: active ? 'active' : '',
      'aria-current': active ? 'page' as const : undefined,
    };
  };

  return (
    <nav className="top-nav">
      <div className="container nav-wrap">
        <Link to={ROUTES.home} className="logo" aria-label="Kaushal Jain home">KJ</Link>
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
          <li><Link {...getLinkProps(ROUTES.home)} to={ROUTES.home}>Home</Link></li>
          <li><Link {...getLinkProps(ROUTES.about)} to={ROUTES.about}>About</Link></li>
          <li><Link {...getLinkProps(ROUTES.skills)} to={ROUTES.skills}>Skills</Link></li>
          <li><Link {...getLinkProps(ROUTES.research)} to={ROUTES.research}>Research</Link></li>
          <li><Link {...getLinkProps(ROUTES.projects)} to={ROUTES.projects}>Projects</Link></li>
          <li><a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="nav-resume">Resume</a></li>
          <li><Link {...getLinkProps(ROUTES.contact)} to={ROUTES.contact}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
