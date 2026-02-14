import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProblemSection from './components/WhoWeAreSection';
import SolutionSection from './components/HowWeDoItSection';
import ImpactSection from './components/ImpactSection';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/OurWorkSection';
import FAQSection from './components/FAQSection';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import BackgroundCanvas from './components/BackgroundCanvas';

const SECTIONS = ['home','problem','solution','impact','industries','process','faq'];

function App() {
  const [current, setCurrent] = useState('home');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const containerRef = useRef(null);
  const dragging = useRef(false);
  const startY = useRef(0);
  const startScroll = useRef(0);

  const onMouseDown = (e) => {
    if (e.target.closest('button, a, input, textarea')) return;
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

  // URL management
  useEffect(() => {
    if (servicesOpen) window.history.pushState({}, '', '/services');
    else if (contactOpen) window.history.pushState({}, '', '/contact');
    else window.history.pushState({}, '', '/');
  }, [servicesOpen, contactOpen]);

  // Handle browser back button
  useEffect(() => {
    const onPopState = () => {
      setServicesOpen(false);
      setContactOpen(false);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { closeServices(); closeContact(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && containerRef.current)
      containerRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  const openServices = () => { setContactOpen(false); setServicesOpen(true); };
  const openContact  = () => { setServicesOpen(false); setContactOpen(true); };
  const closeServices = () => { setServicesOpen(false); window.history.pushState({}, '', '/'); };
  const closeContact  = () => { setContactOpen(false);  window.history.pushState({}, '', '/'); };

  return (
    <div className="App">
      <BackgroundCanvas />
      <Header
        currentSection={current}
        onNavigate={scrollTo}
        onServicesOpen={openServices}
        onContactOpen={openContact}
      />
      <ScrollIndicator />

      {servicesOpen && (
        <ServicesPage
          onClose={closeServices}
          onAudit={() => { closeServices(); setTimeout(() => openContact(), 50); }}
          onNavigate={(id) => { closeServices(); setTimeout(() => scrollTo(id), 50); }}
          onContactOpen={openContact}
        />
      )}

      {contactOpen && (
        <ContactPage
          onClose={closeContact}
          onServicesOpen={() => { closeContact(); setTimeout(() => openServices(), 50); }}
          onNavigate={(id) => { closeContact(); setTimeout(() => scrollTo(id), 50); }}
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
        <HomeSection id="home" onNavigate={scrollTo} onContactOpen={openContact} />
        <ProblemSection id="problem" />
        <SolutionSection id="solution" onNavigate={scrollTo} onServicesOpen={openServices} />
        <ImpactSection id="impact" onContactOpen={openContact} />
        <IndustriesSection id="industries" onContactOpen={openContact} />
        <ProcessSection id="process" onContactOpen={openContact} />
        <FAQSection id="faq" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
