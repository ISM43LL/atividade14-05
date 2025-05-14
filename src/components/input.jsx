import React from "react";

const InputText = ({label,
                    placeholder,
                    required, 
                    valor, 
                    aoAlterar
        }) => {

    const aoDigitar = (evento) => {
         aoAlterar(evento.target.value)
    }


    return (
      
        <div>  
                <label> {label} </label>
                <input 
                    placeholder={placeholder}
                    required={true}
                    onChange={aoDigitar}
                    value={valor}                
                />        
        </div>
    )
}

export default InputText;