import React from 'react';
import { StyledCarousel } from 'styles/StyledCarousel/StyledCarousel';
import { responsiveCarousel } from 'utils/responsiveCarousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';

export const CarouselWrapper = ({
  children,
  customResponsive,
  showDots,
  removeArrow,
  itemClass,
  autoPlay,
  infinite,
}) => {
  return (
    <StyledCarousel>
      <Carousel
        autoPlay={autoPlay || false}
        infinite={infinite || false}
        customTransition="all 1.3s"
        transitionDuration={500}
        containerClass="related__carousel"
        dotListClass="custom-dot-list-style first-layer-index"
        itemClass={itemClass || ''}
        draggable={false}
        showDots={showDots || false}
        keyBoardControl={false}
        responsive={customResponsive ? customResponsive : responsiveCarousel}
        removeArrowOnDeviceType={
          removeArrow ? ['desktop', 'tablet', 'mobile'] : []
        }
        ssr={true}
      >
        {children}
      </Carousel>
    </StyledCarousel>
  );
};

CarouselWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  customResponsive: PropTypes.object,
  showDots: PropTypes.bool,
  removeArrow: PropTypes.bool,
  itemClass: PropTypes.string,
  autoPlay: PropTypes.bool,
  infinite: PropTypes.bool,
};
