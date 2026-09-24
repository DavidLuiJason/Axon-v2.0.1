/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import AxonLogo from './AxonLogo.jsx';

interface WelcomeStateProps {
  userName?: string;
}

export const WelcomeState: React.FC<WelcomeStateProps> = ({
  userName = 'Luidel',
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center pt-0 pb-64 px-6 select-none animate-in fade-in duration-300 -translate-y-14 sm:-translate-y-20">
      {/* Central AXON Tree Logo */}
      <div className="mb-4">
        <AxonLogo className="w-[84px] h-[84px]" />
      </div>

      {/* Welcome Headline in Elegant Classical Serif */}
      <h1 className="font-serif text-[32px] sm:text-[36px] font-normal text-[#EAEAEA] tracking-normal text-center leading-tight">
        Welcome, {userName}
      </h1>

      {/* Intentional calm empty space preserved - anti-clutter discipline */}
    </div>
  );
};
