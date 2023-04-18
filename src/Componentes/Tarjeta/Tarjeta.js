import React, { useContext, useState } from 'react';
import Titulo from './Titulo';
import Imagen from './Imagen';
import Descripcion from './Descripcion';
import TarjetaBoton from './TarjetaBoton';
import './TarjetaEstilos.css';
import Imagen2 from './Imagen2';
import { HeroeContext } from '../../App';

const Tarjeta = () => {
  const Heroe = useContext(HeroeContext);
  const [imagen, setImagen] = useState(true);

  const cambiarImagen = () => {
    setImagen(false);
  };

  return (
    <div className='Tarjeta'>
      {Heroe.map((heroe) => {
        return (
          <div key={heroe.id}>
            <Titulo titulo={heroe.titulo} />
            {imagen ? <Imagen imagen={heroe.imagen} /> : <Imagen2 imagen2={heroe.imagen2} />}
            <Descripcion descripcion={heroe.descripcion} />
            <TarjetaBoton cambiarImagen={cambiarImagen} />
          </div>
        );
      })}
    </div>
  );
};

export default Tarjeta;