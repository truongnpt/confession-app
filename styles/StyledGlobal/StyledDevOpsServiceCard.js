import { Div } from 'components/Div';
import { H3 } from 'components/Heading';
import { H5 } from 'components/Heading';
import { Span } from 'components/Paragraph';
import styled from 'styled-components';

export const StyledDevOpsListItem = styled.div`
  margin-bottom: 60px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-bottom: 100px;
    align-items: center;

    .left {
      order: 0;
      &__content {
        padding-right: 10%;
      }
    }
    .right {
      order: 1;
      padding-left: 10%;
    }
  }
`;

export const StyledDevOpsItemTitle = styled(H3)`
  font-size: ${(props) => props.theme.fontSizes.variant};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: ${(props) => props.theme.fontSizes.h2};
  }
`;

export const StyledDevOpsItemSubText = styled(Span)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.gray};
  margin-top: 8px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-top: 12px;
  }
`;

export const StyledDevOpsRectangle = styled.div`
  width: 72px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.orange};
  margin-top: 16px;
`;

export const StyledDevOpsListGroup = styled(Div)`
  position: relative;
`;

export const StyledDevOpsItemImages = styled(Div)`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin: 0px;
  }
`;

export const StyledServiceCardListGroup = styled.div`
  position: relative;
  width: 100%;
  border: none;
  transition: 0.3s ease-in-out;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 48px 1fr;
`;

export const StyledServiceCardContent = styled(Div)`
  margin-left: 27px;
`;

export const StyledServiceCardTitle = styled(H5)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledServiceCardSubTitle = styled(Span)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.subText};
  margin-top: 8px;
`;

export const StyledServiceCardIcon = styled(Div)`
  height: 48px;
  width: 48px;
`;
