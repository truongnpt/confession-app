import { Div } from 'components/Div';
import { H5 } from 'components/Heading';
import { P, Span } from 'components/Paragraph';
import { ROUTES } from 'constants/routes';
import moment from 'moment';
import ImageWraper from 'components/ImageWraper';
import React, { useState } from 'react';
import {
  StyledBlogCardDetail,
  StyledShareIcon,
} from 'styles/StyledBlogsPage/StyledBlogCardDetail';
import { apiImgPath } from 'utils/imgUtils';
import BlogPropTypes from 'utils/blogPropTypes';
import { LinkWrapper } from 'components/Navigation';
import { useEffect } from 'react';

function BlogCardDetail(props) {
  const { blogDetail } = props;
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const open = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url, 'share blog on new window', 'height=600,width=600');
    }
  };
  return (
    <StyledBlogCardDetail>
      <Div className="blog__item">
        <Div className="mb-2 mb-md-4">
          <Div className="d-flex flex-wrap align-items-center">
            <Div className="blog__image rounded-circle mr-3">
              <ImageWraper
                src={apiImgPath(blogDetail.author.avatar.url)}
                alt={blogDetail.title}
                width={60}
                height={60}
              />
            </Div>
            <Div className="blog__info">
              <P color="primary" className="author__name mb-0">
                {blogDetail.author.username}
              </P>
              <P
                color="subText"
                fontWeight="small"
                className="author__position mb-0"
              >
                {blogDetail.author.job_title}
              </P>
            </Div>
            <Div className="blog__public">
              <P color="subText" fontWeight="small">
                Published on&nbsp;
                {moment(blogDetail.published_at).format('ll')}
              </P>
            </Div>
          </Div>
        </Div>

        <Div className="blog__feature">
          <ImageWraper
            src={apiImgPath(blogDetail.image.url)}
            alt={blogDetail.title}
            width={730}
            height={552}
          />
        </Div>

        <Div
          color="primary"
          className="blog__content"
          dangerouslySetInnerHTML={{ __html: blogDetail.content }}
        />

        <Div className="d-flex mt-4 mb-2">
          <Div className="blog__label d-flex justify-content-flex-start">
            <H5 color="primary" fontWeight="semiBold">
              Tags:
            </H5>
          </Div>
          <Div className="d-flex flex-wrap align-items-center">
            {blogDetail.resource_categories.map((item) => {
              return (
                <LinkWrapper
                  key={item.id}
                  href={`${ROUTES.BLOG}?tag=${item.id}`}
                >
                  <Div className="blog__tag ml-3 mb-3">
                    <Span color="primary" className="text-capitalize">
                      {item.name}
                    </Span>
                  </Div>
                </LinkWrapper>
              );
            })}
          </Div>
        </Div>
        <Div className="blog__share d-flex align-items-center mb-lg-5 pb-lg-3">
          <Div>
            <H5 color="primary" fontWeight="semiBold">
              Share:
            </H5>
          </Div>
          <Div className="d-flex">
            <StyledShareIcon>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
                }}
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                title="Share on Facebook"
                className="d-block"
              >
                <ImageWraper
                  src={`${ROUTES.ICON}icon-facebook.svg`}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </a>
            </StyledShareIcon>
            <StyledShareIcon>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  open(`https://www.linkedin.com/shareArticle?url=${url}`);
                }}
                href={`https://www.linkedin.com/shareArticle?url=${url}`}
                title="Share on Linked-in"
                className="d-block"
              >
                <ImageWraper
                  src={`${ROUTES.ICON}icon-linkedin.svg`}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </a>
            </StyledShareIcon>
          </Div>
        </Div>
      </Div>
    </StyledBlogCardDetail>
  );
}

BlogCardDetail.propTypes = {
  blogDetail: BlogPropTypes,
};

export default BlogCardDetail;
