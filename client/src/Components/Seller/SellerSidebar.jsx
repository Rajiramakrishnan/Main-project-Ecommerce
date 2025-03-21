import React from 'react'
import "../../Assets/style/SellerSidebar.css"
import { Link } from 'react-router-dom'
import img1 from "../../Assets/Images/profile-pic-female_0627fd.svg";
import img2 from "../../Assets/Images/download.svg";

function SellerSidebar() {
  return (
    <div className='seller_sidebar_container' >
       <div className="seller_profile_photo_name">
        <img src={img1} className="img-fluid img-thumbnail" alt="..." />
        <div className="seller_hello">
          <span>Hello,</span>
          <div className="seller_username">
            <span>Raji</span>
          </div>
        </div>
      </div>
      <div className="seller_profile_info">
      <div className="seller_dashboard">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          <Link className="seller_profile_account1" to="#">DASH BOARD</Link>
        </div>
        <div className="seller_profile_myorders">
          <div className="seller_profile_myorders1">
            <img src={img2} className="img-fluid img-thumbnail" alt="..." />
            <Link className="seller_profile_myorders1_a" to="#">
              MY ORDERS
            </Link>
            <span className="seller_profile_myorders1_span ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right"
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
        <div className="seller_profile_account_container">
          <Link className="seller_profile_acconut_a" to="#">
            View orders
          </Link>
          
          <Link className="seller_profile_acconut_a" to="#">
           Order History
          </Link>
        </div>
        <div className="seller_profile_account">
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
          <div className="seller_profile_account1">ACCOUNT SETTINGS</div>
        </div>

        <div className="seller_profile_account_container">
          <Link className="seller_profile_acconut_a" to="/seller/findseller/${id}">
           View Profile
          </Link>
          
        </div>

        <div className="seller_profile_account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-credit-card-2-back-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z" />
          </svg>
          <div className="seller_profile_account1">PRODUCTS</div>
        </div>
        <div className="seller_profile_account_container">
          <Link className="seller_profile_acconut_a" to="#">
           View Products
          </Link>
          <Link className="seller_profile_acconut_a" to="#">
           Add product
          </Link>
          
        </div>

        <div className="seller_profile_account">
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
          <div className="seller_profile_account1">MY STUFFS</div>
        </div>
        <div className="seller_profile_account_container">
          {/* <Link className="seller_profile_acconut_a" to="#">
            My Coupens
          </Link>
          <Link className="seller_profile_acconut_a" to="#">
            My Wishlist
          </Link> */}
          <Link className="seller_profile_acconut_a" to="#">
            My Reviews@Ratings
          </Link>
        </div>
        <div className="seller_profile_account">
          <svg
            width="24"
            height="24"
            className=""
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
          <div className="seller_profile_account1">LogOut</div>
        </div>
      </div>
    </div>
  )
}

export default SellerSidebar