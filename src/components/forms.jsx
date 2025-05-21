import React, { useEffect, useState } from 'react';
import Mensagem from './inputMensagem';
import Button from './button';
import Checkbox from './checkbox';
import './forms.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [mensagem, setMensagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [mensagemStatus, setMensagemStatus] = useState('');
  const [dadosUsuario, setDadosUsuario] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem('dadosUsuario');

    if (dados) {
      setDadosUsuario(JSON.parse(dados));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const sair = () => {
    localStorage.removeItem('cpfValido');
    localStorage.removeItem('dadosUsuario');
    navigate('/');
  };

  const aoSubmeter = async (evento) => {
    evento.preventDefault();
    setStatus(null);
    setMensagemStatus('');

    if (!dadosUsuario || !mensagem.trim() || !categoria) {
      setStatus('error');
      setMensagemStatus('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);

    const dados = {
      nome: dadosUsuario.nome,
      idade: dadosUsuario.idade,
      contato: dadosUsuario.contato,
      bairro: dadosUsuario.bairro,
      categoria,
      mensagem,
    };

    try {
      const resposta = await fetch('https://682b8cebd29df7a95be3c0c0.mockapi.io/api/v1/formularios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });

      if (!resposta.ok) throw new Error('Erro ao enviar formulário.');

      setStatus('success');
      setMensagemStatus('Enviado para Análise');
      setMensagem('');
      setCategoria('');
    } catch (erro) {
      setStatus('error');
      setMensagemStatus('Erro ao enviar o formulário. Tenta novamente.');
    } finally {
      setLoading(false);
    }
  };

  const selecionarCategoria = (label) => {
    setCategoria((atual) => (atual === label ? '' : label));
  };

  return (
    <form className="formulario" onSubmit={aoSubmeter}>
      <h2>Formulário</h2>

      {dadosUsuario && (
        <div className="info-usuario">
          <p><strong>Nome:</strong> {dadosUsuario.nome}</p>
          <p><strong>Idade:</strong> {dadosUsuario.idade}</p>
          <p><strong>Contato:</strong> {dadosUsuario.contato}</p>
          <p><strong>Bairro:</strong> {dadosUsuario.bairro}</p>
        </div>
      )}

      <div className="categorias">
        <Checkbox label="Sugestão" checked={categoria === 'Sugestão'} onChange={selecionarCategoria} />
        <Checkbox label="Reclamação" checked={categoria === 'Reclamação'} onChange={selecionarCategoria} />
        <Checkbox label="Denúncia" checked={categoria === 'Denúncia'} onChange={selecionarCategoria} />
      </div>

      <Mensagem
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Escreva aqui..."
      />

      {status && (
        <div className={`mensagem-status ${status}`}>
          {mensagemStatus}
        </div>
      )}

      <div className="botao-form">
        <Button type="submit">{loading ? 'Enviando...' : 'Enviar'}</Button>
      </div>

      <button type="button" className="botao-sair" onClick={sair}>
        Sair
      </button>
    </form>
  );
};

export default Form;
