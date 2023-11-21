import React, { useState, useEffect } from "react"
import './styles.css'

function index() {
  const [data, setData] = useState([]);

  async function getDataYoutube() {
    try {
      let response = await fetch("http://localhost:5173/youtube.json")
      const youtube = await response.json()
      setData(youtube)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDataYoutube()
  }, [])
  return (
    <>
      <h6 className="container text-start my-5 text-primary-emphasis">Cantidad de videos creados: {data.length}</h6>
      <section className="youtube-section container my-5">
        {
          data.map((item, index) => (

            <div key={index} className="card col overflow-hidden d-flex h-100">
              <iframe src={item.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer bg-transparent border-success text-end">
                <small className="text-success-emphasis">{item.date}</small>
              </div>
            </div>

          ))
        }

      </section>
    </>
  )
}

export default index
