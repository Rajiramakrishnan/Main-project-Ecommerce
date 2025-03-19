import "../../Assets/style/HomePage.css";

import carouselitem2 from "../../Assets/Images/IMG-20250317-WA0005 (1).jpg";
import carouselitem3 from "../../Assets/Images/IMG-20250317-WA0010.jpg";
import Carousel from "react-bootstrap/Carousel";
import landingdelivery from "../../Assets/Images/IMG-20250317-WA0012.jpg";
import Card from "react-bootstrap/Card";
import userlandingmen from "../../Assets/Images/IMG-20250317-WA0011.jpg";
import userlandinghand from "../../Assets/Images/IMG-20250317-WA0009.jpg";
import userlandingdelivery from "../../Assets/Images/IMG-20250317-WA0006.jpg";
import Footer from "../Buyer/Footer";
import NavbarComponent from "./NavbarComponent";
import { ViewProduct } from "./HomePage2";

export const HomePage = () => {
  return (
    <div className="homepage">
      <NavbarComponent />
      <div>
        <Carousel className="container">
          <Carousel.Item className="mt-5 user-landing-background">
            <div className="row">
              <div className="col-8 mt-2">
                <div className="ms-5 mt-2">
                  <h1 className="mt-5 user-landing-h1">Curated For You</h1>
                </div>
                <div className="user-landing-div mt-5 ms-5">
                  <span>
                    Explore a dynamic platform<br></br>
                    Where premium trading is at your fingertips.
                  </span>
                </div>
                <div className="text-center mt-5">
                  <button type="button" className="user-landing-button2">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="col-4">
                <img
                  src={carouselitem2}
                  className="userlanding-carouselitem3"
                ></img>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="mt-5 user-landing-background">
            <div className="row">
              <div className="col-8 mt-2">
                <div className="ms-5 mt-2">
                  <h1 className="mt-5 user-landing-h1">Curated For You</h1>
                </div>
                <div className="user-landing-div mt-5 ms-5">
                  <span>
                    Early bird discounts or special offers forcustoms<br></br>
                    brokers.
                  </span>
                </div>
                <div className="text-center mt-5">
                  <button type="button" className="user-landing-button2">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="col-4">
                <img
                  src={carouselitem3}
                  className="userlanding-carouselitem3"
                ></img>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <ViewProduct/>
          <div style={{ marginTop: "100px" }}>
        <div className="container mt-5">
          <div className="row container">
            <div className="col-6">
              <img
                src={landingdelivery}
                className="user-landing-landingdelivery"
              ></img>
            </div>
            <div className="col-6 container">
              <div className="text-center">
                <h4 className="user-landing-h4">Your Daily Essentials</h4>
              </div>
              <div className="container">
                <p className="user-landing-paragraph mt-5">
                  Dry Fruits Oil & Ghee Fabric Care Disposables Hair Care Skin
                  Care Battery & Electricals.a place where goods from other
                  places are bought and sold.We build the best-in-class tooling
                  for trade surveillance, financial markets Points laundering,
                  best execution, and analytics.<br></br>
                  <b>Save Money :</b> By engaging in trades onTrade Hub, you can
                  save significantly compared to buying new. Trade items you no
                  longer need for ones that better suit your current interests
                  or lifestyle, all while keeping your budget in check.<br></br>
                  <b>Reduce Waste :</b> Join a community committed to
                  sustainability. Every trade made on Trade Hub contributes to
                  reducing waste by extending the lifecycle of products. By
                  participating in exchanges rather than discarding or
                  purchasing new,you're making a positive impact on the
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 container">
        <div className="text-center">
          <h3 className="user-landing-find">Find Product</h3>
        </div>
        <div className="text-center mt-5">
          <p>Your gateway to a transparent,fair,and secure bater experience</p>
        </div>
        <div className="row container">
          <div className="col container mt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="userlanding-text">
                <Card.Text className="container userlanding-cardtext">
                  <b>Discover Your Desires</b>
                  <p>
                    Browse through a diverse array of products and services
                    offered by our community
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Img src={userlandingmen} className="userlanding-men-img" />
            </Card>
          </div>
          <div className="col container mt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="userlanding-text">
                <Card.Text>
                  <b>Real Exchanges</b>
                  <p className="mb-4 mt-3">
                    Once you’ve identified your desired items,our community-
                    driven platform connects
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Img src={userlandinghand} className="userlanding-men-img" />
            </Card>
          </div>
          <div className="col container mt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="userlanding-text">
                <Card.Text>
                  <b>Shop By Category</b>
                  <p className="mb-4 mt-3">
                    Vegetables & Fruits Bakery Treats Men Grooming Pooja
                    Utilities
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Img
                src={userlandingdelivery}
                className="userlanding-delivery-img"
              />
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="container text-center">
          <h4 className="user-landing-find" id="landing-about-us">
            About Us
          </h4>
        </div>
        <div className="container mt-5">
          {/* <img
            src={userlandingfamily}
            className="userlandingfamily container"
          ></img> */}
        </div>
        <div className="mt-5 mb-5">
          <p className="mb-5 user-landing-paragraph">
            In a world fueled by constant innovation and interconnectedness,
            Trade Hub stands out as a transformative force in how we perceive
            and engage with goods. It's more than just an app; it's a dynamic
            marketplace where every exchange tells a story of discovery,
            connection, and sustainability.<br></br>
            Here, users aren't just buyers and sellers; they're participants in
            a vibrant community driven by a shared passion for conscious
            consumption. Each listing represents a possibility—a chance to
            discover something new or pass along something cherished. It's a
            place where every transaction fosters relationships and fuels a
            cycle of creativity and resourcefulness.<br></br>
            At Trade Hub, simplicity meets innovation. Effortlessly browse
            through a curated collection of listings tailored to your interests
            and preferences. Engage in secure and meaningful interactions with
            fellow traders through our intuitive messaging system, ensuring
            every exchange is conducted with transparency and trust. Join us on
            this journey where every trade isn't just a transaction but a step
            towards a more connected, sustainable world. Welcome to Trade Hub,
            where connections are made, stories are shared, and possibilities
            are limitless.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
