import React from 'react'
import Button from 'react-bootstrap/Button';
import Style from '../Style/style.module.css';
import { Link } from 'react-router-dom';

const CardItem = ( { item } ) => {
    return (
        <div className= {Style.card}>
                <img src={item.img} alt="" className={Style.imghome}/>
            <div className={Style.cardInterior}>
                <h4>{item.nombre}</h4>
                <p className={Style.precio}><strong>$ {item.precio}</strong></p>
                <Link to={`/Detalle/${item.id}`}>
                    <Button variant="dark" className={Style.boton}>+ Info</Button>
                </Link>
            </div>
        </div>
    )
}
export default CardItem