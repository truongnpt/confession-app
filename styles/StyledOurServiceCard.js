import styled from 'styled-components';
import { Div } from 'components/Div';

export const StyledIcon = styled(Div)``;
export const StyledOurServiceCard = styled(Div)`
  display: block;
  text-align: center;
  padding-bottom: 0;

  //laptop layout
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    display: flex;
    align-items: start;
    background: none;
    padding: 10px 0;
    border-radius: 8px;
    ${StyledIcon} {
      & > div {
        transition: 0.3s all;
      }
    }
    &:hover {
      box-shadow: 0 14px 40px 0 rgba(0, 0, 0, 0.06);
      #icon {
        opacity: 1;
      }
      ${StyledIcon} {
        & > div {
          transform: translateX(15px);
        }
      }
    }
  }
`;
export const StyledDivText = styled(Div)`
  margin: 0px;

  H5 {
    text-align: center;
    margin: 15px 0 10px;
  }

  Span {
    display: inline-block;
    text-align: center;
    color: ${(props) => props.theme.colors.greyCloud};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding: 0 6px;
    H5 {
      text-align: unset;
      font-weight: ${(props) => props.theme.fontWeights.semiBold};
    }
    Span {
      text-align: unset;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const StyledDivImage = styled(Div)`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  //laptop layout
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 80px;
    height: 80px;
    margin: 0 20px;
    object-fit: contain;
  }
`;

export const StyledDivIconArrow = styled(Div)`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    display: inline-flex;
    margin: 20px 0 10px;
  }
`;
