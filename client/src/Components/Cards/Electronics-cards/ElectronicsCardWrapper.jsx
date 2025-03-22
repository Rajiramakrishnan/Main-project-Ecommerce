import React from 'react'
import styles from "../../../Assets/style/ElectronicsCardWrapper.module.css"
import electronic1 from "../../../Assets/Images/images/electronicsearbuds.jpg"
import electronic2 from "../../../Assets/Images/images/electronicsspeaker.webp"
import electronic3 from "../../../Assets/Images/images/elecronicstv.png"
import electronic4 from "../../../Assets/Images/images/electronicswatch.webp"
import ElectronicCard from './ElectronicCard'


function ElectronicsCardWrapper() {
    const electronicsCards = [
            {
              id: 1,
              imgUrl: electronic1,
              title: "Meet Noise Air Buds Pro 3 ",
              subtitle: "Noise Cancellation, 45 hours of playtimel",
              price: "₹2000",
            },
            {
              id: 2,
              imgUrl: electronic4,
              title: "Black Strap, Regular",
              subtitle: "Wireless for Boundless Winning",
              price: "₹2000",
            },
            {
              id: 3,
              imgUrl: electronic3,
              title: "Sony Bravia",
              subtitle: "S30, 65-Inch",
              price: "₹39,999",
            },
            {
                id: 4,
                imgUrl: electronic2,
                title: "Bluetooth Speaker",
                subtitle: "Tempt SINQ With Mic Bluetooth Speaker",
                price: "₹1000",
              },
          ];
  return (
    <div className={styles.electronicCardCarousal}>
    {electronicsCards.map((card, index) => (
      <ElectronicCard key={index} electronicsCardDetails={card} />
    ))}
  </div>
  )
}

export default ElectronicsCardWrapper