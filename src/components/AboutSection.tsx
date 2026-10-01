import React from 'react';
import { ShieldAlert, Building2, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';
import { CollegeLogo } from './CollegeLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Dynamic Grid Background Accent & Radial Light Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Narrative Layout */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-500/15 border border-sky-400/30 text-xs font-bold text-sky-400 uppercase tracking-wider mb-4 font-mono-code shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            About The Symposium
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6 leading-tight">
            Where ideas become <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">impact.</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed text-center max-w-2xl">
            <p>
              <strong className="text-sky-300 font-extrabold">{SYMPOSIUM_INFO.name}</strong> is a premier national-level technical symposium organized by the <strong className="text-sky-400 font-extrabold uppercase">{SYMPOSIUM_INFO.department}</strong> at <strong className="text-white font-extrabold uppercase">{SYMPOSIUM_INFO.college}</strong>.
            </p>
            <p className="text-slate-300">
              Driven by the guiding ethos, <span className="italic text-sky-300 font-semibold">“{SYMPOSIUM_INFO.tagline}”</span>, this symposium serves as a national nexus where aspiring engineers, problem-solvers, and tech creators converge to push boundaries, exchange technical insights, and showcase innovation.
            </p>
          </div>
        </div>

        {/* Minimal Compact Cards: Host Info & Rule Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
          
          {/* Institution Address Info Card */}
          <div className="relative overflow-hidden rounded-2xl p-3.5 sm:p-4 bg-slate-900/80 border border-sky-500/25 hover:border-sky-400/50 shadow-md transition-all duration-300 flex items-center gap-3 text-left group backdrop-blur-md">
            <div className="p-1.5 rounded-xl bg-slate-800/90 border border-sky-500/30 group-hover:border-sky-400/50 transition-all shrink-0">
              <CollegeLogo size={36} alt="Mahendra Institute of Technology Emblem" />
            </div>

            <div className="min-w-0 flex-1 relative z-10">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-400/20 text-[9px] font-bold uppercase tracking-wider text-sky-400 font-mono-code mb-1">
                <Building2 className="w-2.5 h-2.5 text-sky-400" /> Host Campus
              </span>
              
              <h4 className="text-xs sm:text-sm font-bold text-white font-display leading-tight group-hover:text-sky-300 transition-colors">
                {SYMPOSIUM_INFO.college}
              </h4>
              
              <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-tight mt-1 flex items-start gap-1">
                <MapPin className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                <span>{SYMPOSIUM_INFO.address}</span>
              </p>
            </div>
          </div>

          {/* Team Requirement Rule Card */}
          <div className="relative overflow-hidden rounded-2xl p-3.5 sm:p-4 bg-slate-900/80 border border-amber-500/25 hover:border-amber-400/50 shadow-md transition-all duration-300 flex items-center gap-3 text-left group backdrop-blur-md">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 group-hover:border-amber-400/50 transition-all shrink-0">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
            </div>

            <div className="min-w-0 flex-1 relative z-10">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-400/20 text-[9px] font-bold uppercase tracking-wider text-amber-400 font-mono-code mb-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-400" /> Official Rule
              </span>

              <h4 className="text-xs sm:text-sm font-bold text-amber-300 font-display leading-tight">
                Participation Guidelines
              </h4>

              <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-tight mt-1 flex items-start gap-1">
                <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                <span>Maximum a student can participate in <strong className="text-amber-300 font-semibold underline decoration-amber-400/40 underline-offset-2">2 technical events</strong>.</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
