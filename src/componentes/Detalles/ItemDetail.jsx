import React from 'react'
import Style from '../Style/style.module.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContContenedor from '../Contador/ContContenedor'

const ItemDetail = ( {count, item, onAdd } ) => {
    return (
        <div className= {Style.cardetail}>
                <img src={item.img} alt="" className={Style.imgdetail}/>
            <div className={Style.cardetailint}>
                <div className={Style.descridetail}>
                    <h4>{item.nombre}</h4>
                    <p>Descripción: {item.descripcion}</p>
                    <p>{item.articulo}</p>
                    <p><strong>Medidas:</strong> {item.medidas}</p>
                    <p>{item.med}</p>
                </div>
                    <div className={Style.agregar}>
                        <p className={Style.precio}><strong>${item.precio}</strong></p>
                        <p>U. disponibles: <strong>{item.stock}</strong></p>
                        <ContContenedor onAdd={onAdd}/>
                        
                </div>
                <div>
                <Link to="/carrito"><Button variant="dark" className={Style.botoncito}>Finalizar Compra</Button></Link>
                <Link to="/"><Button variant="dark" className={Style.botoncito}>Seguir Comprando</Button></Link>
                </div>
            </div>
        </div>


        /*<div>
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
        </div>*/
    )
}

export default ItemDetail