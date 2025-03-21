import React from 'react'
import "../../Assets/style/SellerViewProfile.css"
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance } from "../../Api/axiosInstance";
import { BASE_URL } from "../../Api/api";
import { useEffect,useState } from 'react';


function SellerViewProfile({ changeToEdit }) {
  // todo => get token and id from LS get user data here. and display buyerinformation.
  const navigate = useNavigate();
  const [viewprofile, setviewprofile] = useState({});
  
  const { id } = useParams();
  console.log(id);
  let sellerImg = `${BASE_URL}/${viewprofile.sellerImg}`;
  const getDataFromServer = async (token, id) => {
    // const id = "67921507ac217aa4ecd52de6"; //get from local storage
    try {
      const res = await axiosInstance.get(`/seller/findseller/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("resp", res);

      if (res.status === 200) {
        toast.success("seller found");
        setviewprofile(res.data.data);
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("error on finding seller", error);
    }
  };
  useEffect(() => {
    const tokenId = localStorage.getItem("ecommerce-seller-token") || null; //check like this for userid
    const sellerId = localStorage.getItem("ecommerce-seller-id") || null;
    console.log("tokenId:", tokenId);
    console.log("sellerId:", sellerId);

    if (tokenId && sellerId) {
      getDataFromServer(tokenId, sellerId);
    } else {
      //todo => show toast => login again
      toast.error("Login Again");
      navigate("/buyer/login")
    }
  }, []);
  return (
    <div className='seller_view_profile'>
        <div className="seller_profile2_headings">
            <span className="seller_profile2_personal">My Profile</span>
            <span className="seller_profile2_edit" onClick={changeToEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>{" "}
              Edit
            </span>
          </div>
          <hr></hr>
          <div className="seller_profile_info_container">
            <div className="container px-4 text-center">
              <div className="row gx-3">
                <div className="col-4 seller_viewprofile_col4">
                  <div className="p-3">
                    <div className="seller_viewprofile_picture_container">
                      <div className="seller_viewprofile_picture_preview">
                        <img id="user-image" src={sellerImg} alt="" />
                      </div>
                    </div>
                    <div className="seller_viewprofile_name_mail">
                      <span>{viewprofile.fullName}</span>
                      
                     
                    </div>
                  </div>
                </div>
                <div className="col-8 seller_viewprofile_col8">
                  <div className="p-3">
                    <h3 className="seller_viewprofile_gradienttext">Profile Details</h3>
                    <table className="seller_viewprofile_table">
                      <tr>
                        <td>Name :</td>
                        <td>{viewprofile.name}</td>
                      </tr>
                      <tr>
                        <td>Email :</td>
                        <td>{viewprofile.email}</td>
                      </tr>
                      <tr>
                        <td>Phone Number :</td>
                        <td>{viewprofile.phoneNumber}</td>
                      </tr>
                      <tr>
                        <td>GST Number :</td>
                        <td>{viewprofile.gstNumber}</td>
                      </tr>
                      <tr>
                        <td>Address:</td>
                        <td>{viewprofile.address}</td>
                      </tr>
                      <tr>
                        <td>District:</td>
                        <td>{viewprofile.state}</td>
                      </tr>
                      <tr>
                        <td>State :</td>
                        <td>{viewprofile.state}</td>
                      </tr>
                      <tr>
                        <td>Pincode :</td>
                        <td>{viewprofile.pincode}</td>
                      </tr>
                      <tr>
                        <td>Password :</td>
                        <td>{viewprofile.confirmPassword}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
  )
}

export default SellerViewProfile