import React from 'react';
import { ArrowUpRight, Phone, MapPin, Calendar } from 'lucide-react';
import { CSECubeLogo } from './CSECubeLogo';
import { CollegeLogo } from './CollegeLogo';
import { SYMPOSIUM_INFO } from '../data/eventData';

interface FooterProps {
  onRegisterClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRegisterClick }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Important Dates', href: '#dates' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#123B8F] dark:bg-[#060913] text-white pt-16 pb-8 relative overflow-hidden border-t border-transparent dark:border-slate-800/80">
      {/* Background Subtle Tech Line & Ambient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B82E]/40 to-transparent" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 dark:opacity-10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#168BFF]/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 dark:border-slate-800">
          
          {/* Col 1: Brand, Logo, Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <CollegeLogo size={54} alt="Mahendra Institute of Technology Logo" />
              <div>
                <span className="text-xl font-extrabold text-white font-display tracking-tight">
                  XMPLARZ<span className="text-[#F5B82E]">’26</span>
                </span>
                <span className="block text-xs font-semibold text-white/70 dark:text-slate-400 uppercase tracking-wider font-mono-code">
                  {SYMPOSIUM_INFO.eventType}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 dark:text-slate-300 leading-relaxed max-w-sm">
              Organized by the {SYMPOSIUM_INFO.department} at {SYMPOSIUM_INFO.college}. A national stage to present, build, solve, and compete.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F5B82E] font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#F5B82E]" />
              <span>Symposium Date: {SYMPOSIUM_INFO.eventDate}</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 dark:text-slate-300 font-mono-code">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-white/70 dark:text-slate-400 hover:text-white dark:hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Numbers & Registration Action (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 dark:text-slate-300 font-mono-code">
              Symposium Desk
            </h4>

            <div className="space-y-2 text-xs text-white/80 dark:text-slate-300">
              <div className="flex items-center gap-2 font-mono-code text-white dark:text-slate-200">
                <Phone className="w-3.5 h-3.5 text-[#F5B82E]" />
                <span>+91 9360531080 / 9944757838 / 6380570376</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-white/75 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-white/80 dark:text-slate-300 shrink-0 mt-0.5" />
                <span>{SYMPOSIUM_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#register"
                id="footer-register-btn"
                onClick={(e) => {
                  if (onRegisterClick) {
                    e.preventDefault();
                    onRegisterClick();
                  } else {
                    handleLinkClick(e, '#register');
                  }
                }}
                className="inline-flex items-center gap-3 px-6 py-3 text-xs sm:text-sm font-extrabold text-[#123B8F] dark:text-white bg-white dark:bg-slate-800 hover:bg-[#F4F8FF] dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-95 rounded-full transition-all duration-300 shadow-xl cursor-pointer group border border-transparent dark:border-slate-700"
              >
                <span>Register for XMPLARZ’26</span>
                <div className="w-5 h-5 rounded-full bg-[#F5B82E] dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500 text-[#123B8F] dark:text-slate-950 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-2xs">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip matching Professional Polish Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/70 dark:text-slate-400">
          <p>© 2026 XMPLARZ’26. All rights reserved by CSE Department.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#F5B82E] rounded-full" />
              <span>IEEE Compliance</span>
            </span>
            <span>Support: {SYMPOSIUM_INFO.officialEmail}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
