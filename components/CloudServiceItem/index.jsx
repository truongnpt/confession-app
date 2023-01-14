import React from 'react';
import ImageWraper from 'components/ImageWraper';
import {
  StyledCloudServiceItem,
  StyledCloudServiceItemIcon,
  StyledCloudServiceItemTitle,
} from 'styles/StyledGlobal/StyledCloudServiceItem';
import PropTypes from 'prop-types';

export const CloudServiceItem = (props) => {
  const { cloudServiceItem } = props;
  return (
    <StyledCloudServiceItem>
      <StyledCloudServiceItemIcon>
        <ImageWraper
          src={cloudServiceItem.icon}
          width={60}
          height={60}
          objectFit={'contain'}
          alt={cloudServiceItem.name}
        />
      </StyledCloudServiceItemIcon>
      <StyledCloudServiceItemTitle
        color="primary"
        dangerouslySetInnerHTML={{ __html: cloudServiceItem.name }}
      ></StyledCloudServiceItemTitle>
    </StyledCloudServiceItem>
  );
};

CloudServiceItem.propTypes = {
  cloudServiceItem: PropTypes.object,
};
