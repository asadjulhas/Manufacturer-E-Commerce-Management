import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faLocation, faPhone, faFacebookF } from '@fortawesome/free-solid-svg-icons'
import cars from '../../../images/cards.png';
import apple from '../../../images/app-store.png';
import google from '../../../images/google-play.png';

const Footer = () => {
  return (
    <div>
    <div className="footer-area pt-54 pb-30">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3>Quick Information</h3>

							<ul className="info-list">
								<li>
									<i className="ri-map-pin-line"></i>
                  <FontAwesomeIcon
                          className="cart_icon"
                          icon={faLocation}
                        />
									2491 Reel Avenue Albuquerque, NM
								</li>
								<li>
                <FontAwesomeIcon
                          className="cart_icon"
                          icon={faPhone}
                        />
									<a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
								</li>
								<li>
                <FontAwesomeIcon
                          className="cart_icon"
                          icon={faEnvelope}
                        />
									<a href="mailto:ehay@example.com">ehay@example.com</a>
								</li>
								<li>
                <FontAwesomeIcon
                          className="cart_icon"
                          icon={faClock}  
                        />
									Mon-Sat 8:00 AM - 8:00 PM
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3>Information</h3>

							<ul className="import-link">
								<li>
									<a href="about.html">About</a>
								</li>
								<li>
									<a href="order-tracking.html">Order Tracking</a>
								</li>
								<li>
									<a href="terms-conditions.html">Terms &amp; Conditions</a>
								</li>
								<li>
									<a href="store-location.html">Store Location</a>
								</li>
								<li>
									<a href="privacy-policy.html">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3>Customer Service</h3>

							<ul className="import-link">
								<li>
									<a href="faq.html">Help Center</a>
								</li>
								<li>
									<a href="products.html">Products</a>
								</li>
								<li>
									<a href="terms-conditions.html">Money-back Guarantee!</a>
								</li>
								<li>
									<a href="blog.html">Blog</a>
								</li>
								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3>Download App On Mobile</h3>
							<p>30% discount on your first order</p>

							<ul className="app-btn">
								<li>
									<a href="https://www.apple.com/store" target="_blank">
										<img src={apple} alt="Image"/>
									</a>
								</li>
								<li>
									<a href="https://play.google.com/store/apps" target="_blank">
										<img src={google} alt="Image"/>
									</a>
								</li>
							</ul>

							<span className="payment">We Accept Payment Via</span>

							<ul className="payment-option">
								<li>
									<img src={cars} alt="Image"/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    <div className="copy-right-area">
			<div className="container">
				<p>
					Copyright © 2022 Borak. Develop By  
					<span> Asad Julhas</span>
				</p>
			</div>
		</div>
		</div>
  );
};

export default Footer;