import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, ArrowUpRight, CheckCircle2, FileText, Calendar, Building } from 'lucide-react';
import { EventItem } from '../types';
import { SYMPOSIUM_INFO } from '../data/eventData';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
  onRegisterClick: (eventName: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  onClose,
  onRegisterClick
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 30 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-white dark:bg-[#0D1424] rounded-t-3xl sm:rounded-3xl border border-[#E8EEF8] dark:border-slate-800 shadow-2xl overflow-hidden text-left max-h-[88vh] sm:max-h-[90vh] flex flex-col"
        >
          {/* Mobile Pull Handle Indicator */}
          <div className="pt-3 pb-1 flex justify-center sm:hidden bg-slate-50 dark:bg-[#0D1424]">
            <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
          </div>

          {/* Header Banner Accent */}
          <div className="bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#6C3BFF] dark:from-blue-600 dark:via-cyan-500 dark:to-purple-600 h-2.5 w-full shrink-0" />

          {/* Modal Header */}
          <div className="p-6 pb-4 flex items-start justify-between gap-4 border-b border-[#E8EEF8] dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#168BFF] dark:text-sky-300 font-mono-code uppercase px-2 py-0.5 rounded-md bg-[#F4F8FF] dark:bg-slate-800/90 border border-[#E8EEF8] dark:border-slate-700">
                  {event.category === 'technical' ? 'Technical Event' : 'Non-Technical Event'} #{event.number}
                </span>
                <span className="text-xs font-medium text-[#64748B] dark:text-slate-400">
                  • XMPLARZ’26
                </span>
              </div>
              <h3 id="event-modal-title" className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white font-display">
                {event.name}
              </h3>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 text-[#64748B] dark:text-slate-400 hover:text-[#111827] dark:hover:text-white hover:bg-[#F4F8FF] dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#168BFF]/40"
              aria-label="Close event details dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-5 overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-2 font-mono-code">
                Overview & Description
              </h4>
              <p className="text-sm sm:text-base text-[#111827] dark:text-slate-200 leading-relaxed font-normal">
                {event.fullDescription || event.shortDescription}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#F4F8FF] dark:bg-slate-800/60 border border-[#E8EEF8] dark:border-slate-700/60 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-[#E8EEF8] dark:border-slate-700 text-[#123B8F] dark:text-sky-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#64748B] dark:text-slate-400 uppercase">Team Specification</div>
                  <div className="text-xs font-bold text-[#111827] dark:text-white">
                    {event.teamSize}
                  </div>
                </div>
              </div>

              {event.format ? (
                <div className="p-3 rounded-xl bg-[#F4F8FF] dark:bg-slate-800/60 border border-[#E8EEF8] dark:border-slate-700/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-[#E8EEF8] dark:border-slate-700 text-[#168BFF] dark:text-sky-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-[#64748B] dark:text-slate-400 uppercase">Format Standard</div>
                    <div className="text-xs font-bold text-[#111827] dark:text-white">
                      {event.format}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-[#F4F8FF] dark:bg-slate-800/60 border border-[#E8EEF8] dark:border-slate-700/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-[#E8EEF8] dark:border-slate-700 text-[#168BFF] dark:text-sky-400 shrink-0">
                    <Calendar className="w-4 h-4 text-[#F5B82E] dark:text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-[#64748B] dark:text-slate-400 uppercase">Event Date</div>
                    <div className="text-xs font-bold text-[#111827] dark:text-white">
                      {SYMPOSIUM_INFO.eventDate}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mandatory Guidelines Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-[#E8EEF8] dark:border-slate-700/80 space-y-2">
              <div className="text-xs font-bold text-[#111827] dark:text-white flex items-center gap-1.5 font-display">
                <CheckCircle2 className="w-4 h-4 text-[#123B8F] dark:text-sky-400" />
                Official Rules & Regulations
              </div>
              <ul className="text-xs text-[#64748B] dark:text-slate-300 space-y-1.5 pl-5 list-disc leading-relaxed">
                {event.rules && event.rules.length > 0 ? (
                  event.rules.map((rule, idx) => (
                    <li key={idx} className="font-semibold text-[#111827] dark:text-slate-200">
                      {rule}
                    </li>
                  ))
                ) : (
                  <>
                    <li className="font-semibold text-[#111827] dark:text-slate-200">Team Requirement: {event.teamSize}</li>
                    {event.format && <li className="font-semibold text-[#111827] dark:text-slate-200">Format: {event.format}</li>}
                    <li className="dark:text-slate-300">Registration fee: {SYMPOSIUM_INFO.registrationFee}</li>
                    <li className="dark:text-slate-300">Submissions commence on {SYMPOSIUM_INFO.submissionStarts}</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 pt-3 bg-slate-50/70 dark:bg-slate-900/90 border-t border-[#E8EEF8] dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#64748B] dark:text-slate-400">
              <Building className="w-3.5 h-3.5" />
              <span>MIT Mallasamudram</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] dark:text-slate-300 hover:text-[#123B8F] dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-[#E8EEF8] dark:border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                Close
              </button>
              
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRegisterClick(event.name);
                }}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white btn-primary-gradient rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group border border-blue-400/20"
              >
                <span>Register for Event</span>
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-2xs"
                  style={{ backgroundColor: '#F5B82E' }}
                >
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5] text-[#030712]" />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
