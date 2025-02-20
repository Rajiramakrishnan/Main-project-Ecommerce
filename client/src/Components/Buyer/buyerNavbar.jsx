
import { FaSearch } from "react-icons/fa";
import img from "../../Assets/Images/logo.png";
import "../../Assets/style/BuyerNavbar.css"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../Api/axiosInstance";
import toast from "react-hot-toast";
import { BASE_URL } from "../../Api/api";

export const BuyerNavbar = () => {
  const[profile,setprofile]=useState({});
  const {id}=useParams();
  console.log(id);
  let buyerImg=`${BASE_URL}/${profile.buyerImg}`
  const getDataFromServer=async(token,id)=>{
    try{
      const res=await axiosInstance.get(`/buyer/findbuyer/${id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      )
      console.log('resp',res);
      if(res.status==200){
        setprofile(res.data.data);
      }
    }
    catch(error){
      const msg=error?.response?.data?.message;
      alert(msg);
      console.log("error on finding buyer",error);
      
    }
  }
  useEffect(()=>{
    const tokenId=localStorage.getItem("ecommerce-token")||null;
    const buyerId=localStorage.getItem("ecommerce-buyer-id")||null;
  if(tokenId&&buyerId){
    getDataFromServer(tokenId,buyerId);}
    else{
toast.error("Login again")
// navigate("/buyer/login")
    }
   
  
  },[])
  return (
    <nav className="navbar  navbar-expand-lg bg-primary buyer_profile_navbar ">
      <div className="container-fluid">
        <Link className="navbar-brand buyer_profile_nav" to="#">
          <img src={img} className="img-fluid img-thumbnail" alt="..." />
          SPARKLE <span>CART</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex buyer_nav_search" role="search">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search for products,brands and more"
            aria-label="Search"
          />
          <FaSearch className="icon buyer_search_icon" />
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown me-4 ms-5">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {profile.fullName}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Orders
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    logout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="#">
                Become a seller
              </Link>
            </li>
            <li className="nav-item dropdown me-4">
              <Link
                className="nav-link dropdown-toggle
                  "
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
