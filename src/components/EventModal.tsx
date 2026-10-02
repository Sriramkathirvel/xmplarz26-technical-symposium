import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, ArrowUpRight, CheckCircle2, FileText, Calendar, Building, Sparkles } from 'lucide-react';
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
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
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
          className="relative w-full max-w-lg bg-[#0B0F19] text-white rounded-t-3xl sm:rounded-3xl border border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(14,165,233,0.15)] overflow-hidden text-left max-h-[88vh] sm:max-h-[90vh] flex flex-col font-sans"
        >
          {/* Mobile Pull Handle Indicator */}
          <div className="pt-3 pb-1 flex justify-center sm:hidden bg-[#0B0F19]">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
          </div>

          {/* Header Banner Accent */}
          <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 h-1.5 w-full shrink-0" />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 pb-4 flex items-start justify-between gap-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] sm:text-xs font-bold text-sky-400 font-mono-code uppercase px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/30">
                  {event.category === 'technical' ? 'Technical Event' : 'Non-Technical Event'} #{event.number}
                </span>
                <span className="text-xs font-mono-code text-slate-400">
                  • XMPLARZ’26
                </span>
              </div>
              <h3 id="event-modal-title" className="text-xl sm:text-2xl font-black text-white font-display leading-tight">
                {event.name}
              </h3>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl transition-all border border-transparent hover:border-slate-700 cursor-pointer focus:outline-none"
              aria-label="Close event details dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono-code flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-sky-400" />
                <span>Overview & Description</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {event.fullDescription || event.shortDescription}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase font-mono-code tracking-wider">Team Specification</div>
                  <div className="text-xs sm:text-sm font-extrabold text-white font-display mt-0.5">
                    {event.teamSize}
                  </div>
                </div>
              </div>

              {event.format ? (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase font-mono-code tracking-wider">Format Standard</div>
                    <div className="text-xs sm:text-sm font-extrabold text-white font-display mt-0.5">
                      {event.format}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-400/20 text-amber-400 shrink-0">
                    <Calendar className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase font-mono-code tracking-wider">Event Date</div>
                    <div className="text-xs sm:text-sm font-extrabold text-white font-display mt-0.5">
                      {SYMPOSIUM_INFO.eventDate}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mandatory Guidelines Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="text-xs font-bold text-sky-300 flex items-center gap-1.5 font-mono-code uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Official Rules & Regulations</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pl-4 list-disc leading-relaxed">
                {event.rules && event.rules.length > 0 ? (
                  event.rules.map((rule, idx) => (
                    <li key={idx} className="font-medium text-slate-200">
                      {rule}
                    </li>
                  ))
                ) : (
                  <>
                    <li className="font-medium text-slate-200">Team Requirement: {event.teamSize}</li>
                    {event.format && <li className="font-medium text-slate-200">Format: {event.format}</li>}
                    <li className="text-slate-300">Registration fee: {SYMPOSIUM_INFO.registrationFee}</li>
                    <li className="text-slate-300">Submissions commence on {SYMPOSIUM_INFO.submissionStarts}</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-code">
              <Building className="w-3.5 h-3.5 text-sky-400" />
              <span>MIT Mallasamudram</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                Close
              </button>
              
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRegisterClick(event.name);
                }}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 rounded-xl shadow-[0_4px_20px_rgba(14,165,233,0.4)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border-0 group"
              >
                <span>Register for Event</span>
                <div className="w-4 h-4 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shrink-0 shadow-xs">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.8]" />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
