import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../Assets/style/BuyerRegistration.css";
import { axiosInstance } from "../../Api/axiosInstance";
import { toast } from "react-hot-toast";
import img from "../../Assets/Images/logo.png";
import img1 from "../../Assets/Images/signup.png";

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

    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !address ||
      !district ||
      !state ||
      !dateOfBirth ||
      !email ||
      !pincode
    ) {
      toast.error("All fields are required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     toast.error("Email is invalid");
      return;
    }
    if(password!= confirmPassword){
      toast.error("Password Do not Match")
      return;
    }

    
    sendDataToServer();
  };
  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post("/buyer/addbuyer", Signupdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("resp", res);

      if (res.status === 201) {
        toast.success("Signup successfully");

        navigate("/buyer/login");
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      toast(msg);
      console.log("err on adding buyer", error);
    }
  };
  const handleFileChanges = (e) => {
    setSignupdata({
      ...Signupdata,
      buyerImg: e.target.files[0],
    });
  };

  return (
    <div className="buyer_signup_container">
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
                <Link className="nav-link d" to="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" buyer_row_container">
        <div className="row">
          <div className="col-6 buyer-signUp-leftBox">
            <div className="buyer-signUp-leftBox-content">
              <img src={img1} />
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
                      <option value="TamilNadu" name="state">
                        TamilNadu
                      </option>
                      <option value="Kerala" name="state">
                        Kerala
                      </option>
                      <option value="Karnataka" name="state">
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
                Already have an account? 
                  <Link to="/buyer/login" className="buyer_signup_login">
                   <span> Login</span>
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
