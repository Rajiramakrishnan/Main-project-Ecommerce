import React from 'react'
import "../../Assets/style/HomePage.css"
import NavbarComponent from './NavbarComponent'
import Landingcarousal from '../Carousal/Landingcarousal'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import DealCardWrapper from '../Cards/Deal-cards/DealCardWrapper';
import TrendingCardWrapper from '../Cards/Trending-cards/TrendingCardWrapper';
import ElectronicsCardWrapper from '../Cards/Electronics-cards/ElectronicsCardWrapper';
import CategoryCardWrapper from '../Cards/Category-cards/CategoryCardWrapper';
import Footer from '../Buyer/Footer';

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
<DealCardWrapper/>
        </div>
        <div className='ecommerce_home_card1_heading'>
  <h6> Trending Must-Haves</h6>
  <Link to="#">View all</Link>

</div>
<TrendingCardWrapper/>
<div className='ecommerce_home_card1_heading'>
  <h6> Best of Electronics</h6>
  <Link to="#">View all</Link>

</div>
<ElectronicsCardWrapper/>
<div className='ecommerce_home_card1_heading'>
  <h6>Explore our categories</h6>
  <Link to="#">View all</Link>
  </div>
<CategoryCardWrapper/>

<Footer/>
        </div>
 
  )
}


export default Homepage