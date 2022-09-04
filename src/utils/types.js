import PropTypes from 'prop-types';

export const ingredientType = PropTypes.arrayOf(
  PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })
);