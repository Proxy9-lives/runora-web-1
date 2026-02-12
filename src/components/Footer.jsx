import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>RUNORA</h3>
        <p>AI & Workflow Automation for Modern Businesses. Eliminate missed leads, reduce manual work, and scale without hiring.</p>
        <p style={{fontSize:'0.78rem', opacity:0.5}}>A Ketra Systems LLC product</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#problem">The Problem</a>
        <a href="#solution">Our Solution</a>
        <a href="#impact">Impact & Results</a>
        <a href="#process">Get Started</a>
      </div>
      <div className="footer-section">
        <h4>Get in Touch</h4>
        <p>Ready to automate your business? Book a free 15-minute audit.</p>
        <a className="footer-email" href="mailto:start@runora.ai">
          ✉ start@runora.ai
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 Ketra Systems LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
