import ImageWrapper from 'components/ImageWraper';
import React from 'react';
import {
  StyledOfferItem,
  StyledOfferItemIcon,
  StyledOfferItemTitle,
} from 'styles/StyledGlobal/StyledOfferItem';
import PropTypes from 'prop-types';

export const OfferItem = (props) => {
  const { offerItem } = props;
  return (
    <StyledOfferItem>
      <StyledOfferItemIcon>
        <ImageWrapper
          src={offerItem.icon}
          height={48}
          width={48}
          alt={offerItem.name}
          objectFit={'contain'}
        />
      </StyledOfferItemIcon>
      <StyledOfferItemTitle>{offerItem.name}</StyledOfferItemTitle>
    </StyledOfferItem>
  );
};

OfferItem.propTypes = {
  offerItem: PropTypes.object,
};
