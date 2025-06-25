import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© {currentYear} Infinity Groups | Total Visits: 1,234</p>
    </div>
  );
}

export default Footer;
