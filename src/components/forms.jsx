import React, { useState } from 'react';
import InputText from './input';
import Mensagem from './inputMensagem';
import Button from './button';
import Checkbox from './checkbox';
import './forms.css';

const Form = () => {
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [mensagemStatus, setMensagemStatus] = useState('');

  const aoSubmeter = async (evento) => {
    evento.preventDefault();
    setLoading(true);
    setStatus(null);
    setMensagemStatus('');

    const dados = {
      nome: titulo,
      mensagem: mensagem,
      categoria: categoria || 'Nenhuma selecionada',
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
      setMensagemStatus('Formulário enviado com sucesso!');

      // Limpar campos
      setTitulo('');
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
      <h2>Formulário de Contato</h2>

      <InputText
        label="Nome"
        placeholder="Digite seu nome"
        required={true}
        valor={titulo}
        aoAlterar={setTitulo}
      />

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
    </form>
  );
};

export default Form;
