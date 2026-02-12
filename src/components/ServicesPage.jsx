import React, { useRef } from 'react';
import Header from './Header';
import BeamsBackground from './BeamsBackground';

const services = [
  { id:'customer', img:'/cube1.png', badge:'HIGHEST ROI', title:'Customer Support & Lead Response',
    tagline:'Directly impacts revenue + conversion rate',
    items:['Website, WhatsApp, Instagram, Facebook DMs','Email support inbox automation','AI voice receptionist (inbound & outbound)','Instant replies 24/7','Lead qualification & appointment booking','CRM logging & escalation to humans','Call-forwarding fallback if AI is down'] },
  { id:'hr', img:'/cube2.png', title:'HR & Hiring Automation',
    tagline:'Scale hiring without scaling HR workload',
    items:['Resume screening & ranking','Candidate scoring & shortlisting','Interview scheduling automation','Onboarding workflow automation','HR Q&A assistant for employees'] },
  { id:'marketing', img:'/cube3.png', title:'Marketing Automation',
    tagline:'Consistency without daily effort',
    items:['Content idea research (competitors + trends)','Post, caption & hashtag generation','Cross-platform repurposing','Scheduling with human approval step','AI DM/comment responders'] },
  { id:'sales', img:'/cube4.png', title:'Sales Automation',
    tagline:'More leads, less chasing',
    items:['Lead scraping (LinkedIn, Google Maps)','Lead enrichment & scoring','CRM pipeline updates','Proposal generation from meeting notes','Automated follow-up sequencing'] },
  { id:'operations', img:'/cube5.png', title:'Operations Automation',
    tagline:'Remove internal bottlenecks',
    items:['Data extraction (invoices, orders, documents)','WhatsApp logging to CRM and Sheets','Cross-system sync (CRM, dashboards, accounting)','Automated weekly & monthly reports'] },
  { id:'finance', img:'/cube6.png', title:'Finance Automation',
    tagline:'Accuracy, speed, compliance',
    items:['Accounts payable / receivable automation','Invoice OCR + duplicate detection','Payment reminders & follow-ups','Expense report generation','Financial summaries for founders'] },
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
        <div className="services-page-header">
          <span className="services-overlay-tag">WHAT WE AUTOMATE</span>
          <h1 className="services-page-title">Our Services</h1>
        </div>
        <div className="services-page-grid">
          {services.map(s => <HoloSvcCard key={s.id} s={s} onAudit={onAudit} />)}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
