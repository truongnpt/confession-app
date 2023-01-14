import styled from 'styled-components';

export const StyledPagination = styled.div`
  .pagination {
    align-items: center;
    justify-content: center;
    margin: 0;
    .page-item {
      display: flex;
      margin-top: 2px;
      .page-link {
        border: none;
        background: none;
        color: ${(props) => props.theme.colors.gray};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: ${(props) => props.theme.borderRadius.circle};
        padding: 2px 0 0;
        font-size: ${(props) => props.theme.fontSizes.h5};
        margin: 5px;
        line-height: 1;
        text-align: center;
        outline: none;
        opacity: 0.5;
        box-shadow: none;
      }
      &.btn-prev,
      &.btn-next {
        margin-top: 0;
        &.disabled {
          opacity: 0.5;
        }
        .page-link {
          padding: 0;
          opacity: 1;
          background: none;
          font-size: ${(props) => props.theme.fontSizesMobile.h2};
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${(props) => props.theme.colors.primary};
          margin: 0 5px;
          line-height: 1;
        }
      }
      &.active {
        .page-link {
          color: ${(props) => props.theme.colors.white};
          background: ${(props) => props.theme.colors.orange};
          opacity: 1;
        }
      }
    }
  }
`;
