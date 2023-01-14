import styled from 'styled-components';

export const StyledHeader = styled.header`
  box-shadow: ${(props) => props.theme.boxShadows.header};
  position: fixed;
  width: 100%;
  top: 0;
  background: ${(props) => props.theme.colors.primary};
  z-index: ${(props) => props.theme.zIndex.level4};
  transition: 0.1s all;
  .header {
    &__inner {
      height: ${(props) => props.theme.heightsMobile.header};
      box-shadow: ${(props) => props.theme.boxShadows.header};
      z-index: ${(props) => props.theme.zIndex.level4};
    }
  }
  .btn-contact-menu {
    padding-right: 0;

    button {
      box-shadow: ${(props) => props.theme.boxShadows.buttonContactUs};
      text-transform: uppercase;
      padding-left: 12px;
      padding-right: 12px;

      span {
        margin-left: 12px;
      }
    }
  }
  .main-menu {
    position: relative;

    .list-group-item {
      a {
        color: ${(props) => props.theme.colors.primary};
        font-weight: ${(props) => props.theme.fontWeights.regular};
        text-transform: uppercase;
      }

      &:last-child {
        a {
          background: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.white};
          padding: 8px 20px;
          border-radius: 5px;
          text-decoration: none;

          &:hover {
            opacity: 0.7;
          }
        }
      }

      &.selected {
        a {
          color: ${(props) => props.theme.colors.active};
        }
      }
    }
  }

  .sub-menu {
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: 0.3s all;
    border-radius: ${(props) => props.theme.borderRadius.primary};

    &__item {
      width: fit-content;
      padding-bottom: 0;
      border-radius: ${(props) => props.theme.borderRadius.primary};
      transition: 0.3s ease-in-out;
      margin: auto;

      &.sub-active,
      &:hover {
        background: ${(props) => props.theme.colors.white};
      }
      &--icon {
        width: 40px;
        height: 40px;
      }
      &--title {
        font-size: ${(props) => props.theme.fontSizesMobile.h5};
        font-weight: ${(props) => props.theme.fontWeights.regular};
        margin: 0;
        margin-left: 15px;
      }

      &--sub-text {
        color: ${(props) => props.theme.colors.subText} !important;
        margin-left: 55px;
        display: inline-block;
      }

      &--learn-more-button {
        margin-left: 55px;
        .learn-more {
          width: 24px;
          height: 24px;
        }
      }

      a,
      span {
        color: ${(props) => props.theme.colors.primary};
        text-shadow: none !important;
        text-decoration: none !important;
        opacity: 1 !important;
        font-weight: ${(props) => props.theme.fontWeights.regular};
      }

      &.selected {
        a {
          color: ${(props) => props.theme.colors.active};
        }
      }
    }
  }

  .mobile-menu {
    transition: 0.3s all;
    height: 0;
    overflow: auto;
    &.active {
      height: calc(100vh - 66px);
      padding-bottom: 30px;
    }

    .list-group {
      .list-group-item__container {
        &:first-child {
          .list-group-item {
            padding-top: 32px !important;
          }
        }
        .list-group-item {
          a,
          .nav__dropdown-item {
            color: ${(props) => props.theme.colors.primary};
            font-weight: ${(props) => props.theme.fontWeights.regular};
          }

          &.expanded {
            .nav__dropdown-item {
              text-shadow: ${(props) => props.theme.boxShadows.text};

              .nav__dropdown-icon {
                svg {
                  transform: rotate(180deg);
                }
              }

              .sub-menu {
                height: 150px;
              }
            }
          }

          .nav__dropdown-icon {
            position: absolute;
            top: -1px;

            svg {
              transition: 0.3s ease-in-out;
            }
          }

          &.selected {
            a {
              color: ${(props) => props.theme.colors.primary};
            }
          }
          &.active {
            background-color: ${(props) => props.theme.colors.white};
            a {
              color: ${(props) => props.theme.colors.orange};
              text-shadow: -0.06ex 0 ${(props) => props.theme.colors.orange},
                0.07ex 0 ${(props) => props.theme.colors.orange};
            }
          }
        }
      }
    }
  }

  .menu-icon {
    display: flex;
    margin-left: 16px;
    width: 25px;
    height: 25px;
    flex-wrap: wrap;
    align-items: center;
    opacity: 1;

    &__line {
      position: relative;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.primary};
      transition: 0.3s all;
    }

    &.active {
      .menu-icon__line {
        background: ${(props) => props.theme.colors.orange};
      }

      span {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 8px;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 8px;
        }
      }
    }
  }

  //laptop-layout
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    .header {
      &__inner {
        height: ${(props) => props.theme.heightsLarge.header};
        box-shadow: none;

        .main-menu {
          .nav__dropdown-item {
            &:hover {
              .sub-menu {
                display: block;

                &::before {
                  content: '';
                  position: absolute;
                  width: 60%;
                  height: 50px;
                  background: none;
                  left: 0;
                  top: -40px;
                }
              }
            }
          }
        }

        .sub-menu {
          position: absolute;
          width: auto;
          height: auto;
          padding: ${(props) => props.theme.space.m};
          top: 63px;
          left: 0;
          overflow: inherit;
          background: ${(props) => props.theme.colors.white};
          border-radius: ${(props) => props.theme.borderRadius.primary};
          box-shadow: ${(props) => props.theme.boxShadows.boxShadowSubMenu};
          display: none;

          &__item {
            width: 420px;
            margin: 0 !important;
            padding: ${(props) => props.theme.space.m};
            border-radius: ${(props) => props.theme.borderRadius.primary};
            transition: 0.3s ease-in-out;

            &:last-child {
              margin-top: 15px !important;
            }

            &.sub-active,
            &:hover {
              background: ${(props) =>
                props.theme.colors.backgroundSubMenuActive};
            }
            &--icon {
              width: 40px;
              height: 40px;
            }
            &--title {
              font-size: ${(props) => props.theme.fontSizesMobile.h5};
              font-weight: ${(props) => props.theme.fontWeights.bold};
              margin: 0;
              margin-left: 15px;
              white-space: nowrap;
            }

            &--sub-text {
              margin-top: -13px;
              margin-left: 55px;
            }

            &--learn-more-button {
              margin-left: 55px;
              .learn-more {
                width: 24px;
                height: 24px;
              }
            }

            a,
            span {
              color: ${(props) => props.theme.colors.primary};
              text-shadow: none !important;
              text-decoration: none !important;
              opacity: 1 !important;
              border-bottom: 0 !important;
            }

            &:last-child {
              a {
                background: none;
                color: ${(props) => props.theme.colors.primary};
                padding: 0;
                border-radius: 0;
                text-decoration: none;

                &:hover {
                  opacity: 1;
                }
              }
            }

            &.selected {
              a {
                color: ${(props) => props.theme.colors.active};
              }
            }
          }
        }
      }
    }

    .list-group {
      &-item {
        margin-left: 30px;
        & > a {
          color: ${(props) => props.theme.colors.primary};
          font-weight: ${(props) => props.theme.fontWeights.bold};
          transition: 0.3s ease-in-out;
          &:hover {
            color: ${(props) => props.theme.colors.orange};
          }
        }

        .nav__dropdown {
          &-item {
            color: ${(props) => props.theme.colors.primary};
            cursor: pointer;

            &:hover {
              text-shadow: ${(props) => props.theme.boxShadows.text};

              .nav__dropdown-icon {
                svg {
                  transform: rotate(180deg);
                }
              }
            }
          }
          &-icon {
            svg {
              position: relative;
              width: 16px;
              height: 16px;
              top: -2px;
              transition: 0.3s ease-in-out;
            }
          }
        }

        &.active {
          margin-left: 30px !important;
          background: ${(props) => props.theme.colors.white};
          a {
            color: ${(props) => props.theme.colors.orange};
            text-shadow: -0.06ex 0 ${(props) => props.theme.colors.orange},
              0.07ex 0 ${(props) => props.theme.colors.orange};
            .nav__dropdown-icon {
              svg {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
    }
  }
`;
