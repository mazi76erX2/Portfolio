"use client";

import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Section from '../../structure/section';
import Container from '../../structure/container';
import space from '../../utils/spacing.util';
import HeroBg from '../../blocks/hero.bg/bg-color-1';
import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';
import content from '../../../content/index/hero.json';

interface HeroContent {
  intro: {
    startDelay: number;
    start: string;
    deleteDelay: number;
    end: string;
    restartDelay: number;
    speed: number;
    deletionSpeed: number;
    wrapper: string;
  };
  header: {
    name: string;
    usp: string;
  };
  paragraph: string;
  buttons: {
    primary: { title: string };
    secondary: { title: string };
  };
}

const Hero: React.FC = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');
  const heroContent = content as HeroContent;

  return (
    <Section classProp={hero.section}>
      <Container spacing={["VerticalXXXL"]}>
      <TypeAnimation
        className={hero.preHeader}
        sequence={[
          heroContent.intro.startDelay,
          () => setTypingStatus('typing'),
          heroContent.intro.start,
          () => setTypingStatus('typed'),
          heroContent.intro.deleteDelay,
          () => setTypingStatus('deleting'),
          heroContent.intro.end,
          () => setTypingStatus('deleted'),
          heroContent.intro.restartDelay,
        ]}
        speed={{ type: "keyStrokeDelayInMs", value: heroContent.intro.speed }}
        deletionSpeed={{ type: "keyStrokeDelayInMs", value: heroContent.intro.deletionSpeed }}
        wrapper={heroContent.intro.wrapper as "span"}  // or "div", if that’s valid
        repeat={Infinity}
      />
        <section>
          <h1 className={hero.header}>{heroContent.header.name}</h1>
          <h1 className={`${hero.header} ${hero.primaryDim}`}>{heroContent.header.usp}</h1>
        </section>
        <section>
          <p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
            {heroContent.paragraph}
          </p>
        </section>
        <section>
          <button
            className={`button ${button.primary}`}
            onClick={() => (window.location.href = 'mailto:hello@andrewnelson.net')}
          >
            {heroContent.buttons.primary.title}
          </button>
          <button
            className={`button ${button.secondary} leaveSite`}
            onClick={() => window.open('https://www.linkedin.com/in/--andrewnelson/', '_blank')}
          >
            {heroContent.buttons.secondary.title}
          </button>
        </section>
      </Container>
      <HeroBg theme="bg-color-1" />
    </Section>
  );
};

export default Hero;
