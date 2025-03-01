import React from 'react';
import FeaturedProject from '../../blocks/projects/featured';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import css from '../../../styles/sections/projects/featured.module.scss';
import content from '../../../content/projects/featured.json';

// Define an interface for each project item if available; using a generic type here:
interface FeaturedProjectData {
  [key: string]: any;
}

const FeaturedProjects: React.FC = () => {
  return (
    <Section classProp={css.hasBg}>
      <Container spacing={['verticalXXXXLrg']}>
        <SectionTitle
          title="Featured Projects"
          preTitle="UX and Full Stack"
          subTitle="Focused on the experience, driven by the engineering."
        />
        {content.map((data: FeaturedProjectData, index: number) => (
          <FeaturedProject content={data} index={index} key={index} />
        ))}
      </Container>
      <div className={css.bgContainer}>
        <span className={css.orbitalBg}>
          <span className={css.bgSection}>
            <span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`} />
          </span>
          <span className={css.bgSection}>
            <span className={`${css.bgInner} ${css.heroCenter}`} />
          </span>
          <span className={css.bgSection}>
            <span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`} />
          </span>
        </span>
        <span className={css.afterGlowBg} />
      </div>
    </Section>
  );
};

export default FeaturedProjects;
