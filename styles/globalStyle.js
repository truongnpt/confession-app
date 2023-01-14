import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.fonts.primary};
  }

  body {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
    }

    & > div {
      transition: 0.3s all;
    }

    &.arrow-transition {
      &:hover {
      & > div {
        transform: translateX(15px);
      }
    }
    }
  }

  p {
    margin-bottom: 0.5rem;
  }

  //custom form

  .form-floating {
    margin-bottom: 10px;

    &>label {
      padding: 1rem 0;
      color: ${(props) => props.theme.colors.primary};
      font-weight: ${(props) => props.theme.fontWeights.medium};
    }
    
    &>.form-control {
      height: 50px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      box-shadow: none !important;
      border-color: ${(props) => props.theme.colors.darkBlue};
    }

    &>.form-control,
    &>.form-select {
      height: 50px;
      padding: 1rem 3px;
      background-color: transparent;

      &:focus, :not(:placeholder-shown) {
        padding-bottom: 2px;

        &~label {
          opacity: 1;
          font-size: ${(props) => props.theme.fontSizes.small};
        }
      }
    }
  }

  .form-label {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.caption};
  }

  .react-select__control {
    box-shadow: 0 20px 40px 0 ${(props) =>
      props.theme.boxShadows.boxShadowFormControl}!important;
    border-color: ${(props) => props.theme.colors.borderFormControl};
    &.react-select__control--is-focused {
        color: ${(props) => props.theme.colors.primary};
        border-color: ${(props) => props.theme.colors.primary} !important;
      }
  }

  .form-control {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 0;
    padding: .375rem .75rem !important;
    border-radius: ${(props) => props.theme.borderRadius.button};
    border: solid 1px ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeights.small};

    &:focus {
        color: ${(props) => props.theme.colors.primary};
        box-shadow: none;
        border-color: ${(props) => props.theme.colors.grey};
      }

    &.is-invalid {
      background-image: none;
      border-color: ${(props) => props.theme.colors.borderFormControlError};
      &:focus {
        border-color: ${(props) => props.theme.colors.borderFormControlError};
      }
    }
  }

  .react-select__control {
    box-shadow: none !important;
  }

  .invalid-feedback {
    font-size: 88%;
    color: ${(props) => props.theme.colors.borderFormControlError};
    text-align: right;
  }

  // custom checkbox
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: ${(props) => props.theme.colors.white};

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  .form-group {
    margin-bottom: 25px;
  }

  .form-check {
    padding-left: 2.1rem;

    input[type=checkbox] {
      width: 20px;
      height: 20px;
      margin: initial;
      margin-left: -2.1rem;

      &::before {
        position: absolute;
        content: '';
        border: 1px solid ${(props) => props.theme.colors.borderFormControl};
        border-radius: ${(props) => props.theme.borderRadius.checkbox};
        width: 22px;
        height: 22px;
        background: ${(props) => props.theme.colors.white};
        top: -1px;
        left: -1px;
      }

      &::after {
        position: absolute;
        content: '';
        border: 3px solid ${(props) => props.theme.colors.white};
        border-top: 0;
        border-left: 0;
        width: 10px;
        height: 15px;
        top: 0px;
        left: 5px;
        transform: rotate(45deg);
        opacity: 0;
      }

      &:checked {
        background: ${(props) => props.theme.colors.primary};

        &::before {
          background: ${(props) => props.theme.colors.primary};
        }

        &::after {
          opacity: 1;
        }

        &~ .checkmark {
          background-color: ${(props) => props.theme.colors.primary};

          &:after {
            display: block;
          }
        }

        &~.form-check-label {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }

    .form-check-label {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  img {
    object-fit: contain;
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
  img {
    image-rendering: -webkit-optimize-contrast;
  }
}

/* Unset for Safari 11+ */
@media not all and (min-resolution:.001dpcm)
  { @supports (-webkit-appearance:none) and (stroke-color:transparent) {
    img {
      image-rendering: unset;
    }
  }
}
  .btn-secondary {
    border-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.primary};
    box-shadow: none !important;
    padding: 8px 35px;
    &:hover {
      border-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.bgSecondaryHoverBtn};
    }
    &:focus, &:active {
      border-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.primary} !important;
      background-color: ${(props) =>
        props.theme.colors.bgSecondaryActiveBtn} !important;
    }
  }

   .btn-secondary-large {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    box-shadow: none !important;
    background-color: ${(props) => props.theme.colors.white};
    padding: 10px 38px;
    &:hover {
      border-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary};
    }
    &:focus, &:active, &.active {
      border-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white} !important;
      background-color: ${(props) => props.theme.colors.primary} !important;
    }

    & > div {
      animation: 1s Loading linear infinite;
      margin-left: 0.5rem !important;
    }
  }

  @keyframes Loading {
    0% {
    transform: rotate(0deg);
    }
    50% {
    transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  * {
    box-sizing: border-box;
  }

  .bg-none {
    background: none !important;
  }
  
  .animation-body {
    width: 100%;
    transition: 1s all;
  }

  .clear-both {
    clear: both;
  }

  //custom carousel
  .react-multi-carousel-list {
    .custom-dot-list-style {
      .react-multi-carousel-dot {
        display: flex;
        height: 24px;
        align-items: center;
        
        button {
          border-color: ${(props) => props.theme.colors.gray};
          background: ${(props) => props.theme.colors.gray};
          opacity: 0.2;
          margin: 0 16px;

          @media screen and (min-width: ${(props) =>
            props.theme.breakpoint.lg}) and (hover: hover) {
            &:hover {
            border-color: ${(props) => props.theme.colors.orange};
            background: ${(props) => props.theme.colors.orange};
            opacity: 1;
            transition: 0s all;
          }
          }
        }

        &--active {
          button {
            border-color: ${(props) => props.theme.colors.orange};
            background: ${(props) => props.theme.colors.orange};
            opacity: 1;
            width: 24px;
    height: 24px;
          }
        }
      }
    }
  }
  .cursor-pointer {
    cursor: pointer;
  }

  .cursor-default {
    cursor: default;
    pointer-events: none;
  }

  .text-gradient-blue {
    position: relative;
    background-image: linear-gradient(99deg, ${(props) =>
      props.theme.colors.secondaryBlueBefore}, ${(props) =>
  props.theme.colors.secondaryBlueAfter});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-gradient-red {
    position: relative;
    background-image: linear-gradient(99deg, ${(props) =>
      props.theme.colors.secondaryRedBefore}, ${(props) =>
  props.theme.colors.secondaryRedAfter});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-gradient-orange {
    position: relative;
    background-image: linear-gradient(99deg, ${(props) =>
      props.theme.colors.secondaryOrangeBefore}, ${(props) =>
  props.theme.colors.secondaryOrangeAfter});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-gradient-green {
    position: relative;
    background-image: linear-gradient(99deg, ${(props) =>
      props.theme.colors.secondaryGreenBefore}, ${(props) =>
  props.theme.colors.secondaryGreenAfter});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    span {
      &.subtitle {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
      }
    }

    .text-gradient-blue {
      &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: ${(props) => props.theme.borderRadius.textGradient};
        top: calc(50% - 1px);
        right: calc(100% + 16px);
        background-image: linear-gradient(94deg, ${(props) =>
          props.theme.colors.secondaryBlueBefore}, ${(props) =>
  props.theme.colors.secondaryBlueAfter});
      }
    }
    .text-gradient-red {
      &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: ${(props) => props.theme.borderRadius.textGradient};
        top: calc(50% - 1px);
        right: calc(100% + 16px);
        background-image: linear-gradient(94deg, ${(props) =>
          props.theme.colors.secondaryRedBefore}, ${(props) =>
  props.theme.colors.secondaryRedAfter});
      }
    }
    .text-gradient-orange {
      &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: ${(props) => props.theme.borderRadius.textGradient};
        top: calc(50% - 1px);
        right: calc(100% + 16px);
        background-image: linear-gradient(94deg, ${(props) =>
          props.theme.colors.secondaryOrangeBefore}, ${(props) =>
  props.theme.colors.secondaryOrangeAfter});
      }
    }
    .text-gradient-green {
      &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: ${(props) => props.theme.borderRadius.textGradient};
        top: calc(50% - 1px);
        right: calc(100% + 16px);
        background-image: linear-gradient(94deg, ${(props) =>
          props.theme.colors.secondaryGreenBefore}, ${(props) =>
  props.theme.colors.secondaryGreenAfter});
      }
    }
  }
  
  @media screen and (min-width: ${(props) => props.theme.breakpoint.xl}) {
    .btn-secondary {
      padding: 10px 20px;
    }

    .btn-secondary-large {
      padding: 11px 60px;
      font-size: ${(props) => props.theme.fontSizesLarge.subtitle};
    }
  }

`;
