import React from 'react';
import styles from './article.module.scss';

const Article = ({ imgUrl, date, text, containerStyle, imgStyle }) => {
  return (
    <li>
      <article className={`${styles.article} ${containerStyle}`}>
        <div className={`${styles.article__image} ${imgStyle}`}>
          <img src={imgUrl} alt="blog_image" />
        </div>
        <div className={styles.article__content}>
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </article>
    </li>
  );
};

export default Article;
