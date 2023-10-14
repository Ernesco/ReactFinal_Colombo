import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import ItemList from './ItemList'
import useFetch from '../Hooks/useFetch'
import {collection, getDocs, getFirestore} from "firebase/firestore"

const ItemListContainer = () => {
    //const [items] = useFetch("https://fakestoreapi.com/products")

    const [items, setItems] = useState (null)

    useEffect( () =>  {
        const db = getFirestore();
        const itemCollection = collection(db, "items")
        getDocs(itemCollection)
            .then(snapshot => {
                const datos = snapshot.docs.map(document =>({
                    id: document.id, 
                        ...document.data()}))
                        setItems(datos)
            })
    }, []) 
    return (
        <Container>
            <Row>
                {
                    items !== null && 
                    <ItemList items = {items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer