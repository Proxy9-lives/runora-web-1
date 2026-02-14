import React from 'react';

const services = [
  {
    id: 'customer',
    badge: 'HIGHEST ROI',
    title: 'Customer Support & Lead Response',
    tagline: 'Directly impacts revenue + conversion rate',
    items: ['Website, WhatsApp, Instagram, Facebook DMs', 'Email support inbox', 'AI voice receptionist (inbound & outbound)', 'Instant replies 24/7', 'Lead qualification & appointment booking', 'CRM logging & escalation to humans'],
  },
  {
    id: 'hr',
    title: 'HR & Hiring Automation',
    tagline: 'Scale hiring without scaling HR workload',
    items: ['Resume Screening', 'Candidate Ranking', 'Interview Scheduling', 'Onboarding Workflows', 'HR Q&A Assistant'],
  },
  {
    id: 'operations',
    title: 'Operations Automation',
    tagline: 'Remove internal bottlenecks',
    items: ['Data extraction (invoices, orders, documents)', 'WhatsApp logging to CRM and Sheets', 'Cross-system sync (CRM, dashboards, accounting)', 'Automated weekly & monthly reports'],
  },
  {
    id: 'finance',
    title: 'Finance Automation',
    tagline: 'Accuracy, speed, compliance',
    items: ['Accounts payable / receivable', 'Invoice OCR + duplicate detection', 'Payment reminders & follow-ups', 'Expense report generation', 'Financial summaries for founders'],
  },
  {
    id: 'sales',
    title: 'Sales Automation',
    tagline: 'More leads, less chasing',
    items: ['Lead scraping (LinkedIn, Google Maps)', 'Lead enrichment & scoring', 'CRM pipeline updates', 'Proposal generation from meeting notes', 'Follow-up sequencing'],
  },
  {
    id: 'marketing',
    title: 'Marketing Automation',
    tagline: 'Consistency without effort',
    items: ['Content idea research (competitors + trends)', 'Post, caption & hashtag generation', 'Cross-platform repurposing', 'Scheduling with human approval', 'AI DM/comment responders'],
  },
];

const ServicesSection = ({ id }) => {
  return (
    <div id={id} className="section services-section">
      <div className="services-content">
        <h2 className="services-title">WHAT WE AUTOMATE</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.id} className={`service-card ${s.badge ? 'featured' : ''}`}>
              {s.badge && <div className="service-badge">{s.badge}</div>}
              <h3>{s.title}</h3>
              <p className="service-tagline">{s.tagline}</p>
              <ul>
                {s.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <button className="cta-button service-cta" onClick={() => window.open('mailto:hello@runora.ai')}>
                GET FREE AUDIT
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
