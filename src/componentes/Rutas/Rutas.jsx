import React from 'react'
import Inicio from '../../pages/Inicio'
import Detalle from '../../pages/Detalle'
import Categoria from '../../pages/Categoria'
import { Route, Routes } from 'react-router-dom'
import Nosotros from '../../pages/Nosotros'
import GuiaDeConsultas from '../../pages/Guia'

const Rutas = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Nosotros' element = {<Nosotros/>}/>
                <Route path='/Guia' element = {<GuiaDeConsultas/>} />
                <Route path='/Detalle/:id' element={<Detalle />} />
                <Route path="/categories" element={<Categoria />} />
                <Route path="/categories/:category" element={<Categoria />} />
            </Routes>
        </div>
    )
}

export default Rutas