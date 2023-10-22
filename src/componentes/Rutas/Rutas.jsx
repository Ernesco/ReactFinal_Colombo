import React from 'react'
import Inicio from '../../pages/Inicio'
import Detalle from '../../pages/Detalle'
import Categoria from '../../pages/Categoria'
import { Route, Routes } from 'react-router-dom'
import Nosotros from '../../pages/Nosotros'
import GuiaDeConsultas from '../../pages/Guia'
import Carrito from '../../pages/Carrito'
import Checkout from '../../pages/Checkout'

const Rutas = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Nosotros' element = {<Nosotros/>}/>
                <Route path='/Guia' element = {<GuiaDeConsultas/>} />
                <Route path='/Detalle/:id' element={<Detalle />} />
                <Route path="/categoria/:categoria" element={<Categoria />} />
                <Route path="/carrito" element={<Carrito/>}></Route>
                <Route path="/checkout/:orderId" element={<Checkout/>}></Route>
            </Routes>
        </div>
    )
}

export default Rutas