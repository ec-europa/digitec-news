import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Page.module.scss';

const Page = ({ newsletter, children }) => (
  <section className={styles.pageContainer}>
    <h1>{newsletter.title}</h1>
    {children}
  </section>
);

Page.propTypes = {
  newsletter: PropTypes.object,
  children: PropTypes.func.isRequired,
};

Page.defaultProps = {
  newsletter: {},
};

export default Page;
