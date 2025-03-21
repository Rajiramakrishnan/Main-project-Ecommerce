import React, { useState } from "react";
import "../../Assets/style/BuyerProfile.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "./Footer.js";
import { ProfileSidebar } from "./profileSidebar.jsx";
import { BuyerNavbar } from "./buyerNavbar.jsx";
import { BuyerProfileEdit } from "./buyerProfileEdit.jsx";
import BuyerViewProfile from "./BuyerViewProfile.js";

function BuyerProfile() {
  const [activePage, setActivePage] = useState("profile");
  const changeToEdit = () => {
    setActivePage("profile-edit");
  };

  const changeToView = () => {
    setActivePage("profile");
  };
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const changeActivePage = (newPage) => {
    setActivePage(newPage);
  };
  return (
    <>
      <div
        className="buyer_profile_container "
        style={{ backgroundColor: "red" }}
      >
        <BuyerNavbar />
        <div className="buyer_profile_body">
          <div className="buyer_profile_content">
            <div className="container text-center buyer_profile_row_col">
              <div className="row g-2 buyer_row">
                <div className="col-4">
                  <ProfileSidebar />
                </div>

                <div className="col-8">
                  {activePage === "profile" && (
                    <BuyerViewProfile changeToEdit={changeToEdit} />
                  )}
                  {activePage === "profile-edit" && (
                    <BuyerProfileEdit changeToEdit={changeToEdit} />
                  )}

                  {/* {editActive ? <BuyerProfileEdit changeToView={changeToView} />:<BuyerViewProfile changeToEdit={changeToEdit}/>  } */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buyer_profile_footer">
        <Footer />
      </div>
    </>
  );
}

export default BuyerProfile;
