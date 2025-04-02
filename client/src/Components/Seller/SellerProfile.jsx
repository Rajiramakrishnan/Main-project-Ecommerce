import React, { useState } from 'react'
import "../../Assets/style/SellerProfile.css"
import SellerSidebar from './SellerSidebar'
import { useNavigate, useParams } from 'react-router-dom'
import SellerViewProfile from './SellerViewProfile'
import SellerProfileEdit from './SellerProfileEdit'
import SellerDashboard from './SellerDashboard'
import SellerAddProduct from './SellerAddProduct'
import SellerViewProduct from './SellerViewProduct'

function SellerProfile({data}) {
    const [activePage,setactivePage]=useState("profile");
    const {id}=useParams();
    console.log(id);
    
    // const changeToEdit=()=>{
    //     setactivePage("profile-edit")
    // }
    // const changeToView=()=>{
    //     setactivePage("profile")
    // }
    const navigate=useNavigate();
    
    
    const changeActivePage=(newPage)=>{
        setactivePage(newPage)
    }
    
  return (
    // <div className='seller_profile_container'>
        <div className='seller_profile_body'>
      <div className="container text-center seller_profile_row_col">
              <div className="row g-2 seller_row">
                <div className="col-4 seller_profile_col4">
                  <SellerSidebar/>
                </div>

                <div className="col-8 seller_profile_col8">
                  {/* {activePage === "profile" && <SellerViewProfile changeToEdit={() => changeActivePage("profile-edit")} />}
                  {activePage === "profile-edit" && <SellerProfileEdit changeToView={() => changeActivePage("dashboard")}  />}
                    {activePage=="dashboard" &&<SellerDashboard />} */}
                    {
          data == 'dashboard' ? <SellerDashboard /> :data=='addproduct'?<SellerAddProduct/>:data=='viewproducts'?<SellerViewProduct/>:''}

                  {/* {editActive ? <BuyerProfileEdit changeToView={changeToView} />:<BuyerViewProfile changeToEdit={changeToEdit}/>  } */}
                  
                </div>
              </div>
            </div>  
            </div>
    // </div>
  )
}

export default SellerProfile