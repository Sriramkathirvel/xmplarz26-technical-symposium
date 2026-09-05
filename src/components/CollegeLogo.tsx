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
    <div className="relative inline-flex items-center justify-center shrink-0">
      <img
        src="/mit-logo.jpg"
        alt={alt}
        style={dimensionStyle}
        className={`object-contain rounded-full bg-transparent mix-blend-multiply contrast-[1.1] relative z-10 transition-transform duration-300 hover:scale-105 ${className}`}
      />
    </div>
  );
};

