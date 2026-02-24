import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Projects/movie/Home";
import Movapi from "./Projects/movie/Movapi";
import Movie from "./Movie";
import Register from "./Projects/User/Register";
import Login from "./Projects/User/Login"
import Dashboard from "./Projects/User/Dashboard";
function App()
{
  return(

  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movapi" element={<Movapi/>}/>
      <Route path="/Movielist" element={<Movie/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dash" element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
   </div>

  )
}

export default App