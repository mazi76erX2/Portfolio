"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { m, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Badges from '../../utils/badge.list.util';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/projects/featured.module.scss';

interface ImageData {
  key: string;
  url: string;
  hover: 'left' | 'right' | string;
  h: number;
  w: number;
}

interface FeaturedProjectProps {
  content: {
    project: string;
    url: string;
    repo: string;
    descriptionTitle: string;
    description: string;
    stack: string[];
    imageOptions?: any;
    images: ImageData[];
  };
  index: number;
}

const container: Variants = {
  hidden: { 
    transition: { delayChildren: 0.125, staggerChildren: 0.0625 }
  },
  visible: { 
    transition: { delayChildren: 0.125, staggerChildren: 0.25 }
  },
  rest: { 
    transition: { delayChildren: 0, staggerChildren: 0 }
  },
  hover: { 
    transition: { delayChildren: 0, staggerChildren: 0 }
  },
};

const item: Variants = {
  hidden: { 
    y: 75, 
    opacity: 0,
    transition: { type: 'tween', ease: 'easeIn', duration: 0.35 }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.5 }
  },
};

const hoverLeft: Variants = {
  rest: { x: 0 },
  hover: { x: -20 },
};

const hoverRight: Variants = {
  rest: { x: 0 },
  hover: { x: 20 },
};

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ content, index }) => {
  const { project, repo, descriptionTitle, description, stack, images } = content;
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  return (
    <m.section
      key={index}
      className={css.project}
      ref={ref}
      variants={container}
      initial={['rest', 'hidden']}
      whileHover="hover"
      animate={controls}
    >
      <div className={css.details}>
        <div className={css.projectHeader}>
          <div className={css.header}>
            <h3 className="highlight">{project}</h3>
            <span className={css.privateOr}>
              <i className="devicon-github-plain"></i>
              {repo}
            </span>
          </div>
          <div className={css.description}>
            <p>
              <strong>{descriptionTitle}</strong> {description}
            </p>
          </div>
          <div className={css.stackContainer}>
            {/* Convert the stack string array to an array of BadgeItem objects */}
            <Badges 
              list={stack.map((item) => ({ key: item, name: item, type: 'fab' }))}
              block="stack"
              fullContainer="" 
              color={false} 
            />
          </div>
          <m.div className={css.viewProject} variants={{}}>
            <Icon icon={['fad', 'arrow-right-to-bracket']} />
          </m.div>
        </div>
      </div>

      <div className={css.imageContainer}>
        <span className={css.imageAnimationContainer}>
          {images.map(({ key, url, hover, h, w }, i) => {
            const hoverVariant = hover === 'left' ? hoverLeft : hoverRight;
            return (
              <m.div key={`${i}-${key}`} variants={item}>
                <m.div variants={hoverVariant}>
                  <Image src={url} alt="project image" height={h} width={w} />
                </m.div>
              </m.div>
            );
          })}
        </span>
      </div>
    </m.section>
  );
};

export default FeaturedProject;
