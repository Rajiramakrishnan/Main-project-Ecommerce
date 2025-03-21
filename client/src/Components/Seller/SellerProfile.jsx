import React, { useState } from 'react'
import "../../Assets/style/SellerProfile.css"
import SellerSidebar from './SellerSidebar'
import { useNavigate, useParams } from 'react-router-dom'
import SellerViewProfile from './SellerViewProfile'
import SellerProfileEdit from './SellerProfileEdit'

function SellerProfile() {
    const [activePage,setactivePage]=useState("profile")
    const changeToEdit=()=>{
        setactivePage("profile-edit")
    }
    const changeToView=()=>{
        setactivePage("profile")
    }
    const navigate=useNavigate();
    const {id}=useParams();
    console.log(id);
    const changeActivePage=(newPage)=>{
        setactivePage(newPage)
    }
    
  return (
    <div className='seller_profile_container'>
        <div className='seller_profile_body'>
      <div className="container text-center seller_profile_row_col">
              <div className="row g-2 seller_row">
                <div className="col-4 seller_profile_col4">
                  <SellerSidebar/>
                </div>

                <div className="col-8 seller_profile_col8">
                  {activePage === "profile" && <SellerViewProfile changeToEdit={changeToEdit} />}
                  {activePage === "profile-edit" && <SellerProfileEdit changeToEdit={changeToEdit} />}

                  {/* {editActive ? <BuyerProfileEdit changeToView={changeToView} />:<BuyerViewProfile changeToEdit={changeToEdit}/>  } */}
                  
                </div>
              </div>
            </div>  
            </div>
    </div>
  )
}

export default SellerProfile