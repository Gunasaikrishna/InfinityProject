import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-left">
          <h2>Infinity Technologies</h2>
        </div>
        <div className="footer-center">
          <p>8297670197</p>
          <p>InfinityTechnologies.com</p>
          <p>Address: 1-7-145/B/4, Golkonda X Road,<br /> Beside Chikkadpally Traffic Police Station,<br /> RTC X Roads-500020 (Beside Chikkadpally Traffic Police Station)
          </p>
          <hr />
          {/* <div className="footer-icons">
            <span>🌐</span>
            <span>📷</span>
            <span>✖️</span>
            <span>🎵</span>
          </div> */}
        </div>

        <div className="footer-right">
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
          <p>Terms & Conditions</p>
          <p>Refund Policy</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Infinity Technologies. Powered and secured by Wix</p>
      </div>
    </footer>
  );
}

export default Footer;
