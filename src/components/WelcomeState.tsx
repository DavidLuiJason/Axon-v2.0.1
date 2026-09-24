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
    <div className="flex-1 flex flex-col items-center justify-center pt-14 pb-36 px-6 select-none animate-in fade-in duration-300 -translate-y-2">
      {/* Central AXON Tree Logo + Greeting Unit */}
      <div className="flex flex-col items-center gap-5">
        <AxonLogo className="w-[84px] h-[84px]" />

        {/* Welcome Headline in Elegant Classical Serif */}
        <h1 className="font-serif text-[32px] sm:text-[36px] font-normal text-[#EAEAEA] tracking-normal text-center leading-tight">
          Welcome, {userName}
        </h1>
      </div>

      {/* Intentional calm empty space preserved - anti-clutter discipline */}
    </div>
  );
};
