import React, { useState } from 'react';

const links = [
  { id: 'solution',   label: 'What We Automate' },
  { id: 'industries', label: 'Industries' },
  { id: 'process',    label: 'Process' },
  { id: 'faq',        label: 'FAQ' },
];

const Header = ({ onNavigate, currentSection, onServicesOpen, onContactOpen }) => {
  const [open, setOpen] = useState(false);
  const go = (id) => { onNavigate && onNavigate(id); setOpen(false); };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); go('home'); }}>
          <img src="/runora_mascot.png" alt="Runora" className="logo-img" style={{ background: 'transparent' }} />
          <span>RUNORA</span>
        </a>
        <nav className="desktop-nav">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
              className={currentSection === l.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); go(l.id); }}>
              {l.label}
            </a>
          ))}
        </nav>
        <button className="header-cta-btn" onClick={onContactOpen}>Get Free Audit</button>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      <nav className={`nav-menu ${open ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>Home</a>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`}
            className={currentSection === l.id ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); go(l.id); }}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={(e) => { e.preventDefault(); onContactOpen && onContactOpen(); setOpen(false); }}
          style={{ color: 'var(--mint)', fontWeight: 600 }}>
          Get Free Audit →
        </a>
      </nav>
    </>
  );
};

export default Header;
