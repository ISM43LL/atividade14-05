import React from 'react';
import { Navigate } from 'react-router-dom';

const RotaPrivada = ({ children }) => {
  const autenticado = localStorage.getItem('cpfValido') === 'true';
  return autenticado ? children : <Navigate to="/" />;
};

export default RotaPrivada;
