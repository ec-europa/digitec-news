import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from '../../utils/_card.module.scss';

const getMonthName = date => {
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

const Row = ({ newsletter }) => (
  <div className={styles.card}>
    <div className={styles.date}>
      {getMonthName(newsletter.date).toUpperCase()}
    </div>
    <Link to={{ pathname: newsletter.slug }}>
      <div className={styles.item}>
        {newsletter.picture ? (
          <Img
            sizes={newsletter.picture.sizes}
            className={styles.picture}
            outerWrapperClassName={styles.pictureFrame}
            alt={newsletter.title}
          />
        ) : (
          ''
        )}
        <div className={styles.info}>
          <h3 className={styles.title}>{newsletter.title}</h3>
          {newsletter.excerpt}
        </div>
      </div>
    </Link>
  </div>
);

Row.propTypes = {
  newsletter: PropTypes.object,
};

Row.defaultProps = {
  newsletter: {},
};

export default Row;
