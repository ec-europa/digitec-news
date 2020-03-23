import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const List = ({ news }) =>
  news.map((newsletter) => <Row key={newsletter.id} newsletter={newsletter} />);

List.propTypes = {
  news: PropTypes.array,
};

List.defaultProps = {
  news: [],
};

export default List;
