import PropTypes from 'prop-types';

const BlogCategory = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

const BlogPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  img: PropTypes.object,
  author: PropTypes.object,
  published_at: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  except: PropTypes.string,
  resource_categories: PropTypes.arrayOf(BlogCategory),
  thumbnail: PropTypes.object,
});

export default BlogPropTypes;
