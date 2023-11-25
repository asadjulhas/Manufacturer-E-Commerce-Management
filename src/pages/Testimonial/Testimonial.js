import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';
import './Testimonial.css'

const Testimonial = () => {
  const { data, isLoading } = useQuery(["testimonial"], () =>
    fetch("https://manufacturer.asadjulhas.com/reviews").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <LoadingSpinner className="homepage_products" />;
  }
  return (
    <section className="special-area pb-30 testimonial_area">
			<div className="container">
        <div className="section-title mt-5">
							<h2>Reviews from our customers</h2>
						</div>
				<div className="row justify-content-center">
					
							{data?.map(r => 
              <div key={r._id} className="col-lg-4 col-md-6">
              <ul className="trending-product-list special-product-list">
                <li className="single-list">
								<img className='client_img' src={r.img} alt={r.name}/>

								<div className="product-content">
									<span className="title">
                  {r.comments}
									</span>

									<ul className="products-price">
										<li>
                    {r.name}
											<span className='text-primary'> ({r.rating} star)</span>
										</li>
									</ul>
								</div>
							</li>
              </ul>
					</div>
                )}



					
				</div>
			</div>
		</section>
  );
};

export default Testimonial;