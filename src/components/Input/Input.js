//import { useState } from 'react';
import './Input.css'
const Input = (props) => {
    //Destructuracion de Datos
    const { type='text' } = props

    const placeholderModificado = `${props.placeholder}...`

      const manejarCambio = (e) => {
        //console.log(e.target.value);
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input placeholder={ placeholderModificado }
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
};

export default Input;