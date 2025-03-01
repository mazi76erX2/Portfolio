import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import Badges from '../../utils/badge.list.util';
import career from '../../../styles/sections/index/career.module.scss';

interface BadgeItem {
  key: string;
  name: string;
  type: string;
}

const fullStack: BadgeItem[] = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'NextJS', type: 'devicon' },
  { key: 'php', name: 'PHP', type: 'devicon' },
  { key: 'wordpress', name: 'WordPress', type: 'devicon' },
  { key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
];

const stack: BadgeItem[] = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'NextJS', type: 'devicon' },
  { key: 'php', name: 'PHP', type: 'devicon' },
  { key: 'wordpress', name: 'WordPress', type: 'devicon' },
  { key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
];

const Career: React.FC = () => {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am currently managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>My Supply Co.</h3>
                <h4>Permanent Full-time</h4>
                <h4>Apr 2019 - Present · 3 yrs 10 mos</h4>
                <h5>Vancouver, British Columbia, Canada</h5>
              </span>
              <p>
                My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. Their approach requires an extremely customized and evolving system.
              </p>
            </div>
            <div className={career.companyAlt} />
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Director of Product Design and Development</h3>
                  <h4>Nov 2021 - Present · 1 yr 3 mos</h4>
                </span>
                <p>
                  I lead the ideation, planning, and development of new consumer goods and digital services. I work closely with key stakeholders to meet quality goals across multiple domains.
                </p>
              </div>
              <div className={career.positionAlt} />
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Full Stack Developer &amp; User Experience Designer</h3>
                  <h4>Feb 2020 - Nov 2021 · 1 yr 10 mos</h4>
                </span>
                <p>
                  As the lead full stack developer, I managed all aspects of software development, CI/CD, and QA. I analyzed and optimized customer journeys and workflows with measurable results.
                </p>
                <p>Key projects include:</p>
                <ul className={career.list}>
                  <li>
                    Product attribute and settings automated testing
                    <span className={career.subList}>
                      <span className={career.bullet} /> Eradicated critical data input errors
                    </span>
                  </li>
                  <li>
                    Inventory management reporting and automation
                    <span className={career.subList}>
                      <span className={career.bullet} /> Decreased purchasing labour by ~80%
                    </span>
                  </li>
                  <li>
                    Sales management plugin with AJAX shopping cart integration
                    <span className={career.subList}>
                      <span className={career.bullet} /> Increased AOV by 8.3%
                    </span>
                  </li>
                  <li>
                    Bespoke ID verification software and WooCommerce integration
                    <span className={career.subList}>
                      <span className={career.bullet} /> Decreased credit card fraud by 98%
                    </span>
                  </li>
                </ul>
                <Badges list={fullStack} block="stack" fullContainer="fullContainer" color={undefined} />
              </div>
              <div className={career.positionAlt} />
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Front End Developer &amp; User Interface Designer</h3>
                  <h4>Apr 2019 - Feb 2020 · 11 mos</h4>
                </span>
                <p>
                  I supported multiple creative roles in a start-up environment—designing, developing, and optimizing user interfaces and brand elements.
                </p>
                <p>Key projects include:</p>
                <ul className={career.list}>
                  <li>
                    Interactive shopping cart replacement
                    <span className={career.subList}>
                      <span className={career.bullet} /> Increased conversions by 0.7%
                    </span>
                  </li>
                  <li>
                    Complex multi-state animated menus
                    <span className={career.subList}>
                      <span className={career.bullet} /> Boosted brand confidence with a state-of-the-art menu
                    </span>
                  </li>
                  <li>
                    Website design and merchandising strategy optimization
                    <span className={career.subList}>
                      <span className={career.bullet} /> Achieved a 7.1% overall conversion rate
                    </span>
                  </li>
                </ul>
                <Badges list={stack} block="stack" fullContainer="fullContainer" color={undefined} />
              </div>
              <div className={career.positionAlt} />
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Another Creative Ltd.</h3>
                <h4>Contract Part-time</h4>
                <h4>Jun 2016 - Present · 6 yrs 8 mos</h4>
                <h5>Vancouver, British Columbia, Canada</h5>
              </span>
              <p>
                Another Creative is a full stack agency delivering exceptional digital experiences through branding, marketing, and web/software development.
              </p>
            </div>
            <div className={career.companyAlt} />
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>West Coast Electronics</h3>
                <h4>Permanent Full-time</h4>
                <h4>Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
                <h5>Vancouver, British Columbia, Canada</h5>
              </span>
              <p>I was known as the Electronics Wizard 🧙‍♂️.</p>
              <p>West Coast Electronics repaired computers, consoles, and cell phones.</p>
            </div>
            <div className={career.companyAlt} />
          </article>
        </section>
      </Container>
    </Section>
  );
};

export default Career;
