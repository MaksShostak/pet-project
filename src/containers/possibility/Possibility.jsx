import React from 'react';
import styles from './possibility.module.scss';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <section
      className={`${styles.possibility} section__padding`}
      id="possibility"
    >
      <div className={styles.possibility__image}>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className={styles.possibility__content}>
        <h4>Request Early Access to Get Started</h4>
        <h2 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </section>
  );
};

export default Possibility;
