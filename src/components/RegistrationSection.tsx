import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Calendar, 
  Wallet, 
  FileSpreadsheet, 
  CheckCircle2, 
  ClipboardList,
  QrCode,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Check,
  Copy,
  ExternalLink
} from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';

export const RegistrationSection: React.FC = () => {
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showFormChecklist, setShowFormChecklist] = useState(false);

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (SYMPOSIUM_INFO.googleFormUrl === "[PASTE GOOGLE FORM URL HERE]") {
      e.preventDefault();
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 4000);
    }
  };

  const copyFormLink = () => {
    navigator.clipboard.writeText(SYMPOSIUM_INFO.googleFormUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  return (
    <section id="register" className="py-16 sm:py-24 bg-transparent relative overflow-hidden border-b border-[#E8EEF8] dark:border-slate-800/80">
      {/* Dynamic Grid Background Accent & Radial Light Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

        {/* 1. SECTION HERO HEADER & STAT HIGHLIGHTS */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-5">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#168BFF]/30 text-xs font-extrabold text-[#168BFF] uppercase tracking-wider font-mono-code shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F5B82E] animate-pulse" />
            Official Registration Portal
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight font-display leading-[1.15]"
          >
            Your next big idea <span className="text-gradient-brand-handwriting text-4xl sm:text-6xl lg:text-7xl">starts here.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-[#64748B] font-medium max-w-2xl leading-relaxed"
          >
            One registration pass unlocks access to 2 technical events at <strong className="text-[#123B8F] dark:text-blue-400 font-bold">XMPLARZ’26</strong>.
          </motion.p>

          {/* Stat Cards Glass Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4"
          >
            {/* Fee Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E8EEF8] shadow-xs flex items-center gap-4 text-left transition-all hover:border-[#168BFF]/40 hover:shadow-md group card-hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#F5B82E] shrink-0 group-hover:scale-110 transition-transform">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block font-mono-code">Registration Fee</span>
                <span className="text-lg font-black text-[#111827] font-display">{SYMPOSIUM_INFO.registrationFee}</span>
              </div>
            </div>

            {/* Event Date Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E8EEF8] shadow-xs flex items-center gap-4 text-left transition-all hover:border-[#6C3BFF]/40 hover:shadow-md group card-hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#6C3BFF] shrink-0 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block font-mono-code">Symposium Date</span>
                <span className="text-lg font-black text-[#6C3BFF] font-display">{SYMPOSIUM_INFO.eventDate}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* REGISTRATION CTA & SMART QR HUB */}
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#123B8F] to-[#0E2D6E] dark:from-[#0B1426] dark:to-[#070D1A] text-white shadow-xl relative overflow-hidden border border-blue-400/20 dark:border-blue-500/40">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#168BFF]/20 dark:bg-[#38BDF8]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* LEFT COLUMN (On Desktop: Form Actions & Details) */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-blue-500/20 border border-white/20 dark:border-blue-400/40 text-[10px] font-black text-[#F5B82E] dark:text-[#38BDF8] uppercase tracking-wider font-mono-code mb-3 backdrop-blur-xs">
                    Online Registration Portal
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white dark:text-white mb-2 drop-shadow-sm">
                    Submit Official Registration
                  </h3>

                  <p className="text-xs sm:text-sm text-blue-100/90 dark:text-slate-200 leading-relaxed font-medium">
                    Fill out the official Google Form or scan the QR code to lock in your entry for XMPLARZ’26.
                  </p>
                </div>

                {/* Main Glowing Button */}
                <div className="space-y-3">
                  <a
                    href={SYMPOSIUM_INFO.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-register-google-form"
                    onClick={handleRegisterClick}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#6366F1] text-white text-sm font-black tracking-wide shadow-[0_10px_32px_-6px_rgba(14,165,233,0.55),0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_40px_-6px_rgba(14,165,233,0.75),0_0_30px_rgba(99,102,241,0.55)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border-0 group cursor-pointer"
                  >
                    <FileSpreadsheet className="w-5 h-5 text-sky-200 group-hover:scale-110 transition-transform" />
                    <span>Register via Google Form</span>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shrink-0 shadow-md"
                      style={{ backgroundColor: '#F5B82E' }}
                    >
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#030712]" />
                    </div>
                  </a>

                  {copiedNotification && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-amber-400/20 border border-amber-400/40 text-xs text-amber-200 text-left"
                    >
                      <strong>Notice:</strong> Update <code className="bg-black/30 px-1 py-0.5 rounded border border-amber-400/30">[PASTE GOOGLE FORM URL HERE]</code> in <code className="font-mono text-[11px]">src/data/eventData.ts</code>!
                    </motion.div>
                  )}

                  {/* Copyable Form Link */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-blue-100">
                    <div className="flex items-center gap-2 truncate max-w-[200px] xs:max-w-[280px] sm:max-w-[320px]">
                      <ExternalLink className="w-3.5 h-3.5 text-[#F5B82E] shrink-0" />
                      <span className="font-mono text-[11px] truncate">{SYMPOSIUM_INFO.googleFormUrl}</span>
                    </div>
                    <button
                      onClick={copyFormLink}
                      className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors shrink-0 cursor-pointer"
                      title="Copy Form URL"
                    >
                      {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expandable Form Details Checklist */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowFormChecklist(!showFormChecklist)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-blue-100 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-[#F5B82E]" />
                      What info is required in the form?
                    </span>
                    {showFormChecklist ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {showFormChecklist && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 p-3.5 rounded-xl bg-black/20 border border-white/10 text-left space-y-1.5 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 text-[11px] font-medium text-blue-100">
                          {SYMPOSIUM_INFO.formFieldsSummary.map((field) => (
                            <div key={field} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B82E] shrink-0" />
                              <span className="truncate">{field}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* RIGHT COLUMN (On Desktop: Smart QR Code Hub) */}
              <div className="md:col-span-5 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/15 md:pl-6 lg:pl-8 flex flex-col items-center justify-center">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black text-[#F5B82E] font-mono-code uppercase tracking-wider mb-4">
                  <QrCode className="w-4 h-4" />
                  <span>Scan to Open on Mobile</span>
                </div>

                <a 
                  href={SYMPOSIUM_INFO.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 sm:p-4.5 rounded-3xl bg-white shadow-2xl hover:shadow-[0_16px_40px_-8px_rgba(22,139,255,0.45),0_0_25px_0_rgba(245,184,46,0.35)] text-center select-none group border-2 border-[#168BFF]/40 hover:border-[#F5B82E] hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out block cursor-pointer"
                  title="Click or Scan to open Google Form"
                >
                  <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-white flex items-center justify-center p-1.5 overflow-hidden relative">
                    <img 
                      src={SYMPOSIUM_INFO.registrationQrCodeUrl} 
                      alt="XMPLARZ Registration QR Code" 
                      className="w-full h-full object-contain rounded-xl group-hover:scale-108 transition-transform duration-300 ease-out"
                    />
                  </div>
                  <div className="mt-3 text-xs font-extrabold text-[#123B8F] group-hover:text-[#168BFF] font-mono-code flex items-center justify-center gap-1.5 transition-colors duration-300">
                    <Sparkles className="w-3.5 h-3.5 text-[#F5B82E] group-hover:rotate-12 transition-transform duration-300" />
                    <span className="group-hover:scale-105 transition-transform duration-300">Scan or Click QR Code</span>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

