import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import Tarjeta from "./Componentes/Tarjeta/Tarjeta";

import { createContext } from 'react';

export const HeroeContext = createContext();


function App() {
  const personaje = [
    {
      id: 1,
      titulo: "Guerrero",
      imagen:
        "https://w0.peakpx.com/wallpaper/879/810/HD-wallpaper-warrior-angel-warrior-badass-angel-angle-sword-angel-of-war-angels-tough-angel.jpg",
      imagen2: "https://img.freepik.com/fotos-premium/ia-generativa-ojo-dorado-horus-efecto-dorado-sobre-fondo-negro-representacion-ojo-solar-o-ojo-ra-simbolo-antiguo-dios-egipcio-sol_620624-6752.jpg?w=2000",
      descripcion: "Hábil en combate cuerpo a cuerpo",
      tipo: "Bueno"

    },
    {
      id: 2,
      titulo: "Arquero",
      imagen:
        "https://wallpapercrafter.com/th800/168768-man-archer-zhang-xu-art-wings-luminos-angel-water-fantasy-green-girl-white.jpg",
      imagen2: "https://img.freepik.com/fotos-premium/ia-generativa-ojo-dorado-horus-efecto-dorado-sobre-fondo-negro-representacion-ojo-solar-o-ojo-ra-simbolo-antiguo-dios-egipcio-sol_620624-6752.jpg?w=2000",
      descripcion: "Pelea a distancia",
      tipo: "Bueno"
    },
    {
      id: 3,
      titulo: "Mago de la luz",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7c3DoQ239D4ekgc8BxjOWVRrDeM19bs65UlcKturdVjl2oz5GD3Tduxn__pzZKDU72M&usqp=CAU",
      imagen2: "https://img.freepik.com/fotos-premium/ia-generativa-ojo-dorado-horus-efecto-dorado-sobre-fondo-negro-representacion-ojo-solar-o-ojo-ra-simbolo-antiguo-dios-egipcio-sol_620624-6752.jpg?w=2000",
      descripcion: "Utiliza conjuros sagrados para acabar con sus enemigos",
      tipo: "Bueno"
    },
  
    {
      id: 4,
      titulo: "Guerrero Oscuro",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPc8YKQRyujhVoKCZkGx74glVYs16LavQgNw&usqp=CAU",
      imagen2: "https://img.freepik.com/fotos-premium/encarnacion-mistica-mal-forma-cabra-cuernos-mal-ojo_124507-37049.jpg?w=360",
      descripcion: "Hábil en combate cuerpo a cuerpo",
      tipo: "Malo"

    },
    {
      id: 5,
      titulo: "Arquero Oscuro",
      imagen:
        "https://avatars.mds.yandex.net/i?id=20896c3285ee3d27c6eba7549be3ec14bfc97e25-8526247-images-thumbs&n=13",
      imagen2: "https://img.freepik.com/fotos-premium/encarnacion-mistica-mal-forma-cabra-cuernos-mal-ojo_124507-37049.jpg?w=360",
      descripcion: "Pelea a distancia",
      tipo: "Malo"
    },
    {
      id: 6,
      titulo: "Mago de las Sombras",
      imagen:
        "https://i.ytimg.com/vi/RC7u2Jkde9M/maxresdefault.jpg",
      imagen2: "https://img.freepik.com/fotos-premium/encarnacion-mistica-mal-forma-cabra-cuernos-mal-ojo_124507-37049.jpg?w=360",
      descripcion: "Utiliza ataques oscuros para acabar con sus enemigos",
      tipo: "Malo"
    },
  ];


  // return <div className="Contenedor">
  //   <h1 className="Titulo">Elije tu destino</h1>

  //   <h2>Angeles</h2>

  //   <div className="Personajes">{

  //     personajes.map(personajes => {
  //       return <Tarjeta personajes={personajes} />;
  //     })
  //   }</div>

  //   <div className="Personajes">{
  //     personajesOscuros.map(personajesOscuros => {
  //       return <TarjetaOscuros personajesOscuros={personajesOscuros} />;
  //     })
  //   }
  //   </div>

  // </div>;

  return (<div className="Contenedor">

    <HeroeContext.Provider value={personaje}>
      <Tarjeta/>
    </HeroeContext.Provider>

  
  </div>
  )
}

export default App