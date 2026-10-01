import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Users, 
  FileText, 
  Cpu, 
  Code2, 
  Terminal, 
  Sparkles, 
  Link2, 
  Eye, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { EventItem } from '../types';

interface EventCardProps {
  event: EventItem;
  onSelect: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Dynamically map icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'Cpu': return Cpu;
      case 'Code2': return Code2;
      case 'Terminal': return Terminal;
      case 'Sparkles': return Sparkles;
      case 'Link2': return Link2;
      case 'Eye': return Eye;
      case 'HelpCircle': return HelpCircle;
      default: return FileText;
    }
  };

  const IconComponent = getIcon(event.iconName);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      id={`event-card-${event.id}`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0D1424] border border-[#E8EEF8] dark:border-slate-800/80 hover:border-transparent transition-all duration-500 shadow-sm hover:shadow-[0_12px_30px_-6px_rgba(22,139,255,0.22),0_0_20px_0_rgba(108,59,255,0.12)] dark:hover:shadow-[0_12px_30px_-6px_rgba(59,130,246,0.35),0_0_20px_0_rgba(139,92,246,0.25)] overflow-hidden cursor-pointer"
      onClick={() => onSelect(event)}
    >
      {/* 1. Subtle Inner Surface Glow following mouse/border movement */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.09) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 75%)'
        }}
      />

      {/* 2. Thin Animated Glowing Light Trail Overlay (60fps SVG Path tracing) */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="w-full h-full text-transparent">
          <defs>
            <linearGradient id={`light-trail-grad-${event.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#E0F2FE" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
            <filter id={`glow-${event.id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="24"
            ry="24"
            fill="none"
            stroke={`url(#light-trail-grad-${event.id})`}
            strokeWidth="1.75"
            filter={`url(#glow-${event.id})`}
            className="path-light-streak"
            pathLength="100"
          />
        </svg>
      </div>

      {/* Top Card Header: Event Number & Icon */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-extrabold text-[#168BFF] dark:text-[#60A5FA] font-mono-code tracking-widest px-3 py-1 rounded-lg bg-[#F4F8FF] dark:bg-slate-800/80 border border-[#E8EEF8] dark:border-slate-700/80 shadow-2xs">
            #{event.number}
          </span>
          <div className="w-11 h-11 rounded-2xl bg-[#F4F8FF] dark:bg-slate-800/80 border border-[#E8EEF8] dark:border-slate-700/80 group-hover:border-[#168BFF] dark:group-hover:border-blue-400 group-hover:bg-[#123B8F] dark:group-hover:bg-blue-600 group-hover:text-white text-[#123B8F] dark:text-blue-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs">
            <IconComponent className="w-5 h-5 transition-transform" />
          </div>
        </div>

        {/* Event Name */}
        <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] dark:text-white group-hover:text-[#123B8F] dark:group-hover:text-[#60A5FA] transition-colors font-display mb-2">
          {event.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed mb-4 font-normal">
          {event.shortDescription}
        </p>
      </div>

      {/* Card Footer: Metadata and Action Button */}
      <div className="pt-4 border-t border-[#E8EEF8] dark:border-slate-800/80 flex flex-col gap-3 relative z-10">
        {/* Team Size & Format details */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#64748B] dark:text-slate-300">
          {event.teamSize && (
            <span className="inline-flex items-center gap-1.5 bg-[#F4F8FF] dark:bg-slate-800/90 border border-[#E8EEF8] dark:border-slate-700 px-2.5 py-1 rounded-md text-[#123B8F] dark:text-sky-300 font-mono-code">
              <Users className="w-3.5 h-3.5 text-[#168BFF] dark:text-sky-400" />
              {event.teamSize}
            </span>
          )}
          {event.format && (
            <span className="inline-flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 px-2.5 py-1 rounded-md text-amber-900 dark:text-amber-300 font-mono-code">
              <FileCheck2 className="w-3.5 h-3.5 text-[#F5B82E] dark:text-amber-400" />
              {event.format}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(event);
          }}
          className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-extrabold text-sky-400 group-hover:text-white py-2.5 px-4 rounded-xl bg-slate-900/90 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:via-blue-600 group-hover:to-indigo-600 border border-slate-800 group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_25px_-4px_rgba(14,165,233,0.5)] cursor-pointer"
        >
          <span>Explore Guidelines</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
