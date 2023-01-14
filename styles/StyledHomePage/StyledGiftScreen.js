import styled from 'styled-components';
import { H3 } from 'components/Heading';

export const StyledHeroTitle = styled(H3)`
  margin: ${(props) => props.theme.space.xl} 0;
  font-size: ${(props) => props.theme.fontSizesMobile.h3};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

export const StyledGiftScreen = styled.section`
  position: relative;
  height: 100vh;
  top: 0;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.primary} 0%, 
    white 100%);
  animation: loading 0.5s linear;

  @keyframes loading {
    from {
      transform: scale(0.8);
    } 
    to {
      transform: scale(1);
    }
  }

  .button-learn-more:hover {
    svg {
      path {
        fill: ${(props) => props.theme.colors.white};
      }
    }
  }

  .top-image {
    text-align: right;
    height: 40px;
   
    img {
      border-radius: 100%;
      overflow: hidden;
      border: 3px solid ${(props) => props.theme.colors.white} !important;
    }
  }

  .hero-image {
    img {
      border-radius: 10px;
      overflow: hidden;
    }
  }

`;
