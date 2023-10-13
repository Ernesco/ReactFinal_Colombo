import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from '../Style/style.module.css'
import { Link } from 'react-router-dom';

const CardItem = ( { item } ) => {
    return (
        <Card className= {Style.card}> 
            <Card.Img src= {item.image} className={Style.img} />
            <Card.Body>
                <Card.Title className={Style.title}>{item.title}</Card.Title>
                <Link to={`/Detalle/${item.id}`}>
                    <Button className={Style.buttom}>+ Info</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default CardItem