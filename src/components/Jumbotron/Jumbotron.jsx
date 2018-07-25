import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Img } from '../Image';

import styles from './Jumbotron.module.scss';

const Jumbotron = ({ image, title, intro, readMoreLink }) => (
  <div className={styles.coverContainer}>
    <div className={styles.coverTitleContainer}>
      <div className={styles.coverTitleContainerRow}>
        <h1>{title}</h1>
        <p>{intro}</p>
        {readMoreLink ? <Link to={readMoreLink}>Read more</Link> : ''}
      </div>
    </div>
  </div>
);

Jumbotron.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  intro: PropTypes.string,
  readMoreLink: PropTypes.string,
};

Jumbotron.defaultProps = {
  image: '',
  title: '',
  intro: '',
  readMoreLink: '',
};

export default Jumbotron;
