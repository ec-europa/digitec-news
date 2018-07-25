import React from 'react';
import PropTypes from 'prop-types';

// Components

// Styles
import styles from './Page.module.scss';

const Page = ({ news, children }) => (
  <section className={styles.pageContainer}>
    <h1>{news.title}</h1>
  </section>
);

Page.propTypes = {
  news: PropTypes.object,
};

Page.defaultProps = {
  news: {},
};

export default Page;
