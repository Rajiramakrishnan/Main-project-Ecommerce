import React, { useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import "../../Assets/style/BuyerRegistration.css";
import { axiosInstance } from "../../Api/axiosInstance";
import {toast} from 'react-hot-toast'
import img from "../../Assets/Images/logo.png"
import img1 from "../../Assets/Images/signup.png"

function BuyerRegistration() {
  const navigate = useNavigate();

  const [Signupdata, setSignupdata] = useState({
    fullName: "",
    email: "",

    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    district: "",
    state: "",
    dateOfBirth: "",
    pincode: "",
    buyerImg: {},
  });
  const change = (e) => {
    console.log(e);
    setSignupdata({ ...Signupdata, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Signupdata);
    const {
      fullName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      address,

      district,
      state,
      dateOfBirth,
      pincode,
    } = Signupdata;
  
  if(!fullName||!email||!password||!confirmPassword||!phoneNumber||!address||!district||!state||!dateOfBirth||!email||!pincode)
    {
    
    alert("All fields are required")
    }
    sendDataToServer();
  }
  const sendDataToServer=async()=>{
    try{
      const res=await axiosInstance.post("/buyer/addbuyer",
        Signupdata,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log("resp", res);

      if (res.status === 201) {
        toast.success('Signup successfully')
       

       
        // navigate("/buyer/login"); 
        
      
      }

    }
    catch(error){
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("err on adding buyer", error);
    }
  }
  const handleFileChanges = (e) => {
    setSignupdata({
      ...Signupdata,
      buyerImg: e.target.files[0],
    });
  };


  return (
  <div className="buyer_signup_container">
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

<div class=" buyer_row_container">
  <div class="row">
    


  <div className="col-6 buyer-signUp-leftBox">
          <div className="buyer-signUp-leftBox-content">
      <img src={img1}/>
            
          </div>
        </div>
        <div className="col-6 buyer-signUp-rightBox ">
          <div className="buyer-signUp-inputBox shadow">
            <h4 className="my-4 header">Sign Up</h4>
            <form action="">
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="fullName"
                    onChange={change}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email id here"
                    name="email"
                    onChange={change}
                  />
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">Date of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dob"
                    name="dateOfBirth"
                    onChange={change}
                  />
                </div>
                {/* <div className="col">
                  <label>Select the Gender:</label>
                  <br></br>
                  <select
                    name="gender"
                    className="form-control buyer_signup_select"
                   
                  >
                    <option value="male" name="gender" >
                      Male
                    </option>
                    <option value="female" name="gender" >
                      Female
                    </option>
                  </select>
                </div> */}
                <div className="col">
                  <label htmlFor="">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="phone number"
                    name="pincode"
                    onChange={change}
                  />
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="place"
                    name="address"
                    onChange={change}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">District</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="district"
                    onChange={change}
                  />
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label>select state</label>
                  <br></br>
                  <select
                    name="state"
                    className="form-control buyer_signup_select"
                    onChange={change}
                  >
                    <option value="TamilNadu" name="state" >
                      TamilNadu
                    </option>
                    <option value="Kerala" name="state" >
                      Kerala
                    </option>
                    <option value="Karnataka" name="state" >
                      Karnataka
                    </option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="">Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="phone number"
                    name="phoneNumber"
                    onChange={change}
                  />
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={change}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Confirm password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    onChange={change}
                  />
                </div>
              </div>
              {/* <div className="profile_picture_container">
                <div className="profile_picture_preview">
                <img id="user-image" src="" alt="" />

                </div>
                <input type="file" id="image-upload" />



              </div> */}
               <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">Profile Image</label>
                  </div>
               <div className="col signup_image_outline">
                <input type="file" onChange={handleFileChanges} />
              </div>
              </div>

              <button
                className="buyer-signUp-inputBox-btn my-3"
                onClick={onSubmit}
              >
                Sign Up
              </button>
              <div className="buyer_signup_already">
                
                <Link to="" className=" buyer_signup_login">
              
                  Already have an account? <span> Login</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      



  </div>
  </div>


    </div>
    );
}

export default BuyerRegistration;
