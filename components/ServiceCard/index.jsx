import React from 'react';
import ImageWrapper from 'components/ImageWraper';
import PropTypes from 'prop-types';
import { LinkWrapper } from 'components/Navigation';
import { AnimationWrapper } from 'components/AnimationWrapper';
import {
  StyledDevOpsItemImages,
  StyledDevOpsItemSubText,
  StyledDevOpsItemTitle,
  StyledDevOpsListGroup,
  StyledDevOpsListItem,
  StyledDevOpsRectangle,
  StyledServiceCardContent,
  StyledServiceCardIcon,
  StyledServiceCardListGroup,
  StyledServiceCardSubTitle,
  StyledServiceCardTitle,
} from 'styles/StyledGlobal/StyledDevOpsServiceCard';
import { Nav } from 'components/Nav';
import { Col, Row } from 'react-bootstrap';

const ServiceCard = (props) => {
  const { service } = props;
  return (
    <StyledDevOpsListItem>
      <Row>
        <Col
          className={`col-12 col-lg-6 ${
            service.image_position === 'left' ? 'right' : 'left__content'
          }`}
        >
          <AnimationWrapper hiddenAnimationVariants={{ y: 40 }}>
            <StyledDevOpsItemTitle>{service.name}</StyledDevOpsItemTitle>
          </AnimationWrapper>

          <AnimationWrapper hiddenAnimationVariants={{ y: 50 }}>
            <StyledDevOpsItemSubText>
              {service.sub_text}
            </StyledDevOpsItemSubText>
          </AnimationWrapper>

          <AnimationWrapper>
            <StyledDevOpsRectangle />
          </AnimationWrapper>

          <StyledDevOpsListGroup>
            <Nav>
              {service.categories.map((item) => {
                return (
                  <AnimationWrapper key={item.id}>
                    {item.slug == '#' ? (
                      <StyledServiceCardListGroup>
                        <StyledServiceCardIcon>
                          <ImageWrapper
                            src={item.icon}
                            width={48}
                            height={48}
                            objectFit={'contain'}
                            alt={item.name}
                          />
                        </StyledServiceCardIcon>
                        <StyledServiceCardContent>
                          <StyledServiceCardTitle>
                            {item.name}
                          </StyledServiceCardTitle>
                          <StyledServiceCardSubTitle>
                            {item.sub_text}
                          </StyledServiceCardSubTitle>
                        </StyledServiceCardContent>
                      </StyledServiceCardListGroup>
                    ) : (
                      <LinkWrapper href={item.slug} color="primary">
                        <StyledServiceCardListGroup>
                          <StyledServiceCardIcon>
                            <ImageWrapper
                              src={item.icon}
                              width={48}
                              height={48}
                              objectFit={'contain'}
                              alt={item.name}
                            />
                          </StyledServiceCardIcon>
                          <StyledServiceCardContent>
                            <StyledServiceCardTitle>
                              {item.name}
                            </StyledServiceCardTitle>
                            <StyledServiceCardSubTitle>
                              {item.sub_text}
                            </StyledServiceCardSubTitle>
                          </StyledServiceCardContent>
                        </StyledServiceCardListGroup>
                      </LinkWrapper>
                    )}
                  </AnimationWrapper>
                );
              })}
            </Nav>
          </StyledDevOpsListGroup>
        </Col>
        <Col
          className={`col-12 col-lg-6 devops-list__item--image ${
            service.image_position === 'left' ? 'left' : ''
          }`}
        >
          <AnimationWrapper>
            <StyledDevOpsItemImages>
              <ImageWrapper
                src={service.image}
                width={540}
                height={491}
                objectFit={'contain'}
                alt={service.name}
                unoptimized={true}
              />
            </StyledDevOpsItemImages>
          </AnimationWrapper>
        </Col>
      </Row>
    </StyledDevOpsListItem>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    image_position: PropTypes.string,
    name: PropTypes.string,
    sub_text: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string,
        handle: PropTypes.string,
        sub_text: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
  }),
};
