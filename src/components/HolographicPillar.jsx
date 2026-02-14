import React, { useRef } from 'react';

const HolographicPillar = ({ number, img, title, imgFile, imgHint, onExplore }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${(y - cy) / 12}deg) rotateY(${(cx - x) / 12}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    ['--x','--y','--bg-x','--bg-y'].forEach(v => cardRef.current.style.setProperty(v, '50%'));
  };

  return (
    <div className="holo-pillar" ref={cardRef}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={onExplore}>
      <div className="holo-shimmer" />
      <div className="holo-glow" />
      <div className="holo-pillar-inner">
        <div className="holo-pillar-top">
          <img src={img} alt="" className="holo-cube-img" />
          <span className="holo-number">{number}</span>
        </div>
        <h3 className="holo-title">{title}</h3>
        <button className="holo-explore-btn"
          onClick={(e) => { e.stopPropagation(); onExplore(); }}>
          <span>EXPLORE</span>
          <span className="holo-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default HolographicPillar;
