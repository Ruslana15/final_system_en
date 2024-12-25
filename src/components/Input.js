import React from 'react';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange, disabled, label, danger, ...props }) => {
  return (
    <div className="input-container">
      {label && <label className={`input-label ${danger ? 'danger' : ''}`}>{label}</label>}
      <input
        type={type}
        className={`input-field ${danger ? 'input-danger' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default Input;
