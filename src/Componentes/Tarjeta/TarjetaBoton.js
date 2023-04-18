import React, { useState } from 'react'


const TarjetaBoton = ({ cambiarImagen }) => {
  return (
    <button className='boton' onClick={cambiarImagen}>Seleccionar</button>
  )
}

export default TarjetaBoton