import React from 'react';
import HolographicPillar from './HolographicPillar';

// 4 pillars — use cubes 1,3,5,6 (a nice varied spread)
const pillars = [
  { number: '01', img: '/cube1.png', title: 'Customer Support & Lead Response' },
  { number: '02', img: '/cube3.png', title: 'Operations & Finance Workflows' },
  { number: '03', img: '/cube5.png', title: 'HR & Hiring Automation' },
  { number: '04', img: '/cube6.png', title: 'Sales & Marketing Automation' },
];

const SolutionSection = ({ id, onServicesOpen }) => (
  <div id={id} className="section how-we-do-it">
    <div className="underwater-scene">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="fish" style={{
          top: `${10 + Math.random() * 80}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${12 + Math.random() * 10}s`,
        }} />
      ))}
    </div>
    <div className="hwdi-content">
      <h2 className="hwdi-title">RUNORA'S SOLUTION</h2>
      <p className="hwdi-description">We automate how work moves through your business.</p>
      <div className="holo-pillars-grid">
        {pillars.map((p) => (
          <HolographicPillar key={p.number} number={p.number}
            img={p.img} title={p.title} onExplore={onServicesOpen} />
        ))}
      </div>
    </div>
  </div>
);

export default SolutionSection;
