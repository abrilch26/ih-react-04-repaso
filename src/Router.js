import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./components/Home"
import CRUD from "./components/CRUD"
import Layout from "./components/Layout"

const Router = () => {

    //arquitectura de routing en react
    return (
        <>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} /> {/* index es usar el path de la ruta padre */}
                <Route path ="crud" element={<CRUD />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router
