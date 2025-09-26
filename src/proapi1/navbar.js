import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jewelery">
                Jewellery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/men's clothing">
                Men’s Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/women's clothing">
                Women’s Clothing
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/protable">
                  All products
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
