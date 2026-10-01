import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, UserCheck, Building2 } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/eventData';

interface WorkshopCardProps {
  onRegisterClick?: (eventName?: string) => void;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({ onRegisterClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.005 }}
      onMouseMove={handleMouseMove}
      className="group relative my-8 sm:my-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#0D1424] border border-[#E8EEF8] dark:border-slate-800/80 hover:border-transparent transition-all duration-500 shadow-xl hover:shadow-[0_16px_40px_-8px_rgba(22,139,255,0.25),0_0_25px_0_rgba(108,59,255,0.15)] dark:hover:shadow-[0_16px_40px_-8px_rgba(59,130,246,0.35),0_0_25px_0_rgba(139,92,246,0.25)] overflow-hidden text-left"
    >
      {/* Subtle Inner Surface Spot Glow on Hover */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.09) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 75%)'
        }}
      />

      {/* Thin Animated Glowing Light Trail Overlay (60fps SVG Path tracing around perimeter) */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="w-full h-full text-transparent">
          <defs>
            <linearGradient id="workshop-trail-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#E0F2FE" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
            <filter id="workshop-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="24"
            ry="24"
            fill="none"
            stroke="url(#workshop-trail-grad)"
            strokeWidth="2"
            filter="url(#workshop-glow)"
            className="path-light-streak"
            pathLength="100"
          />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Workshop Details & Title */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#EFF6FF] to-[#F4F8FF] dark:from-slate-800 dark:to-slate-800/80 border border-[#168BFF]/30 dark:border-blue-500/40 text-xs font-black text-[#123B8F] dark:text-[#38BDF8] uppercase tracking-wider font-mono-code shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B82E] animate-pulse" />
            <span>{WORKSHOP_INFO.badge}</span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#111827] dark:text-white font-display leading-tight tracking-tight mb-2">
              {WORKSHOP_INFO.title}
            </h3>
            <p className="text-base sm:text-lg font-extrabold text-[#123B8F] dark:text-[#60A5FA] font-display">
              {WORKSHOP_INFO.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
            {WORKSHOP_INFO.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {WORKSHOP_INFO.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#F4F8FF] dark:bg-slate-800/90 border border-[#E8EEF8] dark:border-slate-700 text-[11px] font-bold text-[#123B8F] dark:text-sky-300 font-mono-code">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Speakers Cards & Action */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] dark:text-slate-400 font-mono-code flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#168BFF]" />
            <span>Industry Resource Persons</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WORKSHOP_INFO.speakers.map((speaker) => (
              <div 
                key={speaker.name}
                className="p-4 rounded-2xl bg-[#F4F8FF]/80 dark:bg-slate-800/80 border border-[#E8EEF8] dark:border-slate-700/80 flex items-center gap-4 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group/speaker shadow-2xs"
              >
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#168BFF]/40 dark:border-blue-400/50 shadow-md group-hover/speaker:scale-105 transition-transform duration-300">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#168BFF] text-white flex items-center justify-center text-[10px] shadow-xs">
                    <UserCheck className="w-3 h-3" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base font-black text-[#111827] dark:text-white group-hover/speaker:text-[#123B8F] dark:group-hover/speaker:text-[#60A5FA] transition-colors leading-tight">
                    {speaker.name}
                  </h4>
                  <p className="text-xs font-bold text-[#123B8F] dark:text-sky-300 mt-0.5 leading-snug">
                    {speaker.role}
                  </p>
                  <p className="text-[11px] font-semibold text-[#64748B] dark:text-slate-400 mt-1 flex items-center gap-1 leading-none">
                    <Building2 className="w-3.5 h-3.5 shrink-0 text-[#168BFF]" />
                    <span>{speaker.company}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={() => {
              if (onRegisterClick) {
                onRegisterClick("Workshop: " + WORKSHOP_INFO.title);
              } else {
                const reg = document.getElementById('register');
                if (reg) reg.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full py-3.5 px-5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#123B8F] dark:from-blue-600 dark:via-indigo-600 dark:to-blue-600 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 border border-blue-400/20 cursor-pointer"
          >
            <span>Register for Workshop</span>
            <div className="w-4.5 h-4.5 rounded-full bg-[#F5B82E] text-[#123B8F] flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>
    </motion.div>
  );
};
