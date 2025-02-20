import React from 'react';
import styles from '../../styles/blocks/badges.module.scss';

export interface BadgesProps {
  list: string[];
  block: string;
  color: string;
  fullContainer: boolean;
  invertedColor?: boolean; // Added optional prop to fix TS error
}

const Badges: React.FC<BadgesProps> = ({ list, block, color, fullContainer, invertedColor }) => {
  return (
    <div
      className={`
        ${styles.badges} 
        ${fullContainer ? styles.fullContainer : ''} 
        ${invertedColor ? styles.inverted : ''}
      `}
      style={{ color }} // if you intend to use the "color" prop in-line
    >
      {list.map((badge, idx) => (
        <span key={idx} className={`${styles.badge} ${block}`}>
          {badge}
        </span>
      ))}
    </div>
  );
};

export default Badges;