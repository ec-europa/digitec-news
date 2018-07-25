import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import styles from './List.module.scss';

const List = ({ news }) => news.map(newsItem => <Row news={newsItem} />);

List.propTypes = {
  news: PropTypes.array,
};

List.defaultProps = {
  news: [],
};

export default List;
