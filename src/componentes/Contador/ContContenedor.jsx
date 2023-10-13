import React, { useState } from 'react'
import Contador from './Contador'

const ContContenedor = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("carrito")

    const sumar = () => { 
        setText ("Ingresado")
        setCount (count + 1) 
        }
    const restar = () => { 
        setText ("Quitado")
        setCount(count - 1)
        }


    return (
        <Contador count={count} sumar={sumar} restar={restar} text={text}/>
    )
}

export default ContContenedor 