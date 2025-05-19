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

  const aoSubmeter = (evento) => {
    evento.preventDefault();

    alert(`Nome: ${titulo}\nMensagem: ${mensagem}\nCategoria: ${categoria || 'Nenhuma selecionada'}`);

    setTitulo('');
    setMensagem('');
    setCategoria('');
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

      <div className="botao-form">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default Form;
