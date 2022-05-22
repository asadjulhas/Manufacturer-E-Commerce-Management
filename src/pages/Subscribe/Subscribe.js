import React from 'react';
import { Link } from 'react-router-dom';
import './Subscribe.css'

const Subscribe = () => {
  return (
    <section className="subscribe-area pt-54 pb-30">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-2">
						<div className="logo">
							<Link className='brand_footer' to='/'>BORAK</Link>
						</div>
					</div>

					<div className="col-lg-5">
						<div className="subscribe-content">
							<span>30% Discount For Your First Order</span>
							<h3>Subscribe To Our Newsletter</h3>
							<p>Subscribe to the newsletter for all the latest updates</p>
						</div>
					</div>

					<div className="col-lg-5">
						<form className="newsletter-form" data-toggle="validator">
							<input required type="email" className="form-control" placeholder="Your email address" name="EMAIL"/>

							<button className="submit-btn disabled" type="submit">
								Subscribe
							</button>

							<div id="validator-newsletter" className="form-result"></div>
						</form>	
					</div>
				</div>
			</div>
		</section>
  );
};

export default Subscribe;