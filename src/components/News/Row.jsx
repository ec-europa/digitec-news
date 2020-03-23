import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from '../Image';
import styles from '../../utils/_card.module.scss';

const getMonthName = (date) => {
  const that = new Date(date);
  const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[that.getMonth()];
};

const Row = ({ news }) => (
  <div className={styles.card}>
    <div className={styles.date}>{getMonthName(news.date).toUpperCase()}</div>
    <Link className={styles.linkBody} to={news.slug}>
      <div className={styles.cardBody}>
        {news.picture && (
          <div className={styles.pictureFrame}>
            <Img
              fluid={news.picture.fluid}
              className={styles.picture}
              alt={news.title}
            />
          </div>
        )}
        <div className={styles.info}>
          <h3 className={styles.title}>{news.title}</h3>
          {news.excerpt}
        </div>
      </div>
    </Link>
  </div>
);

Row.propTypes = {
  news: PropTypes.object,
};

Row.defaultProps = {
  news: {},
};

export default Row;
