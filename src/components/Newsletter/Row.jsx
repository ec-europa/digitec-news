import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Img } from '../Image';
import styles from './Row.module.scss';
import formatDate from '../../utils/formatDate';

const Row = ({ newsletter }) => (
  <Fragment>
    <div className={styles.row}>
      <div className={styles.date}>{formatDate(newsletter.date)}</div>
      <article className={styles.article} key={newsletter.title}>
        <Link to={{ pathname: newsletter.slug }} className={styles.link} />
        {newsletter.picture ? (
          <Img
            sizes={newsletter.picture.sizes}
            className={styles.picture}
            outerWrapperClassName={styles.articleImage}
            alt={newsletter.title}
          />
        ) : (
          ''
        )}
        <div className={styles.articleContent}>
          <h3 className={styles.title}>{newsletter.title}</h3>
          {newsletter.excerpt}
        </div>
      </article>
    </div>
  </Fragment>
);

Row.propTypes = {
  newsletter: PropTypes.object,
};

Row.defaultProps = {
  newsletter: {},
};

export default Row;
