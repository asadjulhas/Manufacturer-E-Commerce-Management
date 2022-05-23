import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useQueryErrorResetBoundary } from 'react-query';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51L1cHwAAX8jorUm97rVngApkylkvtoBRz8n8zNSHnNp5eSZ1CecJBkITNnU3OA5EDnTY4VQMF1QDyoDNgPHTL7Yk00hXgBEurM');
const Payment = () => {
  const {id} = useParams();

  const accessToken = localStorage.getItem('accessToken')
  const {data, isLoading, refetch} = useQueryErrorResetBoundary([`booking-${id}`], () => fetch(`https://sheltered-beyond-38485.herokuapp.com/order/${id}`, {
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
    <div>
      payment
    </div>
  );
};

export default Payment;