import React from 'react'
import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


export default function index() {
    return (

        <>
        <Header />
        <Outlet/>  {/* el outlet son todos los componentes hijos de la ruta padre*/}  
        <Footer />
        </>
    )
}
