"use client";

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
  // Ensure the spacing utility returns a string based on provided spacing classes.
  // For example, if Spacing accepts multiple arguments, spread the array:
  const spacingClasses = Spacing(...spacing);
  return (
    <div className={`${css.readingWidth} ${classProp} ${spacingClasses}`}>
      {children}
    </div>
  );
};

export default Container;
