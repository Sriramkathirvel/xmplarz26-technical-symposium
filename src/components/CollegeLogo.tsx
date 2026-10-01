import React from 'react';

interface CollegeLogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
  withGlow?: boolean;
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({
  className = '',
  size = 50,
  alt = 'Mahendra Institute of Technology Logo',
}) => {
  const dimensionStyle = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : {};

  return (
    <div className="relative inline-flex items-center justify-center shrink-0 p-0.5 sm:p-1 rounded-full bg-white dark:bg-white shadow-xs dark:shadow-md dark:shadow-blue-500/25 ring-1 ring-[#168BFF]/20 dark:ring-blue-400/60 transition-all duration-300">
      <img
        src="/mit-logo.jpg"
        alt={alt}
        style={dimensionStyle}
        className={`object-contain rounded-full bg-white relative z-10 transition-transform duration-300 hover:scale-105 ${className}`}
      />
    </div>
  );
};

