import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CTA.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const CTA = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://boiling-brushlands-60040.herokuapp.com/reviews')
    .then(res => {
      setReviews(res.data)
    })
  },[])
  
  return (
    <section className="sale-offer-area">
			<div className="container">
				<div className="row">
          <div className="col-md-3">
          <div>  
          <div className='container-fluid' >      
           <div className="row" style={{marginBottom: "5px"}}>      
           <div className="col-sm-12 btn btn-info reviewBanner text-white">      
          Reviews from our clients 
           </div>      
           </div>  
       </div>  
       <div className='container-fluid' >            
        <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
          {reviews.map(r => 
          <div className='text-center' key={r._id}>
            <img className="img" src={r.img} alt='' /> <br />
            <h4>{r.name}</h4>
            <p>{r.comments}</p>
            <span className='rating'>{r.rating}.00 start</span>
          </div> )}
      </OwlCarousel>  
      </div>  
  
      </div>
          </div>
          <div className="col-md-9">
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