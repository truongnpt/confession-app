import styled from 'styled-components';

export const StyledCloudServiceItem = styled.div`
  flex: 0 0 33.33%;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }
`;

export const StyledCloudServiceItemIcon = styled.div`
  max-width: 45px;
  margin: auto;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    max-width: 60px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    flex: 0 0 auto;
    margin: 0;
    margin-right: 15px;
  }
`;

export const StyledCloudServiceItemTitle = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  line-height: ${(props) => props.theme.lineHeights.h5};
  font-family: ${(props) => props.theme.fonts.secondary};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.body};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    flex: 0 0 auto;
  }
`;
