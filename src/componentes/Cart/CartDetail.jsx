import React, { useContext, useState } from 'react'
import CartContext from '../Contex/CartContex'
import Style from '../Style/style.module.css'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

const CartDetail = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        number: ""
    })
    const { cart, removeItem, clear, totalPrice } = useContext(CartContext)
    const handleVaciar = () => {
        clear();
    }
    const navigate = useNavigate()
    const addToCart = () => {

        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            amount: {}
        }
        const db = getFirestore()
        const orderColection = collection(db, "orders")
        addDoc(orderColection, purchase)
            .then(res => navigate(`/checkout/${res.id}`))
        clear()
            .catch(err => console.log(err))
        console.log(purchase)

    }
    const handleChange = (e) => {
        const { target, value } = e;
        setBuyer({
            ...buyer,
            [target.name]: target.value
        })
    }
    return (
        <div>
            {
                cart.map(el => (
                    <div>
                        <div className={Style.cardcarrito}>
                            <p>{el.item.nombre}</p>
                            <img src={el.item.img} alt="" />
                            <p>Medida: {el.item.medidas}</p>
                            <p>Cantidad: {el.quantity}</p>
                            <p>Precio Unit: ${el.item.precio}</p>
                            <p>Precio total: $ {el.item.precio * el.quantity}</p>
                            <Button onClick={() => removeItem(el.item.id)}> eliminar </Button>
                        </div>
                    </div>
                ))
            }

            {
                cart.length > 0 ?
                    <div>
                        <h2>Precio Total: ${totalPrice()}</h2>
                        <button onClick={handleVaciar} >Vaciar Carrito</button>
                        <Button onClick={() => addToCart()} variant="dark" className={Style.boton}> Finalizar Compra </Button>
                        <label htmlFor="name">Ingrese su Nombre</label>
                        <input onChange={handleChange} name="name" id="name" value={buyer.name} />
                        <label htmlFor="email">Ingresa tu email</label>
                        <input onChange={handleChange} name="email" id="email" value={buyer.email} />
                        <label htmlFor="telefono">Ingresa tu numero de contacto</label>
                        <input onChange={handleChange} name="number" id="number" value={buyer.number} />
                    </div> :
                    <div className={Style.cartvacio}>
                        <h2>Carrito Vacio...</h2>
                        <img src="https://i.postimg.cc/W4zGvpbX/khalma-empty-cart.png" alt="" className={Style.carritovacio} />
                        <h3>Parece que aún no has seleccionado ningun articulo...</h3>
                        <Link to="/"><Button variant="dark" className={Style.boton}>Iniciar Compras</Button></Link>
                    </div>
            }
        </div>
    )
}

export default CartDetail