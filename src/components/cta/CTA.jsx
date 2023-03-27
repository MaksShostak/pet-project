import React from 'react';
import styles from './cta.module.scss';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__content}>
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className={styles.cta__btn}>
        <button type="button">Get Started</button>
      </div>
    </section>
  );
};

export default CTA;
