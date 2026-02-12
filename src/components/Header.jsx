import React, { useState } from 'react';

const links = [
  { id: 'home',    label: 'HOME' },
  { id: 'problem', label: 'THE PROBLEM' },
  { id: 'solution',label: 'SOLUTION' },
  { id: 'impact',  label: 'IMPACT' },
  { id: 'process', label: 'GET STARTED' },
];

const Header = ({ onNavigate, currentSection, onServicesOpen, onContactOpen, isServicesPage }) => {
  const [open, setOpen] = useState(false);
  const go = (id) => { onNavigate && onNavigate(id); setOpen(false); };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); go('home'); }}>
          <img src="/runora_logo.png" alt="Runora" className="logo-img" />
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
          <a href="#services"
            className={currentSection === 'services' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onServicesOpen && onServicesOpen(); }}>
            SERVICES
          </a>
          <a href="#contact" className="nav-envelope" title="Contact us"
            onClick={(e) => { e.preventDefault(); onContactOpen && onContactOpen(); }}>
            ✉
          </a>
        </nav>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      <nav className={`nav-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`}
            className={currentSection === l.id ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); go(l.id); }}>
            {l.label}
          </a>
        ))}
        <a href="#services" onClick={(e) => { e.preventDefault(); onServicesOpen && onServicesOpen(); setOpen(false); }}>
          SERVICES
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); onContactOpen && onContactOpen(); setOpen(false); }}
          style={{ color: 'var(--mint)' }}>
          ✉ CONTACT
        </a>
      </nav>
    </>
  );
};

export default Header;
