import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  id,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl text-left text-sm font-medium flex items-center justify-between transition-all duration-200 cursor-pointer outline-none bg-slate-900/90 border border-slate-700/80 hover:border-sky-500/60 text-white shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] ${
          isOpen ? 'ring-2 ring-sky-500/30 border-sky-400' : ''
        }`}
      >
        <span className="truncate pr-2 font-mono-code text-xs sm:text-sm text-slate-100">
          {selectedOption?.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-sky-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-sky-300' : ''
          }`}
        />
      </button>

      {/* Animated Options Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 z-50 p-1.5 rounded-2xl bg-slate-900/95 border border-sky-500/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(14,165,233,0.2)] backdrop-blur-xl overflow-hidden max-h-64 overflow-y-auto"
          >
            <div className="space-y-1">
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                        : 'text-slate-300 hover:bg-slate-800/90 hover:text-white'
                    }`}
                  >
                    <span className="font-mono-code leading-tight truncate">{option.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-sky-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
