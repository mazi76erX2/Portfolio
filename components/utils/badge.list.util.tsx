"use client";

import React, { useEffect } from 'react';
import { m, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import badges from '../../styles/blocks/badges.module.scss';
import Icon from './icon.util';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

export interface BadgeItem {
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
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const container: Variants = {
    hidden: { 
      opacity: 1,
      transition: { delayChildren: 0.25, staggerChildren: 0.025 }
    },
    visible: { 
      opacity: 1,
      transition: { delayChildren: 0.025, staggerChildren: 0.1 }
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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
      {list.map((badge, index) => (
        <m.li key={`${badge.key}-${index}`} className={`${badges.item} ${badge.key}`} variants={item}>
          <IconModule iconKey={badge.key} iconType={badge.type} color={color} />
          <span className={badges.title}>{badge.name}</span>
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

// Map of special case icons that need to be handled differently
const iconMappings: Record<string, [IconPrefix, IconName]> = {
  'circle-notch': ['fas', 'circle-notch'], // Move from 'fab' to 'fas'
  // Add more mappings as needed
};

function IconModule({ iconKey, iconType, color }: IconModuleProps): JSX.Element {
  const colored = color ? 'colored' : '';
  
  // Check if we have a special mapping for this icon
  if (iconMappings[iconKey]) {
    return <Icon icon={iconMappings[iconKey]} />;
  }
  
  // Ensure iconKey is a string to avoid object rendering issues
  const safeIconKey = typeof iconKey === 'string' ? iconKey : String(iconKey);
  
  switch (iconType) {
    // Replace pro icon prefixes with free alternatives
    case 'far': // Regular - use free regular
      return <Icon icon={['far', safeIconKey as IconName]} />;
    case 'fad': // Duotone - fallback to solid
    case 'fat': // Thin - fallback to solid
      return <Icon icon={['fas', safeIconKey as IconName]} />;
    case 'fas': // Solid - already free
      return <Icon icon={['fas', safeIconKey as IconName]} />;
    case 'fab': // Brands - already free
      return <Icon icon={['fab', safeIconKey as IconName]} />;
    case 'devicon':
      return <i className={`devicon-${safeIconKey}-plain ${colored}`} />;
    default:
      // Default fallback to prevent rendering errors
      return <span>{safeIconKey}</span>;
  }
}