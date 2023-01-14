import styled from 'styled-components';
import { H3 } from 'components/Heading';

export const StyledHeroTitle = styled(H3)`
  margin: ${(props) => props.theme.space.xl} 0;
  font-size: ${(props) => props.theme.fontSizesMobile.h3};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

export const StyledLoginScreen = styled.section`
  position: relative;
  height: 100vh;
  top: 0;
  background: ${(props) => props.theme.colors.primary};

  .loading {
    animation: loading 0.5s linear;
  }

  .left-arrow {
    svg {
      transform: rotate(-180deg);
    }
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

  .hero-image {
    text-align: center;
    margin-bottom: ${(props) => props.theme.space.xl};
   
    img {
      -webkit-animation: rotating 6s linear infinite;
      -moz-animation: rotating 6s linear infinite;
      -ms-animation: rotating 6s linear infinite;
      -o-animation: rotating 6s linear infinite;
      animation: rotating 6s linear infinite;
      border-radius: 100%;
      overflow: hidden;
      border: 5px solid ${(props) => props.theme.colors.white} !important;
    }
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

.btn {
        background: #f39c12;
        color: #fff;
        padding: 1rem 3rem;
        font-size: 1.5rem;
        font-weight: 600;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        transition-duration: 0.4s;
        outline: none;
    }

    .btn:hover {
        background: #fff;
        box-shadow: 0px 2px 20px 10px #97B1BF;
        color: #000;
    }

    .pulse i {
    color: #fff
}

.pulse {
    height: 200px;
    width: 200px;
    min-width: 100px;
    border: none;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 2px 2px 20px white;
}

.pulse::before {
    content: "";
    position: absolute;
    border: 1px solid white;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1.5s linear infinite
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
    border: 1px solid white;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1.5s linear infinite;
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
`;
