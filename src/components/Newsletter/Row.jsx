import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from '../Image';
import styles from './Row.module.scss';
import formatDate from '../../utils/formatDate';

const Row = ({ newsletter }) => (
  <>
    <div className={styles.row}>
      <div className={styles.date}>{formatDate(newsletter.date)}</div>
      <article className={styles.article} key={newsletter.title}>
        <Link to={newsletter.slug} className={styles.link} />
        {newsletter.picture && (
          <div className={styles.articleImage}>
            <Img
              className={styles.picture}
              alt={newsletter.title}
              fluid={newsletter.picture.fluid}
            />
          </div>
        )}
        <div className={styles.articleContent}>
          <h3 className={styles.title}>{newsletter.title}</h3>
          {newsletter.excerpt}
        </div>
      </article>
    </div>
  </>
);

Row.propTypes = {
  newsletter: PropTypes.object,
};

Row.defaultProps = {
  newsletter: {},
};

export default Row;
