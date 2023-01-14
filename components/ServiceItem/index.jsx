import React from 'react';
import { Div } from 'components/Div';

import ImageWraper from 'components/ImageWraper';
import { H3, H5 } from 'components/Heading';
import { P } from 'components/Paragraph';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'components/AnimationWrapper';
import { ROUTES } from 'constants/routes';

export const ServiceItem = (props) => {
  const { service } = props;
  return (
    <Div className="service__item">
      <AnimationWrapper>
        <Div className="service__content">
          <P className={`sub_title ${service.textGradient}`}>
            {service.subtitle}
          </P>
          <H3 color="primary">{service.title}</H3>
          <P color="primary" className="text-description">
            {service.description}
          </P>
        </Div>
      </AnimationWrapper>
      <Div className="service__group">
        <Div className="item__image">
          <ImageWraper
            src={ROUTES.SERVICESPAGE + service.image}
            width={552}
            height={447}
            alt={service.title}
          />
        </Div>
        <Div className="item__group">
          {service.sub_item.map((item) => {
            return (
              <Div key={item.id} className="item__card">
                <AnimationWrapper>
                  <ImageWraper
                    src={ROUTES.SERVICESPAGE + item.image}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </AnimationWrapper>
                <AnimationWrapper>
                  <H5 color="primary" className="text-capitalize mt-2">
                    {item.title}
                  </H5>
                </AnimationWrapper>
                <AnimationWrapper>
                  <P color="primary" className="mb-0">
                    {item.description}
                  </P>
                </AnimationWrapper>
              </Div>
            );
          })}
        </Div>
      </Div>
    </Div>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    bg_color: PropTypes.string,
    sub_item: PropTypes.array,
    textGradient: PropTypes.string,
    background: PropTypes.string,
  }),
};
