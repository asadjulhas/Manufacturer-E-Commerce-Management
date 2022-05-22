import React from 'react';
import './Products.css'
import product1 from '../../images/products/product-1.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';

const Products = () => {
  const {data, isLoading} = useQuery(['products'], () => fetch('https://boiling-brushlands-60040.herokuapp.com/product')
  .then(res => res.json())
  )
if(isLoading) {
 return  <LoadingSpinner className='homepage_products'/>
}
  return (
    <section className="featured-products-area ptb-54">
			<div className="container">
				<div className="section-title">
					<h2>Featured Products</h2>
				</div>

				<div className="row">

					{data?.map(p =>  <div key={p._id} className="col-xl-3 col-sm-6">
						<div className="single-products">
							<div className="product-img">
									<img src={p.img} alt="Image"/>

								<span className="hot new">New</span>
							</div>
	
							<div className="product-content">
								<span className="title">
                {p.name}
								</span>
	<p className='info'>{p.description}.</p>
								<ul className="products-price">
                <li>
                <span>Minimum order</span> {p.minOrder}, &nbsp;
                <span>In Stock</span> {p.stock} 
									</li>
								</ul>
	
								<ul className="products-price">
									<li>
										${p.price} <del>${Math.ceil(p.price * .9)}</del> per unit
									</li>
								</ul>

                <ul className="products-cart-wish-view">
									<li>
										<Link to='/' className="default-btn">
                    <FontAwesomeIcon className="cart_icon" icon={faCartPlus} />&nbsp;
											Book your order
										</Link>
									</li>
								</ul>
    
							</div>
						</div>
					</div> )}


				</div>
			</div>
		</section>
  );
};

export default Products;