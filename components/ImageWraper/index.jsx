import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ImageWrapper(props) {
  const { className, alt, src, width, height, objectFit, unoptimized } = props;
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={'eager'}
      quality={100}
      objectFit={objectFit}
      unoptimized={unoptimized}
    />
  );
}

ImageWrapper.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  objectFit: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  unoptimized: PropTypes.bool,
};
