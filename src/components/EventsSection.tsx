import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Sparkles, ShieldCheck } from 'lucide-react';
import { TECHNICAL_EVENTS, NON_TECHNICAL_EVENTS, SYMPOSIUM_INFO } from '../data/eventData';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import { EventItem } from '../types';

interface EventsSectionProps {
  onRegisterClick?: (eventName?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterClick }) => {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const currentEvents = activeTab === 'technical' ? TECHNICAL_EVENTS : NON_TECHNICAL_EVENTS;

  const handleModalRegister = (eventName: string) => {
    if (onRegisterClick) {
      onRegisterClick(eventName);
    } else {
      const regSection = document.getElementById('register');
      if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-12 sm:py-16 bg-[#F4F8FF]/30 backdrop-blur-[1px] relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Background Subtle Tech Dots */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E8EEF8] text-[11px] font-semibold text-[#123B8F] uppercase tracking-wider mb-4 font-mono-code shadow-2xs">
            Symposium Challenges
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-display mb-3">
            Choose your <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">challenge.</span>
          </h2>

          <p className="text-lg sm:text-xl font-medium text-[#123B8F] tracking-tight mb-2">
            Present. Build. Solve. Compete.
          </p>

          <p className="text-sm text-[#64748B] max-w-lg">
            Eight curated events spanning core computing paradigms and creative teamwork.
          </p>

          {/* Interactive Category Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-[#E8EEF8] shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('technical')}
              className={`relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'technical'
                  ? 'text-white btn-primary-gradient shadow-md shadow-blue-900/20 scale-[1.02]'
                  : 'text-[#64748B] hover:text-[#123B8F] hover:bg-[#F4F8FF]'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Technical Events</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono-code font-extrabold ${activeTab === 'technical' ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#123B8F]'}`}>
                4
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('non-technical')}
              className={`relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'non-technical'
                  ? 'text-white btn-primary-gradient shadow-md shadow-blue-900/20 scale-[1.02]'
                  : 'text-[#64748B] hover:text-[#123B8F] hover:bg-[#F4F8FF]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Non-Technical Events</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono-code font-extrabold ${activeTab === 'non-technical' ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#123B8F]'}`}>
                4
              </span>
            </button>
          </div>
        </div>

        {/* Events Grid with smooth animated transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelect={(selected) => setSelectedEvent(selected)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Information Notice Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8EEF8] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#168BFF]" />
            </div>
            <div className="text-xs sm:text-sm text-[#64748B]">
              <span className="font-bold text-[#111827] block sm:inline mr-2">
                Team Rule:
              </span>
              Every team must contain exactly two members across all events.
            </div>
          </div>

          <div className="text-xs font-mono-code text-[#123B8F] font-semibold bg-[#F4F8FF] px-3 py-1.5 rounded-lg border border-[#E8EEF8]">
            Fee: {SYMPOSIUM_INFO.registrationFee} per team
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
