import React from 'react'
import PropTypes from 'prop-types'
// import About from './About'


function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.person.name} {props.person.names}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="./About">About</a>
        </li>
      </ul>
      <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">Green</label>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-success mx-2" type="submit">Search</button> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        
      </form>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
    name: PropTypes.number.isRequired,
    names: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    name: "OK",
    names: 'Shahid',
    aboutText: "Aboutss"
}
export default Navbar
// Navbar.propTypes = {
//     name: PropTypes.string.isRequired,
//     names: PropTypes.string.isRequired
// }