import React from 'react';
import styles from './brand.module.scss';
import items from './imports';

const Brand = () => {
  const elements = items.map(({ id, img, alt }) => (
    <li key={id}>
      <img src={img} alt={alt} />
    </li>
  ));
  return <ul className={`${styles.brand} section__padding`}>{elements}</ul>;
};

export default Brand;
