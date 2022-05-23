import React from 'react';
import './Payment.css'
import { loadStripe } from '@stripe/stripe-js';
import { Spinner } from 'react-bootstrap';
import { useQuery, useQueryErrorResetBoundary } from 'react-query';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import PageTitle from '../../hooks/PageTitle';


const stripePromise = loadStripe('pk_test_51L1cHwAAX8jorUm97rVngApkylkvtoBRz8n8zNSHnNp5eSZ1CecJBkITNnU3OA5EDnTY4VQMF1QDyoDNgPHTL7Yk00hXgBEurM');
const Payment = () => {
  const {id} = useParams();
  const accessToken = localStorage.getItem('accessToken')
  const {data, isLoading, refetch} = useQuery([`order-${id}`], () => fetch(`http://localhost:5000/order/${id}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  })
.then(res => res.json())
)
if(isLoading) {
  return (
    <div className="spinner">
      <Spinner animation="grow" variant="danger" />
     </div>
  )
}
  return (
    <section className="checkout-area">
      <PageTitle title='Payment'/>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="order-details ml-15">
							<div className="cart-totals mb-0">
								{!data.payment ?	<h3 className='fs-6'>{data.productName}</h3> : '' }
								{!data.payment ? <ul className='mb-4'>
									<li>Quantity <span>{data.quantity} pieces</span></li>
									<li>Per piece <span>${data.price / data.quantity}</span></li>
									<li>Total <span>${data.price}</span></li>
									<li><b>Payable Total</b> <span><b>${data.price}</b></span></li>
								</ul> : ''}

								<div className="faq-accordion bg-light">
                <Elements stripe={stripePromise}>
    <CheckoutForm service={data} />
  </Elements>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Payment;