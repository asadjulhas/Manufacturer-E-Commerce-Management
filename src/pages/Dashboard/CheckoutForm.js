import { jsonEval } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import checkMark from '../../images/check-mark.png'

const CheckoutForm = ({service}) => {
  const {price: amount, userName, email, serviceId, _id} = service;
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const [loader, setLoader] = useState(false)
  const elements = useElements();
  const [carderror, setCarderror] = useState('')
  const [success, setSuccess] = useState('')
  const [tnID, setTnID] = useState('')
  const accessToken = localStorage.getItem('accessToken')

   // Check Payment status 
   useEffect(() => {
    fetch(`http://localhost:4000/order/${_id}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  })
.then(res => res.json())
.then(data => {
  if (data.payment) {
    setSuccess(`Your Payment is Completed!`);
    setTnID(data.transactionId);
  }
})
  },[])
  useEffect(() => {
    if(!tnID) {
      fetch('http://localhost:4000/create-payment-intent', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${accessToken}`

      },
      body: JSON.stringify({amount})
    })
    .then(res => res.json())
    .then(data => {
      if(data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    })
    }
  },[])

   


  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault();
    if(!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
 // Use your card Element with other Stripe.js APIs
 const {error, paymentMethod} = await stripe.createPaymentMethod({
  type: 'card',
  card,
});

if (error) {
  setCarderror(error.message);
} else {
  setCarderror('')
}
    
// Confirm payment

const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
   clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: userName,
        email: email

      },
    },
  },
);

if(intentError) {
  setCarderror(intentError.message);
  
  setSuccess('')
} else{
  setCarderror('')
  setSuccess(`Your Payment is Completed!`);
  setTnID(paymentIntent.id);

  fetch(`http://localhost:4000/payment/${_id}`, {
    method: 'PUT',
    headers: {
      "content-type": "application/json",
      'authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({paymentIntent})
  })
  .then(ress => ress.json())
      .then(res => {
        // console.log(res)
      })


}

  };

  return (
    <div className='pt-5'>
     {!success && <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className={`btn btn-sm btn-primary my-5 ${loader ? 'loading' : ''}`}  type="submit" disabled={!stripe || !clientSecret}>Pay Now ${amount}</button>
      {carderror && <p className='text-red-500 mb-5'>{carderror}</p>}
    </form>}
      {success && <>
        <div class="order-area">
			<div class="container">
				<div class="order-content">
					<img src={checkMark} alt="Image"/>
					<h3>Thank you for your purchase</h3>
					<span>Your Transaction ID: {tnID}</span>
					<p>We'll email you an order confirmation with details and tracking info</p>

					<a href="products.html" class="default-btn">
						Continue Shopping
					</a>
				</div>

				<div class="item-order">
					<div class="row">

						<div class="col-lg-12 col-md-6">
							<ul class="order-item-address">
								<li class="addresss">
									<h3>Billing Address</h3>
									<span>Doreen McCool</span>
								</li>
								<li>
									<span>Address:</span>
									2491 Reel Avenue Albuquerque, NM 4542
								</li>
								<li>
									<span>Phone:</span>
									<a href="tel:+1-(514)-321-4566">+1 (514) 321-4566,</a>
									<a href="tel:+1-(514)-321-4567">+1 (514) 321-4567</a>
								</li>
								<li>
									<span>Email:</span>
									<a href="mailto:ehay@example.com">
										ehay@example.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
      
      </>}
    </div>
  );
};

export default CheckoutForm;