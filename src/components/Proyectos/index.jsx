import React, { useState, useEffect } from "react"
import './styles.css'

function index() {
  const [data, setData] = useState([]);

  async function getDataProjects() {
    try {
      let response = await fetch("https://softcodify.netlify.app/proyectos.json")
      const proyectos = await response.json()
      setData(proyectos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDataProjects()
  }, [])

  useEffect(() => {
    document.title = "SoftCodify | Proyectos";
  }, []);
  return (
    <>
      <h6 className="container text-start my-5 text-primary-emphasis">Cantidad de proyectos creados: {data.length}</h6>
      <section className="proyectos-section container my-5">
        {
          data.map((item, index) => (
            <div key={index} className="card col bg-body-tertiary d-flex h-100">
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <small className="p-3">Tecnologías:</small>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex flex-wrap gap-2">
                  {
                    item.technologies.map((element, index) => (
                      <span key={index} className="badge rounded-pill text-bg-success bg-gradient">{element}</span>
                    ))
                  }
                </li>
                <li className="list-group-item d-flex flex-wrap gap-2"><small>Fecha de creación: {item.date}</small></li>
              </ul>
              <div className="url-container card-body">
                {
                  (item.urlDeploy !== "" && item.urlRepo !== "")
                    ?
                    <>
                      <a href={item.urlRepo} className="card-link text-decoration-none" target="_blank">Repo</a>
                      <a href={item.urlDeploy} className="card-link text-decoration-none" target="_blank">Deploy</a>
                    </>
                    : (item.urlDeploy !== "" && item.urlRepo == "")
                      ? <a href={item.urlDeploy} className="card-link text-decoration-none" target="_blank">Deploy</a>
                      : (item.urlDeploy == "" && item.urlRepo !== "")
                        ? <a href={item.urlRepo} className="card-link text-decoration-none" target="_blank">Repo</a>
                        : "No hay enlaces"
                }
              </div>
            </div>
          ))
        }

      </section>
    </>
  )
}

export default index
