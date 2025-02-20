import React from "react";
import "../../Assets/style/BuyerLogin.css";
import { axiosInstance } from "../../Api/axiosInstance";
import { useState } from "react";
import img1 from "../../Assets/Images/login.png";
import img from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function BuyerLogin() {
  const navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    fullName: "",
    password: "",
  });

  const change = (e) => {
    console.log(e);
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    const { fullName, password } = logindata;
    if (!fullName || !password) {
      toast.error("All fields are required");
      return;
    }
    console.log(logindata);
    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post("/buyer/login", logindata);
      console.log("resp", res);
      if (res.status === 200) {
        const token = res.data.token;
        const id=res.data.data._id;
        console.log("id",id);
        
        localStorage.setItem("ecommerce-token", token);
        localStorage.setItem("ecommerce-buyer-id",id)
        // todo => save buyer id in local storage, (ecommer-buyer-id)
        toast.success("Login sucessfully");
        navigate("/buyer/profile");
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      toast(msg);
      console.log("err on login", error);
    }
  };
  return (
    <div className="buyer_login_container">
      <nav className="navbar navbar-expand-lg bg-primary landing_navbar">
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
            <ul className="navbar-nav">
              <li className="nav-item  me-5 fw-bold">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link" to="#">
                  Shop
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link" to="#">
                  Blog
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link d" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link d" to="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown me-5 fw-bold">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Create Account
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
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
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link d" to="/buyer/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className=" buyer_login_row_container">
        <div className="row">
          <div className="col-6 buyer-login-leftBox">
            <div className="buyer-login-leftBox-content">
              <img src={img1} />
            </div>
          </div>
          <div className="col-6 buyer-login-rightBox ">
            <div className="buyer-login-inputBox shadow">
              <div className="buyer_login_form">
                <form>
                  <h1>Buyer Login</h1>
                  <div className="buyer_login_input">
                    <input
                      type="text"
                      placeholder="UserName"
                      required
                      name="fullName"
                      onChange={change}
                    />
                    <FaUser className="buyer_login_icon" />
                  </div>
                  <div className="buyer_login_input">
                    <input
                      type="text"
                      placeholder="Password"
                      required
                      name="password"
                      onChange={change}
                    />
                    <FaLock className="buyer_login_icon" />
                  </div>
                  <div className="buyer_login_remember">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <Link to="#">Forgot password?</Link>
                  </div>
                  <button type="submit" onClick={onSubmit}>
                    Login
                  </button>
                  <div className="buyer_login_register">
                    <p>
                      <Link to="/buyer/signup"> Don't have an account?</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      <Footer/>

      </div>
    </div>
  );
}

export default BuyerLogin;
