import styled from 'styled-components';
import { Div } from 'components/Div';
import { H2 } from 'components/Heading';
import { Span } from 'components/Paragraph';
import { Button } from 'components/Button';

export const StyledLetWorkTogether = styled.section`
  background-image: linear-gradient(
    ${(props) => props.theme.colors.white} 50%,
    ${(props) => props.theme.colors.darkBlue} 0%
  );
  background-repeat: no-repeat;
  background-position: bottom;
  .form-group {
    margin-bottom: 1.5rem;
  }
  .container {
    padding-bottom: 0.5rem;
  }
  .mb-2,
  .my-2 {
    margin-bottom: 1.5rem !important;
  }
  .invalid-feedback {
    text-align: initial;
  }
  .requiredInput {
    label:after {
      content: ' *';
      color: ${(props) => props.theme.colors.required};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    background-position-x: 45%;
    background-position-y: 80%;
    padding: 25px 16px 0px;
    .email {
      padding-left: 18px;
    }
    .fullName {
      padding-right: 18px;
    }
  }
`;

export const StyledContactContent = styled(Div)`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  background-repeat: no-repeat;
  background-size: auto;
  padding: 25px 16px 25px 16px;
  text-align: center;
  border-radius: 24px;
  box-shadow: 0 19px 80px 0 rgba(0, 0, 0, 0.07);
  border: solid 1px #ebebeb;

  .btn-contact {
    &:hover {
      background: none !important;

      span {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    padding: 31px 100px 31px 100px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    background-size: cover;
    margin: 0 9%;
    padding: 31px 134px 39px 134px;
    &::before {
      top: 100px;
      left: -16px;
    }
  }
`;

export const StyledContactTittle = styled(H2)`
  font-size: ${(props) => props.theme.fontSizes.variant};
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: ${(props) => props.theme.fontSizes.h2};
    padding: 1rem;
  }
`;

export const StyledSpan = styled(Span)`
  padding-left: 0.5rem;
`;

export const StyledButton = styled(Button)`
  padding: 10px 12px;
`;
