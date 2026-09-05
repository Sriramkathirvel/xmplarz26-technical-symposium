/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { OpeningAnimation } from './components/OpeningAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { ImportantDates } from './components/ImportantDates';
import { RegistrationSection } from './components/RegistrationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [showOpeningAnimation, setShowOpeningAnimation] = useState<boolean>(() => {
    // Check if user has already seen opening animation in this session
    if (typeof window !== 'undefined') {
      try {
        const seen = sessionStorage.getItem('xmplarz26_intro_seen');
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        return !seen && !prefersReduced;
      } catch {
        return false;
      }
    }
    return false;
  });

  const handleAnimationComplete = () => {
    try {
      sessionStorage.setItem('xmplarz26_intro_seen', 'true');
    } catch {
      // ignore storage errors
    }
    setShowOpeningAnimation(false);
  };

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col selection:bg-[#168BFF]/20 selection:text-[#123B8F] relative overflow-x-hidden">
      {/* Short 2-3s Opening Animation (Plays once per session) */}
      {showOpeningAnimation && (
        <OpeningAnimation onComplete={handleAnimationComplete} />
      )}

      {/* Shared Page-Wide Ambient Glow Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
        {/* Ambient Glow 1: Top Page (Hero & About Section) */}
        <div 
          className="absolute top-[-2%] left-[-10%] w-[60vw] max-w-[750px] h-[700px] sm:h-[900px] rounded-full blur-[140px] animate-ambient-glow-slow"
          style={{
            background: 'radial-gradient(circle, rgba(22, 139, 255, 0.11) 0%, rgba(220, 203, 255, 0.06) 45%, transparent 70%)'
          }}
        />

        {/* Ambient Glow 2: Upper Middle (About to Events Transition) */}
        <div 
          className="absolute top-[18%] right-[-10%] w-[55vw] max-w-[700px] h-[650px] sm:h-[850px] rounded-full blur-[140px] animate-ambient-glow-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(108, 59, 255, 0.09) 0%, rgba(22, 139, 255, 0.05) 45%, transparent 70%)'
          }}
        />

        {/* Ambient Glow 3: Middle Page (Events & Key Deadlines) */}
        <div 
          className="absolute top-[38%] left-[-6%] w-[60vw] max-w-[750px] h-[700px] sm:h-[900px] rounded-full blur-[150px] animate-ambient-glow-slow"
          style={{
            background: 'radial-gradient(circle, rgba(245, 184, 46, 0.07) 0%, rgba(22, 139, 255, 0.04) 45%, transparent 70%)'
          }}
        />

        {/* Ambient Glow 4: Lower Middle (Registration Section) */}
        <div 
          className="absolute top-[58%] right-[-6%] w-[55vw] max-w-[700px] h-[650px] sm:h-[850px] rounded-full blur-[140px] animate-ambient-glow-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(22, 139, 255, 0.10) 0%, rgba(108, 59, 255, 0.06) 45%, transparent 70%)'
          }}
        />

        {/* Ambient Glow 5: Lower Page (Contact Section & Footer Transition) */}
        <div 
          className="absolute top-[78%] left-[-8%] w-[60vw] max-w-[750px] h-[700px] sm:h-[900px] rounded-full blur-[140px] animate-ambient-glow-slow"
          style={{
            background: 'radial-gradient(circle, rgba(108, 59, 255, 0.08) 0%, rgba(220, 203, 255, 0.05) 45%, transparent 70%)'
          }}
        />
      </div>

      {/* Main App Layout */}
      <Navbar onRegisterClick={scrollToRegister} />

      <main className="flex-grow relative z-10">
        <HeroSection
          onRegisterClick={scrollToRegister}
          onExploreClick={scrollToEvents}
        />
        <AboutSection />
        <EventsSection onRegisterClick={scrollToRegister} />
        <ImportantDates />
        <RegistrationSection />
        <ContactSection />
      </main>

      <Footer onRegisterClick={scrollToRegister} />
    </div>
  );
}
