import React from 'react';
import PropTypes from 'prop-types';

import styles from './Jumbotron.module.scss';

const Jumbotron = ({ title, intro }) => (
  <div className={styles.coverContainer}>
    <div className={styles.coverTitleContainer}>
      <div className={styles.coverTitleContainerRow}>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </div>
  </div>
);

Jumbotron.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
};

Jumbotron.defaultProps = {
  title: '',
  intro: '',
};

export default Jumbotron;
