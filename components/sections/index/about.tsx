import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title.block';
import CopyBlock from '../../blocks/about.copy.block';
import BadgesBlock from '../../blocks/about.badges.block';
import about from '../../../styles/sections/index/about.module.scss';

interface Method {
  key: string;
  name: string;
  type: string;
}

const methods: Method[] = [
  { key: 'planet-moon', name: 'User Research', type: 'fad' },
  { key: 'qrcode', name: 'Digital Strategy', type: 'fad' },
  { key: 'window', name: 'Design Systems', type: 'fad' },
  { key: 'cubes', name: 'Product Strategy', type: 'far' },
  { key: 'layer-plus', name: 'Brand Strategy', type: 'fad' },
  { key: 'solar-system', name: 'Operations', type: 'fad' },
];

const About: React.FC = () => {
  return (
    <Section classProp={about.section}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image src="/img/family-photo.jpg" alt="Nelson family photo" width={600} height={800} />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills that pay the bills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={['fat', 'ear-listen']}
              copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner, managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
            />
            <BadgesBlock
              title="Research and planning"
              containerClass={about.container}
              list={methods.map(method => method.name)}
              fullContainer={true}
              block="methods"
              icon="fingerprint"
              copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
              headerIcon={about.icon}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
};

export default About;
