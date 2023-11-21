import React, { useState, useEffect } from "react"
import './styles.css'

function index() {
  const [data, setData] = useState([]);

  async function getDataPersonal() {
    try {
      let response = await fetch("https://softcodify.netlify.app/personal.json")
      const personal = await response.json()
      setData(personal)
    } catch (error) {
      console.error(error)
    }
  }

  function calculateDays(date) {
    const dateProvided = new Date(date);
    
    const currentDate = new Date();
  
    // Calcular la diferencia en milisegundos
    const difference = currentDate - dateProvided;
  
    // Convertir la diferencia a días
    const pastDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    return pastDays;
  }

  useEffect(() => {
    getDataPersonal()
  }, [])

  useEffect(() => {
    document.title = "SoftCodify | Home";
  }, []);
  return (
    <>
      <header className="container d-flex flex-column justify-content-center align-items-center py-5 gap-3">
        <div className="header-container container-fluid d-flex mb-5 flex-lg-row gap-5 align-items-center">

          <div className="col-xl-2 col-lg-3 col-md-4 d-flex flex-column justify-content-center gap-3 text-center">
            <img src="/foto.png" className="profile-picture img-fluid rounded-circle border border-1 shadow-sm" alt="foto personal" />
            <h3 className="nombre text-center m-0">{data.nombreCompleto}</h3 >
          </div>

          <div className="text-container p-4 rounded-3 bg-body-tertiary border border-1 shadow-sm">
            <h4 className="text-body-secondary mb-3">{data.titulo}</h4>
            <p className="pt-2">{data.descripcion}</p>
            <p className="text-end mt-auto mb-0 pt-5">
              <small className="text-body-secondary">Portfolio actualizado por última vez hace {calculateDays(data.ultimaActualizacion)} días</small>
            </p>
          </div>
        </div>

        <div className="container-fluid d-flex flex-column align-items-center gap-3">
          <h5>Tecnologías manejadas</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {data && data.tecnologias && data.tecnologias.map((item, index) => 
              <span key={index} className="badge rounded-pill text-bg-success bg-gradient">{item}</span>
            )}
            <span className="badge rounded-pill text-bg-primary bg-gradient">total: {data && data.tecnologias && data.tecnologias.length}</span>
          </div>
        </div>

        {/* <div className="d-flex flex-column align-items-center p-3 my-5 bg-purple rounded-4 shadow-sm gap-3">
          <span className="text-white">Social Media</span>
          
        </div> */}
      </header>
    </>
  )
}

export default index
