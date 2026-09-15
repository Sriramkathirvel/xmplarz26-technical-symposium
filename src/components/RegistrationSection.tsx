import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Calendar, 
  Wallet, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertTriangle, 
  ClipboardList,
  QrCode,
  Lightbulb,
  SearchCheck,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  Award,
  Zap,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';

export const RegistrationSection: React.FC = () => {
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showFormChecklist, setShowFormChecklist] = useState(false);
  const [activeTab, setActiveTab] = useState<'tech' | 'nontech'>('tech');

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
    <section id="register" className="py-16 sm:py-24 bg-gradient-to-b from-[#F4F8FF]/50 via-white to-[#F4F8FF]/30 relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Dynamic Grid Background Accent & Radial Light Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/10 rounded-full blur-3xl pointer-events-none" />

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
            One registration pass unlocks access to all technical and non-technical events at <strong className="text-[#123B8F] font-bold">XMPLARZ’26</strong>.
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

        {/* 2. DUAL COMMAND DASHBOARD (RULES + REGISTRATION CTA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT DASHBOARD: EVENT RULES & PREREQUISITES (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8EEF8] shadow-sm space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
                            {/* Card Header */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8EEF8] pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#123B8F] to-[#168BFF] text-white flex items-center justify-center font-bold shadow-sm shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#111827] font-display leading-tight">Event Participation Guidelines</h3>
                      <p className="text-xs text-[#64748B]">Review team rules and event eligibility</p>
                    </div>
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center p-1 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] text-xs font-bold font-mono-code w-full sm:w-auto shrink-0 relative select-none">
                    <button
                      type="button"
                      onClick={() => setActiveTab('tech')}
                      className={`flex-1 sm:flex-initial px-4 py-2 sm:py-1.5 rounded-lg transition-colors duration-200 cursor-pointer relative z-10 text-center ${
                        activeTab === 'tech'
                          ? 'text-[#123B8F] font-extrabold'
                          : 'text-[#64748B] hover:text-[#111827]'
                      }`}
                    >
                      {activeTab === 'tech' && (
                        <motion.div
                          layoutId="regGuidelineTabPill"
                          className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      Technical
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('nontech')}
                      className={`flex-1 sm:flex-initial px-4 py-2 sm:py-1.5 rounded-lg transition-colors duration-200 cursor-pointer relative z-10 text-center ${
                        activeTab === 'nontech'
                          ? 'text-[#6C3BFF] font-extrabold'
                          : 'text-[#64748B] hover:text-[#111827]'
                      }`}
                    >
                      {activeTab === 'nontech' && (
                        <motion.div
                          layoutId="regGuidelineTabPill"
                          className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      Non-Tech
                    </button>
                  </div>
                </div>

                {/* Tab Content Display */}
                {activeTab === 'tech' ? (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-extrabold text-[#123B8F] uppercase tracking-wider font-mono-code">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#168BFF] shrink-0" />
                        Technical Events Team Requirements
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between hover:border-[#168BFF]/40 transition-colors gap-2">
                        <div>
                          <span className="font-bold text-[#111827] block">Paper Presentation</span>
                          <span className="text-[10px] text-[#64748B]">IEEE Format Required</span>
                        </div>
                        <span className="text-[10px] font-black text-[#123B8F] font-mono-code bg-white px-2.5 py-1 rounded-lg border border-[#E8EEF8] shadow-2xs shrink-0">
                          3 Members
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between hover:border-[#168BFF]/40 transition-colors gap-2">
                        <div>
                          <span className="font-bold text-[#111827] block">Project Presentation</span>
                          <span className="text-[10px] text-[#64748B]">Working Prototype</span>
                        </div>
                        <span className="text-[10px] font-black text-[#123B8F] font-mono-code bg-white px-2.5 py-1 rounded-lg border border-[#E8EEF8] shadow-2xs shrink-0">
                          2 Members
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between hover:border-[#168BFF]/40 transition-colors gap-2">
                        <div>
                          <span className="font-bold text-[#111827] block">Code Debugging</span>
                          <span className="text-[10px] text-[#64748B]">Syntax & Logic Test</span>
                        </div>
                        <span className="text-[10px] font-black text-[#168BFF] font-mono-code bg-white px-2.5 py-1 rounded-lg border border-[#E8EEF8] shadow-2xs shrink-0">
                          1 Member (Solo)
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between hover:border-[#168BFF]/40 transition-colors gap-2">
                        <div>
                          <span className="font-bold text-[#111827] block">Technical Quiz</span>
                          <span className="text-[10px] text-[#64748B]">Rapid Fire Tech Trivia</span>
                        </div>
                        <span className="text-[10px] font-black text-[#168BFF] font-mono-code bg-white px-2.5 py-1 rounded-lg border border-[#E8EEF8] shadow-2xs shrink-0">
                          1 Member (Solo)
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-extrabold text-[#6C3BFF] uppercase tracking-wider font-mono-code">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#F5B82E] shrink-0" />
                        Non-Technical Fun Challenges
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between hover:border-[#6C3BFF]/40 transition-colors gap-2">
                        <div>
                          <span className="font-bold text-[#111827] block">Ad-Zap</span>
                          <span className="text-[10px] text-[#64748B]">Creative Marketing Pitch</span>
                        </div>
                        <span className="text-[10px] font-black text-[#6C3BFF] font-mono-code bg-white px-2.5 py-1 rounded-lg border border-[#E8EEF8] shadow-2xs shrink-0">
                          1 Member (Solo)
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between hover:border-[#6C3BFF]/40 transition-colors gap-2">
                        <div>
                          <span className="font-bold text-[#111827] block">Connection</span>
                          <span className="text-[10px] text-[#64748B]">Visual Puzzle Solving</span>
                        </div>
                        <span className="text-[10px] font-black text-[#6C3BFF] font-mono-code bg-white px-2.5 py-1 rounded-lg border border-[#E8EEF8] shadow-2xs shrink-0">
                          1 Member (Solo)
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Prerequisite & Fee Policy Highlights */}
              <div className="space-y-3 pt-4 border-t border-[#E8EEF8] mt-4">
                
                {/* Mandatory Rule Callout */}
                <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-3 shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-amber-500 text-white shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div className="leading-relaxed">
                    <strong className="font-bold text-amber-900 block mb-0.5">Technical Prerequisite Mandatory:</strong>
                    Participation in at least <u className="decoration-amber-500 underline-offset-2">1 Technical Event</u> is compulsory. Selecting a technical event unlocks participation in non-technical events.
                  </div>
                </div>

                {/* Flat Fee Banner */}
                <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#168BFF]/25 text-xs text-[#123B8F] font-bold flex items-center gap-3">
                  <Zap className="w-4 h-4 text-[#F5B82E] shrink-0 fill-[#F5B82E]" />
                  <span>Single Fee Structure: Pay ₹250 once and compete in all eligible events!</span>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT DASHBOARD: REGISTRATION CTA & SMART QR HUB (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#123B8F] to-[#0E2D6E] text-white shadow-xl space-y-6 relative overflow-hidden h-full flex flex-col justify-between border border-blue-400/20">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#168BFF]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-black text-[#F5B82E] uppercase tracking-wider font-mono-code mb-3 backdrop-blur-xs">
                  Online Registration Portal
                </div>

                <h3 className="text-2xl font-black font-display tracking-tight text-white mb-2">
                  Submit Official Registration
                </h3>

                <p className="text-xs text-blue-100/80 leading-relaxed">
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
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#168BFF] via-[#6C3BFF] to-[#168BFF] bg-[length:200%_auto] text-white text-sm font-extrabold flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer border border-white/20"
                >
                  <FileSpreadsheet className="w-5 h-5 text-[#F5B82E] group-hover:scale-110 transition-transform" />
                  <span>Register via Google Form</span>
                  <div className="w-6 h-6 rounded-full bg-[#F5B82E] text-[#123B8F] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
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
                  <div className="flex items-center gap-2 truncate max-w-[200px] xs:max-w-[240px]">
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

              {/* QR Code Hub */}
              <div className="pt-4 border-t border-white/15 flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-[#F5B82E] font-mono-code uppercase tracking-wider mb-3">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Scan to Open on Mobile</span>
                </div>

                <div className="relative p-3 rounded-2xl bg-white shadow-xl text-center select-none group">
                  <div className="w-36 h-36 rounded-xl bg-[#F4F8FF] border border-dashed border-[#123B8F]/30 flex flex-col items-center justify-center p-2">
                    <QrCode className="w-10 h-10 text-[#123B8F] mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono-code font-bold text-[#123B8F] bg-white px-2 py-0.5 rounded border border-[#E8EEF8] shadow-2xs">
                      [GOOGLE FORM QR]
                    </span>
                  </div>
                </div>
              </div>

              {/* Expandable Form Details Checklist */}
              <div className="pt-3 border-t border-white/15">
                <button
                  type="button"
                  onClick={() => setShowFormChecklist(!showFormChecklist)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-blue-100 hover:bg-white/20 transition-colors cursor-pointer"
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
                      className="mt-2 p-3 rounded-xl bg-black/20 border border-white/10 text-left space-y-1.5 overflow-hidden"
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
          </div>

        </div>



      </div>
    </section>
  );
};

