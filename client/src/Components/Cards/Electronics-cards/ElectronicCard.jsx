import React from 'react'
import styles from "../../../Assets/style/ElectronicCard.module.css"
import {useNavigate} from "react-router-dom"
function ElectronicCard({electronicsCardDetails}) {
     const {imgUrl, title, subtitle, price}=electronicsCardDetails;
        const navigate=useNavigate();
    
  return (
    <div className={styles.electronicCardWrapper}>

<div class="card " style={{width: "18rem",height:"30rem"}}>
  <img class="card-img-top" style={{width: "18rem",height:"20rem",objectFit:"cover"}} src={imgUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{subtitle}</p>
    <a href="#" class="btn btn-primary">{`${price}  Shop Now`}</a>
  </div>
</div>
          {/* <div className={styles.eproductImage}>
            <img src={imgUrl} alt="shop-now-images" />
          </div>
          <div className={styles.eproductProperties}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
            <button
              className={styles.shopNowBtn}
            //   onClick={() => navigate("/buyer/viewproducts")}
            >{`${price}  Shop Now`}</button>
          </div> */}
        </div>
  )
}

export default ElectronicCard