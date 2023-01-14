import React from 'react';
import PropTypes from 'prop-types';
import ImageWraper from 'components/ImageWraper';
import { LinkWrapper } from 'components/Navigation';
import {
  StyledTitleCardSection,
  StyledSectionSubTitle,
  StyledSectionTitle,
  StyledSectionSubText,
  StyledSectionLink,
} from 'styles/StyledGlobal/StyledTitleCardSection';
import { AnimationWrapper } from 'components/AnimationWrapper';
import { Div } from 'components/Div';
import { ROUTES } from 'constants/routes';

export const TitleCardSection = (props) => {
  const { title, subTitle, subText, url, className } = props;

  return (
    <StyledTitleCardSection>
      <AnimationWrapper>
        <Div className={`info-section ${className}`}>
          {subTitle && (
            <StyledSectionSubTitle>{subTitle}</StyledSectionSubTitle>
          )}

          <StyledSectionTitle
            dangerouslySetInnerHTML={{ __html: title }}
          ></StyledSectionTitle>

          {subText && <StyledSectionSubText>{subText}</StyledSectionSubText>}

          {url && (
            <StyledSectionLink>
              <LinkWrapper href={url}>
                <Div>
                  <ImageWraper
                    src={`${ROUTES.ICON}icon-arrow-right-big.svg`}
                    alt=""
                    width={32}
                    height={32}
                  />
                </Div>
              </LinkWrapper>
            </StyledSectionLink>
          )}
        </Div>
      </AnimationWrapper>
    </StyledTitleCardSection>
  );
};
TitleCardSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  subText: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
};
