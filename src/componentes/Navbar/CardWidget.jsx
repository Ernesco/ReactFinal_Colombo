import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import Style from '../Style/style.module.css';
import CartContext from '../Contex/CartContex';

const CardWidget = () => {

    const { cantCart } = useContext(CartContext)

    return (
        <div>
            <Link to="/Carrito" className={Style.carrito}>
                <AiOutlineShoppingCart />
                <span className={Style.cantidad}> { cantCart() } </span>
            </Link>
        </div>
    )
}

export default CardWidget