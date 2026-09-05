import React from 'react';
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

  return (
    <motion.div
      id={`event-card-${event.id}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-[#E8EEF8] hover:border-[#168BFF]/50 hover:bg-gradient-to-b hover:from-white hover:to-[#F4F8FF]/50 transition-all duration-300 shadow-sm overflow-hidden cursor-pointer card-hover-modern"
      onClick={() => onSelect(event)}
    >
      {/* Top Card Accent Bar on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#123B8F] via-[#168BFF] to-[#F5B82E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top Card Header: Event Number & Icon */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-extrabold text-[#168BFF] font-mono-code tracking-widest px-3 py-1 rounded-lg bg-[#F4F8FF] border border-[#E8EEF8] shadow-2xs">
            #{event.number}
          </span>
          <div className="w-11 h-11 rounded-2xl bg-[#F4F8FF] border border-[#E8EEF8] group-hover:border-[#168BFF] group-hover:bg-[#123B8F] group-hover:text-white text-[#123B8F] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs">
            <IconComponent className="w-5 h-5 transition-transform" />
          </div>
        </div>

        {/* Event Name */}
        <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] group-hover:text-[#123B8F] transition-colors font-display mb-2">
          {event.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4 font-normal">
          {event.shortDescription}
        </p>
      </div>

      {/* Card Footer: Metadata and Action Button */}
      <div className="pt-4 border-t border-[#E8EEF8] flex flex-col gap-3">
        {/* Team Size & Format details */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#64748B]">
          {event.teamSize && (
            <span className="inline-flex items-center gap-1.5 bg-[#F4F8FF] border border-[#E8EEF8] px-2.5 py-1 rounded-md text-[#123B8F] font-mono-code">
              <Users className="w-3.5 h-3.5 text-[#168BFF]" />
              {event.teamSize}
            </span>
          )}
          {event.format && (
            <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md text-amber-900 font-mono-code">
              <FileCheck2 className="w-3.5 h-3.5 text-[#F5B82E]" />
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
          className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-bold text-[#123B8F] group-hover:text-white py-2.5 px-4 rounded-xl bg-[#F4F8FF] group-hover:bg-gradient-to-r group-hover:from-[#123B8F] group-hover:to-[#168BFF] border border-[#E8EEF8] group-hover:border-transparent transition-all duration-300 shadow-2xs group-hover:shadow-md cursor-pointer"
        >
          <span>Explore Guidelines</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
