import PropTypes from 'prop-types';

export const BanderaShape = PropTypes.shape({
    bandera: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
})