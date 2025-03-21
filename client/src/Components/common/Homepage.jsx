import React from 'react'
import "../../Assets/style/HomePage.css"
import NavbarComponent from './NavbarComponent'
import Landingcarousal from '../Carousal/Landingcarousal'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';



function Homepage() {
  
  return (
    <div>
        <div className='ecommerce_homepage_nav_container'>
   <NavbarComponent/>
        </div>
        <div className='ecommerce_homepage_carousel_container'>
<Landingcarousal/>
        </div>
        <div className='ecommerce_home_card1_container'>
<div className='ecommerce_home_card1_heading'>
  <h6> Flash Sales</h6>
  <Link to="#">View all</Link>

</div>
        </div>
    </div>
  )
}


export default Homepage