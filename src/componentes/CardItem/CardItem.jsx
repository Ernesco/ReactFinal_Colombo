import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from '../Style/style.module.css';
import { Link } from 'react-router-dom';

const CardItem = ( { item } ) => {
    return (
        <div className= {Style.card}>
                <img src={item.img} alt="" className={Style.imghome}/>
            <div className={Style.cardInterior}>
                <h4>{item.nombre}</h4>
                <p>{item.descripcion}</p>
                <p>$ {item.precio}</p>
                <Link to={`/Detalle/${item.id}`}>
                    <Button className={Style.boton}>+ Info</Button>
                </Link>
            </div>
        </div>
        /*<Card> 
            <Card.Img src= {item.imgA} className={Style.img} />
            <Card.Body className= {Style.card}>
                <Card.Title className={Style.title}>{item.nombre}</Card.Title>
                <Card.Text className={Style.title}>{item.descripcion}</Card.Text>
                <Card.Text className={Style.title}>{item.precio}</Card.Text>
                <Link to={`/Detalle/${item.id}`}>
                    <Button className={Style.buttom}>+ Info</Button>
                </Link>
            </Card.Body>
        </Card>*/
    )
}
export default CardItem