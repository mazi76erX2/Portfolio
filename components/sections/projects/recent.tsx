import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/projects/recent.module.scss';

interface User {
  avatar_url: string;
  name: string;
  html_url: string;
  // Add more fields if needed
}

interface Repo {
  name: string;
  description: string;
  topics: string[];
  forks_count: number;
  html_url: string;
  language: string;
  watchers: number;
  homepage: string;
  pushed_at: string;
}

interface GitProjectsProps {
  repos: Repo[];
  user: User[];
}

const GitProjects: React.FC<GitProjectsProps> = ({ repos, user }) => {
  const profile = user[0];
  return (
    <Section classProp={css.section}>
      <Container classProp={css.container} spacing={['verticalXXXLrg']}>
        <h3>Recent Projects</h3>
        <section className={css.profile}>
          <Image
            className={css.profilePhoto}
            src={profile.avatar_url}
            alt="Github Profile Photo"
            height={60}
            width={60}
          />
          <span className={css.details}>
            <p>{profile.name}</p>
            <a href={profile.html_url} rel="noreferrer" target="_blank">
              {profile.html_url} <Icon icon={['far', 'arrow-up-right-from-square']} />
            </a>
          </span>
        </section>
        <div className={css.projects}>
          {repos.map(
            (
              { name, description, topics, forks_count, html_url, language, watchers, homepage, pushed_at },
              index
            ) => {
              const date = new Date(pushed_at).toDateString();
              return (
                <article key={index} className={css.project}>
                  <span className={css.header}>
                    <a href={html_url} rel="noreferrer" target="_blank">
                      {name} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                    </a>
                    <p className={css.homepage}>{homepage}</p>
                  </span>
                  <span className={css.descriptionContainer}>
                    <p className={css.description}>{description}</p>
                  </span>
                  <span className={css.details}>
                    <p>
                      <i className={`devicon-${language.toLowerCase()}-plain colored`} /> {language}
                    </p>
                    <p>
                      <Icon icon={['fad', 'star']} /> {watchers}
                    </p>
                    <p>
                      <Icon icon={['fad', 'code-branch']} /> {forks_count}
                    </p>
                    <p className={css.pushedAt}>{date}</p>
                  </span>
                  <span className={css.topicsContainer}>
                    {topics.map((topic, idx) => (
                      <span key={idx} className={css.topics}>
                        <i className="devicon-github-plain"></i> {topic}
                      </span>
                    ))}
                  </span>
                </article>
              );
            }
          )}
        </div>
      </Container>
    </Section>
  );
};

export default GitProjects;