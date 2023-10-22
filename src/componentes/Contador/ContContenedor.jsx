import React, { useState } from 'react'
import Contador from './Contador'

const ContContenedor = ({onAdd}) => {

    const [count, setCount] = useState(1)

    const sumar = () => { 
        if(count === 10){
            setCount (10) 
        }else{
            setCount(count + 1)
        }
    }
    const restar = () => { 
        if(count >= 1){
            setCount(count - 1)
        }else{
            setCount(0)
        }
    }


    return (
        <Contador count={count} sumar={sumar} restar={restar} onAdd={onAdd}/>
    )
}

export default ContContenedor 