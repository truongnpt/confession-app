import React from 'react';
import { LinkWrapper } from 'components/Navigation';
import ImageWraper from 'components/ImageWraper';
import { apiImgPath } from 'utils/imgUtils';
import { Span } from 'components/Paragraph';
import BlogPropTypes from 'utils/blogPropTypes';
import { ROUTES } from 'constants/routes';
import { P } from 'components/Paragraph';
import {
  StyledBlogsRelatedContent,
  StyledBlogsRelatedImg,
  StyledBlogsRelatedItem,
  StyledContentTitle,
  StyledReadMore,
} from 'styles/StyledBlogsPage/StyledRelatedBlog';
import ReadMore from 'components/ReadMore';
export const BlogRelatedCard = (props) => {
  const { blog } = props;
  return (
    <StyledBlogsRelatedItem>
      <LinkWrapper href={`${ROUTES.BLOG}${blog.slug}`}>
        <StyledBlogsRelatedImg>
          <ImageWraper
            className="blogs-related__image--feature"
            src={apiImgPath(blog.image.url)}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
          />
        </StyledBlogsRelatedImg>
      </LinkWrapper>
      <StyledBlogsRelatedContent>
        <LinkWrapper href={`${ROUTES.BLOG}${blog.slug}`}>
          <StyledContentTitle>{blog.title}</StyledContentTitle>
          <Span>{blog.description}</Span>
        </LinkWrapper>
        <P color="primary">{blog.except}</P>
        <StyledReadMore>
          <ReadMore href={`${ROUTES.BLOG}${blog.slug}`} />
        </StyledReadMore>
      </StyledBlogsRelatedContent>
    </StyledBlogsRelatedItem>
  );
};

BlogRelatedCard.propTypes = {
  blog: BlogPropTypes,
};
