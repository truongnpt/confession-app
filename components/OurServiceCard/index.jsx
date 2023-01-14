import React from 'react';
import { Div } from 'components/Div';
import PropTypes from 'prop-types';
import { LinkWrapper } from 'components/Navigation';
import { H5 } from 'components/Heading';
import { Span } from 'components/Paragraph';
import { AnimationWrapper } from 'components/AnimationWrapper';
import {
  StyledOurServiceCard,
  StyledDivText,
  StyledDivIconArrow,
  StyledDivImage,
  StyledIcon,
} from 'styles/StyledOurServiceCard';
import { StyledH6 } from 'styles/StyledBlogsPage/StyledRelatedBlog';
import ImageWrapper from 'components/ImageWraper';
import { ROUTES } from 'constants/routes';
const OurServiceCard = (props) => {
  const { services } = props;
  return (
    <AnimationWrapper>
      {services.slug == '#' ? (
        <Span color="primary">
          <Div className="d-flex align-items-center mb-0">
            <Div>
              <ImageWrapper src={services.icon} alt={services.name} />
            </Div>
            <H5 fontWeight="bold" fontSize="body">
              {services.name}
            </H5>
          </Div>
          <Span>{services.sub_text}</Span>
        </Span>
      ) : (
        <LinkWrapper href={services.slug} color="primary">
          <StyledOurServiceCard>
            <Div order={services.orderIcon}>
              <StyledDivImage>
                <ImageWrapper
                  width={80}
                  height={80}
                  src={services.icon}
                  alt={services.name}
                />
              </StyledDivImage>
            </Div>
            <StyledDivText
              order={services.order}
              textAlign={services.textAlign}
            >
              <H5 fontWeight="bold" fontSize="body">
                {services.name}
              </H5>
              <Span>{services.sub_text}</Span>
              <StyledDivIconArrow id="icon">
                <StyledH6>READ MORE</StyledH6>
                <StyledIcon>
                  <ImageWrapper
                    src={`${ROUTES.ICON}icon-arrow-right-orange.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />
                </StyledIcon>
              </StyledDivIconArrow>
            </StyledDivText>
          </StyledOurServiceCard>
        </LinkWrapper>
      )}
    </AnimationWrapper>
  );
};
export default OurServiceCard;

OurServiceCard.propTypes = {
  services: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    handle: PropTypes.string,
    sub_text: PropTypes.string,
    icon: PropTypes.string,
    order: PropTypes.number,
    orderIcon: PropTypes.number,
    textAlign: PropTypes.string,
  }),
};
