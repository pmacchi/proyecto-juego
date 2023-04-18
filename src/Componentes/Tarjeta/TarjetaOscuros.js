import React, { useContext, useState } from 'react'
import TituloOscuros from './TituloOscuros'
import ImagenOscuros from './ImagenOscuros'
import DescripcionOscuros from './DescripcionOscuros'
import './TarjetaEstilos.css'
import Imagen2 from './Imagen2'
import TarjetaBoton from './TarjetaBoton'
import { PersonajesOscuridadContext } from '../../App'



const TarjetaOscuros = ({ personajeOscuro }) => {

  const Oscuro = useContext(PersonajesOscuridadContext);

  console.log(Oscuro);

  const [imagen, setImagen] = useState(true);

  const cambiarImagen = () => {
    setImagen(false);
  };

  return (



    <div className='Tarjeta'>

      <TituloOscuros titulo={personajeOscuro.titulo} />
      {/* <ImagenOscuros imagen={personajesOscuros.imagen} /> */}

      {imagen ? (
        <ImagenOscuros imagen={personajeOscuro.imagen} />
      ) : (
        <Imagen2 imagen2={personajeOscuro.imagen2} />
      )}


      <DescripcionOscuros descripcion={personajeOscuro.descripcion} />
      <TarjetaBoton cambiarImagen={cambiarImagen} />
    </div>
  )
}

export default TarjetaOscuros