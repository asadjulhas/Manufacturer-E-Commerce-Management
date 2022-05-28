import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  
  return (
    <section className="sale-offer-area">
			<div className="container">
				<div className="row">
          <div className="col-lg-12">
          <div className="sale-offer-bg bg-2">
					<h5>Sale offer - <span>30% off</span></h5>
					<h3>All types of premium quality tools</h3>
					<Link to='/' className="default-btn">
						<i className="ri-shopping-cart-line"></i>
					Book a order
					</Link>
				</div>
          </div>
        </div>
			</div>
      <script>
        
      </script>
		</section>
  );
};

export default CTA;