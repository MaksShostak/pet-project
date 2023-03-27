import React from 'react';
import styles from './footer.module.scss';
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <footer className={`${styles.footer} section__padding`}>
      <div className={styles.footer__heading}>
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>

      <div className={styles.footer__btn}>
        <p>Request Early Access</p>
      </div>

      <ul className={styles.footer__links}>
        <li className={styles.footer__links_logo}>
          <img src={gpt3Logo} alt="gpt3_logo" />
          <a
            href="https://goo.gl/maps/aNLoS4XeVGJtXRvY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </a>
        </li>
        <li className={styles.footer__links_item}>
          <h4>Links</h4>
          <ul>
            <li>
              <p>Overons</p>
            </li>
            <li>
              <p>Social Media</p>
            </li>
            <li>
              <p>Counters</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </li>
        <li className={styles.footer__links_item}>
          <h4>Company</h4>
          <ul>
            <li>
              <p>Terms & Conditions </p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </li>
        <li className={styles.footer__links_item}>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a
                href="https://goo.gl/maps/aNLoS4XeVGJtXRvY8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crechterwoord K12 182 DK Alknjkcb
              </a>
            </li>
            <li>
              <a href="tel:+45 085-132567">+45 085-132567</a>
            </li>
            <li>
              <a href="mailto:info@payme.net">info@payme.net</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className={styles.footer__copyright}>
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
