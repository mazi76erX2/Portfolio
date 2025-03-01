import React from 'react';
import Spacing from '../utils/spacing.util';
import css from '../../styles/structure/container.module.scss';

interface ContainerProps {
  /** Optional extra CSS classes for the container */
  classProp?: string;
  /** Array of spacing utility classes */
  spacing?: string[];
  /** Children elements to be rendered inside the container */
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ classProp = '', spacing = [], children }) => {
  return (
    <div className={`${css.readingWidth} ${classProp} ${Spacing()}`}>
      {children}
    </div>
  );
};

export default Container;
