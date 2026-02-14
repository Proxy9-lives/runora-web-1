import React, { useState } from 'react';

const faqs = [
  { q: 'Do I need to be tech-savvy to work with you?', a: 'Not at all. We handle everything technical end-to-end. You just tell us what\'s slowing your business down — we figure out how to automate it and build it for you.' },
  { q: 'How long does it take to go live?', a: 'It depends on the complexity of what we\'re building. Simple automations (like WhatsApp auto-reply) can be live within days. More complex multi-step workflows take longer. We\'ll give you a clear timeline after the audit call.' },
  { q: 'What if the automation breaks or needs changes?', a: 'All builds include a support period post-launch. We monitor, maintain, and fix issues. If your business grows and the workflow needs updating, we handle that too.' },
  { q: 'Will this work with the tools I already use?', a: 'Yes. We work with WhatsApp, Instagram, email, most CRMs, Google Sheets, booking systems, and 200+ other platforms. We audit your current setup and build around it.' },
  { q: 'Is my customer data safe?', a: 'Absolutely. We sign NDAs with all clients, follow data security best practices, and never store customer data beyond what\'s needed to run your automation.' },
  { q: 'What makes Runora different from hiring a VA or using a tool like Zapier?', a: 'A VA can\'t work 24/7 or handle 100 messages simultaneously. Zapier is a tool — not a service. We design, build, and maintain custom automations tailored to your specific business, not generic templates.' },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
};

const FAQSection = ({ id }) => (
  <div id={id} className="section faq-section">
    <div className="faq-content">
      <div className="section-label">FAQ</div>
      <h2 className="faq-title">COMMON QUESTIONS</h2>
      <div className="faq-list">
        {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
      </div>
    </div>
  </div>
);

export default FAQSection;
