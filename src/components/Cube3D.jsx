import React from 'react';

const faces = ['front','back','right','left','top','bottom'];

const Cube3D = () => (
  <div className="cube-container">
    <div className="cube">
      {faces.map(f => (
        <div key={f} className={`cube-face ${f}`}>
          <div className="cube-inner" />
        </div>
      ))}
    </div>
  </div>
);

export default Cube3D;
