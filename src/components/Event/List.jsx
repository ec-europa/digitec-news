import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const List = ({ events }) => events.map(event => <Row event={event} />);

List.propTypes = {
  events: PropTypes.array,
};

List.defaultProps = {
  events: [],
};

export default List;
