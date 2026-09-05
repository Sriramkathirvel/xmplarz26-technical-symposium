import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    // 1.3s (1300ms): Start smooth 0.2s fade out transition
    const timerFade = setTimeout(() => {
      setIsVisible(false);
    }, 1300);

    // 1.5s (1500ms): Unmount loading screen & notify App
    const timerComplete = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerComplete);
    };
  }, [onComplete]);

  // Letter array matching the exact brand typography from the screenshot
  const characters = [
    { char: 'X', isGold: false, delay: 0.20 },
    { char: 'M', isGold: false, delay: 0.27 },
    { char: 'P', isGold: false, delay: 0.34 },
    { char: 'L', isGold: false, delay: 0.41 },
    { char: 'A', isGold: false, delay: 0.48 },
    { char: 'R', isGold: false, delay: 0.55 },
    { char: 'Z', isGold: false, delay: 0.62 },
    { char: '’', isGold: true,  delay: 0.70 },
    { char: '2', isGold: true,  delay: 0.78 },
    { char: '6', isGold: true,  delay: 0.86 },
  ];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080E24] overflow-hidden select-none cursor-default"
        >
          {/* Ambient Blue Background Glow (0.0s - 0.2s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            <div 
              className="w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full blur-[140px]"
              style={{
                background: 'radial-gradient(circle, rgba(22, 139, 255, 0.22) 0%, rgba(108, 59, 255, 0.12) 45%, transparent 70%)'
              }}
            />
          </motion.div>

          {/* Center Typing Reveal Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full">
            
            {/* Soft Ambient Backlight behind wordmark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 1] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -inset-6 bg-gradient-to-r from-[#168BFF]/25 via-[#6C3BFF]/20 to-[#F5B82E]/25 rounded-3xl blur-2xl pointer-events-none"
            />

            {/* Letter-by-Letter Typing Reveal Headline */}
            <h1 className="relative z-10 text-5xl sm:text-7xl md:text-8xl font-black tracking-tight font-display flex items-center justify-center leading-none">
              {characters.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.85, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.14,
                    delay: item.delay,
                    ease: "easeOut"
                  }}
                  className={`inline-block transition-all ${
                    item.isGold
                      ? 'text-[#F5B82E] drop-shadow-[0_2px_14px_rgba(245,184,46,0.45)]'
                      : 'text-[#168BFF] sm:text-white drop-shadow-[0_2px_16px_rgba(22,139,255,0.45)]'
                  }`}
                >
                  {item.char}
                </motion.span>
              ))}

              {/* Sleek Light Beam Typing Cursor */}
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0] }}
                transition={{ duration: 0.3, delay: 0.95 }}
                className="inline-block w-1.5 h-10 sm:h-16 bg-[#168BFF] rounded-full ml-1 shadow-[0_0_12px_#168BFF] animate-pulse"
              />
            </h1>

            {/* Settled Subtitle (1.0s - 1.3s) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.95, ease: "easeOut" }}
              className="mt-6 flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono-code font-bold tracking-[0.25em] text-[#168BFF] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-pulse" />
              <span>National Level Technical Symposium</span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
