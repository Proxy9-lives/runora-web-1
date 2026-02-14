import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: 'AED 8,000',
    period: 'one-time',
    tag: null,
    desc: 'One focused automation. Perfect for testing the impact before going all-in.',
    features: ['1 automation workflow', 'e.g. WhatsApp lead response or booking system', 'Setup + testing included', '30-day support post-launch', 'Full documentation handed over'],
    cta: 'GET STARTED',
  },
  {
    name: 'Growth',
    price: 'AED 15,000',
    period: 'one-time',
    tag: 'MOST POPULAR',
    desc: 'Full automation stack across your core business operations.',
    features: ['3–5 automation workflows', 'Customer support + lead response + ops', 'CRM integration included', '60-day support post-launch', 'Priority onboarding'],
    cta: 'BOOK AUDIT',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tag: null,
    desc: 'For multi-location businesses or complex workflows that need ongoing management.',
    features: ['Unlimited workflows', 'Dedicated automation manager', 'Monthly optimisation calls', 'SLA guarantees', 'NDA + compliance documentation'],
    cta: 'CONTACT US',
  },
];

const PricingSection = ({ id, onContactOpen }) => (
  <div id={id} className="section pricing-section">
    <div className="pricing-content">
      <div className="section-label">PRICING</div>
      <h2 className="pricing-title">SIMPLE, TRANSPARENT PRICING</h2>
      <p className="pricing-sub">No hidden fees. No retainers unless you want them. You own everything we build.</p>
      <div className="pricing-grid">
        {tiers.map(tier => (
          <div key={tier.name} className={`pricing-card ${tier.tag ? 'pricing-featured' : ''}`}>
            {tier.tag && <div className="pricing-tag">{tier.tag}</div>}
            <div className="pricing-card-inner">
              <h3 className="pricing-name">{tier.name}</h3>
              <div className="pricing-price">
                {tier.price}
                {tier.period && <span className="pricing-period"> {tier.period}</span>}
              </div>
              <p className="pricing-desc">{tier.desc}</p>
              <ul className="pricing-features">
                {tier.features.map((f, i) => <li key={i}><span className="pricing-check">✓</span>{f}</li>)}
              </ul>
              <button className="cta-button pricing-cta" onClick={onContactOpen}>{tier.cta}</button>
            </div>
          </div>
        ))}
      </div>
      <p className="pricing-note">✨ Ramadan special: Limited onboarding slots available. Book your audit before they fill up.</p>
    </div>
  </div>
);

export default PricingSection;
