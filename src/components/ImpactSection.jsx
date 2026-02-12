import React from 'react';

const ImpactSection = ({ id }) => (
  <div id={id} className="section impact-section">
    <div className="impact-content">
      <h2 className="impact-title">
        <span className="impact-line1">ONE-TIME AUTOMATION.</span>
        <span className="impact-line2">FAST PAYBACK.</span>
      </h2>
      <div className="impact-stacked">
        <div className="impact-block">
          <h3 className="impact-col-heading">Typical Impact</h3>
          <div className="stat-row">
            <div className="stat-card"><div className="stat-number">30–60%</div><div className="stat-label">Reduction in manual support & ops work</div></div>
            <div className="stat-card"><div className="stat-number">20–40%</div><div className="stat-label">Faster lead response time</div></div>
            <div className="stat-card"><div className="stat-number">10–25%</div><div className="stat-label">Higher conversion rates</div></div>
          </div>
        </div>
        <div className="impact-block">
          <h3 className="impact-col-heading">Payback Logic</h3>
          <div className="payback-row">
            <div className="payback-item"><span className="payback-icon">💰</span><p>Replaces ~40–60% of one full-time role</p></div>
            <div className="payback-item"><span className="payback-icon">⚡</span><p>Investment recovered in ~2–4 months</p></div>
            <div className="payback-item"><span className="payback-icon">📈</span><p>Ongoing gains every month after</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ImpactSection;
