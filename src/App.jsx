import React from 'react';
import Home from './Routes/Home';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import About from './Routes/About';
import "./index.css"

import { Route, Routes } from 'react-router-dom';
import Services from './Routes/Services';


function App() {


  return (
    <>
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/project" element={<Project/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/services" element={<Services/>}/>
   <Route path="/about" element={<About/>}/>


   </Routes>


    </>
  );
}

export default App
