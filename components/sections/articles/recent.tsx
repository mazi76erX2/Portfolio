import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title.block';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/articles/recent.module.scss';

interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  thumbnail: string;
  categories: string[];
}

interface MediumArticles {
  feed: unknown;
  items: MediumArticle[];
}

interface RecentProps {
  mediumArticles: MediumArticles;
}

const Recent: React.FC<RecentProps> = ({ mediumArticles }) => {
  const { items: articles } = mediumArticles;

  return (
    <Section classProp="borderBottom">
      <Container spacing={["verticalXXXXLrg"]}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Informative"
          subTitle="A personal quest to become a better creative writer."
        />
        <section className={css.projects}>
          {articles.map((article, index) => {
            const { title, pubDate, link, author, thumbnail, categories } = article;
            const date = new Date(pubDate).toDateString();
            return (
              <article key={index} className={css.project}>
                <span className={css.featuredImage}>
                  {/* Providing width and height enables Next.js image optimization */}
                  <Image src={thumbnail} alt="Article thumbnail" layout="responsive" width={300} height={200} />
                </span>
                <span className={css.header}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                </span>
                <span className={css.descriptionContainer} />
                <span className={css.details}>
                  <p>By {author}</p>
                  <p className={css.pushedAt}>{date}</p>
                </span>
                <span className={css.topicsContainer}>
                  {categories.map((cat, idx) => (
                    <span key={idx} className={css.topics}>
                      <Icon icon={['fab', 'medium']} /> {cat}
                    </span>
                  ))}
                </span>
              </article>
            );
          })}
        </section>
      </Container>
    </Section>
  );
};

export default Recent;
