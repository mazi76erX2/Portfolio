import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import looking from '../../../styles/sections/index/looking.module.scss';
import sectionStyles from '../../../styles/blocks/section.title.module.scss';

const Looking: React.FC = () => {
  return (
    <Section classProp={`${looking.section} borderBottom`}>
      <Container classProp={`${sectionStyles.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
        <h4>I&apos;m currently looking for employment.</h4>
        <h2 className={looking.json}>Senior : &#123;</h2>
        <h2 className={looking.jsonSub}>
          <span className={looking.highlight}>Front End Engineer</span>,
        </h2>
        <h2 className={looking.jsonSub}>
          <span className={looking.highlight2}>User Experience Designer</span>
        </h2>
        <h2 className={looking.json}>&#125;</h2>
        <h4>
          I am particularly interested in product-facing positions where I can help make an organization-wide impact.
        </h4>
      </Container>
    </Section>
  );
};

export default Looking;
