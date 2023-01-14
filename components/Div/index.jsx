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

export const Div = styled.div`
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
