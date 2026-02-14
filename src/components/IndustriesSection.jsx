import React, { useRef } from 'react';

const industries = [
  { icon: '🏥', name: 'Healthcare & Wellness', items: ['Appointment booking & reminders', '24/7 patient enquiry responses', 'Post-treatment follow-up sequences', 'Insurance document collection', 'Review request automation'] },
  { icon: '🏠', name: 'Real Estate & Brokers', items: ['Instant lead qualification via WhatsApp AI', 'Viewing & meeting schedule automation', 'Follow-up sequences for cold leads', 'CRM auto-logging of all interactions', 'Document collection & processing'] },
  { icon: '🛍️', name: 'Retail & E-Commerce', items: ['Order confirmation & shipping updates', 'Abandoned cart recovery sequences', 'Customer support inbox automation', 'Inventory & restock alerts', 'Post-purchase review requests'] },
  { icon: '🚗', name: 'Automotive & Dealerships', items: ['Instant lead response from website & social', 'Test drive & service scheduling', 'Finance document collection automation', 'Post-sale review & referral requests', 'Service reminder campaigns'] },
  { icon: '🏋️', name: 'Fitness & Lifestyle', items: ['Trial class booking & lead follow-up', 'Membership renewal reminders', 'Lead nurture from social media ads', 'Class cancellation notifications', 'Loyalty & upsell campaigns'] },
  { icon: '🏢', name: 'Professional Services', items: ['Client intake & onboarding automation', 'Proposal & contract generation', 'Billing & payment reminder flows', 'Compliance document collection', 'Monthly report delivery automation'] },
];

const IndustryCard = ({ icon, name, items, onContactOpen }) => {
  const cardRef = useRef(null);
  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
    cardRef.current.style.setProperty('--bg-x', `${(x/r.width)*100}%`);
    cardRef.current.style.setProperty('--bg-y', `${(y/r.height)*100}%`);
    cardRef.current.style.transform = `perspective(1000px) rotateX(${(y-cy)/16}deg) rotateY(${(cx-x)/16}deg)`;
  };
  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    ['--x','--y','--bg-x','--bg-y'].forEach(v => cardRef.current.style.setProperty(v, '50%'));
  };
  return (
    <div ref={cardRef} className="industry-card holo-pillar" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="holo-shimmer" />
      <div className="holo-glow" />
      <div className="industry-card-inner">
        <div className="industry-icon">{icon}</div>
        <h3 className="industry-name">{name}</h3>
        <ul className="industry-list">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <button className="holo-explore-btn" onClick={onContactOpen}>
          <span>GET AUDIT</span><span className="holo-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

const IndustriesSection = ({ id, onContactOpen }) => (
  <div id={id} className="section industries-section">
    <div className="industries-content">
      <div className="section-label">WHO WE WORK WITH</div>
      <h2 className="industries-title">BUILT FOR YOUR INDUSTRY</h2>
      <p className="industries-sub">Every business type has different bottlenecks. We've mapped them all.</p>
      <img src="/img_industries.jpg" alt="Dubai, AI automation across industries" className="industries-banner" />
      <div className="industries-grid">
        {industries.map(ind => (
          <IndustryCard key={ind.name} {...ind} onContactOpen={onContactOpen} />
        ))}
      </div>
    </div>
  </div>
);

export default IndustriesSection;
