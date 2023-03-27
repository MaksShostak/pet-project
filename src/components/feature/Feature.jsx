import React from 'react';
import styles from './feature.module.scss';

const Feature = ({ title, text, styleContainer, textStyle }) => {
  return (
    <li className={`${styles.features_container} ${styleContainer}`}>
      <div className={styles.features_container__title}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={`${styles.features_container__text} ${textStyle}`}>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default Feature;
