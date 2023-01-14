import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  color,
  space,
  typography,
  position,
  border,
  compose,
  fontSize,
} from 'styled-system';
import { Button } from '../Button';

export const LinkWrapper = ({ href, ...rest }) => {
  return <a {...rest} href={href} />;
};

// eslint-disable-next-line react/display-name
const CustomButton = React.forwardRef(({ onClick, rest, variant }, ref) => {
  return (
    <Button variant={variant} onClick={onClick} {...rest} innerRef={ref} />
  );
});

export const ButtonWrapper = ({ href, variant, ...rest }) => {
  return (
    <NavigateStyled href={href} passHref scroll={false}>
      <CustomButton rest={rest} variant={variant} onClick={rest.handleClick} />
    </NavigateStyled>
  );
};

const NavigateStyled = styled(Link)`
  position: relative;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${fontSize};
  ${compose(color, space, typography, position, border, fontSize)};
`;

LinkWrapper.propTypes = {
  href: PropTypes.string.isRequired,
  isScrollTop: PropTypes.bool,
};

ButtonWrapper.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  rest: PropTypes.object,
  variant: PropTypes.string,
};
