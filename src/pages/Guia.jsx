import React from 'react'
import Style from '../componentes/Style/style.module.css'

const GuiaDeConsultas = () => {
    return (
        <div className={Style.guia}>
            <div className={Style.glosario}>
                <h1 className={Style.text}>Glosario de términos frecuentes</h1>
            </div>
                <ul>
                    <li><strong>ANTIPEELING</strong> Es una característica de la tela, que sometida a un proceso llamado "gaseado logra que no se formen las incómodas pelotitas. </li>
                    <li><strong>EMBOZO</strong> Es la parte superior de una sábana plana, que simula ser un gran dobladillo. En algunos casos puede confeccionarse con diferentes telidos para diferenciarlo del dibujo de la sábana. Es un "plus" en la terminación de las líneas más altas. </li>
                    <li><strong>ESTAMPADO</strong> Aplicación de un dibujo en uno o varios colores en un tejido por medio de colorantes convencionales. pigmentos, transfer, entre otros</li>
                    <li><strong>GUATA</strong> Relleno de poliéster utilizado para diferentes productos como acolchados, almohadas, almohadones, etc. Se utiliza diferente gramaje según el uso. Para los productos de verano el gramaje es menor que para los de invierno.</li>
                    <li><strong>JACQUARD</strong> Es un tipo de tejido que se logra con "tecnología Jacquard® mediante telares que permiten lograr dibujos texiles de gran dimensión; para lograrlos, se utilizan diferentes tipos y colores de hilados, como así también dependiendo de la forma de entrelazar estos hilos, se pueden obiener diferentes tejidos</li>
                    <li><strong>MATELASEADO</strong> Es la costura que une dos o mas capas de tejido, conformando un dibujo específico. En nuestros acolchados el matelaseado une tres capas: una de tejido superior, el relleno de guata y una capa de tejido inferior</li>
                    <li><strong>MICROFIBRA</strong> Materia prima textil fabricada a base de fibras ultrafinas de poliéster que le confieren propiedades superiores a los tejidos, como mejor absorción y suavidad</li>
                    <li><strong>PERCA</strong>L Es una tela que supera la calidad estándar; es un tejido con mayor cantidad de hilos en urdimbre y trama. A mayor cantidad de hilos, mejor calidad. Se denomina percal a los tejidos que tienen 144 o más hilos por pulgada cuadrada </li>
                    <li><strong>PVC</strong> Material plástico utilizado para confeccionar las diferentes bolsas que contienen nuestros productos: la calidad del PVC varia según el micronaje; a mayor micronaje, mayor resistencia y durabilidad.</li>
                </ul>
            <div>
                <img src="https://i.postimg.cc/SK6CZfF6/logoUma.png" alt="" className={Style.navguia}/>
            </div>
        </div>
    )
}

export default GuiaDeConsultas