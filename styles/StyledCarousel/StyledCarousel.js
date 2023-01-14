import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;

  .react-multi-carousel-item {
  }
  .fuOUXc {
    box-shadow: none;
  }
  .related {
    &__carousel {
      position: static;
      &.react-multi-carousel-list {
        .react-multi-carousel-item {
          opacity: 1;
          pointer-events: none;
          &.react-multi-carousel-item--active {
            opacity: 1;
            pointer-events: auto;
          }
          &.carousel-item-padding-30-px {
            padding: 10px 30px 40px;
          }
        }
        .react-multiple-carousel__arrow {
          z-index: ${(props) => props.theme.zIndex.level2};
          opacity: 1;
          &--left {
            left: -5%;
            background: none;
            &::before {
              font-size: ${(props) => props.theme.fontSizesMobile.arrow};
              color: ${(props) => props.theme.colors.grey};
            }
          }
          &--right {
            background: none;
            right: -5%;
            &::before {
              font-size: ${(props) => props.theme.fontSizesMobile.arrow};
              color: ${(props) => props.theme.colors.grey};
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    .react-multi-carousel-item {
      padding: 12px;
    }
    .related {
      &__carousel {
        position: static;
        &.react-multi-carousel-list {
          margin-left: -12px;
          margin-right: -12px;

          .react-multiple-carousel__arrow--left {
            left: -3%;
            &::before {
              font-size: ${(props) => props.theme.fontSizes.arrow};
            }
          }
          .react-multiple-carousel__arrow--right {
            right: -3%;
            &::before {
              font-size: ${(props) => props.theme.fontSizes.arrow};
            }
          }
          .react-multi-carousel-item {
            &.carousel-item-padding-30-px {
              padding: 12px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.xl}) {
    .related {
      &__carousel {
        &.react-multi-carousel-list {
          .react-multiple-carousel__arrow--left {
            left: -6%;
            &::before {
              font-size: ${(props) => props.theme.fontSizesLarge.arrow};
            }
          }
          .react-multiple-carousel__arrow--right {
            right: -6%;
            &::before {
              font-size: ${(props) => props.theme.fontSizesLarge.arrow};
            }
          }
        }
      }
    }
  }
`;
