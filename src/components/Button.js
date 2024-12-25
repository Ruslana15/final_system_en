// components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type = 'button', onClick, disabled = false, size = 'md', variant = 'primary', children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button--${size} button--${variant} ${disabled ? 'button--disabled' : ''}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'bordered']),
  children: PropTypes.node.isRequired,
};

export default Button;
