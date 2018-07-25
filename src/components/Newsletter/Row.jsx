import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './Row.module.scss';

const Row = ({ news }) => {
  console.log(news);
  return (
    <div className={styles.block}>
      <div className={styles.date}>{news.date}</div>
      <div className={styles.newsletter}>
        <Link className={styles.title} to={{ pathname: news.slug }}>
          <h3>{news.title}</h3>
        </Link>
        {news.excerpt}
      </div>
    </div>
  );
};

Row.propTypes = {
  news: PropTypes.object,
};

Row.defaultProps = {
  news: {},
};

export default Row;
