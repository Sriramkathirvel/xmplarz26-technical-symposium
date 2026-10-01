import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Award, CheckCircle2, AlertTriangle } from 'lucide-react';
import { IMPORTANT_DATES, SYMPOSIUM_INFO } from '../data/eventData';

export const ImportantDates: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="dates" className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-b border-[#E8EEF8] dark:border-slate-800/80">
      {/* Dynamic Grid Background Accent & Radial Light Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F8FF] border border-[#E8EEF8] text-[11px] font-semibold text-[#123B8F] uppercase tracking-wider mb-4 font-mono-code">
            Key Deadlines & Schedule
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-display mb-3">
            Mark your <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">calendar.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B]">
            Ensure all team papers, projects, and Google Form entries are submitted ahead of the deadlines.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Single Horizontal Row) */}
        <div className="hidden md:block relative my-12">
          {/* Connecting Track Line */}
          <div className="absolute top-[38px] left-28 right-28 h-0.5 bg-gradient-to-r from-[#168BFF]/30 via-[#6C3BFF]/30 to-[#F5B82E]/50 z-0" />
          
          <div className={`grid grid-cols-1 ${IMPORTANT_DATES.length === 2 ? 'md:grid-cols-2 max-w-3xl' : 'md:grid-cols-3 max-w-6xl'} gap-6 lg:gap-10 mx-auto relative z-10`}>
            {IMPORTANT_DATES.map((item, index) => {
              const isEventDay = item.isMainEvent;
              return (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  onMouseMove={handleMouseMove}
                  className={`group relative flex flex-col items-center text-center p-7 rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
                    isEventDay
                      ? 'bg-white dark:bg-[#0D1424] border-2 border-[#F5B82E]/70 dark:border-amber-500/60 hover:border-transparent dark:hover:border-transparent shadow-md shadow-amber-500/10 hover:shadow-[0_12px_35px_-6px_rgba(245,184,46,0.35),0_0_20px_0_rgba(245,184,46,0.2)]'
                      : 'bg-white dark:bg-[#0D1424] border border-[#E8EEF8] dark:border-slate-800/80 hover:border-transparent dark:hover:border-transparent shadow-xs hover:shadow-[0_12px_30px_-6px_rgba(22,139,255,0.22),0_0_20px_0_rgba(108,59,255,0.12)] dark:hover:shadow-[0_12px_30px_-6px_rgba(59,130,246,0.35),0_0_20px_0_rgba(139,92,246,0.25)]'
                  }`}
                >
                  {/* Subtle Inner Surface Spot Glow on Hover */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                    style={{
                      background: isEventDay
                        ? 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 184, 46, 0.12) 0%, rgba(251, 191, 36, 0.05) 45%, transparent 75%)'
                        : 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.09) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 75%)'
                    }}
                  />

                  {/* Thin Animated Glowing Light Trail Overlay (60fps SVG Path tracing around perimeter) */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-full h-full text-transparent">
                      <defs>
                        <linearGradient id={`date-trail-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          {isEventDay ? (
                            <>
                              <stop offset="0%" stopColor="#F5B82E" stopOpacity="1" />
                              <stop offset="45%" stopColor="#FBBF24" stopOpacity="0.85" />
                              <stop offset="85%" stopColor="#FEF08A" stopOpacity="0.95" />
                              <stop offset="100%" stopColor="#F5B82E" stopOpacity="0.2" />
                            </>
                          ) : (
                            <>
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                              <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.85" />
                              <stop offset="85%" stopColor="#E0F2FE" stopOpacity="0.95" />
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                            </>
                          )}
                        </linearGradient>
                        <filter id={`date-glow-${index}`} x="-30%" y="-30%" width="160%" height="160%">
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
                        rx="16"
                        ry="16"
                        fill="none"
                        stroke={`url(#date-trail-grad-${index})`}
                        strokeWidth="2"
                        filter={`url(#date-glow-${index})`}
                        className="path-light-streak"
                        pathLength="100"
                      />
                    </svg>
                  </div>

                  {/* Top Node Indicator matching Professional Polish Design */}
                  <div className="mb-5 flex items-center justify-center relative z-10">
                    {isEventDay ? (
                      <div className="w-8 h-8 rounded-full bg-[#F5B82E] border-4 border-white dark:border-slate-800 shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    ) : index === 0 ? (
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-[#168BFF] shadow-xs flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#168BFF]" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-[#6C3BFF] shadow-xs flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#6C3BFF]" />
                      </div>
                    )}
                  </div>

                  {/* Date Badge */}
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-mono-code font-bold mb-3 tracking-wider relative z-10 ${
                      isEventDay
                        ? 'bg-[#F5B82E]/15 text-[#B45309] dark:text-amber-300 border border-[#F5B82E]/40'
                        : 'bg-[#F4F8FF] dark:bg-slate-800/80 text-[#123B8F] dark:text-sky-300 border border-[#E8EEF8] dark:border-slate-700/80'
                    }`}
                  >
                    {item.date}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold font-display mb-1.5 relative z-10 ${
                    isEventDay
                      ? 'text-[#B45309] dark:text-amber-400'
                      : 'text-[#123B8F] dark:text-white'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed max-w-xs relative z-10">
                    {item.description}
                  </p>

                  {/* Event Day Extra Badge */}
                  {isEventDay && (
                    <div className="mt-4 pt-3 border-t border-[#F5B82E]/30 w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#B45309] dark:text-amber-300 uppercase tracking-wider font-mono-code relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5B82E]" />
                      <span>Grand Symposium Day</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE TIMELINE (Vertical) */}
        <div className="md:hidden relative pl-8 border-l-2 border-[#123B8F]/10 space-y-8 my-6 ml-4">
          {IMPORTANT_DATES.map((item, index) => {
            const isEventDay = item.isMainEvent;
            return (
              <div key={item.date} className="relative group">
                {/* Node on Vertical Track matching Professional Polish */}
                <div className="absolute -left-[45px] top-2 z-10">
                  {isEventDay ? (
                    <div className="w-6 h-6 rounded-full bg-[#F5B82E] border-4 border-white dark:border-slate-800 shadow-md flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  ) : index === 0 ? (
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 border-[#168BFF] shadow-xs flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 border-[#6C3BFF] shadow-xs flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C3BFF]" />
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  onMouseMove={handleMouseMove}
                  className={`relative p-5 rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isEventDay
                      ? 'bg-white dark:bg-[#0D1424] border-2 border-[#F5B82E] shadow-sm hover:shadow-[0_12px_35px_-6px_rgba(245,184,46,0.35)]'
                      : 'bg-white dark:bg-[#0D1424] border-[#E8EEF8] dark:border-slate-800/80 shadow-2xs hover:shadow-[0_12px_30px_-6px_rgba(22,139,255,0.22)]'
                  }`}
                >
                  {/* Inner Surface Spot Glow */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                    style={{
                      background: isEventDay
                        ? 'radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 184, 46, 0.12) 0%, transparent 75%)'
                        : 'radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.09) 0%, transparent 75%)'
                    }}
                  />

                  {/* Thin Animated Glowing Light Trail Overlay */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-full h-full text-transparent">
                      <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="16"
                        ry="16"
                        fill="none"
                        stroke={`url(#date-trail-grad-${index})`}
                        strokeWidth="2"
                        filter={`url(#date-glow-${index})`}
                        className="path-light-streak"
                        pathLength="100"
                      />
                    </svg>
                  </div>

                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-bold mb-2 relative z-10 ${
                      isEventDay
                        ? 'bg-[#F5B82E]/15 text-[#B45309] dark:text-amber-300 border border-[#F5B82E]/40'
                        : 'bg-[#F4F8FF] dark:bg-slate-800/80 text-[#123B8F] dark:text-sky-300 border border-[#E8EEF8] dark:border-slate-700/80'
                    }`}
                  >
                    {item.date}
                  </span>

                  <h3 className="text-base font-bold text-[#123B8F] dark:text-white font-display mb-1 relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed relative z-10">
                    {item.description}
                  </p>

                  {isEventDay && (
                    <div className="mt-3 pt-2 border-t border-[#F5B82E]/30 flex items-center gap-1.5 text-[11px] font-semibold text-[#B45309] dark:text-amber-300 relative z-10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B82E]" />
                      <span>National Symposium at MIT Campus</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Summary Banner */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F8FF] dark:bg-slate-800 border border-[#E8EEF8] dark:border-slate-700">
            <Clock className="w-4 h-4 text-[#168BFF]" />
            <span>Submissions close strictly at 11:59 PM on {SYMPOSIUM_INFO.lastSubmissionDate}.</span>
          </p>
          <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/80 font-bold font-mono-code">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Note: {SYMPOSIUM_INFO.onSpotRegistrationNotice}.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
