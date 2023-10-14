import React from 'react'
import Style from '../Style/style.module.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContContenedor from '../Contador/ContContenedor'

const ItemDetail = ( { item } ) => {
    return (
        <div>
            <h2> {item.nombre} </h2>
            <img src={item.img} alt=""/>
                <div >
                    <p> descripcion {item.descripcion} </p>
                    <p> $ {item.precio} </p>
                    <ContContenedor />
                    <Link to={`/Detalle/${item.id}`}>
                        <Button> Comprar </Button>
                    </Link>
                </div>
        </div>
    )
}

export default ItemDetail