import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const categoria = useParams().categoria
    const [items, setItems] = useState (null)

    useEffect( () =>  {

        const db = getFirestore();
        const itemCollection = collection(db, "items")
        const q = categoria ? query(itemCollection, where("categoria", "==", categoria )) : itemCollection;
        getDocs(q)
            .then(snapshot => {
                const datos = snapshot.docs.map(document =>({
                    id: document.id, 
                        ...document.data()}))
                        setItems(datos)
            })
    }, [categoria])
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