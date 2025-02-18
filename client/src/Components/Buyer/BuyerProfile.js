import React from "react";
import "../../Assets/style/BuyerProfile.css";
import img from "../../Assets/Images/logo.png";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Api/axiosInstance";
import axios from "axios";
import { BASE_URL } from "../../Api/api.js";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import img1 from "../../Assets/Images/profile-pic-female_0627fd.svg";
import img2 from "../../Assets/Images/download.svg";
import BuyerViewProfile from "./BuyerViewProfile.js";
import Footer from "./Footer.js";
// import BuyerViewProfile from './Components/Buyer/BuyerViewProfile';

function BuyerProfile() {
  const navigate = useNavigate();
  const [viewbuyer, setviewbuyer] = useState([]);
  const { id } = useParams();
  console.log(id);
  let buyerImg = `${BASE_URL}/${viewbuyer.buyerImg}`;

  const getDataFromServer = async (token) => {
    try {
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
  };

  useEffect(() => {
    const tokenId = localStorage.getItem("ecommerce-token");
    if (tokenId) {
      getDataFromServer(tokenId);
    } else {
      // navigate("/buyer/login")
    }
  }, []);
  console.log(viewbuyer);
  return (
    <>
    <div className="buyer_profile_container " style={{backgroundColor: "red"}}>
      <nav class="navbar navbar-expand-lg bg-primary buyer_profile_navbar ">
        <div class="container-fluid">
          <a class="navbar-brand buyer_profile_nav" href="#">
            <img src={img} class="img-fluid img-thumbnail" alt="..." />
            SPARKLE <span>CART</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex buyer_nav_search" role="search">
            <input
              class="form-control me-2 "
              type="search"
              placeholder="Search for products,brands and more"
              aria-label="Search"
            />
            <FaSearch className="icon buyer_search_icon" />
            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown me-4 ms-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Orders
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      logout
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link me-4" href="#">
                  Become a seller
                </a>
              </li>
              <li class="nav-item dropdown me-4">
                <a
                  class="nav-link dropdown-toggle
          "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="buyer_profile_body bg-danger">
        <div className="buyer_profile_content">
          <div class="container text-center buyer_profile_row_col">
            <div class="row g-2 buyer_row">
              <div class="col-4">
                <div className="buyer_profile_photo_name">
                  <img src={img1} class="img-fluid img-thumbnail" alt="..." />
                  <div className="buyer_hello">
                    Hello,
                    <div className="buyer_username">
                      <span>Raji Ram</span>
                    </div>
                  </div>
                </div>
                <div className="buyer_profile_info">
                  <div className="buyer_profile_myorders">
                    <div className="buyer_profile_myorders1">
                      <img
                        src={img2}
                        class="img-fluid img-thumbnail"
                        alt="..."
                      />
                      <a class="buyer_profile_myorders1_a" href="#">
                        MY ORDERS
                      </a>
                      <span className="buyer_profile_myorders1_span ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="buyer_profile_account">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        transform="translate(-9.694 -10)"
                      >
                        <path
                          fill="#2874F0"
                          d="M14.275 22.704c2.272-.412 4.347-.618 6.225-.618 1.878 0 3.953.206 6.225.618a5.15 5.15 0 0 1 4.23 5.068V31h-20.91v-3.228a5.15 5.15 0 0 1 4.23-5.068zm1.274-7.724c0-2.58 2.163-4.673 4.832-4.673 2.667 0 4.83 2.092 4.83 4.673 0 2.58-2.163 4.673-4.83 4.673-2.67 0-4.833-2.092-4.833-4.673z"
                        />
                        <ellipse cx="20.557" cy="20" rx="20.557" ry="20" />
                      </g>
                    </svg>
                    <div className="buyer_profile_account1">
                      ACCOUNT SETTINGS
                    </div>
                  </div>

                  <div className="buyer_profile_account_container">
                    <Link
                      class="buyer_profile_acconut_a"
                      to="/buyer/findbuyer/${id}"
                    >
                      Profile Information
                    </Link>
                    <a class="buyer_profile_acconut_a" href="#">
                      Manage Addresses
                    </a>
                    <a class="buyer_profile_acconut_a" href="#">
                      PAN card Information
                    </a>
                  </div>

                  <div className="buyer_profile_account">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-credit-card-2-back-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z" />
                    </svg>
                    <div className="buyer_profile_account1">PAYEMENTS</div>
                  </div>
                  <div className="buyer_profile_account_container">
                    <a class="buyer_profile_acconut_a" href="#">
                      Gift Cards
                    </a>
                    <a class="buyer_profile_acconut_a" href="#">
                      Saved UPI
                    </a>
                    <a class="buyer_profile_acconut_a" href="#">
                      Saved Cards
                    </a>
                  </div>

                  <div className="buyer_profile_account">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="19"
                      viewBox="0 0 23 19"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#2874F0"
                          fill-rule="nonzero"
                          d="M20.5 2.75h-9L9.25.5H2.5A2.247 2.247 0 0 0 .26 2.75l-.01 13.5A2.257 2.257 0 0 0 2.5 18.5h18a2.257 2.257 0 0 0 2.25-2.25V5a2.257 2.257 0 0 0-2.25-2.25zm-5.625 3.375a2.257 2.257 0 0 1 2.25 2.25 2.257 2.257 0 0 1-2.25 2.25 2.257 2.257 0 0 1-2.25-2.25 2.257 2.257 0 0 1 2.25-2.25zm4.5 9h-9V14c0-1.496 3.004-2.25 4.5-2.25s4.5.754 4.5 2.25v1.125z"
                        />
                        <path d="M-2-4h27v27H-2z" />
                      </g>
                    </svg>
                    <div className="buyer_profile_account1">MY STUFFS</div>
                  </div>
                  <div className="buyer_profile_account_container">
                    <a class="buyer_profile_acconut_a" href="#">
                      My Coupens
                    </a>
                    <a class="buyer_profile_acconut_a" href="#">
                      My Wishlist
                    </a>
                    <a class="buyer_profile_acconut_a" href="#">
                      My Reviews@Ratings
                    </a>
                  </div>
                  <div className="buyer_profile_account">
                    <svg
                      width="24"
                      height="24"
                      class=""
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#2874F0"
                        stroke-width="0.3"
                        stroke="#2874F0"
                        d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
                      ></path>
                    </svg>
                    <div className="buyer_profile_account1">LogOut</div>
                  </div>
                </div>
              </div>

              <div class="col-8">
                <div className="buyer_profile2_container">
                  <div className="buyer_profile2_headings">
                    <span className="buyer_profile2_personal">
                      Personal Information
                    </span>
                    <span className="buyer_profile2_edit">Edit</span>
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
                            // onChange={change}
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email id here"
                            name="email"
                            // onChange={change}
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
                            // onChange={change}
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
                            // onChange={change}
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
                            // onChange={change}
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="">District</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            name="district"
                            // onChange={change}
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
                            // onChange={change}
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
                            // onChange={change}
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
                            // onChange={change}
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="">Confirm password</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            // onChange={change}
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
                          <input type="file" />
                        </div>
                      </div>

                      <button
                        className="buyer-signUp-inputBox-btn my-3"
                        // onClick={onSubmit}
                      >
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </div>
<div >

  <Footer />
</div>
    </>
  );
}

export default BuyerProfile;
