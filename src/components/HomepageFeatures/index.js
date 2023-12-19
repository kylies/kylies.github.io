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
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I recently made a return to practice art. Documenting my experience
        to see how far I can get.
      </>
    ),
  },
  {
    title: 'D&D Campaigns',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Resources for my players and some homebrew content from
        on-going games.
      </>
    ),
  },
  {
    title: 'Writing Portfolio',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A collection of writing projects.
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
