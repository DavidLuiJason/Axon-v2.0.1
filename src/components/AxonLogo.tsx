/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * AXON Official Identity Logo
 * Biological axon arborization / neural tree of intelligence.
 */

import React from 'react';

interface AxonLogoProps {
  size?: number | string;
  className?: string;
  color?: string;
}

export const AxonLogo: React.FC<AxonLogoProps> = ({
  size = 48,
  className = '',
  color = '#E85A3C',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="AXON Logo"
    >
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
        {/* Main Trunk */}
        <path
          d="M 60 76 L 60 62"
          strokeWidth="3.2"
        />
        <path
          d="M 58 76 Q 59 64 57 56"
          strokeWidth="2.2"
        />
        <path
          d="M 62 76 Q 61 64 63 56"
          strokeWidth="2.2"
        />

        {/* Lower Roots System */}
        {/* Central taproots */}
        <path d="M 60 76 L 60 88" strokeWidth="2.4" />
        <path d="M 60 88 L 57 96 M 60 88 L 63 96" strokeWidth="1.6" />
        <path d="M 57 96 L 55 101 M 57 96 L 59 100" strokeWidth="1.2" />
        <path d="M 63 96 L 61 100 M 63 96 L 66 101" strokeWidth="1.2" />

        {/* Left roots */}
        <path d="M 58 76 Q 52 82 48 88" strokeWidth="2" />
        <path d="M 48 88 Q 43 93 39 96" strokeWidth="1.5" />
        <path d="M 39 96 L 34 98 M 39 96 L 41 101" strokeWidth="1.1" />
        <path d="M 52 82 Q 47 88 45 94" strokeWidth="1.3" />
        <path d="M 45 94 L 43 99 M 45 94 L 47 98" strokeWidth="1" />
        <path d="M 56 80 Q 51 86 51 92" strokeWidth="1.4" />
        <path d="M 51 92 L 49 98 M 51 92 L 53 97" strokeWidth="1" />

        {/* Right roots */}
        <path d="M 62 76 Q 68 82 72 88" strokeWidth="2" />
        <path d="M 72 88 Q 77 93 81 96" strokeWidth="1.5" />
        <path d="M 81 96 L 86 98 M 81 96 L 79 101" strokeWidth="1.1" />
        <path d="M 68 82 Q 73 88 75 94" strokeWidth="1.3" />
        <path d="M 75 94 L 77 99 M 75 94 L 73 98" strokeWidth="1" />
        <path d="M 64 80 Q 69 86 69 92" strokeWidth="1.4" />
        <path d="M 69 92 L 71 98 M 69 92 L 67 97" strokeWidth="1" />

        {/* Primary Upper Boughs */}
        {/* Left main bough */}
        <path d="M 59 60 Q 52 50 44 43" strokeWidth="2.5" />
        {/* Right main bough */}
        <path d="M 61 60 Q 68 50 76 43" strokeWidth="2.5" />
        {/* Center ascending branch */}
        <path d="M 60 58 Q 58 48 56 38" strokeWidth="2.1" />
        <path d="M 60 58 Q 62 48 64 38" strokeWidth="2.1" />

        {/* Left Bough Sub-branches */}
        <path d="M 52 50 Q 43 48 35 44" strokeWidth="1.9" />
        <path d="M 44 43 Q 36 37 32 30" strokeWidth="1.8" />
        <path d="M 44 43 Q 45 34 46 25" strokeWidth="1.7" />
        <path d="M 48 47 Q 44 38 41 31" strokeWidth="1.6" />

        {/* Far Left Branching System */}
        <path d="M 35 44 Q 28 43 22 41" strokeWidth="1.5" />
        <path d="M 35 44 Q 31 51 25 54" strokeWidth="1.4" />
        <path d="M 25 54 L 20 56 M 25 54 L 27 60" strokeWidth="1.1" />
        <path d="M 22 41 L 16 41 M 22 41 L 19 36" strokeWidth="1.2" />
        <path d="M 28 43 L 26 36 M 28 43 L 23 46" strokeWidth="1.1" />
        <path d="M 32 30 Q 25 28 20 25" strokeWidth="1.3" />
        <path d="M 20 25 L 15 25 M 20 25 L 18 20" strokeWidth="1.1" />
        <path d="M 32 30 Q 28 22 26 16" strokeWidth="1.3" />
        <path d="M 26 16 L 22 13 M 26 16 L 27 10" strokeWidth="1.1" />

        {/* Left-Center Upper Canopy */}
        <path d="M 41 31 Q 37 24 35 18" strokeWidth="1.3" />
        <path d="M 35 18 L 31 14 M 35 18 L 37 12" strokeWidth="1.1" />
        <path d="M 41 31 Q 43 23 45 16" strokeWidth="1.3" />
        <path d="M 45 16 L 42 11 M 45 16 L 47 10" strokeWidth="1.1" />
        <path d="M 46 25 Q 49 19 51 13" strokeWidth="1.3" />
        <path d="M 51 13 L 49 8 M 51 13 L 53 7" strokeWidth="1.1" />

        {/* Center Canopy */}
        <path d="M 56 38 Q 54 28 53 20" strokeWidth="1.6" />
        <path d="M 53 20 L 51 13 M 53 20 L 55 12" strokeWidth="1.2" />
        <path d="M 56 38 Q 59 29 60 22" strokeWidth="1.4" />
        <path d="M 60 22 L 58 15 M 60 22 L 62 14" strokeWidth="1.1" />
        <path d="M 64 38 Q 66 28 67 20" strokeWidth="1.6" />
        <path d="M 67 20 L 65 12 M 67 20 L 69 13" strokeWidth="1.2" />
        <path d="M 64 38 Q 61 29 60 22" strokeWidth="1.4" />

        {/* Right Bough Sub-branches */}
        <path d="M 68 50 Q 77 48 85 44" strokeWidth="1.9" />
        <path d="M 76 43 Q 84 37 88 30" strokeWidth="1.8" />
        <path d="M 76 43 Q 75 34 74 25" strokeWidth="1.7" />
        <path d="M 72 47 Q 76 38 79 31" strokeWidth="1.6" />

        {/* Far Right Branching System */}
        <path d="M 85 44 Q 92 43 98 41" strokeWidth="1.5" />
        <path d="M 85 44 Q 89 51 95 54" strokeWidth="1.4" />
        <path d="M 95 54 L 100 56 M 95 54 L 93 60" strokeWidth="1.1" />
        <path d="M 98 41 L 104 41 M 98 41 L 101 36" strokeWidth="1.2" />
        <path d="M 92 43 L 94 36 M 92 43 L 97 46" strokeWidth="1.1" />
        <path d="M 88 30 Q 95 28 100 25" strokeWidth="1.3" />
        <path d="M 100 25 L 105 25 M 100 25 L 102 20" strokeWidth="1.1" />
        <path d="M 88 30 Q 92 22 94 16" strokeWidth="1.3" />
        <path d="M 94 16 L 98 13 M 94 16 L 93 10" strokeWidth="1.1" />

        {/* Right-Center Upper Canopy */}
        <path d="M 79 31 Q 83 24 85 18" strokeWidth="1.3" />
        <path d="M 85 18 L 89 14 M 85 18 L 83 12" strokeWidth="1.1" />
        <path d="M 79 31 Q 77 23 75 16" strokeWidth="1.3" />
        <path d="M 75 16 L 78 11 M 75 16 L 73 10" strokeWidth="1.1" />
        <path d="M 74 25 Q 71 19 69 13" strokeWidth="1.3" />
        <path d="M 69 13 L 71 8 M 69 13 L 67 7" strokeWidth="1.1" />

        {/* Intricate Neural Nodes / Foliage Tips */}
        {/* Crown top nodes */}
        <circle cx="60" cy="7" r="1.1" fill={color} />
        <circle cx="53" cy="7" r="1.0" fill={color} />
        <circle cx="67" cy="7" r="1.0" fill={color} />
        <circle cx="47" cy="9" r="0.9" fill={color} />
        <circle cx="73" cy="9" r="0.9" fill={color} />
        <circle cx="40" cy="11" r="0.9" fill={color} />
        <circle cx="80" cy="11" r="0.9" fill={color} />
        <circle cx="34" cy="13" r="0.9" fill={color} />
        <circle cx="86" cy="13" r="0.9" fill={color} />
        <circle cx="27" cy="10" r="0.8" fill={color} />
        <circle cx="93" cy="10" r="0.8" fill={color} />
        <circle cx="22" cy="13" r="0.8" fill={color} />
        <circle cx="98" cy="13" r="0.8" fill={color} />

        {/* Outer perimeter nodes */}
        <circle cx="16" cy="24" r="0.8" fill={color} />
        <circle cx="104" cy="24" r="0.8" fill={color} />
        <circle cx="14" cy="41" r="0.8" fill={color} />
        <circle cx="106" cy="41" r="0.8" fill={color} />
        <circle cx="19" cy="56" r="0.8" fill={color} />
        <circle cx="101" cy="56" r="0.8" fill={color} />

        {/* Lower root tips */}
        <circle cx="33" cy="99" r="0.7" fill={color} />
        <circle cx="41" cy="102" r="0.7" fill={color} />
        <circle cx="43" cy="100" r="0.7" fill={color} />
        <circle cx="49" cy="99" r="0.7" fill={color} />
        <circle cx="55" cy="102" r="0.7" fill={color} />
        <circle cx="65" cy="102" r="0.7" fill={color} />
        <circle cx="71" cy="99" r="0.7" fill={color} />
        <circle cx="77" cy="100" r="0.7" fill={color} />
        <circle cx="79" cy="102" r="0.7" fill={color} />
        <circle cx="87" cy="99" r="0.7" fill={color} />
      </g>
    </svg>
  );
};
