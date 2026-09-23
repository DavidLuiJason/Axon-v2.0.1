/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * AXON Official Identity Logo
 * Exact arborized neural tree matching the authoritative reference image.
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
  color = '#F25738',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="AXON Logo"
    >
      <defs>
        {/* Left half branching architecture */}
        <g id="axon-branch-network">
          {/* ================= ROOTS (Left Half) ================= */}
          {/* Inner root */}
          <path d="M 48 78 C 47 82 46 85 44 88" strokeWidth="2.4" />
          {/* Middle root */}
          <path d="M 45 77 C 43 81 39 84 36 87" strokeWidth="2.2" />
          {/* Outer root */}
          <path d="M 43 75 C 38 77 33 79 29 82" strokeWidth="2.2" />

          {/* ================= PRIMARY BOUGH ================= */}
          {/* Main sweeping limb from trunk junction */}
          <path d="M 48 56 C 44 52 38 49 32 46" strokeWidth="3.6" />
          <path d="M 32 46 C 26 43 21 42 16 46" strokeWidth="2.8" />

          {/* ================= LOWEST BRANCH GROUP (7:30 - 8:30) ================= */}
          <path d="M 39 53 C 35 56 30 60 25 64" strokeWidth="2.6" />
          <path d="M 30 60 C 27 65 24 68 22 70" strokeWidth="2.0" />
          <path d="M 25 64 C 22 66 19 66 16 64" strokeWidth="1.8" />
          <path d="M 27 63 C 28 66 29 68 31 70" strokeWidth="1.6" />

          {/* Lower bay twig (between trunk and lowest branch) */}
          <path d="M 37 55 C 36 59 34 62 33 65" strokeWidth="1.8" />
          <path d="M 35 60 C 33 62 31 64 29 65" strokeWidth="1.5" />

          {/* ================= MID-OUTER BRANCHES (8:30 - 9:30) ================= */}
          <path d="M 32 46 C 26 44 20 44 15 47" strokeWidth="2.4" />
          <path d="M 20 44 C 17 41 14 41 11 43" strokeWidth="1.8" />
          <path d="M 16 46 C 14 50 12 52 10 55" strokeWidth="1.8" />
          <path d="M 27 44 C 23 39 19 36 14 34" strokeWidth="2.0" />
          <path d="M 19 36 C 17 32 15 30 13 27" strokeWidth="1.7" />
          <path d="M 16 38 C 14 36 12 34 11 31" strokeWidth="1.5" />

          {/* Mid-inner bay twig (distinct upright fork in bay) */}
          <path d="M 41 48 C 40 43 39 39 39 35" strokeWidth="2.0" />
          <path d="M 39 39 C 37 36 35 34 33 32" strokeWidth="1.6" />
          <path d="M 39 39 C 41 36 42 34 43 32" strokeWidth="1.6" />

          {/* ================= UPPER CANOPY (9:30 - 11:30) ================= */}
          <path d="M 35 44 C 32 37 28 31 24 25" strokeWidth="2.6" />
          <path d="M 28 31 C 24 28 20 24 16 20" strokeWidth="1.9" />
          <path d="M 24 25 C 22 20 20 16 19 12" strokeWidth="1.8" />
          <path d="M 28 28 C 30 23 33 18 36 13" strokeWidth="1.8" />
          <path d="M 32 23 C 31 18 30 14 29 9" strokeWidth="1.6" />
          <path d="M 33 21 C 36 17 38 13 41 9" strokeWidth="1.6" />

          {/* Upper-inner bay twig */}
          <path d="M 44 38 C 42 33 41 28 41 23" strokeWidth="1.8" />
          <path d="M 41 28 C 39 25 38 22 37 19" strokeWidth="1.5" />

          {/* Lower central trunk side branch */}
          <path d="M 50 46 C 47 43 45 40 44 36" strokeWidth="2.0" />
          <path d="M 45 40 C 43 37 42 34 40 31" strokeWidth="1.6" />
          <path d="M 45 40 C 47 37 48 34 48 30" strokeWidth="1.6" />

          {/* Upper central trunk side branch */}
          <path d="M 50 32 C 48 27 46 22 45 17" strokeWidth="1.8" />
          <path d="M 47 24 C 44 20 43 16 42 12" strokeWidth="1.6" />

          {/* Apex crown left tip */}
          <path d="M 50 18 C 49 14 47 11 46 8" strokeWidth="1.8" />
        </g>
      </defs>

      {/* ================= CENTRAL SOLID TRUNK ================= */}
      {/* Tapered pillar with flared base and smooth crotch webbing */}
      <path
        d="M 50 50
           C 48 53 43 57 38 60
           C 43 63 45.5 68 45 78
           C 47 79 53 79 55 78
           C 54.5 68 57 63 62 60
           C 57 57 52 53 50 50
           Z"
        fill={color}
      />

      <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
        {/* Central taproot extending straight down */}
        <path d="M 50 76 L 50 91" strokeWidth="3.2" />

        {/* Central vertical trunk leader extending up to apex */}
        <path d="M 50 54 L 50 8" strokeWidth="3.2" />

        {/* Left half of branching network */}
        <use href="#axon-branch-network" />

        {/* Right half of branching network (mirrored across x=50) */}
        <use href="#axon-branch-network" transform="translate(100, 0) scale(-1, 1)" />
      </g>
    </svg>
  );
};
