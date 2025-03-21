import React from 'react'
import "../../Assets/style/SellerProfileEdit.css"

import toast from "react-hot-toast";
import { axiosInstance } from "../../Api/axiosInstance";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function SellerProfileEdit({ changeToView }) {
  const [updatedata,setupdatedata]=useState({
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
  })
  const navigate=useNavigate();
  const change = (e) => {
    console.log(e);

    setupdatedata({ ...updatedata, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(updatedata);
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
    } = updatedata;
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
      const res = await axiosInstance.post("/seller/findandupdate/${id}", updatedata, {
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
    setupdatedata({
      ...updatedata,
      sellerImg: e.target.files[0],
    });
  };
  return (
    <div className='buyer_profile2_container '>
      <div className="buyer_profile22_headings">
        <span className="buyer_profile2_personal">Personal Information</span>
        {/* <span className="buyer_profile2_edit">Edit</span> */}
      </div>
      <div className="profile_picture_container">
                                  <div className="buyer_profile_picture_preview">
                                  <input type="file" onChange={handleFileChanges} />
                  
                                  </div>
                                  {/* <input type="file" id="image-upload" /> */}
                  
                  
                                  </div>
                                  <div className="buyer_profile_editicon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg></div>
                                
      <div className="buyer_profile_form">
        <form action="">
          <div className="row my-3 mx-2">
            <div className="col">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                className="form-control"
                // value={viewseller.fullName}
                placeholder="Username"
                name="name"
                onChange={change}
              />
            </div>
            <div className="col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                // value={viewseller.email}
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
                // value={viewseller.dateOfBirth}
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
                // value={viewseller.pincode}
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
                // value={viewseller.address}
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
                // value={viewseller.district}
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
                // value={viewseller.state}
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
                // value={viewseller.phoneNumber}
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
                // value={viewseller.confirmPassword}
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
                // value={viewseller.confirmPassword}
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={change}
              />
            </div>
          </div>
          
          {/* <div className="row my-3 mx-2">
            <div className="col">
              <label htmlFor="">Profile Image</label>
            </div>
            <div className="col signup_image_outline">
              <input type="file"
           />
            </div>
          </div>  */}
<div className="buyer_profile_edit_buttons">
          <button
            className="btn my-3"
            onClick={onSubmit}
          >
            Save changes
          </button>
          <button
            onClick={changeToView}
            className="btn  my-3 "
          
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
       </div>
  )
}

export default SellerProfileEdit