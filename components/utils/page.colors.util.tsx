import React, { JSX } from 'react';
import css from '../../styles/utils/page.colors.module.scss';

interface ColorSet {
  mesh__secondaryDark: string;
  mesh__secondaryLight: string;
  mesh__primaryDark: string;
  mesh__primaryLight: string;
}

interface ColorOverridesProps {
  colors: {
    dark: ColorSet;
    unicorn: ColorSet;
    light: ColorSet;
  };
}

export default function ColorOverrides({ colors }: ColorOverridesProps): JSX.Element {
  return (
    <>
      <data id="page-specific-colors" className={css.colors}>
        <Dark colors={colors.dark} />
        <Unicorn colors={colors.unicorn} />
        <Light colors={colors.light} />
        <svg aria-hidden="true" focusable="false">
          <linearGradient id="fa-gradient" x1="0%" y1="0%" x2="175%" y2="175%">
            <stop offset="0%" stopColor="var(--neon-1-2)" />
            <stop offset="100%" stopColor="var(--neon-1-1)" />
          </linearGradient>
        </svg>
      </data>
    </>
  );
}

interface ColorComponentProps {
  colors: ColorSet;
}

function Dark({ colors }: ColorComponentProps): JSX.Element | null {
  if (Object.keys(colors).length !== 0) {
    return (
      <style>
        {`
          :root[data-theme=dark] {
            --mesh-color-1: ${colors.mesh__secondaryDark};
            --mesh-color-2: ${colors.mesh__secondaryLight};
            --mesh-color-3: ${colors.mesh__primaryDark};
            --mesh-color-4: ${colors.mesh__primaryLight};
          }
        `}
      </style>
    );
  }
  return null;
}

function Unicorn({ colors }: ColorComponentProps): JSX.Element | null {
  if (Object.keys(colors).length !== 0) {
    return (
      <style>
        {`
          :root[data-theme=unicorn] {
            --mesh-color-1: ${colors.mesh__secondaryDark};
            --mesh-color-2: ${colors.mesh__secondaryLight};
            --mesh-color-3: ${colors.mesh__primaryDark};
            --mesh-color-4: ${colors.mesh__primaryLight};
          }
        `}
      </style>
    );
  }
  return null;
}

function Light({ colors }: ColorComponentProps): JSX.Element | null {
  if (Object.keys(colors).length !== 0) {
    return (
      <style>
        {`
          :root[data-theme=light] {
            --mesh-color-1: ${colors.mesh__secondaryDark};
            --mesh-color-2: ${colors.mesh__secondaryLight};
            --mesh-color-3: ${colors.mesh__primaryDark};
            --mesh-color-4: ${colors.mesh__primaryLight};
          }
        `}
      </style>
    );
  }
  return null;
}
