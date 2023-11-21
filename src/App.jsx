import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


import Navbar from './components/Navbar'

import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import YouTube from "./components/YouTube";
import Certificaciones from "./components/Certificaciones";

import Footer from './components/Footer'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
