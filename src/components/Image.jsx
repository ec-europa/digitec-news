// https://github.com/gatsbyjs/gatsby/issues/4021
import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

export const Img = props => {
  const objFit = props.objFit ? props.objFit : `cover`;
  const objPosition = props.objPosition ? props.objPosition : `50% 50%`;
  const fontFamily = `"object-fit: ${objFit}; object-position: ${objPosition}"`;

  const polyfillStyles = {
    objectFit: objFit,
    objectPosition: objPosition,
    fontFamily,
  };

  return (
    <Image {...props} imgStyle={{ ...props.imgStyle, ...polyfillStyles }} />
  );
};

Img.propTypes = {
  objFit: PropTypes.string,
  objPosition: PropTypes.string,
  imgStyle: PropTypes.object,
};

Img.defaultProps = {
  objFit: '',
  objPosition: '',
  imgStyle: {},
};

export default Img;
