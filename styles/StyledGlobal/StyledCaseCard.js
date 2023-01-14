import { H3, H6 } from 'components/Heading';
import { LinkWrapper } from 'components/Navigation';
import styled from 'styled-components';

export const StyledCaseCard = styled.article`
  margin-bottom: 64px;

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoint.md}) and (max-width: ${(props) =>
      props.theme.breakpoint.lg}) {
    width: 585px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-bottom: 74px;
  }
`;

export const StyledCaseCardContent = styled.div`
  margin-top: 16px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin: 27px 0 0 17%;
  }
`;

export const StyledCaseCardTitle = styled(H3)`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.primary};
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  word-break: break-word;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: ${(props) => props.theme.fontSizes.variant};
  }
`;

export const StyledCaseCardSubText = styled(H6)`
  margin: 16px 0 50px;
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  word-break: break-word;
`;

export const StyledLink = styled(LinkWrapper)`
  display: flex;
  height: 24px;
  cursor: pointer;
  h6 {
    color: ${(props) => props.theme.colors.orange};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    margin-right: 12px;
    font-size: ${(props) => props.theme.fontSizesMobile.h5};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: fit-content;

    h6 {
      margin-right: 16px;
    }
  }
`;
