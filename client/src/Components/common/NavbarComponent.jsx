import React from 'react'
import "../../Assets/style/NavbarComponent.css"
import { Link } from 'react-router-dom'
import img from "../../Assets/Images/logo.png";

function NavbarComponent() {
  return (
    <div>
         <div className='common_navbar'>
       <nav className="navbar navbar-expand-lg bg-primary landing_navbar" data-bs-theme="dark" >
        <div className="container-fluid nav_container">
          <Link className="navbar-brand nav_sparkle" to="#">
            <img src={img} className="img-fluid img-thumbnail" alt="..." />
            SPARKLE <span>CART</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse navbar_list" id="navbarNav">
            <ul className="navbar-nav navbar_ul">
              <li className="nav-item  me-5 fw-bold">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link active" to="#">
                 Products
                </Link>
              </li>
              
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link d active" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link d active" to="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown me-5 fw-bold active">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Create Account
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/buyer/signup">
                      Buyer
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Seller
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-5 fw-bold active">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
              Login
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/buyer/signup">
                      Buyer
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Seller
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default NavbarComponent