import React from 'react';
import Image from 'next/image';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import CopyBlock from '../../blocks/about.copy.block';
import BadgesBlock from '../../blocks/about.badges.block';
import about from '../../../styles/sections/index/about.module.scss';

interface BadgeItem {
  key: string;
  name: string;
  type: string;
}

const software: BadgeItem[] = [
  { key: 'photoshop', name: 'Photoshop', type: 'devicon' },
  { key: 'illustrator', name: 'Illustrator', type: 'devicon' },
  { key: 'figma', name: 'Figma', type: 'devicon' },
  { key: 'vscode', name: 'VSCode', type: 'devicon' },
  { key: 'mailbox', name: 'Postman', type: 'fas' },
  { key: 'computer-mouse', name: 'Click Up', type: 'fas' },
  { key: 'list-music', name: 'Ableton', type: 'fas' },
  { key: 'aftereffects', name: 'After Effects', type: 'devicon' },
  { key: 'premierepro', name: 'Premiere Pro', type: 'devicon' },
];

const tech: BadgeItem[] = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'NextJS', type: 'devicon' },
  { key: 'jquery', name: 'jQuery', type: 'devicon' },
  { key: 'php', name: 'PHP', type: 'devicon' },
  { key: 'wordpress', name: 'WordPress', type: 'devicon' },
  { key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
  { key: 'google', name: 'GA4/GTM', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
];

const Technical: React.FC = () => {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Polymath foundations"
              icon={['fat', 'chart-network']}
              copy="With a strong foundation in both design and development, I bring a unique perspective to every project and continuously learn to stay ahead in the industry."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Software I love to work with"
              copy="Over 20 years of experience have given me an intuitive understanding of the best software products in the world."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I love to build with"
              copy="I enjoy solving problems with code—from the front end to the back end, no challenge is too great."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong" />
          </div>
        </section>
      </Container>
      {/* Uncomment below if a grid background is desired */}
      {/* <SectionGridBg gridSize={4} /> */}
    </Section>
  );
};

export default Technical;
