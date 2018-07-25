import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Row = ({ event }) => (
  <Link to={{ pathname: event.slug }}>
    <h3>{event.title}</h3>
  </Link>
);

Row.propTypes = {
  event: PropTypes.object,
};

Row.defaultProps = {
  event: {},
};

export default Row;
