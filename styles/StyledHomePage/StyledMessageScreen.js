import styled from 'styled-components';
import { H3 } from 'components/Heading';

export const StyledHeroTitle = styled(H3)`
  margin: ${(props) => props.theme.space.xl} 0;
  font-size: ${(props) => props.theme.fontSizesMobile.h3};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

export const StyledMessageScreen = styled.section`
  position: relative;
  height: 100vh;
  top: 0;
  background-color: ${(props) => props.theme.colors.primary};
  
    .loading {
      animation: loading 0.5s linear;
    }

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

  .rotating {
    animation: rotating 6s linear infinite;
  }

  @keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

  .hero-content {
    background: #ffffffd9;
  }

  .heart-btn {
    margin-top: 150px !important;

    span {
      margin-top: 5px;
      animation: heart 1s linear infinite;
      animation-delay: 0.3s
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

  .pulse i {
    color: #fff
}

.pulse {
    height: 100px;
    width: 100px;
    min-width: 100px;
    border: none;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 2px 2px 20px orange;
}

.pulse::before {
    content: "";
    position: absolute;
    border: 1px solid orange;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1s linear infinite
}

.pulse:hover {
  box-shadow: 2px 2px 20px white;
  &:before {
    border: 1px solid white;
  }

  &:after {
    border: 1px solid white;
  }
}

.pulse::after {
    content: "";
    position: absolute;
    border: 1px solid ORANGE;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1s linear infinite;
    animation-delay: 0.3s
}

@keyframes pulse {
    0% {
        transform: scale(0.5);
        opacity: 0
    }

    50% {
        transform: scale(1);
        opacity: 1
    }

    100% {
        transform: scale(1.3);
        opacity: 0
    }
}

@keyframes heart {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}

`;
