import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Inicio from './Inicio';



const Rutas = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
    </Routes>
        </BrowserRouter>
 
  )
}

export default Rutas