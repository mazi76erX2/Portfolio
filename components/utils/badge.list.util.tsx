"use client"

import React, { JSX, useEffect } from 'react';
import { m, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import badges from '../../styles/blocks/badges.module.scss';
import Icon from './icon.util';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface BadgeItem {
  key: string;
  name: string;
  type: string;
}

interface BadgesProps {
  list: BadgeItem[];
  block: string;
  color: boolean;
  fullContainer: string;
}

export default function Badges({ list, block, color, fullContainer }: BadgesProps): JSX.Element {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const container: Variants = {
    hidden: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.025,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.025,
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: {
      y: 20,
      opacity: -0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <m.ul
      className={`${badges.list} ${badges[block]} ${badges[fullContainer]}`}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      {list.map(({ key, name, type }) => (
        <m.li key={name} className={`${badges.item} ${key}`} variants={item}>
          <IconModule iconKey={key} iconType={type} color={color} />
          <span className={badges.title}>{name}</span>
        </m.li>
      ))}
    </m.ul>
  );
}

interface IconModuleProps {
  iconKey: string;
  iconType: string;
  color: boolean;
}

function IconModule({ iconKey, iconType, color }: IconModuleProps): JSX.Element | null {
  let colored = 'colored';
  if (!color) {
    colored = '';
  }

  switch (iconType) {
    case 'far':
    case 'fad':
    case 'fat':
    case 'fas':
      // Cast iconType and iconKey to IconPrefix and IconName respectively.
      return <Icon icon={[iconType as IconPrefix, iconKey as IconName]} />;
    case 'devicon':
      return <i className={`devicon-${iconKey}-plain ${colored}`} />;
    default:
      return null;
  }
}
