import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { TECHNICAL_EVENTS, SYMPOSIUM_INFO } from '../data/eventData';
import { EventCard } from './EventCard';
import { WorkshopCard } from './WorkshopCard';
import { EventModal } from './EventModal';
import { EventItem } from '../types';

interface EventsSectionProps {
  onRegisterClick?: (eventName?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterClick }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleModalRegister = (eventName: string) => {
    if (onRegisterClick) {
      onRegisterClick(eventName);
    } else {
      const regSection = document.getElementById('register');
      if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-b border-[#E8EEF8] dark:border-slate-800/80">
      {/* Dynamic Grid Background Accent & Radial Light Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-slate-800 border border-[#E8EEF8] dark:border-slate-700 text-[11px] font-semibold text-[#123B8F] dark:text-sky-300 uppercase tracking-wider mb-4 font-mono-code shadow-2xs">
            Symposium Challenges & Workshop
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-3">
            Choose your <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">challenge.</span>
          </h2>

          <p className="text-lg sm:text-xl font-medium text-[#123B8F] dark:text-blue-400 tracking-tight mb-2">
            Present. Build. Solve. Compete.
          </p>

          <p className="text-sm text-[#64748B] dark:text-slate-300 max-w-lg">
            Curated technical challenges and hands-on industry workshops spanning AI, DevOps, debugging, and computing fundamentals.
          </p>
        </div>

        {/* Special Industry Workshop Showcase Card */}
        <WorkshopCard onRegisterClick={onRegisterClick} />

        {/* Technical Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_EVENTS.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={(selected) => setSelectedEvent(selected)}
            />
          ))}
        </div>

        {/* Bottom Information Notice Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8EEF8] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#168BFF]" />
            </div>
            <div className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300">
              <span className="font-bold text-[#111827] dark:text-white block sm:inline mr-2">
                Official Rules & Regulations:
              </span>
              Maximum a student can participate in 2 technical events. <span className="font-semibold text-emerald-600 dark:text-emerald-400">({SYMPOSIUM_INFO.onSpotRegistrationNotice})</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs font-mono-code text-[#123B8F] dark:text-sky-300 font-bold bg-[#F4F8FF] dark:bg-slate-800 px-3.5 py-1.5 rounded-xl border border-[#E8EEF8] dark:border-slate-700">
              Registration Fee: {SYMPOSIUM_INFO.registrationFee}
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Modal Dialog */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRegisterClick={handleModalRegister}
      />
    </section>
  );
};
