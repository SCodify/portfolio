import React from "react"
import { Link } from 'react-router-dom'
import './styles.css'

function index() {
  function handlerClose() {
    const click_event = new CustomEvent('click')
    document.querySelector(".btn-close").dispatchEvent(click_event);
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary sticky-top border-bottom shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler p-0 rounded-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" onClick={handlerClose} className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/proyectos" onClick={handlerClose} className="nav-link">Proyectos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/youtube" onClick={handlerClose} className="nav-link">YouTube</Link>
                </li>
                <li className="nav-item">
                  <Link to="/certificaciones" onClick={handlerClose} className="nav-link">Certificaciones</Link>
                </li>
                <li className="nav-item">
                  <a href="https://drive.google.com/file/d/1J8V754fgWfE34sSzadDgwGjdB0EdCZG1/view?usp=sharing" target="_blank" onClick={handlerClose} className="nav-link">Curriculum Vitae <i className="bi bi-download ps-2"></i></a>
                </li>
              </ul>
              {/* <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default index
