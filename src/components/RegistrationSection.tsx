import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Users2, 
  Calendar, 
  Wallet, 
  FileSpreadsheet, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  ClipboardList,
  QrCode,
  Lightbulb,
  SearchCheck,
  PhoneCall,
  Sparkles,
  Info
} from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';

export const RegistrationSection: React.FC = () => {
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's still the placeholder, provide a clear friendly notice
    if (SYMPOSIUM_INFO.googleFormUrl === "[PASTE GOOGLE FORM URL HERE]") {
      e.preventDefault();
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 4000);
    }
  };

  return (
    <section id="register" className="py-10 sm:py-16 bg-[#F4F8FF]/30 backdrop-blur-[1px] relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MOBILE VIEW RECREATION (Visible ONLY on Mobile screens < 640px) */}
        <div className="block sm:hidden space-y-5">

          {/* Mobile Header Card */}
          <div className="p-5 rounded-3xl bg-white border border-[#E8EEF8] shadow-sm relative overflow-hidden text-left">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#F5B82E]" />
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F8FF] border border-[#168BFF]/20 text-[10px] font-black text-[#168BFF] uppercase tracking-wider mb-3 font-mono-code">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Official Registration Portal
            </div>

            <h2 className="text-2xl xs:text-3xl font-black text-[#111827] tracking-tight font-display mb-2 leading-tight">
              Your next big idea <span className="text-[#168BFF] block">starts here.</span>
            </h2>

            <p className="text-xs text-[#64748B] font-medium leading-relaxed">
              Gather your team, pick your events, and register for XMPLARZ’26.
            </p>

            {/* Mobile 3 Quick Metric Pills */}
            <div className="grid grid-cols-1 gap-2 mt-4 pt-4 border-t border-[#E8EEF8]">
              <div className="p-2.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#F5B82E] shrink-0 shadow-2xs">
                    <Wallet className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#64748B]">Registration Fee</span>
                </div>
                <span className="text-xs font-black text-[#123B8F] font-mono-code bg-white px-2 py-0.5 rounded-lg border border-[#E8EEF8]">
                  {SYMPOSIUM_INFO.registrationFee}
                </span>
              </div>

              <div className="p-2.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#168BFF] shrink-0 shadow-2xs">
                    <Users2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#64748B]">Participation</span>
                </div>
                <span className="text-xs font-black text-[#168BFF] font-mono-code bg-white px-2 py-0.5 rounded-lg border border-[#E8EEF8]">
                  All Events Included
                </span>
              </div>

              <div className="p-2.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#6C3BFF] shrink-0 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#64748B]">Symposium Date</span>
                </div>
                <span className="text-xs font-black text-[#6C3BFF] font-mono-code bg-white px-2 py-0.5 rounded-lg border border-[#E8EEF8]">
                  {SYMPOSIUM_INFO.eventDate}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Fee & Participation Policy Card */}
          <div className="p-4 rounded-2xl bg-[#F4F8FF] border border-[#168BFF]/25 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-black text-[#123B8F] uppercase tracking-wider font-mono-code">
              <Info className="w-4 h-4 text-[#168BFF]" />
              <span>Fee & Event Rules Policy</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E8EEF8] shadow-2xs space-y-1">
              <h4 className="text-xs font-black text-[#123B8F]">
                Registration Fee: {SYMPOSIUM_INFO.registrationFee} per participant
              </h4>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                One payment of {SYMPOSIUM_INFO.registrationFee} for one participant allows that participant to participate in all eligible technical and non-technical events.
              </p>
            </div>
          </div>

          {/* Mobile Technical & Non-Technical Event Rules */}
          <div className="space-y-3">
            {/* Technical Rules Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8EEF8] shadow-xs space-y-2.5">
              <h4 className="text-xs font-black text-[#123B8F] uppercase tracking-wider font-mono-code flex items-center gap-2 border-b border-[#E8EEF8] pb-2">
                <CheckCircle className="w-4 h-4 text-[#168BFF]" />
                <span>Technical Event Team Rules</span>
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between">
                  <span className="font-semibold text-[#111827]">Paper Presentation</span>
                  <span className="text-[10px] font-black text-[#123B8F] font-mono-code bg-white px-2 py-0.5 rounded border border-[#E8EEF8]">3 Members Compulsory</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between">
                  <span className="font-semibold text-[#111827]">Project Presentation</span>
                  <span className="text-[10px] font-black text-[#123B8F] font-mono-code bg-white px-2 py-0.5 rounded border border-[#E8EEF8]">2 Members Compulsory</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between">
                  <span className="font-semibold text-[#111827]">Code Debugging</span>
                  <span className="text-[10px] font-black text-[#168BFF] font-mono-code bg-white px-2 py-0.5 rounded border border-[#E8EEF8]">Individual (1 Member)</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between">
                  <span className="font-semibold text-[#111827]">Technical Quiz</span>
                  <span className="text-[10px] font-black text-[#168BFF] font-mono-code bg-white px-2 py-0.5 rounded border border-[#E8EEF8]">Individual (1 Member)</span>
                </div>
              </div>
            </div>

            {/* Non-Technical Rules Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8EEF8] shadow-xs space-y-2.5">
              <h4 className="text-xs font-black text-[#123B8F] uppercase tracking-wider font-mono-code flex items-center gap-2 border-b border-[#E8EEF8] pb-2">
                <Sparkles className="w-4 h-4 text-[#F5B82E]" />
                <span>Non-Technical Event Rules</span>
              </h4>

              <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between text-xs font-semibold">
                <span className="text-[#111827]">Team Structure</span>
                <span className="text-[10px] font-black text-[#168BFF] font-mono-code bg-white px-2 py-0.5 rounded border border-[#E8EEF8]">Individual Only (1 Member)</span>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 text-[11px] text-amber-950 font-semibold leading-relaxed">
                <span className="font-bold text-amber-900 block mb-0.5">Prerequisite Rule:</span>
                Participation in at least 1 technical event is compulsory to unlock non-technical events.
              </div>
            </div>
          </div>

          {/* Mobile Required Info Checklist Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8EEF8] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-black text-[#111827] uppercase tracking-wider font-mono-code border-b border-[#E8EEF8] pb-2">
              <ClipboardList className="w-4 h-4 text-[#168BFF]" />
              <span>Required Information in Google Form</span>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {SYMPOSIUM_INFO.formFieldsSummary.map((field) => (
                <div key={field} className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FF]/80 border border-[#E8EEF8] text-xs font-medium text-[#111827]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Primary Action Button & QR Space */}
          <div className="p-5 rounded-3xl bg-gradient-to-b from-[#F4F8FF] to-white border border-[#168BFF]/30 shadow-md space-y-3.5 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#168BFF]/20 text-[10px] font-black text-[#168BFF] uppercase tracking-wider font-mono-code shadow-2xs">
              Online Registration Entry
            </div>

            <h3 className="text-base font-black text-[#111827] font-display">
              Submit Official Team Registration
            </h3>

            <p className="text-xs text-[#64748B]">
              Tap below to launch the Google Form or scan the QR code with another device.
            </p>

            <a
              href={SYMPOSIUM_INFO.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-register-google-form-mobile"
              onClick={handleRegisterClick}
              className="btn-primary-gradient w-full py-3.5 text-xs font-extrabold text-white rounded-2xl shadow-lg flex items-center justify-center gap-2 border border-blue-400/20 active:scale-95 transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#F5B82E]" />
              <span>Register Through Google Form</span>
              <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-[#123B8F] flex items-center justify-center shrink-0 shadow-2xs">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>

            {copiedNotification && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 text-left"
              >
                <strong>Note for Organizers:</strong> Update <code className="bg-white px-1 rounded border border-blue-200">[PASTE GOOGLE FORM URL HERE]</code> in <code className="font-mono text-[11px]">src/data/eventData.ts</code>!
              </motion.div>
            )}

            {/* Mobile QR Code Display Box */}
            <div className="pt-3 border-t border-[#E8EEF8] flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-[#123B8F] font-mono-code uppercase tracking-wider mb-2">
                <QrCode className="w-3.5 h-3.5 text-[#F5B82E]" />
                <span>Scan QR Code</span>
              </div>

              <div className="w-40 h-40 rounded-2xl bg-white border border-dashed border-[#F5B82E]/80 flex flex-col items-center justify-center p-3 shadow-2xs">
                <QrCode className="w-8 h-8 text-[#F5B82E] mb-1.5" />
                <span className="text-[10px] font-mono-code font-bold text-[#111827] bg-[#F4F8FF] px-2 py-0.5 rounded border border-[#E8EEF8]">
                  [GOOGLE FORM QR]
                </span>
              </div>
            </div>
          </div>

          {/* Mobile 3-Step Roadmap */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8EEF8] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-[#123B8F] uppercase tracking-wider font-mono-code border-b border-[#E8EEF8] pb-2">
              <Sparkles className="w-4 h-4 text-[#168BFF]" />
              <span>Next Steps Roadmap</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-start gap-2.5">
                <span className="text-[10px] font-mono-code font-black text-[#168BFF] bg-white px-2 py-0.5 rounded-md border border-[#168BFF]/20 shrink-0 mt-0.5">
                  STEP 01
                </span>
                <div>
                  <h5 className="text-xs font-bold text-[#111827]">Submit Your Entry</h5>
                  <p className="text-[11px] text-[#64748B] mt-0.5">Complete Google Form with paper abstract & UPI receipt.</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-start gap-2.5">
                <span className="text-[10px] font-mono-code font-black text-[#6C3BFF] bg-white px-2 py-0.5 rounded-md border border-[#6C3BFF]/20 shrink-0 mt-0.5">
                  STEP 02
                </span>
                <div>
                  <h5 className="text-xs font-bold text-[#111827]">Desk Verification</h5>
                  <p className="text-[11px] text-[#64748B] mt-0.5">Convenor team verifies paper format & confirms registration.</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-start gap-2.5">
                <span className="text-[10px] font-mono-code font-black text-[#F5B82E] bg-white px-2 py-0.5 rounded-md border border-[#F5B82E]/30 shrink-0 mt-0.5">
                  STEP 03
                </span>
                <div>
                  <h5 className="text-xs font-bold text-[#111827]">Grand Symposium Day</h5>
                  <p className="text-[11px] text-[#64748B] mt-0.5">Report at MIT Campus on 30th SEP 2026 at 08:30 AM.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* DESKTOP VIEW CONTAINER (Visible ONLY on Desktop screens >= 640px) */}
        <div className="hidden sm:block">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E8EEF8] text-[11px] font-semibold text-[#123B8F] uppercase tracking-wider mb-4 font-mono-code shadow-2xs">
              Official Registration Portal
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-display mb-4">
              Your next big idea <span className="text-[#168BFF]">starts here.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#64748B] font-medium leading-relaxed">
              Gather your team, choose your event, and register for XMPLARZ’26.
            </p>
          </div>

          {/* Primary Registration Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E8EEF8] shadow-sm p-6 sm:p-10 relative overflow-hidden">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#F5B82E]" />

            {/* Key Metrics Banner (Fee, Participation, Date) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-[#E8EEF8]">
              <div className="p-4 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] shrink-0 shadow-2xs">
                  <Wallet className="w-5 h-5 text-[#F5B82E]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                    Registration Fee
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-[#111827] font-display">
                    {SYMPOSIUM_INFO.registrationFee}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] shrink-0 shadow-2xs">
                  <Users2 className="w-5 h-5 text-[#168BFF]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                    Participation
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-[#111827] font-display">
                    All Events Included
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] shrink-0 shadow-2xs">
                  <Calendar className="w-5 h-5 text-[#6C3BFF]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                    Event Date
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-[#111827] font-display">
                    {SYMPOSIUM_INFO.eventDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Payment & Event Rules Card */}
            <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#F4F8FF] border border-[#168BFF]/20 space-y-5">
              
              {/* Payment Rule Banner */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8EEF8] shadow-2xs">
                <div className="p-2.5 rounded-xl bg-[#123B8F] text-[#F5B82E] shrink-0 mt-0.5 shadow-2xs">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#F4F8FF] border border-[#168BFF]/20 text-[10px] font-extrabold text-[#168BFF] uppercase tracking-wider mb-1 font-mono-code">
                    Official Registration Fee Policy
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-[#123B8F] font-display">
                    Registration Fee: ₹250 per head
                  </h4>
                  <p className="text-xs sm:text-sm text-[#111827] font-bold mt-1">
                    Pay ₹250 for one participant and participate in all eligible events.
                  </p>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    One payment of ₹250 for one participant allows that participant to participate in all eligible technical and non-technical events.
                  </p>
                </div>
              </div>

              {/* Event Specific Rules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Technical Events Team Rules */}
                <div className="p-4 rounded-xl bg-white border border-[#E8EEF8] shadow-2xs">
                  <h5 className="text-xs font-bold text-[#123B8F] uppercase tracking-wider font-mono-code mb-3 flex items-center gap-1.5 border-b border-[#E8EEF8] pb-2">
                    <CheckCircle className="w-4 h-4 text-[#168BFF]" />
                    <span>Technical Events Team Rules</span>
                  </h5>
                  <ul className="text-xs text-[#111827] space-y-2 font-medium">
                    <li className="flex items-center justify-between">
                      <span className="text-[#64748B]">1. Paper Presentation:</span>
                      <span className="font-bold text-[#123B8F] font-mono-code bg-[#F4F8FF] px-2 py-0.5 rounded border border-[#E8EEF8]">3 members compulsory</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#64748B]">2. Project Presentation:</span>
                      <span className="font-bold text-[#123B8F] font-mono-code bg-[#F4F8FF] px-2 py-0.5 rounded border border-[#E8EEF8]">2 members compulsory</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#64748B]">3. Code Debugging:</span>
                      <span className="font-bold text-[#168BFF] font-mono-code bg-[#F4F8FF] px-2 py-0.5 rounded border border-[#E8EEF8]">Individual (1 member)</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#64748B]">4. Technical Quiz:</span>
                      <span className="font-bold text-[#168BFF] font-mono-code bg-[#F4F8FF] px-2 py-0.5 rounded border border-[#E8EEF8]">Individual (1 member)</span>
                    </li>
                  </ul>
                </div>

                {/* Non-Technical Events Rules */}
                <div className="p-4 rounded-xl bg-white border border-[#E8EEF8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-[#123B8F] uppercase tracking-wider font-mono-code mb-3 flex items-center gap-1.5 border-b border-[#E8EEF8] pb-2">
                      <Sparkles className="w-4 h-4 text-[#F5B82E]" />
                      <span>Non-Technical Events Rules</span>
                    </h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between font-medium">
                        <span className="text-[#64748B]">Team Structure:</span>
                        <span className="font-bold text-[#168BFF] font-mono-code bg-[#F4F8FF] px-2 py-0.5 rounded border border-[#E8EEF8]">Individual participation only (1 member)</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-amber-50/90 border border-amber-200/80 text-amber-950 text-[11px] font-semibold leading-relaxed mt-2">
                        <span className="font-bold text-amber-900 block mb-0.5">Compulsory Prerequisite:</span>
                        Participation in at least one technical event is compulsory. To participate in any non-technical event, the participant must select at least one technical event.
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Clear Team Size Rule Note */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#123B8F] bg-white p-3 rounded-xl border border-[#E8EEF8] shadow-2xs">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Team size requirements apply according to the selected event.</span>
              </div>

            </div>

            {/* Google Form Expectations Checklist */}
            <div className="my-8">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList className="w-4 h-4 text-[#168BFF]" />
                <h3 className="text-sm font-bold text-[#111827] uppercase tracking-wider font-mono-code">
                  Required Information in Google Form
                </h3>
              </div>
              <p className="text-xs text-[#64748B] mb-4">
                Please review all event rules and ensure you have all participant details and payment receipt ready before filling out the form:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {SYMPOSIUM_INFO.formFieldsSummary.map((field) => (
                  <div
                    key={field}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F4F8FF]/80 border border-[#E8EEF8] text-xs font-medium text-[#111827]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                    <span className="truncate">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Button & Google Form QR Space */}
            <div className="pt-8 border-t border-[#E8EEF8] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left: Button & Direct Link (7 cols) */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F8FF] border border-[#168BFF]/20 text-[11px] font-extrabold text-[#168BFF] uppercase tracking-wider mb-3 font-mono-code">
                  Online Registration Form
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] font-display mb-2">
                  Click or Scan to Submit Entry
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] mb-6 max-w-md">
                  Complete the official Google Form on desktop or scan the QR code with your smartphone for quick mobile registration.
                </p>

                <a
                  href={SYMPOSIUM_INFO.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-register-google-form"
                  onClick={handleRegisterClick}
                  className="btn-primary-gradient inline-flex items-center justify-center gap-3.5 px-8 py-4 text-base font-extrabold text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#168BFF]/40 group border border-blue-400/20"
                >
                  <FileSpreadsheet className="w-5 h-5 text-[#F5B82E] group-hover:scale-110 transition-transform" />
                  <span>Register Through Google Form</span>
                  <div className="w-6 h-6 rounded-full bg-[#F5B82E] text-[#123B8F] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </a>

                {copiedNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 max-w-md"
                  >
                    <strong>Note for Organizers:</strong> The Google Form link is currently set to placeholder <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200">[PASTE GOOGLE FORM URL HERE]</code>. Update this value in <code className="font-mono text-[11px]">src/data/eventData.ts</code>!
                  </motion.div>
                )}

                <div className="mt-4 flex items-center gap-2 text-xs text-[#64748B] font-mono-code">
                  <ExternalLink className="w-3.5 h-3.5 text-[#168BFF]" />
                  <span>Direct Link: {SYMPOSIUM_INFO.googleFormUrl}</span>
                </div>
              </div>

              {/* Right: Dedicated Google Form QR Code Space (5 cols) */}
              <div className="md:col-span-5 flex flex-col items-center p-6 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] shadow-2xs text-center relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-[#123B8F] font-mono-code uppercase tracking-wider mb-4">
                  <QrCode className="w-4 h-4 text-[#F5B82E]" />
                  <span>SCAN TO REGISTER</span>
                </div>

                {/* QR Code Placeholder Box */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-xl bg-white border border-dashed border-[#F5B82E]/70 flex flex-col items-center justify-center p-4 select-none shadow-2xs group">
                  {/* Corner Framing Marks */}
                  <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#F5B82E]" />
                  <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#F5B82E]" />
                  <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#F5B82E]" />
                  <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#F5B82E]" />

                  <div className="w-10 h-10 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] mb-2 shadow-2xs">
                    <QrCode className="w-5 h-5 text-[#F5B82E]" />
                  </div>

                  <span className="text-[11px] font-mono-code font-bold text-[#111827] tracking-wider px-2 py-0.5 bg-[#F4F8FF] border border-[#E8EEF8] rounded-md shadow-2xs">
                    [GOOGLE FORM QR CODE]
                  </span>

                  <span className="text-[10px] text-[#64748B] mt-1.5 font-medium">
                    Official Registration QR
                  </span>
                </div>

                <p className="text-[11px] text-[#64748B] mt-3 max-w-xs font-medium">
                  Scan with smartphone camera for instant team entry form access.
                </p>
              </div>

            </div>

            {/* What Happens Next? Subsection */}
            <div className="pt-10 mt-10 border-t border-[#E8EEF8]">
              
              {/* Subsection Header */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F8FF] border border-[#168BFF]/20 text-[11px] font-extrabold text-[#123B8F] uppercase tracking-wider mb-2 font-mono-code">
                  <Sparkles className="w-3.5 h-3.5 text-[#168BFF]" />
                  <span>Next Steps Roadmap</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-display mb-2">
                  What Happens <span className="text-gradient-brand-handwriting text-3xl sm:text-4xl">Next?</span>
                </h3>

                <p className="text-sm sm:text-base text-[#123B8F] font-semibold italic leading-relaxed">
                  “Every great project starts with an idea. Submit yours, and let’s explore its potential together.”
                </p>
              </div>

              {/* 3-Step Process Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="p-5 rounded-2xl bg-white border border-[#E8EEF8] hover:border-[#168BFF]/40 transition-all flex flex-col justify-between group shadow-2xs card-hover-modern"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] group-hover:scale-105 transition-transform shadow-2xs">
                        <Lightbulb className="w-5 h-5 text-[#F5B82E]" />
                      </div>
                      <span className="text-xs font-mono-code font-black text-[#168BFF] px-2.5 py-1 rounded-lg bg-[#F4F8FF] border border-[#168BFF]/20">
                        STEP 01
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#111827] font-display mb-2">
                      Submit Your Idea
                    </h4>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Complete the official Google Form with your project idea and required details.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-5 rounded-2xl bg-white border border-[#E8EEF8] hover:border-[#6C3BFF]/40 transition-all flex flex-col justify-between group shadow-2xs card-hover-modern"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#6C3BFF] group-hover:scale-105 transition-transform shadow-2xs">
                        <SearchCheck className="w-5 h-5 text-[#6C3BFF]" />
                      </div>
                      <span className="text-xs font-mono-code font-black text-[#6C3BFF] px-2.5 py-1 rounded-lg bg-[#F4F8FF] border border-[#6C3BFF]/20">
                        STEP 02
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#111827] font-display mb-2">
                      Desk Verification
                    </h4>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Our technical committee reviews your submission and paper format for symposium entry confirmation.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="p-5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] hover:border-[#F5B82E]/40 transition-all flex flex-col justify-between group shadow-2xs card-hover-modern"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#F5B82E] group-hover:scale-105 transition-transform shadow-2xs">
                        <Sparkles className="w-5 h-5 text-[#F5B82E]" />
                      </div>
                      <span className="text-xs font-mono-code font-black text-[#F5B82E] px-2.5 py-1 rounded-lg bg-white border border-[#F5B82E]/30">
                        STEP 03
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#111827] font-display mb-2">
                      Present at MIT Campus
                    </h4>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Report at MIT Campus on 30th SEP 2026 at 08:30 AM to present your project, compete, and claim awards.
                    </p>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

