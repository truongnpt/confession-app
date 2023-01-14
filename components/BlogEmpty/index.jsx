import React from 'react';
import { Div } from 'components/Div';
import { P, Span } from 'components/Paragraph';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';

const BlogEmpty = ({ empty }) => {
  return (
    <Div className="text-center m-auto">
      <P className="filter-blog-empty__text mb-2 fw-normal">
        Looks like there is no blogs here.
      </P>
      <P className="filter-blog-empty__text mb-2 fw-semi-bold">
        You may want to discover other blogs.
      </P>
      <Button type="submit" variant="secondary" onClick={() => empty()}>
        <Span className="text-uppercase">See all blog</Span>
      </Button>
    </Div>
  );
};
BlogEmpty.propTypes = {
  empty: PropTypes.func.isRequired,
};

export default BlogEmpty;
