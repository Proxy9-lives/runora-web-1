import React, { useRef } from 'react';

const ProblemCard = ({ title, consequence }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${(y - cy) / 14}deg) rotateY(${(cx - x) / 14}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--x', '50%');
    card.style.setProperty('--y', '50%');
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <div className="problem-item holo-problem" ref={cardRef}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="holo-shimmer" />
      <div className="holo-glow" />
      <div className="problem-item-inner">
        <h3>{title}</h3>
        <div className="problem-arrow">
          <span className="problem-arrow-line" />
          <span className="problem-arrow-head">↓</span>
        </div>
        <p>{consequence}</p>
      </div>
    </div>
  );
};

const ProblemSection = ({ id }) => (
  <div id={id} className="section who-we-are">
    <div className="wwa-content">
      <div className="section-label">THE CORE PROBLEM</div>
      <h2 className="wwa-title">Sound familiar?</h2>
      <div className="problem-grid">
        <ProblemCard title="Calls & DMs going unanswered" consequence="Leads going to your competitor" />
        <ProblemCard title="Staff doing copy-paste admin" consequence="Wasted payroll, human error" />
        <ProblemCard title="No follow-up system" consequence="Bookings & deals slipping away" />
      </div>
      <p className="problem-subtitle">
        Whether you run a medspa in JLT, a car dealership in Al Quoz, or a dental clinic in Downtown, the bottleneck is always the same. Manual work that should be automated.
      </p>
    </div>
  </div>
);

export default ProblemSection;
