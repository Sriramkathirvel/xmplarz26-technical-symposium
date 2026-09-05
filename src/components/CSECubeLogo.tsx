import React from 'react';

interface CSECubeLogoProps {
  className?: string;
  size?: number | string;
  withGlow?: boolean;
}

export const CSECubeLogo: React.FC<CSECubeLogoProps> = ({
  className = "w-10 h-10",
  size,
  withGlow = false
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`} style={style}>
      {withGlow && (
        <div className="absolute inset-0 bg-[#168BFF]/20 rounded-full blur-xl transform scale-125 -z-10 pointer-events-none" />
      )}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-label="Department of Computer Science and Engineering CSE Cube Logo"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="topFaceGrad" x1="30" y1="20" x2="170" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EBF3FF" />
            <stop offset="100%" stopColor="#C9DEFF" />
          </linearGradient>
          
          <linearGradient id="leftFaceGrad" x1="30" y1="60" x2="100" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#123B8F" />
            <stop offset="100%" stopColor="#0B2256" />
          </linearGradient>

          <linearGradient id="rightFaceGrad" x1="100" y1="60" x2="170" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#6C3BFF" />
          </linearGradient>

          <linearGradient id="goldAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5B82E" />
            <stop offset="100%" stopColor="#E5A015" />
          </linearGradient>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Isometric Cube Faces */}
        
        {/* TOP FACE */}
        <polygon
          points="100,24 168,62 100,100 32,62"
          fill="url(#topFaceGrad)"
          stroke="#168BFF"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* LEFT FACE */}
        <polygon
          points="32,62 100,100 100,176 32,138"
          fill="url(#leftFaceGrad)"
          stroke="#123B8F"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* RIGHT FACE */}
        <polygon
          points="100,100 168,62 168,138 100,176"
          fill="url(#rightFaceGrad)"
          stroke="#168BFF"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Top Face Tech Circuit Patterns */}
        <path
          d="M 66 43 L 100 62 L 134 43"
          stroke="#168BFF"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.8"
        />
        <circle cx="100" cy="62" r="3" fill="#6C3BFF" />
        <circle cx="66" cy="43" r="2" fill="#123B8F" />
        <circle cx="134" cy="43" r="2" fill="#168BFF" />

        {/* Left Face - Microchip Circuit Traces */}
        <path
          d="M 50 82 L 78 98 L 78 145"
          stroke="#6C3BFF"
          strokeWidth="1.5"
          opacity="0.75"
        />
        <circle cx="50" cy="82" r="2.5" fill="#F5B82E" />
        <circle cx="78" cy="145" r="2.5" fill="#168BFF" />
        
        {/* Left Face 'C' Symbol on isometric slant */}
        <text
          x="52"
          y="126"
          fill="#FFFFFF"
          fontSize="26"
          fontWeight="800"
          fontFamily="'Outfit', sans-serif"
          transform="matrix(0.866 0.5 -0.1 0.95 0 0)"
          letterSpacing="0.05em"
          opacity="0.95"
        >
          C
        </text>

        {/* Right Face - Circuit Tracks */}
        <path
          d="M 122 145 L 122 102 L 150 86"
          stroke="#EBF3FF"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <circle cx="122" cy="145" r="2.5" fill="#F5B82E" />
        <circle cx="150" cy="86" r="2.5" fill="#FFFFFF" />

        {/* Right Face 'SE' on isometric plane */}
        <text
          x="108"
          y="132"
          fill="#FFFFFF"
          fontSize="24"
          fontWeight="800"
          fontFamily="'Outfit', sans-serif"
          transform="matrix(0.866 -0.5 0.1 0.95 0 0)"
          letterSpacing="0.05em"
        >
          SE
        </text>

        {/* Center Isometric Node / Core Spark */}
        <circle cx="100" cy="100" r="4.5" fill="#F5B82E" filter="url(#subtleGlow)" />
        <circle cx="100" cy="100" r="2" fill="#FFFFFF" />

        {/* Corner Precision Pins */}
        <circle cx="100" cy="24" r="2.5" fill="#168BFF" />
        <circle cx="168" cy="62" r="2.5" fill="#6C3BFF" />
        <circle cx="32" cy="62" r="2.5" fill="#123B8F" />
        <circle cx="100" cy="176" r="2.5" fill="#6C3BFF" />
        <circle cx="32" cy="138" r="2" fill="#123B8F" opacity="0.6" />
        <circle cx="168" cy="138" r="2" fill="#168BFF" opacity="0.6" />
      </svg>
    </div>
  );
};
