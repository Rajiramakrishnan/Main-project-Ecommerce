import React from "react";
// import "../../Assets/style/BuyerProfileContent.css";
import BuyerProfile from "./BuyerProfile";
import BuyerViewProfile from "./BuyerViewProfile";

function BuyerProfileContent({ data }) {
  return (
    <div className="buyer_profile_sidebar">
      <BuyerProfile />
      <div className="buyer_dashboard_container">
        {data == "viewprofile" ? <BuyerViewProfile /> : ""}
      </div>
    </div>
  );
}

export default BuyerProfileContent;
