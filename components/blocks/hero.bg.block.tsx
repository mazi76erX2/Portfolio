import React from 'react';
import BgColor1 from './hero.bg/bg-color-1';

interface HeroBgProps {
  theme: string;
}

const HeroBg: React.FC<HeroBgProps> = ({ theme }) => {
  return <div className={theme}>{bgSelector(theme)}</div>;
};

function bgSelector(bg: string) {
  switch (bg) {
    case 'bg-color-1':
      return <BgColor1 />;
    // Add additional cases if needed
    default:
      return null;
  }
}

export default HeroBg;
