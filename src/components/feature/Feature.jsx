import React from 'react';
import styles from './feature.module.scss';

const Feature = ({ title, text }) => {
  return (
    <div className={styles.features_container}>
      <div className={styles.features_container__title}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={styles.features_container__text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
