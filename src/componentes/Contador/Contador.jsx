import React from 'react'
import Style from '../Style/style.module.css'
import { Button } from 'react-bootstrap'

const Contador = ({onAdd, count, sumar, restar}) => {
    
    return (
        <div>
            <div className={Style.contador}>
                <button onClick = { restar } className={Style.buttomcont2}> - </button> 
                <p className={Style.pricedetail}>{ count }</p>
                <button onClick = { sumar } className={Style.buttomcont1}> + </button>
                
            </div>
            <Button onClick={() => onAdd(count)} variant="dark" className={Style.botondetail}>Agregar al Carrito</Button>
        </div>
    )
}

export default Contador