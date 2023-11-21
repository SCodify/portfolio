import React, { useState, useEffect } from "react"
import './styles.css'

function index() {
  const [data, setData] = useState([]);

  async function getDataCertifications() {
    try {
      let response = await fetch("https://softcodify.netlify.app/certificaciones.json")
      const certificaciones = await response.json()
      setData(certificaciones)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDataCertifications()
  }, [])

  useEffect(() => {
    document.title = "SoftCodify | Certificaciones";
  }, []);
  return (
    <>
      <section className="certificaciones-section container my-5 p-3 bg-body rounded shadow-sm bg-body-tertiary border border-1">
        <h4 className="border-bottom pb-2 mb-0">Certificaciones</h4>
        {
          data.map((item, index) => (
            <a key={index} href={item.url} target="_blank" className="d-flex text-body-secondary pt-3 text-decoration-none border-bottom gap-2">
              <img className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" src={item.image} alt="" />
              <p className="w-100 pb-3 mb-0 small lh-sm">
                <strong className="d-block text-gray-dark">{item.institution}</strong>
                <span className="d-flex gap-3 justify-content-between">
                  <span>{item.title}</span>
                  <span>{item.date}</span>
                </span>
              </p>
            </a>
          ))
        }

        <small className="d-block text-end mt-3">
          <p className="m-0 text-primary-emphasis">Cantidad de certificaciones: {data.length}</p>
        </small>
      </section>
    </>
  )
}

export default index
