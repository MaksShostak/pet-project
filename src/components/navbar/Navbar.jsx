import React, { useState } from 'react';
import styles from './navbar.module.scss';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import Menu from './menu/Menu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__links}>
        <div className={styles.navbar__links_logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.navbar__links_container}>
          <Menu />
        </ul>
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
            <ul className={styles.navbar__menu_container_links}>
              <Menu />
              <div className={styles.navbar__menu_container_links_sign}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
