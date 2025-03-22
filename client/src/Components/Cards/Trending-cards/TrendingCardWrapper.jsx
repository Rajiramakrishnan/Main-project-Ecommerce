import React from 'react'
import productImage from "../../../Assets/Images/images/ck1.png";
import formalImage1 from "../../../Assets/Images/images/formal1.png";
import formalImage2 from "../../../Assets/Images/images/formal2.png";
import styles from "../../../Assets/style/TrendingCardWrapper.module.css"
import TrendingCard from './TrendingCard';

function TrendingCardWrapper() {
    const trendingCards = [
        {
          id: 1,
          imgUrl: productImage,
          title: "Cool & Sexy by Calvin Klein",
          subtitle: "Dotted dress-Casual",
          price: "₹2000",
        },
        {
          id: 2,
          imgUrl: formalImage1,
          title: "Formal Wears by Mango",
          subtitle: "Office wears-Formal",
          price: "₹1000",
        },
        {
          id: 3,
          imgUrl: formalImage2,
          title: "Beige Coat by Zara Exclusive",
          subtitle: "Cream-Brown-Formal",
          price: "₹1999",
        },
      ];
  return (
    <div className={styles.trendingCardCarousal}>
    {trendingCards.map((card, index) => (
      <TrendingCard key={index} trendingCardDetails={card} />
    ))}
  </div>
  )
}

export default TrendingCardWrapper