import { H5 } from 'components/Heading';
import styled from 'styled-components';

export const StyledOfferItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledOfferItemIcon = styled.div`
  width: 80px;
  height: 80px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius.icon};
  background-color: ${(props) => props.theme.colors.pink};
`;

export const StyledOfferItemTitle = styled(H5)`
  margin: 8px 0px 0px 0px;
  width: 130px;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-style: normal;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;
