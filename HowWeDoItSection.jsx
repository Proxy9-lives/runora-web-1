import React from 'react';
import HolographicPillar from './HolographicPillar';

// 4 pillars — use cubes 1,3,5,6 (a nice varied spread)
const pillars = [
  { number: '01', img: '/cube1.png', title: 'Customer Support & Lead Response',
    imgHint: 'AI chatbot replying to WhatsApp / phone notifications / dark futuristic' },
  { number: '02', img: '/cube3.png', title: 'Operations & Finance Workflows',
    imgHint: 'Holographic dashboard / data flows / invoice processing / dark cinematic' },
  { number: '03', img: '/cube5.png', title: 'HR & Hiring Automation',
    imgHint: 'AI screening resumes / hiring pipeline / onboarding flow / futuristic' },
  { number: '04', img: '/cube6.png', title: 'Sales & Marketing Automation',
    imgHint: 'CRM pipeline / lead funnel / social content generation / dark theme' },
];

const SolutionSection = ({ id, onServicesOpen }) => (
  <div id={id} className="section how-we-do-it">
    <div className="underwater-scene">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="fish" style={{
          top: `${10 + (i * 14)}%`,
          animationDelay: `${i * 2.5}s`,
          animationDuration: `${14 + i * 2}s`,
        }} />
      ))}
    </div>
    <div className="hwdi-content">
      <h2 className="hwdi-title">RUNORA'S SOLUTION</h2>
      <p className="hwdi-description">We automate how work moves through your business.</p>
      <div className="holo-pillars-grid">
        {pillars.map((p) => (
          <HolographicPillar key={p.number} number={p.number}
            img={p.img} title={p.title} imgHint={p.imgHint} onExplore={onServicesOpen} />
        ))}
      </div>
    </div>
  </div>
);

export default SolutionSection;
