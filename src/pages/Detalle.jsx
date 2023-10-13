import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContents from '../componentes/Detalles/ItemDetailContents'

const Detalle = () => {
    const { id } = useParams()
    return (
        <div>
            <ItemDetailContents id={id} />
        </div>
    )
}
export default Detalle