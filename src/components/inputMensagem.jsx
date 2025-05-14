import React from 'react';

const mensagem = ({ value, onChange, placeholder = 'Escreva aqui ...', className = '' }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
    />
  );
};

export default mensagem;
