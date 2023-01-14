import PropTypes from 'prop-types';

const CasePropTypes = PropTypes.shape({
  id: PropTypes.number,
  header_image_desktop: PropTypes.object,
  header_image_mobile: PropTypes.object,
  images: PropTypes.array,
  name: PropTypes.string,
  slug: PropTypes.string,
  about: PropTypes.string,
  problem: PropTypes.string,
  solution: PropTypes.string,
  technologies: PropTypes.array,
  feature: PropTypes.string,
  header_background_color_top: PropTypes.string,
  header_background_color_bottom: PropTypes.string,
  services: PropTypes.array,
  thumbnail: PropTypes.object,
});
export default CasePropTypes;
