import React from "react";

class Footpro extends React.Component {
  render() {
    return (
     <footer className="footer bg-dark text-white py-5">
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-lg-4 col-md-6 text-start mb-4 mb-lg-0">
        <h5 className="fw-bold mb-3">Quick Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2">
           Home
          </li>
          <li className="mb-2">
           About
          </li>
          <li>
           Contact
          </li>
        </ul>
      </div>

     
      <div className="col-lg-4 col-md-12 d-flex justify-content-center mb-4 mb-lg-0">
        <p className="mb-0 large ">
          &copy; 2025 <span className="fw-semibold">E-Shop</span>. Created by <span className="fw-semibold">Akn</span>.
        </p>
      </div>

      <div className="col-lg-4 col-md-6 text-end">
        <h5 className="fw-bold mb-3">Contact Us</h5>
        <ul className="list-unstyled">
          <li className="mb-2">City, State, 12345</li>
          <li className="mb-2">Email: =email@example.com</li>
          <li className="mb-2">Phone: =+00000000000</li>
        </ul>
      </div>

    </div>
  </div>
</footer>

    );
  }
}

export default Footpro;
