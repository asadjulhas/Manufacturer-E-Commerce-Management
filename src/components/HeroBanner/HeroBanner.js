import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroBanner.css";
import slider1 from "../../images/slider/s-1.jpg";
import slider2 from "../../images/slider/s-2.jpg";
import slider3 from "../../images/slider/s-3.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const HeroBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <span>Special Offer</span>
            <h3>Get The Best Collection Of Hand Tools Right</h3>
            <p>Free shipping & discount 40% on products</p>
            <div className="banner-btn">
              <Link to="/" className="default-btn">
              <FontAwesomeIcon className="cart_icon" icon={faCartPlus} />
                Shop Now
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <span>Special Offer</span>
            <h3>Best Collection For Home Decoration 2021</h3>
            <p>Free shipping & discount 40% on products</p><div className="banner-btn">
              <Link to="/" className="default-btn">
              <FontAwesomeIcon className="cart_icon" icon={faCartPlus} />
                Shop Now
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption>
            <span>Special Offer</span>
            <h3>All Types Of Premium Quality Tools</h3>
            <p>Free shipping & discount 40% on products</p><div className="banner-btn">
              <Link to="/" className="default-btn">
              <FontAwesomeIcon className="cart_icon" icon={faCartPlus} />
                Shop Now
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
