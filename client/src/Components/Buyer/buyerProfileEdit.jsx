import React from "react";
import "../../Assets/style/buyerProfileEdit.css";
import toast from "react-hot-toast";
import { axiosInstance } from "../../Api/axiosInstance";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BiCloudUpload } from "react-icons/bi";
export const BuyerProfileEdit = ({ changeToView }) => {
  const navigate=useNavigate();
  const [viewbuyer, setviewbuyer] = useState({});
  const [loading, setLoading] = useState(false);
 
  const {id}=useParams();
  console.log(id);
  let buyerImg = viewbuyer.buyerImg
  ? `${BASE_URL}/${viewbuyer.buyerImg}`
  : null;
   console.log(buyerImg);
   
  

  const getDataFromServer = async (token, id) => {
   
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/buyer/findbuyer/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("resp", res);

      if (res.status === 200) {
        toast.success("buyer found");
        setviewbuyer(res.data.data);
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("error on finding buyer", error);
    }
    finally {
      setLoading(false);
    }
  };
  const buyerId = localStorage.getItem("ecommerce-buyer-id") || null;
  const tokenId = localStorage.getItem("ecommerce-token") || null; 
  // console.log("byer id:",buyerId);
  // console.log("tokenid:",tokenId);
  
  
  const onSubmit=(e)=>{
    e.preventDefault();
    if (validateFields()) {
      console.log("validation working");
      
      updateProfile(buyerId);
  
    }
    updateProfile(buyerId);
  }
 
  const validateFields = () => {
    console.log("validation started");
    
    const { fullName, email,password,confirmPassword,phoneNumber,address,district,state,pincode,dateOfBirth} = viewbuyer;

    if (!fullName || !email||!password||!confirmPassword ||!phoneNumber ||!address ||!district ||!state ||!pincode ||!dateOfBirth ) {
      alert("All fields are required");

      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email is invalid");
      return false;
    }
    console.log("validation ends");
    
    return true;
  };
  const updateProfile = async (id) => {

    const formData = new FormData();

    // Append all form data to FormData object
    for (let key in viewbuyer) {
      if (key !== "buyerImg" && viewbuyer[key]) {
        formData.append(key, viewbuyer[key]);
      }
    }

    if (viewbuyer.buyerImg instanceof File) {
      formData.append("buyerImg", viewbuyer.buyerImg);
    }

    try {
      console.log("viewbuyer:",viewbuyer);
      
      const res = await axiosInstance.patch(
        `/buyer/findandupdate/${id}`,
        formData,
        {
          headers: {
             "Content-Type": "multipart/form-data",
           },
         }
      );

      if (res.status === 200) {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      const statusCode = error.response.status;

      if (statusCode === 400 || statusCode === 404) {
        toast.error("Error on updating buyer profile");
      } else {
        toast.error("Please try again after sometime");
      }
      console.log("Error on updating buyer details", error.message);
    }
     finally {
      setLoading(false);
      getDataFromServer(tokenId,buyerId);
    }
  };


  const change = (e) => {
    console.log(e);

    setviewbuyer({ ...viewbuyer, [e.target.name]: e.target.value });
  };
  const handleFileChanges = (e) => {
  
    const file = e.target.files[0];
    setviewbuyer({
      ...viewbuyer,
      buyerImg: file,
    });

    // Show image preview
    if (file) {
      buyerImg = URL.createObjectURL(file);
    }
  }
  useEffect(() => {
    const tokenId = localStorage.getItem("ecommerce-token") || null; //check like this for userid
    const buyerId = localStorage.getItem("ecommerce-buyer-id") || null;
    console.log("tokenId:",tokenId);
    console.log("buyerId:",buyerId);
    
    
    if (tokenId && buyerId) {
      getDataFromServer(tokenId, buyerId);
    } else {
      //todo => show toast => login again
      toast.error("Login Again");
       navigate("/buyer/login")
    }
  }, []);

  return (
    <div className="buyer_profile2_container ">
      <div className="buyer_profile22_headings">
        <span className="buyer_profile2_personal">Personal Information</span>
        {/* <span className="buyer_profile2_edit">Edit</span> */}
      </div>
      
      <div className="profile_picture_container">
                                  <div className="buyer_profile_picture_preview">
                                  <img id="user-image" src={buyerImg}  alt="" />
                                
                  
                                  </div>
                                  {/* <input type="file" id="image-upload" onChange={handleFileChanges} />
                   */}
                  
                                  </div>
                                  <div className="buyer_profile_editicon">
                                  <label>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>


<input
                  type="file"
                  style={{ display: "none" }}
                  name="buyerImg"
                  onChange={handleFileChanges}
                />
</label>
</div>
                                
      <div className="buyer_profile_form">
        <form action="">
          <div className="row my-3 mx-2">
            <div className="col">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                className="form-control"
                value={viewbuyer.fullName}
                placeholder="Username"
                name="fullName"
                onChange={change}
              />
            </div>
            <div className="col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                value={viewbuyer.email}
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
                value={viewbuyer.dateOfBirth}
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
                value={viewbuyer.pincode}
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
                value={viewbuyer.address}
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
                value={viewbuyer.district}
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
                value={viewbuyer.state}
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
                value={viewbuyer.phoneNumber}
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
                value={viewbuyer.confirmPassword}
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
                value={viewbuyer.confirmPassword}
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
  );
};
