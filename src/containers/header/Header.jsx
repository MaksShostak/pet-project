import React from 'react';
import styles from './header.module.scss';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <header className={`${styles.header} section__padding`} id="home">
      <div className={styles.header__content}>
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className={styles.header__content_input}>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className={styles.header__content_people}>
          <img src={people} alt="people ho use chatGPT" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className={styles.header__image}>
        <img src={ai} alt="face of the chatGPT" />
      </div>
    </header>
  );
};

export default Header;
