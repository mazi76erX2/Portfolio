"use client";

import React from 'react';
import sections from '../../styles/structure/section.module.scss';

interface SectionProps {
  /** Optional additional CSS classes for the section */
  classProp?: string;
  /** Child elements to render inside the section */
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ classProp = '', children }) => {
  return (
    <div className={`${sections.default} ${classProp}`}>
      {children}
    </div>
  );
};

export default Section;
