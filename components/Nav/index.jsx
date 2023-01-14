import styled from 'styled-components';
import {
  color,
  space,
  typography,
  position,
  border,
  compose,
  layout,
  flexbox,
  shadow,
  grid,
} from 'styled-system';

export const Nav = styled.nav`
  position: relative;
  ${compose(
    color,
    space,
    typography,
    position,
    border,
    layout,
    flexbox,
    shadow,
    grid
  )};
`;
