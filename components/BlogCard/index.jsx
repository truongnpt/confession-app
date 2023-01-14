import React from 'react';
import { LinkWrapper } from 'components/Navigation';
import { Span } from 'components/Paragraph';
import ImageWraper from 'components/ImageWraper';
import { apiImgPath } from 'utils/imgUtils';
import { ROUTES } from 'constants/routes';
import { P } from 'components/Paragraph';
import BlogPropTypes from 'utils/blogPropTypes';
import {
  StyledBlogContent,
  StyledBlogImg,
  StyledBlogItem,
  StyledContentTitle,
  StyledReadMore,
} from 'styles/StyledBlogsPage/StyledBlogCard.js';
import ReadMore from 'components/ReadMore';
export const BlogCard = (props) => {
  const { blog } = props;
  return (
    <StyledBlogItem>
      <LinkWrapper href={`${ROUTES.BLOG}${blog.slug}`}>
        <StyledBlogImg>
          <ImageWraper
            className="blogs-related__image--feature"
            src={apiImgPath(blog.image.url)}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
          />
        </StyledBlogImg>
      </LinkWrapper>
      <StyledBlogContent>
        <LinkWrapper href={`${ROUTES.BLOG}${blog.slug}`}>
          <StyledContentTitle>{blog.title}</StyledContentTitle>
          <Span>{blog.description}</Span>
        </LinkWrapper>
        <P color="primary">{blog.except}</P>
        <StyledReadMore>
          <ReadMore href={`${ROUTES.BLOG}${blog.slug}`} />
        </StyledReadMore>
      </StyledBlogContent>
    </StyledBlogItem>
  );
};

BlogCard.propTypes = {
  blog: BlogPropTypes,
};
