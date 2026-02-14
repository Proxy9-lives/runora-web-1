import React, { useRef } from 'react';
import Header from './Header';
import BeamsBackground from './BeamsBackground';

const services = [
  { id:'customer', img:'/cube1.png', badge:'HIGHEST ROI', title:'Customer Support & Lead Response',
    tagline:'Never miss a lead. Never lose a booking.',
    imgLabel:'📸 Add image: AI chatbot / WhatsApp dashboard / phone with notifications',
    items:['WhatsApp, Instagram & Facebook DM automation','Website chat & email inbox handling','AI voice receptionist, inbound & outbound','Instant replies 24/7, even during Ramadan hours','Lead qualification & appointment booking','CRM auto-logging & human escalation','Fallback to your team for complex queries'] },
  { id:'marketing', img:'/cube3.png', title:'Marketing Automation',
    tagline:'Stay visible without lifting a finger.',
    imgLabel:'📸 Add image: Social media content / scheduling dashboard / analytics',
    items:['Content ideas pulled from competitor & trend data','Post, caption & hashtag generation','Cross-platform repurposing (Instagram, LinkedIn, TikTok)','Scheduling with your approval before anything posts','AI DM and comment response flows'] },
  { id:'sales', img:'/cube4.png', title:'Sales Automation',
    tagline:'More pipeline. Less manual chasing.',
    imgLabel:'📸 Add image: CRM pipeline / lead funnel / sales dashboard',
    items:['Lead scraping from LinkedIn, Google Maps & ads','Lead enrichment, scoring & prioritisation','CRM pipeline auto-updates','Proposal generation from meeting notes','Automated follow-up sequences that don\'t feel robotic'] },
  { id:'operations', img:'/cube5.png', title:'Operations Automation',
    tagline:'Remove the bottlenecks slowing your team down.',
    imgLabel:'📸 Add image: Document processing / workflow diagram / dashboard',
    items:['Invoice & document data extraction','WhatsApp conversations logged to CRM & Sheets','Cross-system sync, CRM, accounting, dashboards','Automated weekly & monthly reports to your inbox'] },
  { id:'hr', img:'/cube2.png', title:'HR & Hiring Automation',
    tagline:'Hire faster. Onboard smoother.',
    imgLabel:'📸 Add image: CV screening / hiring pipeline / onboarding flow',
    items:['Resume screening & AI-powered shortlisting','Interview scheduling without back-and-forth','Onboarding workflow automation','HR Q&A assistant for your team','Offer letter & contract generation'] },
  { id:'finance', img:'/cube6.png', title:'Finance Automation',
    tagline:'Accuracy, speed, compliance, no accountant on call.',
    imgLabel:'📸 Add image: Invoice processing / finance dashboard / accounting',
    items:['Accounts payable & receivable automation','Invoice OCR + duplicate detection','Payment reminders & follow-ups','Expense report generation','Financial summaries delivered to founders weekly'] },
];

const HoloSvcCard = ({ s, onAudit }) => {
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
    cardRef.current.style.transform = `perspective(1000px) rotateX(${(y-cy)/14}deg) rotateY(${(cx-x)/14}deg)`;
  };
  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    ['--x','--y','--bg-x','--bg-y'].forEach(v => cardRef.current.style.setProperty(v, '50%'));
  };
  return (
    <div ref={cardRef} className={`svc-card ${s.badge ? 'svc-featured' : ''}`}
      onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="holo-shimmer" />
      <div className="holo-glow" />
      <div className="svc-card-inner">
        <div className="svc-card-top">
          <img src={s.img} alt="" className="svc-cube-img" />
          {s.badge && <span className="svc-badge">{s.badge}</span>}
        </div>
        <h3 className="svc-title">{s.title}</h3>
        <p className="svc-tagline">{s.tagline}</p>
        <ul className="svc-list">
          {s.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <button className="cta-button svc-cta" onClick={onAudit}>GET FREE AUDIT</button>
      </div>
    </div>
  );
};

const ServicesPage = ({ onClose, onAudit, onNavigate, onContactOpen }) => {
  const handleNav = (id) => { onClose(); setTimeout(() => onNavigate?.(id), 50); };
  return (
    <div className="services-page">
      <BeamsBackground />
      <Header
        currentSection="services"
        onNavigate={handleNav}
        onServicesOpen={() => {}}
        onContactOpen={() => { onClose(); setTimeout(() => onContactOpen?.(), 50); }}
        isServicesPage={true}
      />
      <div className="services-page-body">
        <button className="services-back-btn" onClick={onClose}>← Back</button>

        {/* Services hero */}
        <div className="services-page-header">
          <span className="services-overlay-tag">WHAT WE AUTOMATE</span>
          <h1 className="services-page-title">Everything running on autopilot.</h1>
          <p className="services-hero-sub">Six automation categories. Hundreds of individual workflows. All built specifically for your business.</p>
        </div>

        <div className="services-page-grid">
          {services.map(s => <HoloSvcCard key={s.id} s={s} onAudit={onAudit} />)}
        </div>

        {/* Bottom CTA strip */}
        <div className="services-bottom-cta">
          <p>Not sure which service fits your business?</p>
          <button className="cta-button" onClick={onAudit}>BOOK A FREE 15-MIN AUDIT CALL</button>
          <span className="cta-note">We'll tell you exactly what to automate first for maximum ROI.</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
