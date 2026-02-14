import React from 'react';

const ImpactSection = ({ id, onContactOpen }) => (
  <div id={id} className="section impact-section">
    <div className="impact-content">
      <h2 className="impact-title">
        <span className="impact-line1">REAL NUMBERS.</span>
        <span className="impact-line2">REAL PAYBACK.</span>
      </h2>
      <div className="impact-stacked">
        <div className="impact-block">
          <h3 className="impact-col-heading">Typical Results After 30 Days</h3>
          <div className="stat-row">
            <div className="stat-card"><div className="stat-number">3x</div><div className="stat-label">Faster lead response, even at 2am</div></div>
            <div className="stat-card"><div className="stat-number">40%</div><div className="stat-label">Reduction in manual admin & ops work</div></div>
            <div className="stat-card"><div className="stat-number">25%</div><div className="stat-label">More bookings from existing enquiries</div></div>
          </div>
        </div>
        <div className="impact-block">
          <h3 className="impact-col-heading">Why It Makes Financial Sense</h3>
          <div className="payback-row">
            <div className="payback-item"><span className="payback-icon">💰</span><p>Replaces 40–60% of one admin role, no HR headache</p></div>
            <div className="payback-item"><span className="payback-icon">⚡</span><p>Most clients recover the investment within 2–4 months</p></div>
            <div className="payback-item"><span className="payback-icon">📈</span><p>Compounds monthly, the longer it runs, the more it saves</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ImpactSection;
