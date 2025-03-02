"use client";

import React from 'react';
import Icon from '../utils/icon.util';
import Badges, { BadgeItem } from '../utils/badge.list.util';
import badgesStyles from '../../styles/blocks/badges.module.scss';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface BadgesBlockProps {
  title: string;
  copy?: string;
  list: (string | Record<string, unknown>)[];
  fullContainer: boolean;
  block: string;
  icon: string;
  headerIcon?: string;
  containerClass?: string;
}

const BadgesBlock: React.FC<BadgesBlockProps> = ({
  title,
  copy,
  list,
  fullContainer,
  block,
  icon,
  headerIcon,
  containerClass = '',
}) => {
  // Convert each item to a BadgeItem
  const badgeItems: BadgeItem[] = list.map((item, index) => {
    if (typeof item === "string") {
      // For string items
      return {
        key: item,
        name: item,
        type: 'devicon' // or whatever default type you prefer
      };
    } else if (typeof item === "object" && item !== null) {
      // For object items, try to extract key, name, and type
      const objItem = item as Record<string, any>;
      return {
        key: String(objItem.key || `item-${index}`),
        name: String(objItem.name || JSON.stringify(item)),
        type: String(objItem.type || 'devicon')
      };
    } else {
      // Fallback for other types
      return {
        key: `item-${index}`,
        name: String(item),
        type: 'devicon'
      };
    }
  });

  return (
    <div className={`${badgesStyles.badgeBlockContainer} ${containerClass}`}>
      {headerIcon && (
        <span className={headerIcon}>
          <Icon icon={['fas', icon as IconName]} />
        </span>
      )}
      <h3>{title}</h3>
      {copy && <p>{copy}</p>}
      <Badges 
        list={badgeItems} 
        block={block} 
        fullContainer={fullContainer ? "fullContainer" : ""} 
        color={false} 
      />
    </div>
  );
};

export default BadgesBlock;