import React from 'react';
import Hero from '../components/sections/index/hero';
import About from '../components/sections/index/about';
import Technical from '../components/sections/index/technical';
import FeaturedProjects from '../components/sections/projects/featured';
// Uncomment if needed:
// import Looking from '../components/sections/index/looking';
// import Career from '../components/sections/index/career';

import Color from '../components/utils/page.colors.util';
import colors from '../content/index/_colors.json';

export default function HomePage() {
  return (
    <>
      <Color colors={colors} />
      <Hero />
      {/* <Looking /> */}
      <FeaturedProjects />
      <About />
      <Technical />
      {/* <Career /> */}
    </>
  );
}