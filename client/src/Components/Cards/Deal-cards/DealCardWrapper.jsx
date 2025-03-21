import React from 'react'
import styles from "../../../Assets/style/DealCardWrapper.module.css"
import star from "../../../Assets/Images/svg/ratingStar.svg";
import productBag from "../../../Assets/Images/product/tonnyblack.svg";
import productShoe from "../../../Assets/Images/product/reebok.svg";
import productBag1 from "../../../Assets/Images/product/patsoBag.svg";
import productShoe1 from "../../../Assets/Images/product/sketcher.svg";
import { useEffect, useState } from "react";
import Dealcard from './Dealcard';

function DealCardWrapper() {
    const [dealCards, setDealCards] = useState([
        {
          id: 1,
          dealProductUrl: productBag,
          title: "Tonny Black",
          subTitle: "Shoulder bag-White-Plain",
          ratingStarUrl: star,
          ratingCount: "(1)",
          discountPrice: "₹800",
          originalPrice: "₹1000",
          discountPercentage: "20%",
          hours: 12,
          mins: 5,
          secs: 5,
        },
        {
          id: 2,
          dealProductUrl: productShoe,
          title: "Reebok",
          subTitle: "Women's Powder sneakers",
          ratingStarUrl: star,
          ratingCount: "(1)",
          discountPrice: "₹3600",
          originalPrice: "₹4000",
          discountPercentage: "10%",
          hours: 5,
          mins: 1,
          secs: 0,
        },
        {
          id: 3,
          dealProductUrl: productBag1,
          title: "Patso",
          subTitle: "Shoulder bag-Pink-Plain",
          ratingStarUrl: star,
          ratingCount: "(1)",
          discountPrice: "₹5000",
          originalPrice: "₹10,000",
          discountPercentage: "50%",
          hours: 24,
          mins: 5,
          secs: 0,
        },
    
        {
          id: 4,
          dealProductUrl: productShoe1,
          title: "Sketchers",
          subTitle: "Sport-shoe 2102",
          ratingStarUrl: star,
          ratingCount: "(1)",
          discountPrice: "₹4000",
          originalPrice: "₹5000",
          discountPercentage: "20%",
          hours: 1,
          mins: 59,
          secs: 0,
        },
      ]);
    
      useEffect(() => {
        const timerInterval = setInterval(() => {
          setDealCards((prevDealCards) =>
            prevDealCards.map((product) => {
              let { hours, mins, secs } = product;
    
              if (secs > 0) {
                secs = secs - 1;
              } else if (mins > 0 && secs == 0) {
                mins = mins - 1;
                secs = 59;
              } else if (hours > 0 && mins == 0 && secs == 0) {
                hours = hours - 1;
                mins = 59;
                secs = 59;
              }
              return {
                ...product,
                hours,
                mins,
                secs,
              };
            })
          );
        }, 1000);
    
        return () => clearInterval(timerInterval);
      }, []);
    
  return (
    <div className={styles.cardCarousal}>
    {dealCards.map((card) => (
      <Dealcard key={card.id} cardDetails={card} />
    ))}
  </div>
  )
}

export default DealCardWrapper