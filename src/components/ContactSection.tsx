import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  MapPin,
  Navigation,
  ExternalLink,
  Send,
  CheckCircle2,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';
import { CollegeLogo } from './CollegeLogo';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const mapsUrl = SYMPOSIUM_INFO.googleMapsUrl || 'https://maps.app.goo.gl/QZL5ZnhZt8kpyUaLA';

  const officialEmail =
    SYMPOSIUM_INFO.officialEmail !== '[OFFICIAL EMAIL ADDRESS]'
      ? SYMPOSIUM_INFO.officialEmail
      : 'xmplarzmitcse2026@gmail.com';

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSending(true);
    setError('');
    setSubmitted(false);

    try {
      await emailjs.send(
        'service_ns3dkv2',
        'template_f3ybgas',
        {
          user_name: formData.name,
          user_email: formData.email,
          mobile_number: formData.phone || 'N/A',
          query_subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: 'OwqMlYmj588tC5fYQ',
        }
      );

      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Enquiry',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* SECTION 1: Assistance & Inquiries (Enquiry Email Form) */}
      <section
        id="contact"
        className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-b border-[#E8EEF8] dark:border-slate-800/80"
      >
        <div id="scan-connect" className="absolute -top-24 left-0" />
        {/* Dynamic Grid Background Accent & Radial Light Glows */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8EEF8] text-[11px] font-extrabold text-[#123B8F] uppercase tracking-wider mb-3 font-mono-code shadow-2xs">
              <MessageSquare className="w-3.5 h-3.5 text-[#168BFF]" />
              <span>Assistance & Inquiries Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight font-display mb-3">
              Assistance & <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">Inquiries.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Have questions regarding event guidelines, paper formats, or campus access? Send an enquiry directly to our convenor team.
            </p>
          </div>

          {/* Enquiry Email Form Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8EEF8] shadow-sm card-hover-modern">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E8EEF8]">
              <div>
                <h3 className="text-lg font-bold text-[#123B8F] font-display flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#168BFF]" />
                  <span>Enquiry Email Form</span>
                </h3>

                <p className="text-xs text-[#64748B] mt-0.5">
                  Send your question directly to our convenor desk.
                </p>
              </div>

              {/* Email Copy Pill */}
              <button
                type="button"
                onClick={copyToClipboard}
                className="px-3.5 py-2 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] text-xs font-bold text-[#168BFF] hover:bg-[#168BFF] hover:text-white transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-2xs w-fit"
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
                    <span className="font-mono-code">{officialEmail}</span>
                  </>
                )}
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mb-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />

                <div>
                  <p className="font-bold">Enquiry sent successfully!</p>
                  <p className="text-emerald-700 text-xs mt-0.5">
                    Thank you for contacting us. Our team will get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-5 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-enquiry-name"
                    className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase"
                  >
                    Your Name *
                  </label>

                  <input
                    type="text"
                    id="contact-enquiry-name"
                    name="user_name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F8FF]/50 border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:bg-white focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="contact-enquiry-email"
                    className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase"
                  >
                    Email Address *
                  </label>

                  <input
                    type="email"
                    id="contact-enquiry-email"
                    name="user_email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F8FF]/50 border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:bg-white focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Mobile / Phone Number */}
                <div>
                  <label
                    htmlFor="contact-enquiry-phone"
                    className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase"
                  >
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    id="contact-enquiry-phone"
                    name="mobile_number"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F8FF]/50 border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:bg-white focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all font-mono-code"
                  />
                </div>

                {/* Subject / Category */}
                <div>
                  <label
                    htmlFor="contact-enquiry-subject"
                    className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase"
                  >
                    Query Subject *
                  </label>

                  <select
                    id="contact-enquiry-subject"
                    name="query_subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F8FF]/50 border border-[#E8EEF8] text-sm text-[#111827] focus:bg-white focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all cursor-pointer"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Paper Submission & IEEE Format">
                      Paper Submission & IEEE Format
                    </option>
                    <option value="Registration & Fee Confirmation">
                      Registration & Fee Confirmation
                    </option>
                    <option value="Technical Events Query">
                      Technical Events Query
                    </option>
                    <option value="Non-Technical Events Query">
                      Non-Technical Events Query
                    </option>
                    <option value="Campus Location & Travel">
                      Campus Location & Travel
                    </option>
                  </select>
                </div>

              </div>

              {/* Message Box */}
              <div>
                <label
                  htmlFor="contact-enquiry-message"
                  className="block text-xs font-bold text-[#123B8F] mb-1.5 font-mono-code uppercase"
                >
                  Enquiry Details / Message *
                </label>

                <textarea
                  id="contact-enquiry-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Type your question or query details here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F8FF]/50 border border-[#E8EEF8] text-sm text-[#111827] placeholder-[#94A3B8] focus:bg-white focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-btn-send-enquiry"
                disabled={isSending}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#6366F1] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_10px_32px_-6px_rgba(14,165,233,0.55),0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_40px_-6px_rgba(14,165,233,0.75)] hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer border border-cyan-300/35 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4 text-sky-200" />
                <span>{isSending ? 'Sending...' : 'Send Enquiry Email'}</span>
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: Convenor Desk & Campus Location (Separate Dedicated Section) */}
      <section
        id="location-desk"
        className="py-14 sm:py-20 bg-transparent relative overflow-hidden border-b border-[#E8EEF8] dark:border-slate-800/80"
      >
        {/* Dynamic Grid Background Accent & Radial Light Glows */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6C3BFF]/10 to-[#F5B82E]/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#168BFF]/30 text-xs font-extrabold text-[#168BFF] uppercase tracking-wider mb-4 font-mono-code shadow-sm">
              <MapPin className="w-4 h-4 text-[#F5B82E] animate-bounce" />
              <span>Direct Contacts & Live Campus Navigation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight font-display mb-4 leading-tight">
              Convenor Desk & <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">Campus Map.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
              Connect directly with our staff convenors & student coordinators or navigate live turn-by-turn to Mahendra Institute of Technology.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: Convenor & Coordinators Card */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-5 xs:p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-xl card-hover-modern">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-[#168BFF]/15 via-[#6C3BFF]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Block (Logo & Title) */}
                <div className="flex flex-row items-center gap-3.5 sm:gap-4 pb-5 border-b border-slate-800 mb-5 sm:mb-6">
                  <div className="relative shrink-0 p-1.5 bg-slate-800/90 rounded-2xl border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                    <div className="xs:hidden">
                      <CollegeLogo size={42} alt="MIT Emblem" />
                    </div>
                    <div className="hidden xs:block">
                      <CollegeLogo size={52} alt="MIT Emblem" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 text-left">
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-black text-white font-display leading-tight tracking-tight">
                      The Convenor Desk
                    </h4>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider truncate flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 animate-pulse" />
                      <span>{SYMPOSIUM_INFO.department}</span>
                    </p>
                    <p className="text-xs sm:text-sm font-black text-[#38BDF8] mt-0.5 tracking-wide uppercase truncate">
                      {SYMPOSIUM_INFO.college}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Staff Convenors Block */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h5 className="text-xs font-black uppercase tracking-wider text-sky-400 font-mono-code flex items-center gap-2 min-w-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
                        <span className="truncate">Staff Convenors</span>
                      </h5>
                      <span className="text-[10px] font-mono-code font-bold text-sky-300 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700 shrink-0 whitespace-nowrap">
                        AP / CSE
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {SYMPOSIUM_INFO.staffConvenors.map((staff, index) => (
                        <a
                          key={staff.number}
                          href={`tel:${staff.number}`}
                          id={`scan-connect-staff-${index}`}
                          className="flex items-center justify-between p-3 xs:p-3.5 rounded-2xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 transition-all group cursor-pointer shadow-xs hover:shadow-md text-xs gap-2.5"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-400/50 flex items-center justify-center text-sky-400 transition-colors shrink-0 shadow-xs">
                              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-extrabold text-white group-hover:text-sky-300 block text-xs sm:text-sm leading-tight">
                                {staff.name}
                              </span>
                              <span className="text-[11px] font-mono-code text-sky-400 font-bold block mt-0.5">
                                +91 {staff.number}
                              </span>
                            </div>
                          </div>
                          
                          <span className="text-[10px] font-extrabold text-sky-300 bg-sky-500/20 group-hover:bg-sky-500 group-hover:text-white px-2.5 py-1.5 xs:px-3 rounded-xl border border-sky-500/40 transition-all shadow-xs shrink-0 font-mono-code whitespace-nowrap">
                            CALL NOW
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Student Coordinators Block */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h5 className="text-xs font-black uppercase tracking-wider text-purple-400 font-mono-code flex items-center gap-2 min-w-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse shrink-0" />
                        <span className="truncate">Student Coordinators</span>
                      </h5>
                      <span className="text-[10px] font-mono-code font-bold text-purple-300 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700 shrink-0 whitespace-nowrap">
                        CSE Student Leads
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {SYMPOSIUM_INFO.studentCoordinators.map((student, index) => (
                        <a
                          key={student.number}
                          href={`tel:${student.number}`}
                          id={`scan-connect-student-${index}`}
                          className="flex items-center justify-between p-3 xs:p-3.5 rounded-2xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 transition-all group cursor-pointer shadow-xs hover:shadow-md text-xs gap-2.5"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-purple-400/50 flex items-center justify-center text-purple-400 transition-colors shrink-0 shadow-xs">
                              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-extrabold text-white group-hover:text-purple-300 block text-xs sm:text-sm leading-tight">
                                {student.name}
                              </span>
                              <span className="text-[11px] font-mono-code text-purple-400 font-bold block mt-0.5">
                                +91 {student.number}
                              </span>
                            </div>
                          </div>
                          
                          <span className="text-[10px] font-extrabold text-purple-300 bg-purple-500/20 group-hover:bg-purple-500 group-hover:text-white px-2.5 py-1.5 xs:px-3 rounded-xl border border-purple-500/40 transition-all shadow-xs shrink-0 font-mono-code whitespace-nowrap">
                            CALL NOW
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-300 flex items-center gap-2.5 font-mono-code bg-slate-800/70 p-3 rounded-2xl border border-slate-700/80">
                <Navigation className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Need assistance with travel or timing? Call anytime.</span>
              </div>
            </div>

            {/* Right Column: Campus Address & Live Interactive Map Preview */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-5 xs:p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between gap-5 backdrop-blur-xl card-hover-modern">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-400 flex items-center justify-center shadow-xs">
                      <MapPin className="w-4.5 h-4.5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 font-mono-code">
                        Campus Location & Directions
                      </h4>
                      <p className="text-[11px] text-slate-300">Mahendhirapuri, Mallasamudram (W), Namakkal Dt</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono-code font-bold text-sky-400 bg-slate-800 px-3 py-1 rounded-full border border-sky-500/30 shadow-2xs w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                    LIVE GPS PREVIEW
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-extrabold text-white block text-sm">
                      {SYMPOSIUM_INFO.college}
                    </span>
                    <span className="text-slate-300 text-xs">
                      {SYMPOSIUM_INFO.address}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(`${SYMPOSIUM_INFO.college}, ${SYMPOSIUM_INFO.address}`);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2500);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-700 border border-slate-700 text-[11px] font-bold text-sky-300 transition-all cursor-pointer shrink-0 shadow-2xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
                    <span>{copied ? 'Copied Address!' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>

              {/* Embedded Interactive Google Maps Live Preview */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-950 shadow-inner group">
                <iframe
                  title="Mahendra Institute of Technology Map Preview"
                  src="https://maps.google.com/maps?q=Mahendra+Institute+of+Technology,+Mallasamudram,+Tiruchengode,+Namakkal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 rounded-2xl grayscale-[0.05] contrast-[1.05] group-hover:grayscale-0 transition-all duration-300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Travel Guide Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] font-medium text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-center">
                  <strong className="block text-white">Nearest Railway:</strong>
                  Salem Junction (30 km)
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-center">
                  <strong className="block text-white">Nearest Bus Stand:</strong>
                  Tiruchengode (15 km)
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-center">
                  <strong className="block text-white">Nearest Airport:</strong>
                  Coimbatore / Trichy
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="scan-connect-btn-directions"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#6366F1] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-sky-500/30 hover:scale-[1.01] active:scale-95 transition-all duration-300 border border-cyan-300/35 cursor-pointer"
              >
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};