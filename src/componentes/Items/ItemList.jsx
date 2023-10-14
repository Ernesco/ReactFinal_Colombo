import React from 'react'
import { Col } from 'react-bootstrap';
import CardItem from '../CardItem/CardItem';


const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map( (item) => (
                    <Col md={6} key={item.id}> 
                        <CardItem item = { item }/>
                    </Col>
                ))
            }
        </>
    )
}
export default ItemList