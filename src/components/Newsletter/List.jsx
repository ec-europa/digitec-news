import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const List = ({ newsletters }) =>
  newsletters.map((newsletter) => (
    <Row key={newsletter.id} newsletter={newsletter} />
  ));

List.propTypes = {
  newsletters: PropTypes.array,
};

List.defaultProps = {
  newsletters: [],
};

export default List;
