import React from 'react';
// import Link from 'gatsby-link';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
// import styles from './Row.module.scss';

// FlipMove needs Row to be a class (not a stateless function)
// eslint-disable-next-line react/prefer-stateless-function
class Row extends React.Component {
  render() {
    const { news } = this.props;

    return <li>news contents</li>;
  }
}

Row.propTypes = {
  news: PropTypes.object,
};

Row.defaultProps = {
  news: {},
};

export default Row;
