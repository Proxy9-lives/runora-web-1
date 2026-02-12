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

const ProcessSection = ({ id }) => (
  <div id={id} className="section our-work">
    <div className="work-content">
      <h2 className="work-title">HOW ENGAGEMENT WORKS</h2>
      <div className="process-steps">
        <HoloStep number="01" title="Workflow Audit" desc="15–30 min session to understand your ops" />
        <HoloStep number="02" title="Identify Top ROI" desc="We pinpoint fastest-value automation" />
        <HoloStep number="03" title="Build & Deploy" desc="Fixed scope, clear deliverables & cost" />
        <HoloStep number="04" title="Maintain & Optimise" desc="Optional ongoing support as you grow" />
      </div>

      {/* CTA */}
      <div className="process-cta">
        <h3>15-Minute Automation Audit</h3>
        <button className="cta-button" onClick={() => window.open('mailto:start@runora.ai')}>
          GET FREE AUDIT
        </button>
        <p className="cta-note">No obligation.</p>
      </div>

      {/* Trust block with bigger gap */}
      <div className="trust-block">
        <h3 className="trust-block-title">Why Runora Is Safe to Run</h3>
        <div className="trust-row">
          <div className="trust-item"><span className="trust-icon">🔐</span><p>SLA-defined response times</p></div>
          <div className="trust-item"><span className="trust-icon">📊</span><p>Monitoring & escalation</p></div>
          <div className="trust-item"><span className="trust-icon">👤</span><p>Human fallback for critical flows</p></div>
          <div className="trust-item"><span className="trust-icon">🛡️</span><p>NDAs + security compliance</p></div>
          <div className="trust-item"><span className="trust-icon">📝</span><p>Audit logs where required</p></div>
        </div>
      </div>
      <p className="trust-tagline-outside">AI that works with accountability, not blindly.</p>
    </div>
  </div>
);

export default ProcessSection;
