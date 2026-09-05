import React from 'react';
import { QrCode, Globe, FileSpreadsheet } from 'lucide-react';

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
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white border border-[#E8EEF8] shadow-2xs hover:border-[#168BFF]/30 transition-all text-center card-hover-modern">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123B8F] font-mono-code uppercase tracking-wider mb-5">
              <Globe className="w-4 h-4 text-[#168BFF]" />
              <span>SCAN TO VISIT WEBSITE</span>
            </div>

            {/* QR Placeholder Box */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl bg-[#F4F8FF] border border-dashed border-[#168BFF]/40 flex flex-col items-center justify-center p-6 select-none group">
              {/* Corner Framing Marks */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#123B8F]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#123B8F]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#123B8F]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#123B8F]" />

              <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] mb-3 shadow-2xs">
                <QrCode className="w-6 h-6 text-[#168BFF]" />
              </div>

              <span className="text-xs font-mono-code font-bold text-[#111827] tracking-wider px-2.5 py-1 bg-white border border-[#E8EEF8] rounded-md shadow-2xs">
                [WEBSITE QR CODE]
              </span>

              <span className="text-[11px] text-[#64748B] mt-2 font-medium">
                Official Symposium Portal
              </span>
            </div>

            <p className="text-xs text-[#64748B] mt-4 max-w-xs">
              Direct access to event schedules, department overview, and symposium details.
            </p>
          </div>

          {/* QR 2: Google Form QR */}
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white border border-[#E8EEF8] shadow-2xs hover:border-[#168BFF]/30 transition-all text-center card-hover-modern">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123B8F] font-mono-code uppercase tracking-wider mb-5">
              <FileSpreadsheet className="w-4 h-4 text-[#F5B82E]" />
              <span>SCAN TO REGISTER</span>
            </div>

            {/* QR Placeholder Box */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl bg-[#F4F8FF] border border-dashed border-[#F5B82E]/60 flex flex-col items-center justify-center p-6 select-none group">
              {/* Corner Framing Marks */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#F5B82E]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#F5B82E]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#F5B82E]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#F5B82E]" />

              <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EEF8] flex items-center justify-center text-[#123B8F] mb-3 shadow-2xs">
                <QrCode className="w-6 h-6 text-[#F5B82E]" />
              </div>

              <span className="text-xs font-mono-code font-bold text-[#111827] tracking-wider px-2.5 py-1 bg-white border border-[#E8EEF8] rounded-md shadow-2xs">
                [GOOGLE FORM QR CODE]
              </span>

              <span className="text-[11px] text-[#64748B] mt-2 font-medium">
                Official Google Registration Form
              </span>
            </div>

            <p className="text-xs text-[#64748B] mt-4 max-w-xs">
              Quick mobile team entry form. Registration fee: ₹250/- per team.
            </p>
          </div>

        </div>

        {/* Substitution guide */}
        <div className="mt-8 text-center">
          <span className="text-[11px] text-[#64748B] font-mono-code bg-[#F4F8FF] px-3 py-1.5 rounded-full border border-[#E8EEF8]">
            QR containers remain clean placeholders until final destination QR image assets are supplied.
          </span>
        </div>

      </div>
    </section>
  );
};
