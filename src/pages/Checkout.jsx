import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Style from '.././componentes/Style/style.module.css';

const Checkout = () => {
        const { orderId } = useParams()
    return (
        <div className={Style.check}>
            <p>¡Gracias por su compra!</p>
            <p>Tu numero de orden es: <strong>{orderId}</strong></p>
            <p>en las proximas <strong>24 horas</strong> nos pondremos en contacto para coordinar la entrega</p>
            <Link to="/"><Button variant="dark" className={Style.boton}>Cerrar</Button></Link>
        </div>
    )
}

export default Checkout