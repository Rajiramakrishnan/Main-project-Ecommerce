import React, { useState } from 'react'
import "../../Assets/style/AdminLogin.css"
import NavbarComponent from '../common/NavbarComponent'
import img1 from "../../Assets/Images/4297423.webp";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Buyer/Footer";
import toast from "react-hot-toast";

function AdminLogin() {
  const navigate=useNavigate();
  const [logindata,setlogindata]=useState({
    userEmail:"",
    password:""
  })
  const adminEmail="admin";
  const adminPassword="admin@123";
  const change=(e)=>{
    setlogindata({...logindata,[e.target.name]:e.target.value});
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    if(logindata.userEmail==adminEmail&&logindata.password==adminPassword){
     
      toast.success("Login successfully");
     navigate("/#") ;
   }
   else {
        
    console.log('Invalid username or password');
    
  }
}
  return (
    <div className='admin_login_container'>
      <NavbarComponent/>
      <div className=" buyer_login_row_container">
        <div className="row">
          <div className="col-6 buyer-login-leftBox">
            <div className="buyer-login-leftBox-content">
              <img src={img1} className='seller_login_img' />
            </div>
          </div>
          <div className="col-6 buyer-login-rightBox ">
            <div className="buyer-login-inputBox shadow">
              <div className="buyer_login_form">
                <form>
                  <h1>Admin Login</h1>
                  <div className="buyer_login_input">
                    <input
                      type="text"
                      placeholder="Email id "
                      required
                      name="userEmail"
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
                  {/* <div className="buyer_login_remember">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <Link to="#">Forgot password?</Link>
                  </div> */}
                  <div className='admin_login_submit'>
                  <button type="submit" 
                  onClick={onSubmit}
                  >
                    Login
                  </button>
                  </div>
                  {/* <div className="buyer_login_register">
                    <p>
                      <Link to="/buyer/signup"> Don't have an account?</Link>
                    </p>
                  </div> */}
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
  )
}

export default AdminLogin