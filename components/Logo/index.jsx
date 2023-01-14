import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Div } from 'components/Div';
import ImageWraper from 'components/ImageWraper';
import styled from 'styled-components';

export const Logo = (props) => {
  const { width, height, src, className } = props;
  return (
    <Link href="/">
      <StyledDiv className={className}>
        <ImageWraper
          src={src || '/logo.svg'}
          alt="logo"
          width={width}
          height={height}
        />
      </StyledDiv>
    </Link>
  );
};
const StyledDiv = styled(Div)`
  img {
    cursor: pointer;
  }
`;
Logo.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  isMobile: PropTypes.bool,
  src: PropTypes.string,
};
