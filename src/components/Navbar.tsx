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
          ? 'h-16 sm:h-20 lg:h-22 bg-white/75 backdrop-blur-xl border-b border-[#E8EEF8]/80 shadow-md shadow-blue-950/5'
          : 'h-16 sm:h-20 lg:h-22 bg-white/55 backdrop-blur-md border-b border-[#E8EEF8]/40'
      } flex items-center`}
    >
      {/* Top subtle golden-blue gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#F5B82E] opacity-90" />

      {/* Symmetrical Container with Equal Left/Right Margins */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4 lg:gap-8">
          
          {/* Brand Left: Official College Emblem + College Name & Department */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-brand-logo"
            className="flex items-center gap-1.5 sm:gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#168BFF]/40 rounded-xl p-0.5 transition-all shrink min-w-0"
          >
            <div className="block sm:hidden shrink-0">
              <CollegeLogo size={36} alt="Mahendra Institute of Technology Emblem" />
            </div>
            <div className="hidden sm:block shrink-0">
              <CollegeLogo size={58} alt="Mahendra Institute of Technology Emblem" />
            </div>

            <div className="flex flex-col text-left min-w-0">
              <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-[14px] lg:text-[15px] uppercase tracking-tight sm:tracking-wider font-black text-[#123B8F] leading-tight group-hover:text-[#168BFF] transition-colors truncate">
                <span className="sm:hidden">MIT MALLASAMUDRAM</span>
                <span className="hidden sm:inline">{SYMPOSIUM_INFO.college}</span>
              </p>
              <p className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold text-[#64748B] tracking-tight truncate">
                <span className="sm:hidden">CSE DEPARTMENT</span>
                <span className="hidden sm:inline">{SYMPOSIUM_INFO.department}</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links - Evenly Spaced */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#123B8F] bg-[#F4F8FF] shadow-2xs'
                      : 'text-[#64748B] hover:text-[#123B8F] hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBadge"
                      className="absolute inset-0 rounded-xl bg-[#F4F8FF] border border-[#168BFF]/20 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Responsive Registration CTA & Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
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
              className="relative inline-flex items-center gap-1.5 sm:gap-2.5 bg-gradient-to-r from-[#123B8F] to-[#168BFF] hover:from-[#0E2F73] hover:to-[#1276DC] text-white px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[10px] xs:text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-md hover:shadow-lg hover:shadow-blue-600/25 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#168BFF]/40 cursor-pointer shrink-0 group border border-white/20"
            >
              {/* Live Emerald Pulse Dot */}
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-400 shadow-2xs"></span>
              </span>

              {/* Button Text - Adaptive for mobile */}
              <span className="font-extrabold tracking-wide text-white whitespace-nowrap">
                <span className="hidden md:inline">REG OPEN • </span>
                <span className="hidden sm:inline">REGISTER NOW</span>
                <span className="sm:hidden">REGISTER</span>
              </span>

              {/* Golden Arrow Circle Icon */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F5B82E] text-[#123B8F] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shrink-0 shadow-2xs">
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
              </div>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#123B8F] bg-[#F4F8FF] hover:bg-[#E8EEF8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BFF]/40 cursor-pointer transition-all border border-[#E8EEF8] active:scale-95 shrink-0"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#123B8F]" /> : <Menu className="w-5 h-5 text-[#123B8F]" />}
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
              className="fixed inset-0 top-16 sm:top-20 bg-slate-950/60 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Slide Down Menu Content Container */}
            <motion.div
              id="mobile-dropdown-menu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-[#E8EEF8] shadow-2xl z-50 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="p-3.5 sm:p-4 space-y-3 sm:space-y-3.5 max-w-lg mx-auto">
                
                {/* Mobile Drawer Header / Institution Card */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#F4F8FF] via-white to-[#F4F8FF] border border-[#168BFF]/20 flex items-center justify-between gap-2.5 shadow-2xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CollegeLogo size={42} alt="MIT Emblem" />
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-[#123B8F] leading-tight truncate">
                        {SYMPOSIUM_INFO.college}
                      </h4>
                      <p className="text-[10px] text-[#64748B] font-bold mt-0.5 truncate">
                        {SYMPOSIUM_INFO.name} • {SYMPOSIUM_INFO.eventDate}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-300/80 text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider shadow-2xs shrink-0 font-mono-code flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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
                            ? 'text-[#123B8F] bg-[#F4F8FF] border-[#168BFF]/30 shadow-2xs font-extrabold'
                            : 'text-[#64748B] hover:text-[#111827] bg-white border-[#E8EEF8] hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#123B8F] text-white' : 'bg-[#F4F8FF] text-[#123B8F] border border-[#E8EEF8]'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#168BFF] translate-x-0.5' : 'text-slate-300'}`} />
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Action Block & Contacts */}
                <div className="pt-2 space-y-2.5 border-t border-[#E8EEF8]">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#64748B] bg-amber-50/90 border border-amber-200/80 p-2.5 rounded-xl font-semibold">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Team size requirements apply per selected event.</span>
                  </div>

                  {/* Direct Registration CTA */}
                  <a
                    href="#register"
                    onClick={(e) => handleNavClick(e, '#register')}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#123B8F] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-blue-400/20 active:scale-95"
                  >
                    <span>Proceed to Registration Portal</span>
                    <div className="w-4.5 h-4.5 rounded-full bg-[#F5B82E] text-[#123B8F] flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  </a>

                  {/* Mobile Quick Tap Contact & Map Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <a
                      href={`tel:${SYMPOSIUM_INFO.contacts[0].number}`}
                      className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#123B8F] bg-[#F4F8FF] border border-[#E8EEF8] py-2 px-2.5 rounded-xl hover:bg-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#168BFF]" />
                      <span>Call Support</span>
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, '#contact')}
                      className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#111827] bg-[#F4F8FF] border border-[#E8EEF8] py-2 px-2.5 rounded-xl hover:bg-white transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#6C3BFF]" />
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

