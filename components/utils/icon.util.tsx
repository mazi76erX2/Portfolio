"use client"

import React, { JSX, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  library,
  IconPack,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add icon packs to the library with proper type assertions
library.add(
  fat as IconPack,
  fal as IconPack,
  fas as IconPack,
  fad as IconPack,
  far as IconPack,
  fab as IconPack
);

interface IconProps {
  icon: [IconPrefix, IconName];
}

export default function Icon({ icon }: IconProps): JSX.Element {
  const [iconType, iconKey] = icon;
  // Set a default icon that is a valid IconName
  const [stateIconKey, setIconKey] = useState<IconName>('circle-notch');

  useEffect(() => {
    setIconKey(iconKey);
  }, [iconKey]);

  return <FontAwesomeIcon icon={[iconType, stateIconKey]} />;
}
