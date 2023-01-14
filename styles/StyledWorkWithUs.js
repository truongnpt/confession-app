import styled from 'styled-components';

export const StyledWorkWithUs = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.box};
  background: ${(props) => props.theme.colors.lightOrange};
  padding: 16px 24px 40px;
  margin-bottom: 60px;

  .form-floating {
    margin-bottom: 15px;

    label {
      font-weight: ${(props) => props.theme.fontWeights.regular};
    }
  }

  .requiredInput {
    label:after {
      content: ' *';
      color: ${(props) => props.theme.colors.required};
    }
  }

  .invalid-feedback {
    text-align: left;
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }

  button {
    width: 200px;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    padding: 10px 37px 30px;

    button {
      margin: unset;
      margin-left: auto;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-top: 180px;
  }
`;
