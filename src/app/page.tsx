import React from 'react';
import Navbar from "../app/components/Navbar";  
import Home from "../app/components/Home";     
import About from "../app/components/About";   
import Products from "../app/components/Products"; 

export default function App() {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen'>
      <Navbar />  
      <Home />    
      <About />   
      <Products /> 
      Welcome to my website project
    </div>
  );
}
