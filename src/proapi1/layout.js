import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Headpro from './head'; 
import Footer from './footer'; 
import Navbar from './navbar';

function Laypro() {
  const location =useLocation()
  let navcomp = null
  if (location.pathname!=="/"){
    navcomp=<Navbar/>
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <Headpro />
      {navcomp}
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer /> 
    </div>
  );
}

export default Laypro;