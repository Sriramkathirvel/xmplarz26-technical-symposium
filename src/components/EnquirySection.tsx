import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles, HelpCircle, PhoneCall, Copy, Check } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';

export const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const officialEmail = SYMPOSIUM_INFO.officialEmail !== "[OFFICIAL EMAIL ADDRESS]" 
    ? SYMPOSIUM_INFO.officialEmail 
    : "xmplarzmitcse2026@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL
    const mailSubject = encodeURIComponent(`[XMPLARZ'26 Enquiry] ${formData.subject}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Category: ${formData.subject}\n\n` +
      `Enquiry Message:\n${formData.message}`
    );

    window.location.href = `mailto:${officialEmail}?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="enquiry" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F8FF] border border-[#168BFF]/20 text-[11px] font-extrabold text-[#123B8F] uppercase tracking-wider mb-3 font-mono-code shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#168BFF]" />
            <span>Direct Desk Assistance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight font-display mb-3">
            Have Questions? <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">Send an Enquiry.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Submit your queries directly to the XMPLARZ’26 organizing committee. We respond within 24 hours.
          </p>
        </div>

        {/* Enquiry Box Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F4F8FF]/60 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#E8EEF8] shadow-sm">
            <h3 className="text-lg font-bold text-[#123B8F] font-display mb-1 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#168BFF]" />
              <span>Enquiry Email Form</span>
            </h3>
            <p className="text-xs text-[#64748B] mb-6">
              Fill in the details below to generate your direct inquiry email to the convenor desk.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Email draft launched!</p>
                  <p className="text-emerald-700 text-xs mt-0.5">
                    Your email app should open automatically with your inquiry pre-filled. If not, you can copy our email directly: <span className="font-mono-code font-bold underline">{officialEmail}</span>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="enquiry-name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="enquiry-email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mobile / Phone Number */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase">
                    Mobile / Phone Number
                  </label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all font-mono-code"
                  />
                </div>

                {/* Subject / Category */}
                <div>
                  <label htmlFor="enquiry-subject" className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase">
                    Query Subject *
                  </label>
                  <select
                    id="enquiry-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8EEF8] text-sm text-[#111827] focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all cursor-pointer"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Paper Submission & IEEE Format">Paper Submission & IEEE Format</option>
                    <option value="Registration & Fee Confirmation">Registration & Fee Confirmation</option>
                    <option value="Technical Events Query">Technical Events Query</option>
                    <option value="Non-Technical Events Query">Non-Technical Events Query</option>
                    <option value="Campus Location & Travel">Campus Location & Travel</option>
                  </select>
                </div>
              </div>

              {/* Message Box */}
              <div>
                <label htmlFor="enquiry-message" className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase">
                  Enquiry Details / Message *
                </label>
                <textarea
                  id="enquiry-message"
                  required
                  rows={4}
                  placeholder="Type your question or query details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="btn-send-enquiry"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#123B8F] hover:bg-[length:200%_auto] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all cursor-pointer border border-blue-400/20"
              >
                <Send className="w-4 h-4 text-[#F5B82E]" />
                <span>Send Enquiry Email Now</span>
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info & Quick Copy Badge (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8EEF8] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#168BFF]/5 rounded-bl-full pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-center text-[#168BFF] mb-4">
                <Mail className="w-6 h-6" />
              </div>

              <h4 className="text-base font-bold text-[#111827] font-display mb-1">
                Official Enquiry Mail
              </h4>
              <p className="text-xs text-[#64748B] mb-4">
                You can also email us directly from your personal inbox:
              </p>

              {/* Email Display Box with Copy Button */}
              <div className="p-3.5 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center justify-between gap-3 mb-4">
                <span className="text-xs sm:text-sm font-mono-code font-bold text-[#123B8F] truncate select-all">
                  {officialEmail}
                </span>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#E8EEF8] text-xs font-bold text-[#168BFF] hover:bg-[#168BFF] hover:text-white transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-2xs"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#E8EEF8]">
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <Sparkles className="w-4 h-4 text-[#F5B82E] shrink-0" />
                  <span>Response turnaround time: <strong>Under 24 hours</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <HelpCircle className="w-4 h-4 text-[#168BFF] shrink-0" />
                  <span>Accepts IEEE paper abstracts & general queries</span>
                </div>
              </div>
            </div>

            {/* Emergency Phone Quick Assist Box */}
            <div className="bg-[#123B8F] text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#168BFF]/30 rounded-full blur-2xl pointer-events-none" />

              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#F5B82E] font-mono-code mb-2 flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Assistance</span>
              </h4>

              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                Need urgent assistance regarding registration or paper presentation guidelines?
              </p>

              <div className="space-y-2">
                <a
                  href={`tel:${SYMPOSIUM_INFO.contacts[0].number}`}
                  className="block p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs sm:text-sm font-mono-code font-bold text-white transition-all"
                >
                  📞 Student Coord: +91 {SYMPOSIUM_INFO.contacts[0].number}
                </a>
                <a
                  href={`tel:${SYMPOSIUM_INFO.contacts[2].number}`}
                  className="block p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs sm:text-sm font-mono-code font-bold text-white transition-all"
                >
                  📞 Staff Coord: +91 {SYMPOSIUM_INFO.contacts[2].number}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
