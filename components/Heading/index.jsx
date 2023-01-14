import styled from 'styled-components';
import {
  color,
  space,
  typography,
  position,
  border,
  compose,
  fontWeight,
} from 'styled-system';

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizesMobile.h1};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.h1};
  font-family: ${(props) => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border, fontWeight)};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.h1};
  }
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizesMobile.h2};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.h2};
  font-family: ${(props) => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border, fontWeight)};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.h2};
  }
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizesMobile.h3};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.h3};
  font-family: ${(props) => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border, fontWeight)};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.h3};
  }
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.fontSizesMobile.h4};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: ${(props) => props.theme.lineHeights.h4};
  font-family: ${(props) => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border, fontWeight)};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.h4};
  }
`;

export const H5 = styled.h5`
  font-size: ${(props) => props.theme.fontSizesMobile.h5};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: ${(props) => props.theme.lineHeights.h5};
  font-family: ${(props) => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border, fontWeight)};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.h5};
  }
`;

export const H6 = styled.h6`
  font-size: ${(props) => props.theme.fontSizesMobile.h6};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: ${(props) => props.theme.lineHeights.h6};
  font-family: ${(props) => props.theme.fonts.primary};
  ${compose(color, space, typography, position, border, fontWeight)};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.h6};
  }
`;
