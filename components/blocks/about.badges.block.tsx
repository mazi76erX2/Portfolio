import React from 'react';
import Icon from '../utils/icon.util';
import Badges from '../utils/badge.list.util';
import badgesStyles from '../../styles/blocks/badges.module.scss';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface BadgesBlockProps {
  title: string;
  copy?: string;
  list: string[];
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
  // Convert each string in list into a BadgeItem object
  const badgeItems = list.map((item) => ({
    key: item,
    name: item,
    type: 'fab', // adjust this default as needed
  }));

  return (
    <div className={`${badgesStyles.badgeBlockContainer} ${containerClass}`}>
      {headerIcon && (
        <span className={headerIcon}>
          {/* Cast icon to IconName; 'fat' here is used as the prefix */}
          <Icon icon={['fat', icon as IconName]} />
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
