import React, { useState, useRef } from 'react';
import Header from './Header';
import BeamsBackground from './BeamsBackground';

const ContactPage = ({ onClose, onServicesOpen, onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name:'', business:'', website:'', email:'', phone:'', bottleneck:'' });
  const handleNav = (id) => { onClose(); setTimeout(() => onNavigate && onNavigate(id), 50); };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '84caacea-4ba3-4495-acbb-d7d3481841b7',
          subject: `New Runora enquiry from ${form.business}`,
          from_name: form.name,
          name: form.name,
          business: form.business,
          website: form.website || 'Not provided',
          email: form.email,
          phone: form.phone || 'Not provided',
          bottleneck: form.bottleneck || 'Not provided',
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setSending(false);
  };

  return (
    <div className="contact-page">
      <BeamsBackground />
      <Header
        currentSection="contact"
        onNavigate={handleNav}
        onServicesOpen={() => { onClose(); setTimeout(() => onServicesOpen && onServicesOpen(), 50); }}
        onContactOpen={() => {}}
        isServicesPage={true}
      />

      <div className="contact-page-body">
        <button className="services-back-btn" onClick={onClose}>← Back</button>

        <div className="contact-form-layout">

          {/* Left — headline */}
          <div className="contact-form-left">
            <div className="section-label">GET STARTED</div>
            <h1 className="contact-form-title">Let's talk automation.</h1>
            <p className="contact-form-sub">Book a free audit call. We'll map your highest-ROI automation opportunities and give you a clear plan — no obligation.</p>
            <div className="contact-form-trust">
              <div className="contact-trust-item"><span>⚡</span><p>Response within 2 hours</p></div>
              <div className="contact-trust-item"><span>🔐</span><p>NDA available on request</p></div>
              <div className="contact-trust-item"><span>✨</span><p>Limited Ramadan slots available</p></div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-right">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h2>Message sent.</h2>
                <p>We'll be in touch within 2 hours during business hours (9am–6pm GST).</p>
                <button className="cta-button" onClick={onClose} style={{marginTop:'1.5rem'}}>BACK TO SITE</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Business Name *</label>
                    <input name="business" value={form.business} onChange={handleChange} required placeholder="Your business" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Business Website</label>
                  <input name="website" value={form.website} onChange={handleChange} placeholder="https://yourbusiness.com" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@business.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone <span className="form-optional">(optional)</span></label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Biggest operational bottleneck <span className="form-optional">(optional)</span></label>
                  <textarea name="bottleneck" value={form.bottleneck} onChange={handleChange} rows="4" placeholder="e.g. We miss WhatsApp leads after hours, our team spends 3hrs/day on manual data entry..." />
                </div>
                <button className="cta-button form-submit" type="submit" disabled={sending}>
                  {sending ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                <p className="form-disclaimer">We'll review your message and reach out to schedule your free audit call.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
