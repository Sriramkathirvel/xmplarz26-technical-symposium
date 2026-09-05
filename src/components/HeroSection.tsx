import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT EDITORIAL COLUMN (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* National Level Tag */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1.5 sm:py-1 bg-[#F4F8FF] border border-[#168BFF]/20 rounded-lg text-[10px] sm:text-[11px] font-extrabold text-[#168BFF] uppercase tracking-[0.18em]">
                National Level Technical Symposium
              </span>
            </div>

            {/* Main Headline with Clean Glow & Interactive Hover */}
            <div className="relative group hero-title-container mb-3 sm:mb-4 inline-block cursor-default select-none w-full">
              {/* Soft Ambient Backlight Glow Aura on Hover */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              
              <h1 className="relative z-10 text-[48px] xs:text-[60px] sm:text-7xl lg:text-8xl xl:text-[96px] font-black leading-[0.88] sm:leading-[0.9] tracking-tighter font-display transition-transform duration-300 group-hover:scale-[1.01] flex items-center flex-wrap sm:flex-nowrap">
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

            {/* Event Key Metrics Row - Mobile Enhanced Grid */}
            <div className="w-full grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-8 mt-2 sm:mt-4 py-2 sm:py-6 sm:border-y sm:border-[#E8EEF8]">
              <div className="p-3 sm:p-0 rounded-xl bg-white border border-[#E8EEF8] sm:bg-transparent sm:border-none shadow-2xs sm:shadow-none">
                <p className="text-[9px] xs:text-[10px] text-[#64748B] uppercase font-extrabold tracking-widest mb-0.5 sm:mb-1 font-mono-code">
                  Event Date
                </p>
                <p className="text-xs xs:text-sm sm:text-lg font-extrabold text-[#123B8F]">
                  30th SEP 2026
                </p>
              </div>

              <div className="w-px h-10 bg-[#E8EEF8] hidden sm:block" />

              <div className="p-3 sm:p-0 rounded-xl bg-white border border-[#E8EEF8] sm:bg-transparent sm:border-none shadow-2xs sm:shadow-none">
                <p className="text-[9px] xs:text-[10px] text-[#64748B] uppercase font-extrabold tracking-widest mb-0.5 sm:mb-1 font-mono-code">
                  Registration Fee
                </p>
                <p className="text-xs xs:text-sm sm:text-lg font-extrabold text-[#123B8F]">
                  ₹250 / Head
                </p>
              </div>

              <div className="w-px h-10 bg-[#E8EEF8] hidden sm:block" />

              <div className="p-3 sm:p-0 rounded-xl bg-white border border-[#E8EEF8] sm:bg-transparent sm:border-none shadow-2xs sm:shadow-none">
                <p className="text-[9px] xs:text-[10px] text-[#64748B] uppercase font-extrabold tracking-widest mb-0.5 sm:mb-1 font-mono-code">
                  Venue
                </p>
                <p className="text-xs xs:text-sm sm:text-lg font-extrabold text-[#123B8F] underline decoration-[#F5B82E] decoration-2">
                  MIT Campus
                </p>
              </div>

              <div className="w-px h-10 bg-[#E8EEF8] hidden md:block" />

              <div className="p-3 sm:p-0 rounded-xl bg-white border border-[#E8EEF8] sm:bg-transparent sm:border-none shadow-2xs sm:shadow-none">
                <p className="text-[9px] xs:text-[10px] text-[#64748B] uppercase font-extrabold tracking-widest mb-0.5 sm:mb-1 font-mono-code">
                  Participation
                </p>
                <p className="text-xs xs:text-sm sm:text-lg font-extrabold text-[#123B8F]">
                  All Events
                </p>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#register"
                id="hero-btn-register"
                onClick={(e) => {
                  if (onRegisterClick) {
                    e.preventDefault();
                    onRegisterClick();
                  }
                }}
                className="btn-primary-gradient text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-extrabold flex items-center justify-center gap-3 group shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-blue-400/20 w-full sm:w-auto"
              >
                <span>Secure Spot Now</span>
                <div className="w-6 h-6 rounded-full bg-[#F5B82E] text-[#123B8F] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-2xs shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>

              <a
                href="#events"
                id="hero-btn-explore"
                onClick={(e) => {
                  if (onExploreClick) {
                    e.preventDefault();
                    onExploreClick();
                  }
                }}
                className="btn-outline-tech px-6 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-extrabold transition-all shadow-2xs hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Explore Events Guide</span>
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-[#64748B] mt-5 font-mono-code flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] shrink-0" />
              <span>Department of Computer Science & Engineering • MIT Mallasamudram</span>
            </p>
          </motion.div>

          {/* RIGHT TECHNICAL PANEL: CRITICAL MILESTONES & CSE EMBLEM (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="w-full bg-[#F4F8FF] flex flex-col p-6 sm:p-8 rounded-2xl border border-[#E8EEF8] relative overflow-hidden shadow-xs card-hover-modern">
              
              {/* Corner Decorative Dot Cluster */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-25">
                <div className="flex flex-col gap-1 items-end">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-[#123B8F] rounded-full" />
                    <div className="w-1 h-1 bg-[#123B8F] rounded-full" />
                    <div className="w-1 h-1 bg-[#123B8F] rounded-full" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-[#123B8F] rounded-full" />
                    <div className="w-1 h-1 bg-[#123B8F] rounded-full" />
                    <div className="w-1 h-1 bg-[#123B8F] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Panel Heading */}
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#123B8F] mb-6 flex items-center gap-2 font-mono-code">
                <div className="w-2 h-2 bg-[#F5B82E] rounded-full" />
                Critical Milestones
              </h3>

              {/* Milestones Stepper */}
              <div className="space-y-6 relative">
                {/* Vertical Stepper Line */}
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-[#123B8F]/10" />

                {/* Milestone 1: SEP 20 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0.5 w-5 h-5 rounded-full bg-white border-4 border-[#168BFF]" />
                  <p className="text-[11px] font-bold text-[#168BFF] mb-0.5 font-mono-code">
                    SEP 20, 2026
                  </p>
                  <h4 className="font-bold text-[#123B8F] text-sm font-display">
                    Submissions Start
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    IEEE Format Research Papers & Project Abstracts
                  </p>
                </div>

                {/* Milestone 2: SEP 26 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0.5 w-5 h-5 rounded-full bg-white border-4 border-[#6C3BFF]" />
                  <p className="text-[11px] font-bold text-[#6C3BFF] mb-0.5 font-mono-code">
                    SEP 26, 2026
                  </p>
                  <h4 className="font-bold text-[#123B8F] text-sm font-display">
                    Final Entry Deadline
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Last date for team registration & paper uploads
                  </p>
                </div>

                {/* Milestone 3: SEP 30 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0.5 w-5 h-5 rounded-full bg-[#F5B82E] border-4 border-white shadow-md" />
                  <p className="text-[11px] font-bold text-[#F5B82E] mb-0.5 font-mono-code">
                    SEP 30, 2026
                  </p>
                  <h4 className="font-bold text-[#123B8F] text-sm font-display">
                    Grand Opening & Events
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Symposium commences at 08:30 AM on MIT Campus
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Indicator: Scroll to explore */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-2 pb-2 text-[#64748B]">
        <a
          href="#about"
          className="group inline-flex flex-col items-center gap-1 text-xs font-medium hover:text-[#123B8F] transition-colors"
        >
          <span className="tracking-wide text-[11px] uppercase tracking-wider font-mono-code">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#168BFF]" />
        </a>
      </div>
    </section>
  );
};
