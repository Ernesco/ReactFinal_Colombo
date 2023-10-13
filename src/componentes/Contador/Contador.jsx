import React from 'react'
import Style from '../Style/style.module.css'

const Contador = ({count, sumar, restar, text}) => {
    
    return (
        <div>
            <p className={Style.pricedetail}> Cantidad: { count }</p>
            <p className={Style.Descrpdetail}>{ text }</p>
            <button onClick = { sumar } className={Style.buttomcont}> Agregar </button>
            <button onClick = { restar } className={Style.buttomcont}> Quitar </button>
        </div>    )
}

export default Contador