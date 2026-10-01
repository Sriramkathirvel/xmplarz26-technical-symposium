import React from 'react';
import { Globe, FileSpreadsheet, ExternalLink, Sparkles } from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';

export const QRSection: React.FC = () => {
  return (
    <section id="qr-codes" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F8FF] border border-[#E8EEF8] text-[11px] font-semibold text-[#123B8F] uppercase tracking-wider mb-3 font-mono-code">
            Quick Mobile Access
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight font-display mb-2">
            Scan & <span className="text-gradient-brand-handwriting text-3xl sm:text-4xl lg:text-5xl">Connect.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B]">
            Convenient scan access for college circulars, notice boards, and student smartphones.
          </p>
        </div>

        {/* QR Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          
          {/* QR 1: Website QR */}
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white border border-[#E8EEF8] shadow-2xs hover:border-[#168BFF]/40 transition-all text-center card-hover-modern group">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123B8F] font-mono-code uppercase tracking-wider mb-5">
              <Globe className="w-4 h-4 text-[#168BFF]" />
              <span>SCAN TO VISIT WEBSITE</span>
            </div>

            {/* QR Box */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-white border-2 border-[#168BFF]/20 flex flex-col items-center justify-center p-4 select-none shadow-md group-hover:shadow-lg transition-all group-hover:border-[#168BFF]">
              {/* Corner Framing Marks */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#123B8F]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#123B8F]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#123B8F]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#123B8F]" />

              <img 
                src="/assets/website-qr.png" 
                alt="Website QR Code" 
                className="w-full h-full object-contain rounded-lg p-2 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-xs text-[#64748B] mt-4 max-w-xs font-medium">
              Direct access to event schedules, department overview, and symposium details.
            </p>
          </div>

          {/* QR 2: Google Form QR */}
          <a 
            href={SYMPOSIUM_INFO.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white border border-[#E8EEF8] shadow-2xs hover:border-[#6C3BFF]/40 transition-all text-center card-hover-modern group cursor-pointer"
            title="Open Google Registration Form"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#123B8F] font-mono-code uppercase tracking-wider mb-5">
              <FileSpreadsheet className="w-4 h-4 text-[#F5B82E]" />
              <span>SCAN TO REGISTER</span>
            </div>

            {/* QR Box */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-white border-2 border-[#F5B82E]/50 flex flex-col items-center justify-center p-4 select-none shadow-md group-hover:shadow-xl transition-all group-hover:border-[#6C3BFF]">
              {/* Corner Framing Marks */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#F5B82E]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#F5B82E]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#F5B82E]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#F5B82E]" />

              <img 
                src={SYMPOSIUM_INFO.registrationQrCodeUrl} 
                alt="Google Form Registration QR Code" 
                className="w-full h-full object-contain rounded-lg p-2 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex items-center gap-1 text-xs font-bold text-[#6C3BFF] mt-4 max-w-xs group-hover:underline">
              <span>Official Google Registration Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] text-[#64748B] mt-1">
              Registration fee: ₹250 per head.
            </p>
          </a>

        </div>

        {/* Live status badge */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] text-[#123B8F] font-mono-code font-bold bg-[#F4F8FF] px-3 py-1.5 rounded-full border border-[#168BFF]/25 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B82E]" />
            Live Official Registration Portal QR Code Linked
          </span>
        </div>

      </div>
    </section>
  );
};
