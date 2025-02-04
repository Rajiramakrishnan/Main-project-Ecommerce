import React, { useState } from "react";
import {useNavigate} from "react";
import "../../Assets/style/BuyerRegistration.css";
import { axiosInstance } from "../../Api/axiosInstance";

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
       

       
        navigate("/buyer/login"); 
        
      
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


  return <div>BuyerRegistration</div>;
}

export default BuyerRegistration;
