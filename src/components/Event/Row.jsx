/* eslint-disable jsx-a11y/control-has-associated-label,jsx-a11y/anchor-has-content */

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from '../Newsletter/Row.module.scss';
import formatDate from '../../utils/formatDate';

const Row = ({ event }) => (
  <div className={styles.row}>
    <div className={styles.date}>{formatDate(event.date)}</div>
    <article className={styles.article} key={event.title}>
      <a href={event.url} className={styles.link} />
      {event.picture && (
        <div className={styles.articleImage}>
          <Img
            fluid={event.picture.fluid}
            className={styles.picture}
            alt={event.title}
          />
        </div>
      )}
      <div className={styles.articleContent}>
        <h3 className={styles.title}>{event.title}</h3>
        {event.excerpt}
      </div>
    </article>
  </div>
);

Row.propTypes = {
  event: PropTypes.object,
};

Row.defaultProps = {
  event: {},
};

export default Row;
