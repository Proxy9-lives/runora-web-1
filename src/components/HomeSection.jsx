import React from 'react';

const HomeSection = ({ id, onNavigate, onContactOpen }) => {
  return (
    <div id={id} className="home-wrapper">

      {/* ── HERO: full-viewport video background ── */}
      <div className="hero-section">
        <video
          className="hero-video"
          src="/mascot_hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="home-eyebrow">AI AUTOMATION · DUBAI</div>
          <h1 className="hero-title">RUNORA</h1>
          <h2 className="hero-subtitle">Your business, running itself.</h2>
          <p className="hero-body">
            We deploy AI agents that handle your leads, bookings, follow-ups and admin, 24/7, without hiring.
          </p>
          <div className="home-cta-row">
            <button className="cta-button" onClick={onContactOpen}>GET FREE AUDIT</button>
            <button className="cta-button-ghost" onClick={() => onNavigate('solution')}>SEE HOW IT WORKS</button>
          </div>
        </div>
        <div className="hero-scroll-hint" onClick={() => onNavigate('problem')}>
          <span>SCROLL</span>
          <div className="hero-scroll-line" />
        </div>
      </div>

      {/* ── MASCOT SPLIT: night image + copy ── */}
      <div className="mascot-split-section">
        <div className="mascot-split-image">
          <img src="/mascot_night.png" alt="Runora AI Agent, Dubai" />
        </div>
        <div className="mascot-split-content">
          <div className="section-label">MEET YOUR AUTOMATION AGENT</div>
          <h2 className="mascot-split-title">Already working in Dubai. Already taking over.</h2>
          <p className="mascot-split-body">
            While your team sleeps, Runora's AI agents are responding to enquiries, qualifying leads, booking appointments and logging everything, across WhatsApp, Instagram, email and your CRM.
          </p>
          <p className="mascot-split-body">
            This isn't a chatbot. It's a complete operational system designed specifically for Dubai's medspas, clinics, gyms, dealerships and brokerages.
          </p>
          <div className="mascot-split-stats">
            <div className="mascot-stat"><span className="mascot-stat-num">24/7</span><span className="mascot-stat-label">Always on</span></div>
            <div className="mascot-stat"><span className="mascot-stat-num">&lt;2min</span><span className="mascot-stat-label">Response time</span></div>
            <div className="mascot-stat"><span className="mascot-stat-num">100%</span><span className="mascot-stat-label">Yours to own</span></div>
          </div>
          <button className="cta-button" onClick={onContactOpen}>BOOK FREE AUDIT</button>
        </div>
      </div>

    </div>
  );
};

export default HomeSection;
