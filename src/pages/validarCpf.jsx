import React, { useState } from 'react';
import cpfsValidos from '../Cpfs';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import './validarCpf.css';

const ValidarCPF = () => {
  const [cpf, setCpf] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const validar = () => {
    const encontrado = cpfsValidos.find((item) => item.cpf === cpf);
    if (encontrado) {
      localStorage.setItem('cpfValido', 'true');
      navigate('/formulario');
    } else {
      setErro('CPF não encontrado. Tenta novamente.');
    }
  };

  return (
    <Layout>
      <div className="validador-cpf">
        <h1>Para Prosseguir, Confira o seu CPF</h1>
        <h2>Validação de CPF</h2>

        <input
          type="text"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <button onClick={validar}>Validar</button>

        {erro && <p className="mensagem-erro">{erro}</p>}
      </div>
    </Layout>
  );
};

export default ValidarCPF;
