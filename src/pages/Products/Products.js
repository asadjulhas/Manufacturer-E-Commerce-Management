import React from 'react';
import './Products.css'
import product1 from '../../images/products/product-1.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
  return (
    <section className="featured-products-area ptb-54">
			<div className="container">
				<div className="section-title text-center">
					<h2>Featured Products</h2>
				</div>

				<div className="row justify-content-center">
					<div className="col-xl-3 col-sm-6">
						<div className="single-products">
							<div className="product-img">
									<img src={product1} alt="Image"/>

								<span className="hot new">New</span>
							</div>
	
							<div className="product-content">
								<span className="title">
									Professional Cordless Drill Power Tools Competitive
								</span>
	
								<ul className="products-rating">
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<i className="ri-star-fill"></i>
									</li>
									<li>
										<span>
											(03 Review)
										</span>
									</li>
								</ul>
	
								<ul className="products-price">
									<li>
										$130.00
										<del>$250.00</del>
									</li>
									<li>
										<span>In Stock</span>
									</li>
								</ul>

                <ul className="products-cart-wish-view">
									<li>
										<Link to='/' className="default-btn">
                    <FontAwesomeIcon className="cart_icon" icon={faCartPlus} />
											Add To Cart
										</Link>
									</li>
								</ul>
    
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
  );
};

export default Products;