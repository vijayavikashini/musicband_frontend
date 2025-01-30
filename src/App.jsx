import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Discography from "./components/Discography";
import Events from "./components/Events";
import Contact from './components/Contact';

const App = () => {
  return (
   
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} /> 
          
        </Routes>
      </div>
    </>
   
  );
};

export default App;
