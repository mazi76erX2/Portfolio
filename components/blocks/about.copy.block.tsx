import React from 'react';
import Icon from '../utils/icon.util';

interface CopyBlockProps {
  containerClass?: string;
  iconClass?: string;
  icon?: [string, string]; // Adjust tuple type as needed
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
