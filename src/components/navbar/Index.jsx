import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Navbar() {
  return (
    <div className="main-navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            KH Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Payments
                </Link>
              </li>
            </ul>
            <div className="login-buttons">
              <Link className="btn btn-outline-dark" to="#">
                <i className="fa fa-sign-in me-1" />
                Log In
              </Link>
              <Link className="btn btn-outline-dark  ms-2" to="#">
                <i className="fa fa-user-plus me-1" />
                Register{" "}
              </Link>
              <Link className="btn btn-outline-dark ms-2" to="#">
                <i className="fa fa-shopping-cart me-1 " />
                Cart(0){" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
