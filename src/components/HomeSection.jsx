import React from 'react';
import Cube3D from './Cube3D';

const HomeSection = ({ id, onNavigate }) => {
  return (
    <div id={id} className="section home">
      <div className="home-content">
        <Cube3D />
        <h1 className="home-title">RUNORA</h1>
        <h2 className="home-subtitle-large">AI & Workflow Automation for Modern Businesses</h2>
        <p className="home-subtitle">
          Eliminate Missed Leads. Reduce Manual Work. Scale Without Hiring.
        </p>
        <button className="cta-button" onClick={() => onNavigate('problem')}>
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
