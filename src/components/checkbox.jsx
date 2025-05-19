import React from 'react';
import './checkbox.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(label)}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
