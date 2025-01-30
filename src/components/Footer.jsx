import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      {/* Copyright Text */}
      <p>&copy; 2025 [Band Name]. All rights reserved.</p>

      {/* Social Media Links */}
      <div style={{ marginTop: '20px' }}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: '#000', fontSize: '24px' }}
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: '#000', fontSize: '24px' }}
          aria-label="YouTube"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Privacy and Terms Links */}
      <p style={{ marginTop: '20px' }}>
        <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>
          Privacy Policy
        </a>
        |
        <a href="/terms" style={{ color: '#fff', textDecoration: 'none', marginLeft: '10px' }}>
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

export default Footer;
