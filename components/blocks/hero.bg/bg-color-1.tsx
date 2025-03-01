"use client"

import React from 'react';
import Image from 'next/image';
import hero from '../../../styles/sections/index/hero.module.scss';

const BgColor1: React.FC = () => {
  return (
    <div className={hero.colorfulV1}>
      <div className={`${hero.barContainer} noEvents`}>
        <div className={hero.barGradient}></div>
      </div>
      <div className={`${hero.radialContainer} noEvents`}>
        {/* Uncomment and use Image if needed:
        <Image 
          src="/img/dataism-24.svg" 
          className={hero.svg_background} 
          height={2000} 
          width={2000} 
          alt="Dataism 24 by Colorpong: https://ywft.us/2c4d58b21" 
        /> */}
        <div className={hero.radialGradient}></div>
      </div>
    </div>
  );
};

export default BgColor1;
