import React, { useState } from "react";
import "../../Assets/style/SellerRegistration.css";
import NavbarComponent from "../common/NavbarComponent";
import img1 from "../../Assets/Images/seller-home-signup.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Buyer/Footer";
import toast from "react-hot-toast";
import { axiosInstance } from "../../Api/axiosInstance";

function SellerRegistration() {
  const navigate = useNavigate();
  const [signupdata, setsignupdata] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    district:"",
    pincode: "",
    gstNumber: "",
    password: "",
    confirmPassword: "",
    sellerImg: {},
  });

  console.log('signup data', signupdata)
  const change = (e) => {
    console.log(e);

    setsignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(signupdata);
    const {
      name,
      email,
      phoneNumber,
      address,
      state,
      pincode,
      gstNumber,
      district,
      password,
      confirmPassword,
    } = signupdata;
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !address ||
      !state ||
      !pincode ||
      !gstNumber ||
      !password ||
      !district||
      !confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email id");
      return;
    }
    if (password != confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    sendDataToServer();
  };
  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post("/seller/addseller", signupdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("resp", res);
      if (res.status == 201) {
        toast.success("Signup successfully");
        navigate("/seller/login");
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      toast(msg);
      console.log("Error on adding seller", error);
    }
  };
  const handleFileChanges = (e) => {
    setsignupdata({
      ...signupdata,
      sellerImg: e.target.files[0],
    });
  };
  return (
    <div className="seller_signup_container">
      <NavbarComponent />
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
                    <label htmlFor="">Seller Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sellername"
                      name="name"
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
                    <label htmlFor="">Enter GST Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="GST Number"
                      name="gstNumber"
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
      <Footer />
    </div>
  );
}

export default SellerRegistration;
