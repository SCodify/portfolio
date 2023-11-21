import React from "react"
import './styles.css'

function index() {
  function getCurrentYear() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
  
    return currentYear
  }
  
  return (
    <>
      <footer className="container-fluid py-5 bg-body-tertiary border-top shadow-lg">
        <div className="container d-flex justify-content-between">
          <small>SoftCodify - {getCurrentYear()}</small>
          <div className="d-flex gap-3">
            <a href="https://github.com/SCodify" target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/cledesma92/" target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCbjbFLkPKFuynUPG1bmq3hg" target="_blank">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default index
