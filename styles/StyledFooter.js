import styled from 'styled-components';
import { Div } from 'components/Div';
import Col from 'react-bootstrap/Col';
import { H6 } from 'components/Heading';
import { ListGroup } from 'react-bootstrap';
import { P } from 'components/Paragraph';
import Container from 'react-bootstrap/Container';
import { Logo } from 'components/Logo';
import { MenuItem } from 'components/MenuItem';
import { LinkWrapper } from 'components/Navigation';

export const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.darkBlue};
  .footer {
    padding-top: 64px;
    margin-top: -2px;
  }

  //laptop-layout
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    .footer {
      padding-top: 50px;
      padding-bottom: 20px;
    }
  }
`;
export const StyledLogo = styled(Logo)`
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    width: 189px;
    height: 48px;
  }
`;
export const StyledSubText = styled(P)`
  margin-top: 8px;
  margin-bottom: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    padding-right: 10%;
    margin-bottom: 0px;
  }
`;
export const StyledSocialIconWraper = styled(Div)`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  margin-top: 25px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-top: 25px;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-top: -20px;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.xl}) {
    margin-top: 0;
  }
`;
export const StyledSocialIcon = styled.a`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 20px;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-top: 87px;

    &:not(:first-child) {
      margin-left: 39px;
    }
  }
  //mobile layout
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    width: 20px;
    height: 19px;
  }
`;
export const StyledContactCol = styled(Col)`
  margin-bottom: 20px;
  padding-top: 10px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-bottom: 0;
    padding-top: 70px;
    padding-right: 5%;
  }
`;
export const StyledAddressWraper = styled(Div)`
  display: flex;
  margin-bottom: 10px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }
`;
export const StyledAddressIcon = styled(Div)`
  flex: 0 0 24px;
  margin-right: 15px;

  p {
    &:first-child {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-bottom: 0;

    p {
      &:first-child {
        text-decoration: none;

        &::after {
          content: ':';
        }
      }
    }
  }
`;
export const StyledAddressTitle = styled(H6)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-bottom: 24px;
  text-transform: capitalize;
`;

export const StyledCompanyCol = styled(Col)`
  margin-bottom: 25px;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.white};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding-top: 70px;
  }
`;
export const StyledListCompany = styled(ListGroup)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .list-group-item {
    a {
      &:hover {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: ${(props) =>
    props.theme.breakpoint.md}) and (min-width: ${(props) =>
      props.theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    display: block;
    .Contact {
      display: none;
    }
  }
`;
export const StyledCompanyTitle = styled(H6)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-bottom: 16px;
  text-transform: capitalize;
`;
export const StyledCopyright = styled(Container)`
  P {
    border-top: 2px solid ${(props) => props.theme.borderLines.footer};
    text-align: center;
    padding: 24px 33px;
    margin: 0 -12px;
    @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
      padding: 24px 0 40px;
      border-top: 2px solid ${(props) => props.theme.borderLines.footer};
      text-align: center;
      margin: 0 -6%;
      width: 110%;
    }
    @media screen and (min-width: ${(props) => props.theme.breakpoint.xl}) {
      margin: 0 -7%;
      width: 110%;
    }
    @media screen and (min-width: 1400px) {
      margin: 0 -14%;
      width: 124%;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    max-width: 943px;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.xl}) {
    max-width: 1135px;
  }
`;

export const StyledEmailWraper = styled(Div)`
  display: flex;

  a {
    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: block;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  border: none;
  background: none;
  padding: 0;
  margin-bottom: 1rem;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  a {
    color: white;
    :hover {
      font-weight: ${(props) => props.theme.fontWeights.semiBold};
    }
  }
`;

export const StyledLinkEmail = styled(LinkWrapper)`
  text-decoration: underline;
`;
