import React from 'react';
import PropTypes from 'prop-types';

export const ButtonNumber = ({ value }) => <button type="button" className="btn-number">{value}</button>;

ButtonNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ButtonNumber;
