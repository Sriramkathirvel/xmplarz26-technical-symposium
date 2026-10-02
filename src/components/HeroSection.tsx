import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Calendar, Sparkles, MapPin, Tag } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';

interface HeroSectionProps {
  onRegisterClick?: () => void;
  onExploreClick?: () => void;
}

const blueLetters = Array.from("XMPLARZ");
const goldLetters = Array.from("’26");

const letterVariants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
    scale: 0.92,
    filter: 'blur(3px) drop-shadow(0 0 10px rgba(22, 139, 255, 0.8))',
  },
  visible: (i: number) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    scale: 1,
    filter: 'blur(0px) drop-shadow(0 2px 6px rgba(18, 59, 143, 0.12))',
    transition: {
      duration: 0.35,
      delay: 0.12 + i * 0.09,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const goldLetterVariants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
    scale: 0.92,
    filter: 'blur(3px) drop-shadow(0 0 10px rgba(245, 184, 46, 0.8))',
  },
  visible: (i: number) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    scale: 1,
    filter: 'blur(0px) drop-shadow(0 2px 6px rgba(245, 184, 46, 0.2))',
    transition: {
      duration: 0.35,
      delay: 0.12 + (blueLetters.length + i) * 0.09,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
  onExploreClick
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[78vh] lg:min-h-[85vh] flex flex-col justify-between pt-28 xs:pt-32 sm:pt-36 lg:pt-40 pb-6 sm:pb-8 overflow-hidden bg-transparent border-b border-[#E8EEF8]"
    >
      {/* Background Subtle Dot Matrix */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-tech-dots" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full my-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* EDITORIAL COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center w-full"
          >
            {/* National Level Tag */}
            <div className="mb-4 max-w-full px-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 bg-sky-500/10 border border-sky-400/30 rounded-full text-[9px] xs:text-[10px] sm:text-[11px] font-mono-code font-extrabold text-sky-400 uppercase tracking-[0.08em] xs:tracking-[0.14em] sm:tracking-[0.18em] shadow-[0_0_12px_rgba(56,189,248,0.15)] whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-sky-400 animate-pulse shrink-0" />
                <span>National Level Technical Symposium</span>
              </span>
            </div>

            {/* Main Headline with Clean Glow & Interactive Hover */}
            <div className="relative group hero-title-container mb-3 sm:mb-4 inline-block cursor-default select-none w-full">
              {/* Soft Ambient Backlight Glow Aura on Hover */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              
              <h1 className="relative z-10 text-[48px] xs:text-[60px] sm:text-7xl lg:text-8xl xl:text-[96px] font-black leading-[0.88] sm:leading-[0.9] tracking-tighter font-display transition-transform duration-300 group-hover:scale-[1.01] flex items-center justify-center flex-wrap sm:flex-nowrap">
                <span className="flex items-center">
                  {blueLetters.map((char, i) => (
                    <motion.span
                      key={`blue-${i}`}
                      custom={i}
                      initial={shouldReduceMotion ? 'visible' : 'hidden'}
                      animate="visible"
                      variants={letterVariants}
                      className="hero-title-glow inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="flex items-center ml-0.5 sm:ml-1">
                  {goldLetters.map((char, i) => (
                    <motion.span
                      key={`gold-${i}`}
                      custom={i}
                      initial={shouldReduceMotion ? 'visible' : 'hidden'}
                      animate="visible"
                      variants={goldLetterVariants}
                      className="hero-gold-glow inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-base xs:text-lg sm:text-2xl font-light text-[#64748B] leading-relaxed mb-4">
              “The power to <span className="text-gradient-brand-handwriting text-xl xs:text-2xl sm:text-3xl">change the world.”</span>
            </p>

            {/* Event Key Metrics - Floating Cyber Capsule Dock (Mobile Enhanced & Desktop Preserved) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="w-full max-w-xs xs:max-w-sm sm:max-w-3xl mx-auto my-5 sm:my-7"
            >
              <div className="relative p-2 xs:p-2.5 sm:p-3 rounded-2xl sm:rounded-full bg-[#0B0F19]/90 border border-[#168BFF]/30 backdrop-blur-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.8),0_0_25px_rgba(22,139,255,0.18)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                  
                  {/* Item 1: Event Date */}
                  <div className="flex-1 px-3.5 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-[#168BFF]/10 transition-all duration-200 flex items-center justify-start sm:justify-start gap-3 group cursor-default">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#168BFF]/15 border border-[#168BFF]/35 text-[#38BDF8] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#168BFF]/25 transition-all shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                      <Calendar className="w-4 h-4 text-[#38BDF8]" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono-code leading-none mb-0.5 sm:mb-1 truncate">
                        Event Date
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-black text-[#38BDF8] font-display leading-tight group-hover:text-blue-200 transition-colors truncate">
                        {SYMPOSIUM_INFO.eventDate}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Divider 1 (Mobile view) */}
                  <div className="h-px w-[92%] mx-auto bg-gradient-to-r from-transparent via-[#168BFF]/25 to-transparent sm:hidden" />

                  {/* Vertical Divider 1 (Desktop view) */}
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#168BFF]/35 to-transparent hidden sm:block shrink-0" />

                  {/* Item 2: Registration Fee */}
                  <div className="flex-1 px-3.5 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-[#168BFF]/10 transition-all duration-200 flex items-center justify-start sm:justify-start gap-3 group cursor-default">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#168BFF]/15 border border-[#168BFF]/35 text-[#38BDF8] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#168BFF]/25 transition-all shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                      <Tag className="w-4 h-4 text-[#38BDF8]" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono-code leading-none mb-0.5 sm:mb-1 truncate">
                        Reg Fee
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-black text-[#38BDF8] font-display leading-tight group-hover:text-blue-200 transition-colors truncate">
                        ₹250 <span className="text-[10px] sm:text-xs font-semibold text-slate-400">/ Head</span>
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Divider 2 (Mobile view) */}
                  <div className="h-px w-[92%] mx-auto bg-gradient-to-r from-transparent via-[#168BFF]/25 to-transparent sm:hidden" />

                  {/* Vertical Divider 2 (Desktop view) */}
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#168BFF]/35 to-transparent hidden sm:block shrink-0" />

                  {/* Item 3: Venue */}
                  <div className="flex-1 px-3.5 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-[#168BFF]/10 transition-all duration-200 flex items-center justify-start sm:justify-start gap-3 group cursor-default">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#168BFF]/15 border border-[#168BFF]/35 text-[#38BDF8] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#168BFF]/25 transition-all shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                      <MapPin className="w-4 h-4 text-[#38BDF8]" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono-code leading-none mb-0.5 sm:mb-1 truncate">
                        Venue
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-black text-[#38BDF8] font-display leading-tight group-hover:text-blue-200 transition-colors truncate">
                        MIT Campus
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA: Secure Spot Now */}
              <a
                href="#register"
                id="hero-btn-register"
                onClick={(e) => {
                  if (onRegisterClick) {
                    e.preventDefault();
                    onRegisterClick();
                  }
                }}
                className="relative group px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#6366F1] text-white text-sm sm:text-base font-black tracking-wide shadow-[0_10px_32px_-6px_rgba(14,165,233,0.55),0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_40px_-6px_rgba(14,165,233,0.75),0_0_30px_rgba(99,102,241,0.55)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border-0 overflow-hidden cursor-pointer w-full sm:w-auto"
              >
                {/* Shimmer sweep line */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                <span className="relative z-10">Secure Spot Now</span>
                <div
                  className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shrink-0 shadow-md"
                  style={{ backgroundColor: '#F5B82E' }}
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#030712]" />
                </div>
              </a>

              {/* Secondary CTA: Explore Events Guide */}
              <a
                href="#events"
                id="hero-btn-explore"
                onClick={(e) => {
                  if (onExploreClick) {
                    e.preventDefault();
                    onExploreClick();
                  }
                }}
                className="relative group px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl text-sky-300 hover:text-white text-sm sm:text-base font-extrabold tracking-wide border-2 border-sky-400/40 hover:border-sky-400 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_30px_-4px_rgba(56,189,248,0.4)] hover:bg-slate-800/90 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-sky-400 group-hover:text-amber-300 group-hover:rotate-12 transition-all duration-300" />
                <span>Explore Events Guide</span>
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-400 mt-10 sm:mt-14 md:mt-16 font-mono-code flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] shrink-0" />
              <span>Department of Computer Science & Engineering • MIT Mallasamudram</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Indicator: Scroll to explore */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-6 sm:pt-8 pb-3 text-slate-400">
        <a
          href="#about"
          className="group inline-flex flex-col items-center gap-1.5 text-xs font-medium hover:text-sky-300 transition-colors"
        >
          <span className="tracking-wide text-[11px] uppercase tracking-wider font-mono-code text-slate-400 group-hover:text-sky-300 transition-colors">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#38BDF8]" />
        </a>
      </div>
    </section>
  );
};
