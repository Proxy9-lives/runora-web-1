import React, { useEffect, useRef } from 'react';

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.5 + Math.random() * 1.0,
    opacity: 0.10 + Math.random() * 0.14,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

const BeamsBackground = () => {
  const canvasRef = useRef(null);
  const beamsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth, h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      beamsRef.current = Array.from({ length: 30 }, () => createBeam(w, h));
    };

    resize();
    window.addEventListener('resize', resize);

    function resetBeam(beam, index, total) {
      const col = index % 3;
      const w = window.innerWidth, h = window.innerHeight;
      const spacing = w / 3;
      beam.y = h + 100;
      beam.x = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 80 + Math.random() * 100;
      beam.speed = 0.4 + Math.random() * 0.5;
      beam.hue = 190 + (index * 70) / total;
      beam.opacity = 0.15 + Math.random() * 0.12;
    }

    function drawBeam(beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);
      const p = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
      const g = ctx.createLinearGradient(0, 0, 0, beam.length);
      g.addColorStop(0,   `hsla(${beam.hue},85%,65%,0)`);
      g.addColorStop(0.1, `hsla(${beam.hue},85%,65%,${p * 0.5})`);
      g.addColorStop(0.4, `hsla(${beam.hue},85%,65%,${p})`);
      g.addColorStop(0.6, `hsla(${beam.hue},85%,65%,${p})`);
      g.addColorStop(0.9, `hsla(${beam.hue},85%,65%,${p * 0.5})`);
      g.addColorStop(1,   `hsla(${beam.hue},85%,65%,0)`);
      ctx.fillStyle = g;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = 'blur(35px)';
      const total = beamsRef.current.length;
      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, i, total);
        drawBeam(beam);
      });
      rafRef.current = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="beams-canvas" style={{ filter: 'blur(15px)' }} />;
};

export default BeamsBackground;
