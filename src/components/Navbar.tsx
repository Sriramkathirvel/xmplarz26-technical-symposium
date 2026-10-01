import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Home, 
  Info, 
  Sparkles, 
  Calendar, 
  UserPlus, 
  Phone, 
  ChevronRight,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { SYMPOSIUM_INFO } from '../data/eventData';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');



  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Events', href: '#events', icon: Sparkles },
    { name: 'Important Dates', href: '#dates', icon: Calendar },
    { name: 'Register', href: '#register', icon: UserPlus },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      const sections = ['home', 'about', 'events', 'dates', 'register', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'h-16 sm:h-20 bg-white/80 dark:bg-[#030712]/90 backdrop-blur-xl border-b border-[#E8EEF8] dark:border-slate-800/80 shadow-[0_4px_20px_-4px_rgba(18,59,143,0.08)] dark:shadow-md dark:shadow-blue-950/20'
          : 'h-16 sm:h-20 bg-white/70 dark:bg-[#030712]/80 backdrop-blur-md border-b border-[#E8EEF8]/70 dark:border-slate-800/60 shadow-xs dark:shadow-none'
      } flex items-center`}
    >
      {/* Symmetrical Container with Responsive Spacing */}
      <div className="max-w-[1440px] mx-auto px-2.5 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          
          {/* Brand Left: Official College Emblem + Full College Name & Department */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-brand-logo"
            className="flex items-center gap-2 sm:gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#168BFF]/40 rounded-xl p-0.5 transition-all min-w-0 max-w-[58%] xs:max-w-[65%] sm:max-w-none"
          >
            <div className="shrink-0 group-hover:scale-105 transition-transform duration-200">
              <div className="sm:hidden">
                <CollegeLogo size={34} alt="Mahendra Institute of Technology Emblem" />
              </div>
              <div className="hidden sm:block">
                <CollegeLogo size={48} alt="Mahendra Institute of Technology Emblem" />
              </div>
            </div>

            <div className="flex flex-col text-left min-w-0">
              <span className="text-[10px] xs:text-[11.5px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] uppercase tracking-tight sm:tracking-normal font-black text-[#38BDF8] leading-tight group-hover:text-blue-300 transition-colors truncate">
                <span className="xs:hidden">MAHENDRA INST. OF TECH.</span>
                <span className="hidden xs:inline">{SYMPOSIUM_INFO.college}</span>
              </span>
              <span className="text-[7.5px] xs:text-[9px] sm:text-[10.5px] font-bold text-slate-300 tracking-tight sm:tracking-wider uppercase truncate">
                <span className="xs:hidden">DEPT. OF CSE</span>
                <span className="hidden xs:inline">{SYMPOSIUM_INFO.department}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Evenly Spaced */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2.5 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-sky-300 font-extrabold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBadge"
                      className="absolute inset-0 rounded-xl bg-slate-800/90 border border-blue-500/50 shadow-none -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Responsive Registration CTA & Mobile Hamburger */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">

            {/* Minimalist Solid Pill CTA */}
            <a
              href="#register"
              id="nav-register-btn"
              onClick={(e) => {
                if (onRegisterClick) {
                  e.preventDefault();
                  onRegisterClick();
                } else {
                  handleNavClick(e, '#register');
                }
              }}
              className="relative inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2.5 bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#4F46E5] text-white px-2.5 py-1.5 xs:px-3 xs:py-2 sm:px-4.5 sm:py-2.5 rounded-full text-[9px] xs:text-xs sm:text-xs xl:text-sm font-extrabold uppercase tracking-wider shadow-[0_4px_16px_-2px_rgba(14,165,233,0.4)] hover:shadow-[0_8px_25px_-4px_rgba(14,165,233,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/40 cursor-pointer shrink-0 group border border-white/20"
            >
              {/* Live Emerald Pulse Dot */}
              <span className="relative flex h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 bg-emerald-400 shadow-2xs"></span>
              </span>

              {/* Button Text - Adaptive for mobile */}
              <span className="font-extrabold tracking-wide text-white whitespace-nowrap">
                <span className="hidden xl:inline">REG OPEN • </span>
                <span className="hidden sm:inline">REGISTER NOW</span>
                <span className="sm:hidden">REGISTER</span>
              </span>

              {/* Golden Arrow Circle Icon */}
              <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-[#F5B82E] text-slate-950 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shrink-0 shadow-2xs">
                <ArrowUpRight className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
              </div>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 xs:p-2 text-sky-400 bg-slate-800/90 hover:bg-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/40 cursor-pointer transition-all border border-slate-700/80 active:scale-95 shrink-0 shadow-sm"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5 xs:w-5 xs:h-5 text-sky-300" /> : <Menu className="w-4.5 h-4.5 xs:w-5 xs:h-5 text-sky-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-16 sm:top-20 bg-slate-950/75 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Slide Down Menu Content Container */}
            <motion.div
              id="mobile-dropdown-menu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl shadow-blue-950/30 z-50 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="p-3.5 sm:p-4 space-y-3 sm:space-y-3.5 max-w-lg mx-auto">
                
                {/* Mobile Drawer Header / Institution Card */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800/90 to-slate-900 border border-sky-500/30 flex items-center justify-between gap-2.5 shadow-sm">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CollegeLogo size={40} alt="MIT Emblem" />
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-[#38BDF8] leading-tight truncate">
                        {SYMPOSIUM_INFO.college}
                      </h4>
                      <p className="text-[10px] text-slate-300 font-bold mt-0.5 truncate">
                        {SYMPOSIUM_INFO.name} • {SYMPOSIUM_INFO.eventDate}
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-[9px] sm:text-[10px] font-extrabold text-emerald-300 uppercase tracking-wider shrink-0 font-mono-code flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    REG OPEN
                  </span>
                </div>

                {/* Mobile Navigation Links */}
                <div className="grid grid-cols-1 gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`px-3.5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                          isActive
                            ? 'text-sky-300 bg-slate-800/90 border-blue-500/40 shadow-xs font-extrabold'
                            : 'text-slate-300 hover:text-white bg-slate-900/80 border-slate-800 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400 border border-slate-700'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-blue-400 translate-x-0.5' : 'text-slate-600'}`} />
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Action Block & Contacts */}
                <div className="pt-2 space-y-2.5 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-sky-300/90 bg-sky-950/40 border border-sky-800/50 p-2.5 rounded-xl font-semibold">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Team size requirements apply per selected event.</span>
                  </div>

                  {/* Direct Registration CTA */}
                  <a
                    href="#register"
                    onClick={(e) => handleNavClick(e, '#register')}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#4F46E5] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-blue-400/20 active:scale-95"
                  >
                    <span>Proceed to Registration Portal</span>
                    <div className="w-4.5 h-4.5 rounded-full bg-[#F5B82E] text-slate-950 flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  </a>

                  {/* Mobile Quick Tap Contact & Map Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <a
                      href={`tel:${SYMPOSIUM_INFO.contacts[0].number}`}
                      className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-blue-400 bg-slate-800 border border-slate-700 py-2 px-2.5 rounded-xl hover:bg-slate-700 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-400" />
                      <span>Call Support</span>
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, '#contact')}
                      className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-200 bg-slate-800 border border-slate-700 py-2 px-2.5 rounded-xl hover:bg-slate-700 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

