import React from 'react'
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import img1 from "../../Assets/Images/carousal4.png"
import img2 from "../../Assets/Images/girlcar.png"
import img3 from "../../Assets/Images/phonecarousel.png"
import img4 from "../../Assets/Images/newcarousal.jpg"
import img5 from "../../Assets/Images/carousal1.jpg"
import "../../Assets/style/Landingcarousal.css"

function Landingcarousal() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
    
    <div>
    <div className="ecommerce-Home-carousel-outer-box">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="ecommerce_Home_carousel"
      >
        <Carousel.Item className="ecommerce-home-carousel-Item">
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className="ecommerce-details-caption">
           
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="ecommerce-home-carousel-Item">
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption className="ecommerce-details-caption">
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="ecommerce-home-carousel-Item">
          <img
            className="d-block w-100"
            src={img4}
            alt="Third slide"
          />
          <Carousel.Caption className="ecommerce-details-caption">
            <h3>"When in doubt..Buy it all"</h3>
            <Button
              variant="success"
              className="ecommerce-home-details-button shadow"
            >
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="ecommerce-home-carousel-Item">
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption className="ecommerce-details-caption">
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);
}

export default Landingcarousal