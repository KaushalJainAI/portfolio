import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container footer-wrap">
        <div>
          <p className="footer-title">Kaushal Jain</p>
          <p>Backend &amp; ML engineer, based in Chandigarh.</p>
        </div>
        <p>© {new Date().getFullYear()} Kaushal Jain</p>
      </div>
    </footer>
  );
};

export default Footer;
