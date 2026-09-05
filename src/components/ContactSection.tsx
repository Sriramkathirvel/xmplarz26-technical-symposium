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
        className="py-12 sm:py-16 bg-[#F4F8FF]/25 backdrop-blur-[1px] relative overflow-hidden border-b border-[#E8EEF8]"
      >
        <div id="scan-connect" className="absolute -top-24 left-0" />
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

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
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#123B8F] hover:bg-[length:200%_auto] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all cursor-pointer border border-blue-400/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4 text-[#F5B82E]" />
                <span>{isSending ? 'Sending...' : 'Send Enquiry Email'}</span>
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: Convenor Desk & Campus Location (Separate Dedicated Section) */}
      <section
        id="location-desk"
        className="py-12 sm:py-16 bg-white/40 relative overflow-hidden border-b border-[#E8EEF8]"
      >
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8EEF8] text-[11px] font-extrabold text-[#123B8F] uppercase tracking-wider mb-3 font-mono-code shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#168BFF]" />
              <span>Direct Contacts & Navigation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight font-display mb-3">
              Convenor Desk & <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">Campus Map.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Call our student & staff coordinators directly or view the interactive campus map for live turn-by-turn directions.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: Convenor & Coordinators Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8EEF8] shadow-sm flex flex-col justify-between card-hover-modern">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <CollegeLogo size={54} alt="MIT Emblem" />

                  <div>
                    <h4 className="text-base font-bold text-[#111827] font-display">
                      The Convenor Desk
                    </h4>

                    <p className="text-xs text-[#64748B]">
                      {SYMPOSIUM_INFO.department}
                    </p>

                    <p className="text-xs font-semibold text-[#123B8F]">
                      {SYMPOSIUM_INFO.college}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] font-mono-code mb-2">
                    Direct Coordinators
                  </h5>

                  {SYMPOSIUM_INFO.contacts.map((contact, index) => (
                    <a
                      key={contact.number}
                      href={`tel:${contact.number}`}
                      id={`scan-connect-tel-${index}`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F4F8FF] hover:bg-white border border-[#E8EEF8] hover:border-[#168BFF]/50 transition-all group cursor-pointer shadow-2xs text-xs card-hover-modern"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white border border-[#E8EEF8] group-hover:border-[#168BFF]/30 flex items-center justify-center text-[#123B8F] group-hover:text-[#168BFF] transition-colors shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>

                        <div>
                          <span className="font-bold text-[#111827] group-hover:text-[#123B8F] font-mono-code block">
                            +91 {contact.number}
                          </span>

                          <span className="text-[10px] text-[#64748B]">
                            {contact.label}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-bold text-[#168BFF] group-hover:underline">
                        Call →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8EEF8] text-[11px] text-[#64748B] flex items-center gap-2 font-mono-code">
                <Navigation className="w-3.5 h-3.5 text-[#168BFF]" />
                <span>Need help with travel or timing? Call anytime.</span>
              </div>
            </div>

            {/* Right Column: Campus Address & Live Map Preview */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8EEF8] shadow-sm flex flex-col justify-between gap-4 card-hover-modern">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4.5 h-4.5 text-[#123B8F]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B8F] font-mono-code">
                      Campus Location & Navigation
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#168BFF] bg-[#F4F8FF] px-2.5 py-0.5 rounded-full border border-[#168BFF]/20">
                    Live Preview
                  </span>
                </div>

                <p className="text-xs text-[#111827] font-semibold leading-relaxed">
                  {SYMPOSIUM_INFO.college}
                  <br />
                  <span className="font-normal text-[#64748B]">
                    {SYMPOSIUM_INFO.address}
                  </span>
                </p>
              </div>

              {/* Embedded Interactive Google Maps Live Preview */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E8EEF8] relative bg-[#F4F8FF] shadow-inner group">
                <iframe
                  title="Mahendra Institute of Technology Map Preview"
                  src="https://maps.google.com/maps?q=Mahendra+Institute+of+Technology,+Mallasamudram,+Tiruchengode,+Namakkal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 rounded-2xl grayscale-[0.15] contrast-[1.05] group-hover:grayscale-0 transition-all duration-300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="scan-connect-btn-directions"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-extrabold text-[#111827] bg-[#F4F8FF] hover:bg-[#123B8F] hover:text-white border border-[#E8EEF8] hover:border-[#123B8F] transition-all shadow-2xs cursor-pointer group"
              >
                <Navigation className="w-3.5 h-3.5 text-[#6C3BFF] group-hover:text-white transition-colors" />
                <span>Open Directions in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-white/80 transition-colors" />
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};