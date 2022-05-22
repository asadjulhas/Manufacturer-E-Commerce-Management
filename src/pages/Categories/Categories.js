import React from 'react';
import { Form } from 'react-bootstrap';
import './Categories.css'
import cat1 from '../../images/categories/c-1.png';
import cat2 from '../../images/categories/c-2.png';
import cat3 from '../../images/categories/c-3.png';
import cat4 from '../../images/categories/c-4.png';
import cat5 from '../../images/categories/c-5.png';
import cat6 from '../../images/categories/c-6.png';

const Categories = () => {
  return (
    <section className="popular-categories-area pt-54 pb-30">
			<div className="container">
				<div className="section-title">
					<h2>Popular Categories</h2>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="single-categories">
							<a href="product-details.html">
								<img src={cat1} alt="Image"/>
							</a>

							<h3>
								<a href="product-details.html">
									Power Tools
								</a>
							</h3>
							<span>15 Products</span>

							<a href="product-details" className="read-more">
								Shop Now
							</a>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-categories bg-eff5ff">
							<a href="product-details.html">
								<img src={cat2} alt="Image"/>
							</a>

							<h3>
								<a href="product-details.html">
									Machine Tools
								</a>
							</h3>
							<span>05 Products</span>

							<a href="product-details" className="read-more">
								Shop Now
							</a>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-categories bg-ebf1f5">
							<a href="product-details.html">
								<img src={cat3} alt="Image"/>
							</a>

							<h3>
								<a href="product-details.html">
									Hand Tools
								</a>
							</h3>
							<span>18 Products</span>

							<a href="product-details" className="read-more">
								Shop Now
							</a>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-categories bg-ebf9ea">
							<a href="product-details.html">
								<img src={cat4} alt="Image"/>
							</a>

							<h3>
								<a href="product-details.html">
									Cordless Tools
								</a>
							</h3>
							<span>19 Products</span>

							<a href="product-details" className="read-more">
								Shop Now
							</a>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-categories bg-fff8e5">
							<a href="product-details.html">
								<img src={cat5} alt="Image"/>
							</a>

							<h3>
								<a href="product-details.html">
									Welding &amp; Soldering
								</a>
							</h3>
							<span>04 Products</span>

							<a href="product-details" className="read-more">
								Shop Now
							</a>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-categories bg-f3f1ff">
							<a href="product-details.html">
								<img src={cat6} alt="Image"/>
							</a>

							<h3>
								<a href="product-details.html">
									Socket Wrenches
								</a>
							</h3>
							<span>12 Products</span>

							<a href="product-details" className="read-more">
								Shop Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Categories;