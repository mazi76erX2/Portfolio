"use client";

import React, { JSX, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  library,
  IconPack,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add free icon packs to the library
library.add(
  fas as IconPack,
  far as IconPack,
  fab as IconPack
);

// Mapping from Pro prefixes to Free prefixes
const prefixMapping: Record<IconPrefix, IconPrefix> = {
  'fas': 'fas', // Solid remains the same
  'far': 'far', // Regular remains the same
  'fab': 'fab', // Brands remains the same
  'fat': 'fas', // Map Thin to Solid
  'fal': 'fas', // Map Light to Solid
  'fad': 'fas', // Map Duotone to Solid
};

interface IconProps {
  icon: [IconPrefix, IconName];
}

export default function Icon({ icon }: IconProps): JSX.Element {
  const [iconType, iconKey] = icon;
  // Set a default icon that is a valid IconName
  const [stateIconKey, setIconKey] = useState<IconName>('circle-notch');
  const [mappedIconType, setMappedIconType] = useState<IconPrefix>('fas');

  useEffect(() => {
    // Map Pro prefixes to Free equivalents
    setMappedIconType(prefixMapping[iconType] || 'fas');
    setIconKey(iconKey);
  }, [iconType, iconKey]);

  // Special case handling for specific icons that need to be in different libraries
  if (iconKey === 'circle-notch' && iconType === 'fab') {
    return <FontAwesomeIcon icon={['fas', stateIconKey]} />;
  }

  return <FontAwesomeIcon icon={[mappedIconType, stateIconKey]} />;
}