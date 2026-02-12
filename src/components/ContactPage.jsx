import React, { useRef } from 'react';
import Header from './Header';
import BeamsBackground from './BeamsBackground';

const ContactPage = ({ onClose, onServicesOpen, onNavigate }) => {
  const cardRef = useRef(null);

  const handleNav = (id) => {
    onClose();
    setTimeout(() => onNavigate && onNavigate(id), 50);
  };

  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
    cardRef.current.style.setProperty('--bg-x', `${(x / r.width) * 100}%`);
    cardRef.current.style.setProperty('--bg-y', `${(y / r.height) * 100}%`);
    cardRef.current.style.transform = `perspective(1000px) rotateX(${(y - cy) / 18}deg) rotateY(${(cx - x) / 18}deg)`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    ['--x','--y','--bg-x','--bg-y'].forEach(v => cardRef.current.style.setProperty(v, '50%'));
  };

  return (
    <div className="contact-page">
      <BeamsBackground />
      <Header
        currentSection="contact"
        onNavigate={handleNav}
        onServicesOpen={() => { onClose(); setTimeout(() => onServicesOpen && onServicesOpen(), 50); }}
        onAuditOpen={() => {}}
        isServicesPage={true}
      />

      <div className="contact-page-body">
        <button className="services-back-btn" onClick={onClose}>← Back</button>

        <div className="contact-center">
          <div
            className="contact-holo-card"
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <div className="holo-shimmer" />
            <div className="holo-glow" />
            <div className="contact-card-inner">

              <div className="contact-header">
                <h1 className="contact-title">Contact Runora</h1>
                <div className="contact-badge">LIMITED SLOTS</div>
              </div>

              <p className="contact-intro">
                Runora has just launched in the Dubai region, and we're currently onboarding a <strong>limited number of businesses</strong>.
              </p>
              <p className="contact-intro">
                With Ramadan coming up and teams working shorter hours, we help put simple systems in place so customer enquiries and follow-ups keep moving.
              </p>

              <div className="contact-divider" />

              <p className="contact-label">For now, the fastest way to reach us is by email:</p>
              <a className="contact-email-link" href="mailto:start@runora.ai">
                📩 start@runora.ai
              </a>

              <div className="contact-include">
                <p className="contact-label">When you write, please include:</p>
                <ul className="contact-list">
                  <li>Business name</li>
                  <li>Business website</li>
                  <li>WhatsApp number <span className="contact-optional">(optional)</span></li>
                </ul>
              </div>

              <div className="contact-response">
                <span className="contact-response-icon">⏱</span>
                <p>A team member typically responds within <strong>2 hours</strong> during working hours <span className="contact-subtle">(9am–6pm GST)</span>.</p>
              </div>

              <div className="contact-divider" />

              <div className="contact-pricing">
                <div className="contact-pricing-row">
                  <span className="contact-price">AED 15,000<span className="contact-asterisk">*</span></span>
                  <span className="contact-price-label">One-time automation setup</span>
                </div>
                <div className="contact-pricing-notes">
                  <p>Implementation scope varies by workflow.</p>
                  <p className="contact-ramadan">✨ Limited Ramadan onboarding slots available.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
