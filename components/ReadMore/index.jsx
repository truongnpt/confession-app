import React from 'react';
import ImageWrapper from 'components/ImageWraper';
import PropTypes from 'prop-types';
import { StyledLink } from 'styles/StyledGlobal/StyledCaseCard';
import { ROUTES } from 'constants/routes';
import { H6 } from 'components/Heading';

const ReadMore = (props) => {
  const { text = 'READ MORE', href } = props;
  return (
    <StyledLink href={href} className="arrow-transition">
      <H6>{text}</H6>
      <ImageWrapper
        src={`${ROUTES.ICON}icon-arrow-right-orange.svg`}
        alt=""
        width={20}
        height={20}
      />
    </StyledLink>
  );
};

export default ReadMore;

ReadMore.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
