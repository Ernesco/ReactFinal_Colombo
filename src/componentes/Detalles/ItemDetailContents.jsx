import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import CartContext from '../Contex/CartContex'


const ItemDetailContents = ( { id } ) => {
    //const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    const { addItem } = useContext(CartContext)
    const onAdd = (q) => {
        addItem(item, q)
    }
    const [item, setItem] = useState (null)
    useEffect( () => {

        const db = getFirestore()
            const itemRef = doc( db, "items", id )
            
            getDoc(itemRef)
                .then( ( snapshot) => {
                        if (snapshot.exists()){
                            setItem({
                                id: snapshot.id,
                                ...snapshot.data()
                            })
                        }
                    })
                .catch((err) => console.log(err))
    },[])

    return (
        <>
            {
                item !== null &&
                <ItemDetail item = {item} onAdd={onAdd}/>
            }
        </>
    )
}
export default ItemDetailContents