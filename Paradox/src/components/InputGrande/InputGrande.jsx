import React, { forwardRef, useState } from 'react';
import './InputGrande.css';
import { Input } from '../Input/Input';


export const InputGrande = forwardRef(({ type = 'text', placeholder, onChange, className, multiline = false, rows = 3, maxRows, value, name }, ref) => {
  const [textareaRows, setTextareaRows] = useState(rows);

  const handleChange = (event) => {
    if (multiline) {
      const textarea = event.target;
      setTextareaRows(Math.min(textarea.scrollHeight / 16, maxRows || Infinity));
    }
    onChange(event.target);
  };

  const inputElement = multiline ? (
    <textarea
      className={`paradox-input ${className}`}
      placeholder={placeholder}
      onChange={handleChange}
      rows={textareaRows}
      type={type}
      value={value}
      name={name}
      ref={ref}
    />
  ) : (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      value={value}
      name={name}
      ref={ref}
    />
  );

  return inputElement;
});
