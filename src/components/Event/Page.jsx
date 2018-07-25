import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Page.module.scss';

const Page = ({ event, children }) => (
  <section className={styles.pageContainer}>
    <h1>{event.title}</h1>
    {children}
  </section>
);

Page.propTypes = {
  event: PropTypes.object,
  children: PropTypes.func.isRequired,
};

Page.defaultProps = {
  event: {},
};

export default Page;
