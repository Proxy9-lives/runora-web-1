import React, { useRef } from 'react';

const HoloStep = ({ number, title, desc }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${(y - cy) / 14}deg) rotateY(${(cx - x) / 14}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--x', '50%');
    card.style.setProperty('--y', '50%');
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <div className="process-step holo-step" ref={cardRef}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="holo-shimmer" />
      <div className="holo-glow" />
      <div className="process-step-inner">
        <div className="step-number">{number}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const ProcessSection = ({ id, onContactOpen }) => (
  <div id={id} className="section our-work">
    <div className="work-content">
      <div className="section-label">HOW IT WORKS</div>
      <h2 className="work-title">FROM AUDIT TO LIVE</h2>
      <div className="process-steps">
        <HoloStep number="01" title="Free Audit Call" desc="15–30 min. We map your biggest bottlenecks and identify the highest ROI automation for your business." />
        <HoloStep number="02" title="Custom Build Plan" desc="We scope exactly what gets built, what it costs, and what results to expect. No surprises." />
        <HoloStep number="03" title="Build & Deploy" desc="We build, test, and launch your automation. You approve before anything goes live." />
        <HoloStep number="04" title="Maintain & Optimise" desc="Optional ongoing support as your business grows. We monitor and improve over time." />
      </div>

      <div className="process-cta">
        <h3>Ready to see what we'd automate for you?</h3>
        <button className="cta-button" onClick={onContactOpen}>
          BOOK FREE AUDIT
        </button>
        <span className="cta-note">No obligation. No technical knowledge required.</span>
      </div>

      <div className="trust-block">
        <h3 className="trust-block-title">Built for businesses that can't afford downtime</h3>
        <div className="trust-row">
          <div className="trust-item"><span className="trust-icon">🔐</span><p>NDAs & data security included</p></div>
          <div className="trust-item"><span className="trust-icon">👤</span><p>Human fallback for critical flows</p></div>
          <div className="trust-item"><span className="trust-icon">📊</span><p>Live monitoring & alerts</p></div>
          <div className="trust-item"><span className="trust-icon">🛡️</span><p>SLA-defined response times</p></div>
          <div className="trust-item"><span className="trust-icon">📝</span><p>Full audit logs available</p></div>
        </div>
      </div>
      <p className="trust-tagline-outside">AI that works with accountability, not blindly.</p>
    </div>
  </div>
);

export default ProcessSection;
