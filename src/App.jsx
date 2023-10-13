import React from "react"
import Navb from "./componentes/Navbar/NavBar"
import Pagetitle from "./componentes/PageTitle/Pagetitle"
import style from "./componentes/Style/style.module.css"
import Rutas from "./componentes/Rutas/Rutas"
import Footer from "./componentes/Footer/Footer"




const App = () =>{

  return (
    <div className={style.body}>
      <Navb/>
      <Pagetitle/>
      <Rutas />
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
