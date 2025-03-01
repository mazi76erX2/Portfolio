import React from 'react';
import Icon from '../utils/icon.util';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface CopyBlockProps {
  containerClass?: string;
  iconClass?: string;
  icon?: [IconPrefix, IconName];
  title: string;
  copy: string;
}

const CopyBlock: React.FC<CopyBlockProps> = ({ containerClass, iconClass, icon, title, copy }) => {
  return (
    <div className={containerClass}>
      {icon && (
        <span className={iconClass}>
          <Icon icon={icon} />
        </span>
      )}
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
};

export default CopyBlock;
