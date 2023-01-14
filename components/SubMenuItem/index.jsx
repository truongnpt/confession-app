import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkWrapper } from 'components/Navigation';
import { Span } from 'components/Paragraph';
import ImageWraper from 'components/ImageWraper';
import { H5 } from 'components/Heading';
import { Div } from 'components/Div';

export const SubMenuItem = (props) => {
  const { subMenu, className } = props;

  return (
    <ListGroupItem className={className}>
      <LinkWrapper
        href={subMenu.slug}
        color="primary"
        className="d-flex align-items-center align-items-lg-start mb-0"
      >
        <Div className="sub-menu__item--icon">
          <ImageWraper
            src={subMenu.icon}
            width={40}
            height={40}
            objectFit={'contain'}
            alt={subMenu.name}
          />
        </Div>
        <H5
          fontWeight="bold"
          fontSize="body"
          color="primary"
          className="sub-menu__item--title mr-3 mr-lg-0"
        >
          {subMenu.name}
        </H5>
        <ImageWraper
          className="d-block d-lg-none"
          src="/icons/arrow.svg"
          alt="Arrow"
          width={24}
          height={24}
        />
      </LinkWrapper>
      <LinkWrapper href={subMenu.slug} color="primary" className="d-block">
        <Span
          color="primary"
          className="sub-menu__item--sub-text d-none d-lg-inline-block"
        >
          {subMenu.sub_text}
        </Span>
      </LinkWrapper>
      <LinkWrapper
        href={subMenu.slug}
        className="sub-menu__item--learn-more-button d-none d-lg-flex align-items-center arrow-transition mt-2"
      >
        <Span className="mr-2">Learn More</Span>
        <Div className="learn-more">
          <ImageWraper
            src="/icons/arrow.svg"
            alt="Arrow"
            width={24}
            height={24}
          />
        </Div>
      </LinkWrapper>
    </ListGroupItem>
  );
};

SubMenuItem.propTypes = {
  subMenu: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    icon: PropTypes.string,
    sub_text: PropTypes.string,
  }),
  className: PropTypes.string,
};
