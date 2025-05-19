import React from 'react';
import './button.css';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="botao-personalizado"
    >
      {children}
    </button>
  );
};

export default Button;
