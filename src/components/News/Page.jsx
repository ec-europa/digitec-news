import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Page.module.scss';

const Page = ({ news, children }) => (
  <section className={styles.pageContainer}>
    <h1>{news.title}</h1>
    {children}
  </section>
);

Page.propTypes = {
  news: PropTypes.object,
  children: PropTypes.func.isRequired,
};

Page.defaultProps = {
  news: {},
};

export default Page;
