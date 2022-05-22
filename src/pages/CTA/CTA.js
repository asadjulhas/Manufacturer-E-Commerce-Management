import React from 'react';
import './CTA.css'

const CTA = () => {
  return (
    <section className="sale-offer-area">
			<div className="container">
				<div className="sale-offer-bg bg-2">
					<h5>Sale offer - <span>30% off</span></h5>
					<h3>All types of premium quality tools</h3>
					<a href="" className="default-btn">
						<i className="ri-shopping-cart-line"></i>
					Book a order
					</a>
				</div>
			</div>
		</section>
  );
};

export default CTA;