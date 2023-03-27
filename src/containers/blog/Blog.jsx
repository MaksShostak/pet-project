import React from 'react';
import styles from './blog.module.scss';
import Article from '../../components/article/Article';

import items from './itemsData';

const Blog = () => {
  const elements = items.map(({ date, text, imgUrl, id }) => (
    <Article
      date={date}
      imgUrl={imgUrl}
      text={text}
      key={id}
      containerStyle={styles.container_article}
      imgStyle={styles.container_article_image}
    />
  ));
  const elementsA = elements.slice(0, 1);
  const elementsB = elements.slice(1);

  return (
    <section className={`${styles.blog} section__padding`} id="blog">
      <div className={styles.blog__heading}>
        <h2 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h2>
      </div>
      <div className={styles.blog__container}>
        <ul className={styles.blog__container_groupA}>{elementsA}</ul>
        <ul className={styles.blog__container_groupB}>{elementsB}</ul>
      </div>
    </section>
  );
};

export default Blog;
