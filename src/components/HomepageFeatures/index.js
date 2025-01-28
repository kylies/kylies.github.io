import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Layout from "@theme/Layout"; // it is a sudo import, theme will be injected at build time
import Link from "@docusaurus/Link"; // docusaurus exports react-router
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; // get metadata about page
import useBaseUrl from "@docusaurus/useBaseUrl"; // gives link after concating website url and path


const FeatureList = [
  {
    title: 'Art Blog',
    Svg: require('@site/static/img/greysquirrel.svg').default,
    description: (
      <>
        Regular weekly <a href='/blog'>blog posts</a> about my art practice and other creative projects.
      </>
    ),
  },
  {
    title: 'D&D Campaigns',
    Svg: require('@site/static/img/squirrel1.svg').default,
    description: (
      <>
        Resources for my players and some homebrew content from
        on-going games.
      </>
    ),
  },
  {
    title: 'Altar Stone',
    Svg: require('@site/static/img/altarstone-svg.svg').default,
    description: (
      <>
        An art and music collaboration project focused on making background music for D&D campaigns. Found on <a href='https://www.youtube.com/@altarstone'>YouTube</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
