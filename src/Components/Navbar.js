// import React, { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

// export class Navbar extends Component {
const Navbar =() =>{

  // render() {
    return (
      <div>
        <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/business" className="nav-link active" aria-current="page">Business</Link>
        </li>
        <li className="nav-item">
          <Link to="/entertainment" className="nav-link active" aria-current="page">Entertainment</Link>
        </li>
        <li className="nav-item">
        <Link to="/general" className="nav-link active" aria-current="page">General</Link>
        </li>
        <li className="nav-item">
          <Link to="/health" className="nav-link active" aria-current="page">Health</Link>
        </li>
        <li className="nav-item">
          <Link to="/science" className="nav-link active" aria-current="page">Science</Link>
        </li>
        <li className="nav-item">
          <Link to="/sports" className="nav-link active" aria-current="page">Sports</Link>
        </li>
        <li className="nav-item">
          <Link to="/technology" className="nav-link active" aria-current="page">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
// }

export default Navbar
