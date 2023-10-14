import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../Hooks/useFetch'
import {doc, getDoc, getFirestore} from "firebase/firestore"


const ItemDetailContents = ( { id } ) => {
    //const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
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
                <ItemDetail item = {item} />
            }
        </>
    )
}
export default ItemDetailContents