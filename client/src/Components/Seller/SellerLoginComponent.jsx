import React from 'react'
import "../../Assets/style/SellerLoginComponent.css"
import NavbarComponent from '../common/NavbarComponent'
import { axiosInstance } from "../../Api/axiosInstance";
import { useState } from "react";
import img1 from "../../Assets/Images/seller.png";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Buyer/Footer";
function SellerLoginComponent() {
    const navigate=useNavigate();
    const [sellerlogin,setsellerlogin]=useState({
        email:"",
        password:""
    })
    const change=(e)=>{
        console.log(e);
        setsellerlogin({...sellerlogin,[e.target.name]:e.target.value})
        
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=sellerlogin;
        if(!email||!password){
            toast.error("All sields are required");
            return;
        }
        console.log(sellerlogin);
        sendDataToserver();
        
    }
    const sendDataToserver=async()=>{
        try{
            const res=await axiosInstance.post("/seller/login",sellerlogin);
       console.log("resp",res);
       if(res.status==200){
        const token=res.data.token;
        const sellerId=res.data.data._id;
        localStorage.setItem("ecommerce-seller-token",token);
        localStorage.setItem("ecommerce-seller-id",sellerId);
               toast.success("login successfully");
            navigate("/seller/profile")   
    }
       
        }catch(error){
            const msg=error?.response?.data?.message;
            toast(msg);
            console.log("error on login",error);
            

        }
    }
  return (
    <div className='seller_login_container'>
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
                  <h1>Seller Login</h1>
                  <div className="buyer_login_input">
                    <input
                      type="text"
                      placeholder="Email "
                      required
                      name="email"
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
                  <button type="submit" 
                  onClick={onSubmit}
                  >
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
  )
}

export default SellerLoginComponent