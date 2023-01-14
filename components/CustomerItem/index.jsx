import React from 'react';
import ImageWraper from 'components/ImageWraper';
import { Div } from 'components/Div';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import { AnimationWrapper } from 'components/AnimationWrapper';

export const CustomerItem = (props) => {
  const { customer, indexItem } = props;

  const y = indexItem + 60;
  return (
    <AnimationWrapper
      className="customer__image"
      hiddenAnimationVariants={{ y: y }}
    >
      <Div>
        <ImageWraper
          width={256}
          height={108}
          src={ROUTES.CUSTOMERLOGO + customer.image}
          alt={customer.name}
        />
      </Div>
    </AnimationWrapper>
  );
};
CustomerItem.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  indexItem: PropTypes.number,
};
