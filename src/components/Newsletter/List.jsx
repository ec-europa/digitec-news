/**
 * Event/List
 */

import React from 'react';
import PropTypes from 'prop-types';
// import Row from './Row';
// import styles from './List.module.scss';

const List = ({ news }) => <p>the list</p>;

List.propTypes = {
  news: PropTypes.array,
};

List.defaultProps = {
  news: [],
};

export default List;
