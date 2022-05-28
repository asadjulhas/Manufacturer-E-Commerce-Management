import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Testimonial.css'

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://boiling-brushlands-60040.herokuapp.com/reviews')
    .then(res => {
      setReviews(res.data)
    })
  },[])

  console.log(reviews)
  return (
    <section className="special-area pb-30 testimonial_area">
			<div className="container">
        <div className="section-title mt-5">
							<h2>Reviews from our customers</h2>
						</div>
				<div className="row justify-content-center">
					
							{reviews.map(r => 
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