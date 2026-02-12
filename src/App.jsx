import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProblemSection from './components/WhoWeAreSection';
import SolutionSection from './components/HowWeDoItSection';
import ImpactSection from './components/ImpactSection';
import ProcessSection from './components/OurWorkSection';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import BackgroundCanvas from './components/BackgroundCanvas';

const SECTIONS = ['home','problem','solution','impact','process'];

function App() {
  const [current, setCurrent] = useState('home');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const containerRef = useRef(null);
  const dragging = useRef(false);
  const startY = useRef(0);
  const startScroll = useRef(0);

  const onMouseDown = (e) => {
    if (e.target.closest('button, a, input')) return;
    dragging.current = true;
    startY.current = e.clientY;
    startScroll.current = containerRef.current.scrollTop;
    containerRef.current.style.userSelect = 'none';
  };
  const onMouseMove = (e) => {
    if (!dragging.current) return;
    containerRef.current.scrollTop = startScroll.current - (e.clientY - startY.current);
  };
  const onMouseUp = () => {
    dragging.current = false;
    if (containerRef.current) containerRef.current.style.userSelect = '';
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const mid = el.scrollTop + el.clientHeight / 2;
      SECTIONS.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;
        if (mid >= sec.offsetTop && mid < sec.offsetTop + sec.offsetHeight) setCurrent(id);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setServicesOpen(false); setContactOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && containerRef.current)
      containerRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <BackgroundCanvas />
      <Header
        currentSection={current}
        onNavigate={scrollTo}
        onServicesOpen={() => { setContactOpen(false); setServicesOpen(true); }}
        onContactOpen={() => { setServicesOpen(false); setContactOpen(true); }}
      />
      <ScrollIndicator />

      {servicesOpen && (
        <ServicesPage
          onClose={() => setServicesOpen(false)}
          onAudit={() => { setServicesOpen(false); setContactOpen(true); }}
          onNavigate={(id) => { setServicesOpen(false); setTimeout(() => scrollTo(id), 50); }}
          onContactOpen={() => { setServicesOpen(false); setContactOpen(true); }}
        />
      )}

      {contactOpen && (
        <ContactPage
          onClose={() => setContactOpen(false)}
          onServicesOpen={() => { setContactOpen(false); setServicesOpen(true); }}
          onNavigate={(id) => { setContactOpen(false); setTimeout(() => scrollTo(id), 50); }}
        />
      )}

      <div
        className="container"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <HomeSection id="home" onNavigate={scrollTo} />
        <ProblemSection id="problem" />
        <SolutionSection id="solution" onNavigate={scrollTo} onServicesOpen={() => { setContactOpen(false); setServicesOpen(true); }} />
        <ImpactSection id="impact" />
        <ProcessSection id="process" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
