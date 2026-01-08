import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Movie.css"
import logo from "./image/panda.png"
function MovNav() {
  return (<nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <img src={logo} alt="" />
      <h1 className="navbar-brand">ANAMEX</h1>
      <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Home</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
          <li className="nav-item dropdown"> 
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Anime </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Movie</a>
              </li> <li><a className="dropdown-item" href="#">Series</a></li>
               </ul> </li>
          <li className="nav-item"> <a className="nav-link" href="#" >Contact</a> </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn" type="submit">Search</button>
        </form> </div> </div> </nav>);
} export default MovNav;