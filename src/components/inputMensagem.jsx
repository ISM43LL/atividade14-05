import React from 'react';
import './inputMensagem.css';

const InputMensagem = ({ value, onChange, placeholder = 'Escreva aqui ...', className = '' }) => {
  return (
    <textarea
      className={`textarea-mensagem ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
    />
  );
};

export default InputMensagem;
