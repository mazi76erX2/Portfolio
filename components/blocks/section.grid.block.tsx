import React from 'react';
import grid from '../../styles/blocks/section.grid.module.scss';

interface SectionGridBGProps {
  gridSize?: number;
}

const SectionGridBG: React.FC<SectionGridBGProps> = ({ gridSize = 4 }) => {
  return (
    <div className={grid.block}>
      <div className={grid.Guides} aria-hidden="true">
        <div className={`${grid.Guides__container} grid-${gridSize}`}>
          {generateGrid(gridSize, grid.Guides__guide)}
          <style jsx>{`
            .${grid.Guides__container}.grid-${gridSize} {
              --grid-size: ${gridSize};
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

function generateGrid(gridSize: number, classProp: string) {
  const lines = [];
  for (let i = 0; i < gridSize + 1; i++) {
    lines.push(<div key={`grid-line-${i}`} className={classProp}></div>);
  }
  return lines;
}

export default SectionGridBG;
