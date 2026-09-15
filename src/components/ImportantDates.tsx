import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Award, CheckCircle2 } from 'lucide-react';
import { IMPORTANT_DATES, SYMPOSIUM_INFO } from '../data/eventData';

export const ImportantDates: React.FC = () => {
  return (
    <section id="dates" className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

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

        {/* DESKTOP TIMELINE (Horizontal) */}
        <div className="hidden md:block relative my-12">
          {/* Connecting Track Line */}
          <div className="absolute top-[38px] left-28 right-28 h-0.5 bg-[#123B8F]/10 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto relative z-10">
            {IMPORTANT_DATES.map((item, index) => {
              const isEventDay = item.isMainEvent;
              return (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.4 }}
                  className={`flex flex-col items-center text-center p-7 rounded-2xl transition-all duration-200 card-hover-modern ${
                    isEventDay
                      ? 'bg-white border-2 border-[#F5B82E] shadow-lg shadow-amber-500/10 ring-4 ring-[#F5B82E]/15'
                      : 'bg-white border border-[#E8EEF8] shadow-xs hover:border-[#168BFF]/40'
                  }`}
                >
                  {/* Top Node Indicator matching Professional Polish Design */}
                  <div className="mb-5 flex items-center justify-center">
                    {isEventDay ? (
                      <div className="w-8 h-8 rounded-full bg-[#F5B82E] border-4 border-white shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    ) : index === 0 ? (
                      <div className="w-8 h-8 rounded-full bg-white border-4 border-[#168BFF] shadow-xs flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#168BFF]" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white border-4 border-[#6C3BFF] shadow-xs flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#6C3BFF]" />
                      </div>
                    )}
                  </div>

                  {/* Date Badge */}
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-mono-code font-bold mb-3 tracking-wider ${
                      isEventDay
                        ? 'bg-[#F5B82E]/15 text-[#B45309] border border-[#F5B82E]/40'
                        : 'bg-[#F4F8FF] text-[#123B8F] border border-[#E8EEF8]'
                    }`}
                  >
                    {item.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display text-[#123B8F] mb-1.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#64748B] leading-relaxed max-w-xs">
                    {item.description}
                  </p>

                  {/* Event Day Extra Badge */}
                  {isEventDay && (
                    <div className="mt-4 pt-3 border-t border-[#F5B82E]/30 w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#B45309] uppercase tracking-wider font-mono-code">
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
                <div className="absolute -left-[45px] top-2">
                  {isEventDay ? (
                    <div className="w-6 h-6 rounded-full bg-[#F5B82E] border-4 border-white shadow-md flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  ) : index === 0 ? (
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-[#168BFF] shadow-xs flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-[#6C3BFF] shadow-xs flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C3BFF]" />
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`p-5 rounded-2xl border ${
                    isEventDay
                      ? 'bg-white border-2 border-[#F5B82E] shadow-sm'
                      : 'bg-white border-[#E8EEF8] shadow-2xs'
                  }`}
                >
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-bold mb-2 ${
                      isEventDay
                        ? 'bg-[#F5B82E]/15 text-[#B45309] border border-[#F5B82E]/40'
                        : 'bg-[#F4F8FF] text-[#123B8F] border border-[#E8EEF8]'
                    }`}
                  >
                    {item.date}
                  </span>

                  <h3 className="text-base font-bold text-[#123B8F] font-display mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>

                  {isEventDay && (
                    <div className="mt-3 pt-2 border-t border-[#F5B82E]/30 flex items-center gap-1.5 text-[11px] font-semibold text-[#B45309]">
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
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#64748B] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F8FF] border border-[#E8EEF8]">
            <Clock className="w-4 h-4 text-[#168BFF]" />
            <span>Submissions close strictly at 11:59 PM on 20.09.2026.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
