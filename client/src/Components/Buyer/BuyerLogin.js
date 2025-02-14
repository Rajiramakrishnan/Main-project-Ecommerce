import React from 'react'
import "../../Assets/style/BuyerLogin.css"
import { axiosInstance } from '../../Api/axiosInstance'
import { useState} from 'react'
import img1 from "../../Assets/Images/login.png"
import img from "../../Assets/Images/logo.png"
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'

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
    console.log(logindata);
    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post(
        "/buyer/login",
        logindata
      );
      console.log("resp", res);
      if (res.status === 200) {
        const token=res.data.token;
        localStorage.setItem("e-commerce-token",token)
        toast.success("Login sucessfully");
        navigate("/homepage");
        
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("err on login", error);
    }
  };
  return (
    <div className="buyer_login_container">
      <nav class="navbar navbar-expand-lg bg-primary landing_navbar">
        <div class="container-fluid nav_container">
          <a class="navbar-brand nav_sparkle" href="#"><img src={img} class="img-fluid img-thumbnail" alt="..."/>SPARKLE  <span>CART</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse navbar_list" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item  me-5 fw-bold">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item me-5 fw-bold">
                <a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item me-5 fw-bold">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item me-5 fw-bold">
                <a class="nav-link d"  href="#">About</a>
              </li>
              <li class="nav-item me-5 fw-bold">
                <a class="nav-link d"  href="#">Contact</a>
              </li>
              <li class="nav-item dropdown me-5 fw-bold">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Create Account
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Buyer</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Seller</a></li>
                  
                  
                </ul>
              </li><li class="nav-item me-5 fw-bold">
                <a class="nav-link d"  href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class=" buyer_login_row_container">
      <div class="row">

  <div className="col-6 buyer-login-leftBox">
          <div className="buyer-login-leftBox-content">
      <img src={img1}/>
            
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
                type="password"
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

    </div>
  )
}

export default BuyerLogin