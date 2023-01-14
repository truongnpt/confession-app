import PropTypes from 'prop-types';

const CareerPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  published_at: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  career_type: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    background_color: PropTypes.string.isRequired,
  }),
  updated_at: PropTypes.string.isRequired,
});
export default CareerPropTypes;
