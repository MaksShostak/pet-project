import React, { useState } from 'react';
import styles from './navbar.module.scss';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possibolity">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <div className={styles.navbar__links_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navbar__links_container}>
          <Menu />
        </div>
      </div>
      <div className={styles.navbar__sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.navbar__menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles.navbar__menu_container} ${styles.scale_up_center}`}
          >
            <div className={styles.navbar__menu_container_links}>
              <Menu />
              <div className={styles.navbar__menu_container_links_sign}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
