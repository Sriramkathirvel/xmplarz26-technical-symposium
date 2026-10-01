import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { SYMPOSIUM_INFO } from '../data/eventData';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("INITIALIZING EVENT EXPERIENCE...");

  const handleFinish = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 250);
  }, [onComplete]);

  // Main Loading & Progress Logic
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const startTime = Date.now();
    const duration = 1750;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(calculatedProgress);

      if (calculatedProgress < 25) {
        setStatusText("INITIALIZING EVENT EXPERIENCE...");
      } else if (calculatedProgress < 50) {
        setStatusText("LOADING SYMPOSIUM MODULES...");
      } else if (calculatedProgress < 75) {
        setStatusText("CALIBRATING INTERACTIVE STAGE...");
      } else if (calculatedProgress < 95) {
        setStatusText("ESTABLISHING SECURE PROTOCOLS...");
      } else {
        setStatusText("SYSTEM READY • WELCOME TO XMPLARZ’26");
      }

      if (calculatedProgress >= 100) {
        clearInterval(interval);
      }
    }, 20);

    const completeTimer = setTimeout(() => {
      handleFinish();
    }, 2100);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [onComplete, handleFinish]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#030614] text-white overflow-hidden select-none cursor-default p-4 sm:p-8 md:p-10 font-sans"
        >
          {/* Background Ambient Radial Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
            <div className="w-[320px] xs:w-[500px] sm:w-[750px] h-[320px] xs:h-[500px] sm:h-[750px] rounded-full bg-gradient-to-tr from-sky-600/10 via-indigo-600/10 to-purple-600/10 blur-[90px] sm:blur-[130px] opacity-70" />
          </div>

          {/* Bottom Ambient Curved Wave Glows */}
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-72 pointer-events-none overflow-hidden z-0 opacity-80">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="none">
              <defs>
                <linearGradient id="glowLeftWave" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="glowRightWave" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Left Electric Blue Curved Line */}
              <path
                d="M -100 240 C 200 240, 350 290, 720 295"
                stroke="url(#glowLeftWave)"
                strokeWidth="2.5"
                className="filter drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              />
              <path
                d="M -100 240 C 200 240, 350 290, 720 295 L 720 320 L -100 320 Z"
                fill="url(#glowLeftWave)"
                opacity="0.12"
              />
              {/* Right Indigo-Purple Curved Line */}
              <path
                d="M 1540 240 C 1240 240, 1090 290, 720 295"
                stroke="url(#glowRightWave)"
                strokeWidth="2.5"
                className="filter drop-shadow-[0_0_12px_rgba(129,140,248,0.8)]"
              />
              <path
                d="M 1540 240 C 1240 240, 1090 290, 720 295 L 720 320 L 1540 320 Z"
                fill="url(#glowRightWave)"
                opacity="0.12"
              />
            </svg>
            {/* Bottom Ground Ambient Reflection Line */}
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
          </div>

          {/* 1. TOP HEADER: Institutional Branding & Skip Intro Button */}
          <header className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <div className="p-1 rounded-full bg-slate-900/90 border border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.2)] shrink-0">
                <CollegeLogo size={28} className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.08em] sm:tracking-[0.14em] font-mono-code text-white uppercase leading-tight truncate">
                  {SYMPOSIUM_INFO.college}
                </span>
                <span className="text-[8px] sm:text-[10px] font-mono-code text-slate-400 tracking-[0.05em] sm:tracking-[0.1em] uppercase mt-0.5 truncate">
                  {SYMPOSIUM_INFO.department}
                </span>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              onClick={handleFinish}
              className="flex items-center gap-1.5 sm:gap-2 bg-[#0b1021]/90 hover:bg-slate-800/90 border border-slate-700/60 hover:border-sky-400/50 text-slate-300 hover:text-white px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono-code tracking-wider transition-all duration-200 cursor-pointer shadow-lg active:scale-95 group backdrop-blur-md shrink-0 touch-manipulation min-h-[36px]"
            >
              <span className="hidden sm:inline-block text-slate-400 text-[10px] font-sans font-medium">[ESC]</span>
              <span className="font-bold tracking-wider text-[10px] sm:text-[11px]">SKIP</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </header>

          {/* 2. CENTER HERO STAGE: Responsive Glowing Ring with Orbiting Particle + Brand Typography */}
          <main className="relative z-10 flex flex-col items-center justify-center text-center my-auto w-full py-2">
            
            {/* Responsive Orbital Ring Container */}
            <div className="relative flex items-center justify-center w-[82vw] h-[82vw] min-w-[270px] min-h-[270px] max-w-[460px] max-h-[460px] aspect-square">
              
              {/* Outer SVG Thin Ring */}
              <div className="absolute inset-0 rounded-full border border-sky-500/25 shadow-[0_0_40px_rgba(14,165,233,0.08)] pointer-events-none" />

              {/* Animated Orbiting Glowing Light Orb */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-[0_0_12px_#38BDF8,0_0_24px_#38BDF8]" />
              </motion.div>

              {/* Center Content Stack */}
              <div className="flex flex-col items-center justify-center px-2 sm:px-4 z-10 w-full">
                
                {/* Horizontal Accent Dash & Symposium Subtitle */}
                <div className="w-5 sm:w-6 h-[1.5px] bg-slate-600/80 mb-2 sm:mb-3 rounded-full" />

                <div className="text-[8px] xs:text-[9px] sm:text-xs font-mono-code font-medium text-slate-400 tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-1 sm:mb-2 text-center">
                  National Level Technical Symposium
                </div>

                {/* Brand Title: XMPLARZ'26 */}
                <h1 className="text-3xl xs:text-4xl sm:text-7xl md:text-8xl font-black font-tech tracking-tight flex items-center justify-center leading-none my-1 sm:my-2 select-none">
                  <span className="bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                    XMPLARZ
                  </span>
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                    ’26
                  </span>
                </h1>

                {/* Tagline: " THE POWER TO CHANGE THE WORLD. " */}
                <div className="font-mono-code text-[9px] xs:text-[11px] sm:text-sm tracking-[0.12em] sm:tracking-[0.25em] font-medium uppercase mt-1 sm:mt-2 mb-4 sm:mb-8 flex flex-wrap items-center justify-center gap-1 text-center px-2">
                  <span className="text-slate-400">“ THE POWER TO</span>
                  <span className="text-[#38BDF8] font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                    CHANGE THE WORLD. ”
                  </span>
                </div>

                {/* Progress Bar & Percentage Pill */}
                <div className="w-[85%] max-w-[200px] xs:max-w-[240px] sm:max-w-[320px] flex items-center gap-2 sm:gap-3">
                  <div className="flex-1 h-1.5 sm:h-2.5 bg-slate-950/90 border border-slate-700/60 rounded-full p-[2px] overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(99,102,241,0.6)] transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="font-mono-code text-[10px] sm:text-xs font-bold text-slate-300 min-w-[28px] sm:min-w-[32px] text-right">
                    {progress}%
                  </span>
                </div>

                {/* Dynamic Status Text */}
                <p className="text-[8px] xs:text-[9px] sm:text-[11px] font-mono-code text-slate-400 tracking-[0.1em] sm:tracking-[0.2em] uppercase mt-2 sm:mt-4 truncate max-w-[90%] text-center">
                  {statusText}
                </p>

              </div>
            </div>

          </main>

          {/* Footer Spacer for balance */}
          <footer className="relative z-10 w-full opacity-0 pointer-events-none h-2">
            <span className="text-[8px]">XMPLARZ’26</span>
          </footer>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
