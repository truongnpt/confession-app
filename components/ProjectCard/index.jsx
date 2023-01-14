import React from 'react';
import { LinkWrapper } from 'components/Navigation';
import ImageWraper from 'components/ImageWraper';
import PropTypes from 'prop-types';
import { apiImgPath } from 'utils/imgUtils';
import CasePropTypes from 'utils/casePropTypes';
import {
  StyledRelatedItem,
  StyledRelatedItemContent,
  StyledRelatedItemImage,
  StyledRelatedItemLink,
  StyledRelateItemName,
} from 'styles/StyledCasesPage/StyledCasesRelated';
import {
  StyledDivArrow,
  StyledH6,
} from 'styles/StyledBlogsPage/StyledRelatedBlog';
import { ROUTES } from 'constants/routes';
import ImageWrapper from 'components/ImageWraper';
import ReadMore from 'components/ReadMore';
export const ProjectCard = (props) => {
  const { project, prefixLink } = props;
  return (
    <StyledRelatedItem>
      <LinkWrapper href={prefixLink + project.slug} className="d-block">
        <StyledRelatedItemImage>
          <ImageWraper
            className="case-related__image--feature"
            src={apiImgPath(project.thumbnail.url)}
            alt={project.name}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
          />
        </StyledRelatedItemImage>
      </LinkWrapper>
      <StyledRelatedItemContent>
        <LinkWrapper href={prefixLink + project.slug}>
          <StyledRelateItemName>{project.name}</StyledRelateItemName>
        </LinkWrapper>
        <ReadMore href={prefixLink + project.slug} />
      </StyledRelatedItemContent>
    </StyledRelatedItem>
  );
};

ProjectCard.propTypes = {
  project: CasePropTypes,
  prefixLink: PropTypes.string,
};
