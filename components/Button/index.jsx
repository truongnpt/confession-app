import React from 'react';
import styled from 'styled-components';
import { typography, space, color, variant } from 'styled-system';
import PropTypes from 'prop-types';
import { Div } from 'components/Div';
import LoadingIcon from 'public/icons/loading.svg';
import { IconWrapper } from '../IconWrapper';
import clsx from 'clsx';

export const Button = (props) => {
  const { children, className, isLoading } = props;
  return (
    <ButtonStyled
      {...props}
      className={clsx(className, isLoading && 'loading')}
    >
      <Div
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        {children}
        {isLoading && <Loading icon={LoadingIcon} lineHeight="0" />}
      </Div>
    </ButtonStyled>
  );
};

const Loading = styled(IconWrapper)`
  margin-left: 6px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '0.81')};
  svg {
    animation: circleLoading infinite 1s linear;
  }
  @keyframes circleLoading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  min-width: 200px;
  height: 50px;
  padding: 10px 24px;
  line-height: 0.81;
  border-radius: ${(props) => props.theme.borderRadius.button};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  border: 1px solid;
  outline: 0;
  box-shadow: none;
  letter-spacing: normal;
  text-align: center;
  transition: 0.3s all;
  &.loading {
    pointer-events: none;
  }
  &.arrow-transition {
    padding-right: 50px;

    span {
      &:nth-child(2) {
        position: absolute;
        left: 100%;
        transition: 0.3s all;
      }
    }

    &:hover {
      span {
        &:nth-child(2) {
          left: 110%;
        }
      }
    }
  }
  span {
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
  //Desktop screen
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    height: 50px;
  }
  ${space};
  ${color};
  ${typography};
  ${variant({
    prop: 'variant',
    variants: {
      primary: {
        color: 'primary',
        bg: 'white',
        borderColor: 'white',
        '&:hover': {
          '&:not([disabled])': {
            bg: 'transparent',
            color: 'white',
            borderColor: 'white',
          },
          path: {
            fill: 'white',
          },
        },
        '&:disabled': {
          color: 'primary',
          opacity: 0.2,
          path: {
            fill: 'primary',
          },
        },
      },
      secondary: {
        color: 'white',
        borderColor: 'white',
        bg: 'transparent',
        path: {
          fill: 'white',
        },
        '&:hover:not([disabled])': {
          bg: 'white',
          color: 'primary',
          path: {
            fill: 'primary',
          },
        },
        '&:disabled': {
          opacity: 0.2,
          path: {
            fill: 'primary',
          },
        },
      },
      light: {
        color: 'white',
        borderColor: 'primary',
        bg: 'primary',
        path: {
          fill: 'white',
        },
        '&:hover:not([disabled])': {
          bg: 'white',
          color: 'primary',
          path: {
            fill: 'primary',
          },
        },
        '&:disabled': {
          opacity: 0.2,
          path: {
            fill: 'primary',
          },
        },
      },
      tag: {
        color: 'dimGray',
        bg: 'primary',
        borderColor: 'cadetGray',
        '&:hover, &:focus': {
          '&:not([disabled])': {
            color: 'active',
            borderColor: 'active',
          },
        },
      },
    },
  })};
`;

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
};
