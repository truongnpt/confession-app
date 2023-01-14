import styled from 'styled-components';

export const StyledSectionSubTitle = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.orange};
`;

export const StyledSectionTitle = styled.h2`
  line-height: ${(props) => props.theme.lineHeights.h2};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.variant};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.primary};
  margin: 5px 0;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: ${(props) => props.theme.fontSizes.h2};
    margin: 5px 0 20px;
  }
`;

export const StyledSectionSubText = styled.span`
  display: inline-block;
  width: 100%;
  color: ${(props) => props.theme.colors.subText};
  margin: 10px 0;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.subtitle};
  }
`;

export const StyledSectionLink = styled.div`
  width: 24px;
  position: relative;
  display: inline-block;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 32px;
    transition: 0.3s all;

    &:hover {
      margin-left: 20px;
    }
  }
`;

export const StyledTitleCardSection = styled.div`
  position: relative;
`;
