import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label>
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