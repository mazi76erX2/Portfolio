"use client";

import { useState, useEffect } from 'react';
import Container from '../structure/container';
import Icon from '../utils/icon.util';
import css from '../../styles/structure/footer.module.scss';
import content from '../../content/footer.json';
import settings from '../../content/_settings.json';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface GitHubInfo {
  stars: number | null;
  forks: number | null;
}

export default function Footer() {
  const [gitHubInfo, setGitHubInfo] = useState<GitHubInfo>({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch(settings.portfolio.repo_api)
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <footer className={css.container}>
      <Container spacing={['verticalXXLrg', 'bottomLrg']}>
        <section className={css.sections}>
          <ul className={css.thanks}>
            <li>
              <h4>Acknowledgments</h4>
            </li>
            {content.acknowledgments.map(({ person, link, note }, index: number) => (
              <li key={index}>
                <a href={link} rel="noreferrer" target="_blank">
                  {person} <Icon icon={['fad', 'arrow-up-right-from-square' as IconName]} />
                </a>
                <p>{note}</p>
              </li>
            ))}
          </ul>
          <ul className={css.links}>
            <li>
              <h4>Links</h4>
            </li>
            {content.links.map(({ person, link, note }, index: number) => (
              <li key={index}>
                <a href={link} rel="noreferrer" target="_blank">
                  {person} <Icon icon={['fad', 'arrow-up-right-from-square' as IconName]} />
                </a>
                <p>{note}</p>
              </li>
            ))}
          </ul>
          <ul className={css.social}>
            <li>
              <h4>Social</h4>
            </li>
            <li className={css.socialList}>
              {content.social.map(({ url, icon }, index: number) => (
                <a key={index} href={url} rel="noreferrer" target="_blank">
                  {/* Cast the icon string to IconName */}
                  <Icon icon={['fab', icon as IconName]} />
                </a>
              ))}
            </li>
          </ul>
        </section>
        <section className={css.github}>
          <a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
            <h5>{settings.portfolio.forkthis}</h5>
            <ul>
              <li>
                <p>
                  <Icon icon={['fad', 'code-branch' as IconName]} /> Forks: {gitHubInfo.forks}
                </p>
              </li>
              <li>
                <p>
                  <Icon icon={['fad', 'star' as IconName]} /> Stars: {gitHubInfo.stars}
                </p>
              </li>
            </ul>
          </a>
        </section>
      </Container>
      <canvas id="gradient-canvas" className={''} data-transition-in></canvas>
    </footer>
  );
}
