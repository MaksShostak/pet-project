import React from 'react';
import styles from './features.module.scss';
import featuresData from './featuresData';
import { Feature } from '../../components';

const Features = () => {
  const elements = featuresData.map(({ title, text, id }) => (
    <Feature title={title} text={text} key={id} />
  ));
  return (
    <section className={`${styles.features} section__padding`} id="features">
      <div className={styles.features__heading}>
        <h2 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <ul className={styles.features__container}>{elements}</ul>
    </section>
  );
};

export default Features;
