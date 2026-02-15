import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Projects/movie/Home";
import Movapi from "./Projects/movie/Movapi";
import Movie from "./Movie";
function App()
{
  return(

  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movapi" element={<Movapi/>}/>
      <Route path="/Movielist" element={<Movie/>}/>
    </Routes>
    </BrowserRouter>
   </div>

  )
}

export default App