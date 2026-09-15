import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, FastForward, Calendar, ShieldCheck } from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { CSECubeLogo } from './CSECubeLogo';
import { SYMPOSIUM_INFO } from '../data/eventData';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("INITIALIZING CORE SYSTEM...");

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
        setStatusText("INITIALIZING CORE SYSTEM...");
      } else if (calculatedProgress < 50) {
        setStatusText("LOADING SYMPOSIUM MODULES...");
      } else if (calculatedProgress < 75) {
        setStatusText("CALIBRATING EVENT PLATFORMS...");
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

  const characters = [
    { char: 'X', isGold: false, delay: 0.15 },
    { char: 'M', isGold: false, delay: 0.22 },
    { char: 'P', isGold: false, delay: 0.29 },
    { char: 'L', isGold: false, delay: 0.36 },
    { char: 'A', isGold: false, delay: 0.43 },
    { char: 'R', isGold: false, delay: 0.50 },
    { char: 'Z', isGold: false, delay: 0.57 },
    { char: '’', isGold: true,  delay: 0.65 },
    { char: '2', isGold: true,  delay: 0.73 },
    { char: '6', isGold: true,  delay: 0.81 },
  ];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#040714] text-white overflow-hidden select-none cursor-default py-8 px-4"
        >
          {/* Ambient Cyber Grid */}
          <div className="absolute inset-0 pointer-events-none bg-cyber-grid opacity-30 z-0" />

          {/* LAYER WAVER DESIGN: Top Fluid Animated SVG Wave Layers */}
          <div className="absolute inset-x-0 top-0 h-44 sm:h-64 pointer-events-none overflow-hidden z-0 opacity-40">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="topWaveBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#123B8F" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#168BFF" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="topWaveIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6C3BFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#DCCBFF" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="topWaveGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5B82E" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F5B82E" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Wave 1 - Electric Blue */}
              <path
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                fill="url(#topWaveBlue)"
                className="animate-wave-flow-1"
              />
              {/* Wave 2 - Indigo */}
              <path
                d="M0,64L60,85.3C120,107,240,149,360,149.3C480,149,600,107,720,101.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                fill="url(#topWaveIndigo)"
                className="animate-wave-flow-2 opacity-70"
              />
              {/* Wave 3 - Gold Crest */}
              <path
                d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                fill="url(#topWaveGold)"
                className="animate-wave-flow-3 opacity-60"
              />
            </svg>
          </div>

          {/* LAYER WAVER DESIGN: Bottom Fluid Animated SVG Wave Layers */}
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-64 pointer-events-none overflow-hidden z-0 opacity-40">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="bottomWaveBlue" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#168BFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#123B8F" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="bottomWaveIndigo" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6C3BFF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#080E24" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="bottomWaveGold" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F5B82E" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#F5B82E" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Bottom Wave 1 - Indigo */}
              <path
                d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,176C960,160,1056,160,1152,181.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill="url(#bottomWaveIndigo)"
                className="animate-wave-flow-1"
              />
              {/* Bottom Wave 2 - Electric Blue */}
              <path
                d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,218.7C840,235,960,245,1080,224C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                fill="url(#bottomWaveBlue)"
                className="animate-wave-flow-2 opacity-80"
              />
              {/* Bottom Wave 3 - Gold Crest */}
              <path
                d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,160C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                fill="url(#bottomWaveGold)"
                className="animate-wave-flow-3 opacity-60"
              />
            </svg>
          </div>

          {/* Glowing Radial Color Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-0"
          >
            <div 
              className="absolute top-1/4 -left-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[140px] opacity-60"
              style={{
                background: 'radial-gradient(circle, rgba(22, 139, 255, 0.28) 0%, rgba(18, 59, 143, 0.15) 50%, transparent 70%)'
              }}
            />
            <div 
              className="absolute bottom-1/4 -right-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[140px] opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(108, 59, 255, 0.25) 0%, rgba(22, 139, 255, 0.12) 50%, transparent 70%)'
              }}
            />
            <div 
              className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[120px] opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(245, 184, 46, 0.2) 0%, transparent 70%)'
              }}
            />
          </motion.div>

          {/* Animated Orbital Cyber Rings Background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-20">
            <div className="w-[480px] h-[480px] sm:w-[700px] sm:h-[700px] border border-[#168BFF]/30 rounded-full animate-spin-slow border-dashed" />
            <div className="absolute w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] border border-[#6C3BFF]/40 rounded-full animate-spin-reverse-slow" />
            <div className="absolute w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] border border-[#F5B82E]/30 rounded-full border-dotted animate-spin-slow" />
          </div>

          {/* 1. TOP BAR: Institutional Branding & Skip Intro Button */}
          <header className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2.5 sm:gap-3.5 bg-slate-900/60 backdrop-blur-md border border-[#168BFF]/25 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[0_4px_20px_rgba(4,7,20,0.6)]"
            >
              <CollegeLogo size={28} className="w-6 h-6 sm:w-7 sm:h-7" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider font-space text-white/90 uppercase leading-none">
                  {SYMPOSIUM_INFO.college}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono-code text-[#168BFF] tracking-wide mt-0.5">
                  {SYMPOSIUM_INFO.department}
                </span>
              </div>
              <div className="hidden sm:block pl-1 border-l border-white/10">
                <CSECubeLogo size={24} className="w-5 h-5 text-[#168BFF]" />
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={handleFinish}
              className="flex items-center gap-1.5 sm:gap-2 bg-white/5 hover:bg-[#168BFF]/20 border border-white/15 hover:border-[#168BFF]/50 text-white/80 hover:text-white px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono-code tracking-wider transition-all duration-200 cursor-pointer shadow-lg active:scale-95 group"
            >
              <span className="hidden sm:inline text-white/50 text-[10px] font-sans">[ESC]</span>
              <span>SKIP</span>
              <FastForward className="w-3.5 h-3.5 text-[#168BFF] group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </header>

          {/* 2. CENTER CONTENT: Brand Title & Animated Headline */}
          <main className="relative z-10 flex flex-col items-center text-center my-auto px-4 max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-[#168BFF]/10 border border-[#168BFF]/30 text-[#168BFF] text-[10px] sm:text-xs font-mono-code font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#F5B82E] animate-pulse" />
              <span>National Level Technical Symposium</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-ping" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.9, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -inset-8 bg-gradient-to-r from-[#168BFF]/30 via-[#6C3BFF]/25 to-[#F5B82E]/30 rounded-[40px] blur-3xl pointer-events-none z-0"
            />

            <h1 className="relative z-10 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-tech tracking-tight flex items-center justify-center leading-none my-1 select-none">
              {characters.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.28,
                    delay: item.delay,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`inline-block transition-all ${
                    item.isGold
                      ? 'bg-gradient-to-b from-[#FFF2B2] via-[#F5B82E] to-[#D9900B] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,184,46,0.65)] glow-gold-neon'
                      : 'bg-gradient-to-b from-[#FFFFFF] via-[#85C2FF] to-[#168BFF] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(22,139,255,0.65)] glow-blue-neon'
                  }`}
                >
                  {item.char}
                </motion.span>
              ))}

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.9 }}
                className="inline-block w-1.5 sm:w-2 h-10 sm:h-20 bg-[#168BFF] rounded-full ml-1 sm:ml-2 shadow-[0_0_18px_#168BFF]"
              />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-space text-slate-300"
            >
              <div className="flex items-center gap-1.5 text-[#F5B82E] font-semibold bg-[#F5B82E]/10 border border-[#F5B82E]/30 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span>{SYMPOSIUM_INFO.eventDate}</span>
              </div>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="italic font-medium text-slate-300">"{SYMPOSIUM_INFO.tagline}"</span>
            </motion.div>
          </main>

          {/* 3. BOTTOM SECTION: Dynamic Progress Bar & Status Ticker */}
          <footer className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center gap-3">
            <div className="w-full flex items-center justify-between text-xs font-mono-code text-slate-400 px-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#168BFF] animate-pulse" />
                <span className="text-white/90 font-medium truncate max-w-[250px] sm:max-w-none">
                  {statusText}
                </span>
              </div>
              <span className="font-bold text-[#168BFF] text-sm tracking-wider font-tech">
                {String(progress).padStart(3, '0')}%
              </span>
            </div>

            <div className="w-full h-2.5 sm:h-3 bg-slate-950/80 border border-[#168BFF]/30 rounded-full p-0.5 overflow-hidden shadow-[0_0_20px_rgba(22,139,255,0.25)] relative">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#168BFF] via-[#6C3BFF] to-[#F5B82E] relative transition-all duration-75"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute top-0 right-0 bottom-0 w-3 bg-white rounded-full blur-[2px] opacity-90 shadow-[0_0_10px_#FFFFFF]" />
              </motion.div>
            </div>

            <p className="text-[10px] text-slate-500 font-mono-code tracking-widest uppercase mt-1">
              Department of CSE • Mahendra Institute of Technology
            </p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
