import React, { useState } from 'react'
import CartContext from './CartContex'


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (item, quantity) => {
        const id = item.id
        if (!isInCart(id)) {
            setCart([
                ...cart,
                { item, quantity }
            ])
        } else {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.item.id === id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity
                    };
                }
                return cartItem;
            });
            setCart(updatedCart);
        }
    }

    const isInCart = (id) => {
        return cart.some(cartItem => cartItem.item.id === id)
    }
    const removeItem = (id) =>{
        const newCart = cart.filter((el) => el.item.id !== id)
        setCart(newCart)
    }
    const clear = () =>{
        setCart([])
    }
    const cantCart = () => {
        return cart.reduce((acc, el) => acc + el.quantity, 0)
    }
    const totalPrice = () => {
        return cart.reduce((acc, el) => acc + el.item.precio * el.quantity, 0)
    }
    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        cantCart,
        totalPrice
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider