import React from 'react';
import styled from 'styled-components';

import {
  space,
  layout,
  position,
  typography,
  opacity,
  compose,
  system,
  variant,
} from 'styled-system';
import PropTypes from 'prop-types';

const Wrapper = styled.span`
  ${compose(space, layout, position, typography)};
  svg {
    ${variant({
      prop: 'size',
      variants: {
        micro: {
          height: '10px',
          width: '10x',
        },
        tiny: {
          height: '16px',
          width: '16x',
        },
        small: {
          height: '24px',
          width: '24px',
        },
        medium: {
          height: '40px',
          width: '40px',
        },
        large: {
          height: '60px',
          width: '60px',
        },
      },
    })}
    ${compose(layout, opacity)},
  }
  path {
    ${system({
      fill: {
        property: 'fill',
        scale: 'colors',
      },
      stroke: {
        property: 'stroke',
        scale: 'colors',
      },
    })}
  }
`;

export function IconWrapper(props) {
  return <Wrapper {...props}>{React.createElement(props.icon)}</Wrapper>;
}

IconWrapper.propTypes = {
  icon: PropTypes.func.isRequired,
};
