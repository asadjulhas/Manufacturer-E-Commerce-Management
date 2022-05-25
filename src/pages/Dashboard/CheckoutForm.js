import { jsonEval } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import checkMark from '../../images/check-mark.png'

const CheckoutForm = ({service}) => {
  const {price: amount, clientName, email, address, phone, _id} = service;
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const [loaderBtn, setLoader] = useState(false)
  const elements = useElements();
  const [carderror, setCarderror] = useState('')
  const [success, setSuccess] = useState('')
  const [tnID, setTnID] = useState('')
  const accessToken = localStorage.getItem('accessToken')
  const [order, serOrder] = useState()

   // Check Payment status 
   useEffect(() => {
    fetch(`https://boiling-brushlands-60040.herokuapp.com/order/${_id}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  })
.then(res => res.json())
.then(data => {
  
console.log(data)
  if (data.payment) {
    setSuccess(`Your Payment is Completed!`);
    setTnID(data.transactionId);
  }
})
  },[])
  useEffect(() => {
    if(!tnID) {
      fetch('https://boiling-brushlands-60040.herokuapp.com/create-payment-intent', {
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
  setLoader(false)
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
        name: clientName,
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

  fetch(`https://boiling-brushlands-60040.herokuapp.com/payment/${_id}`, {
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
    <div className='pt-3'>
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
      <button className="btn btn-sm btn-primary my-3"  type="submit" disabled={!stripe || !clientSecret}>
      {loaderBtn ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;&nbsp;</> : '' }  
        Pay Now ${amount}
        </button>
      {carderror && <p className='text-danger mb-5'>{carderror}</p>}
    </form>}
      {success && <>
        <div className="order-area">
			<div className="container">
				<div className="order-content">
					<img src={checkMark} alt="Image"/>
					<h3>Thank you for your purchase</h3>

				</div>

				<div className="item-order">
					<div className="row">

						<div className="col-lg-12 col-md-6">
							<ul className="order-item-address">
								<li className="addresss">
                Transaction ID: <br/>
									{tnID}
								</li>
		
								<li>
									<span>Name:</span>
									{clientName}
								</li>
								<li>
									<span>Address:</span>
									{address}
								</li>
								<li>
									<span>Phone:</span>
									<a href={`tel:${phone}`}>{phone}</a>
								</li>
								<li>
									<span>Email:</span>
                  <a href={`mailto::${email}`}>{email}</a>
								</li>
							</ul>
						</div>
					</div>
          
					<Link to='/' className="default-btn my-4">
						Continue Shopping
					</Link>
				</div>
			</div>
		</div>
      
      </>}
    </div>
  );
};

export default CheckoutForm;