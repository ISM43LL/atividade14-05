import React from "react";
import "./input.css";

const InputText = ({ label, placeholder, required, valor, aoAlterar }) => {
  const aoDigitar = (evento) => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={required}
        onChange={aoDigitar}
        value={valor}
      />
    </div>
  );
};

export default InputText;
