import React, { forwardRef } from 'react';
import './Input.css';

export const Input = forwardRef(({ type, placeholder, onChange, className, value, name }, ref) => {
  const handleChange = (event) => {
    onChange(event.target);
  };

  return (
    <input
      className={`paradox-input ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      name={name}
      ref={ref}
    />
  );
});
