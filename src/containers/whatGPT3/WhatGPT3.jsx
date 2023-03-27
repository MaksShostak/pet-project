import React from 'react';
import styles from './what-gpt3.module.scss';
import Feature from '../../components/feature/Feature';
import whatGpt3FeaturesData from './what-gpt3.FeaturesData';
const WhatGPT3 = () => {
  const elements = whatGpt3FeaturesData.map(({ title, text, id }) => (
    <Feature
      title={title}
      text={text}
      key={id}
      styleContainer={styles.features_container}
      textStyle={styles.features_container__text}
    />
  ));
  const elementsA = elements.slice(0, 1);
  const elementsB = elements.slice(1);
  return (
    <section className={`${styles.whatgpt3} section__margin`} id="wgpt3">
      <ul className={styles.whatgpt3__feature}>{elementsA}</ul>
      <div className={styles.whatgpt3__heading}>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>Explore the Library</p>
      </div>
      <ul className={styles.whatgpt3__container}>{elementsB}</ul>
    </section>
  );
};

export default WhatGPT3;
