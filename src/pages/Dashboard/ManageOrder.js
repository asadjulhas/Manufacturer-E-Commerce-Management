import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebaseinit';
import PageTitle from '../../hooks/PageTitle';

const ManageOrder = () => {
  const [load, setLoad] = useState(false)

  const [user, loading, userror] = useAuthState(auth);
  const accessToken = localStorage.getItem('accessToken')
  const [data, setData] = useState([]);


  useEffect(()=> {
    setLoad(true)
    fetch(`http://localhost:5000/orders`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  }) 
  .then(res => {
  if(res.status === 401 || res.status === 403) {
    toast.error('Forbidden access', {
      position: "top-center",
    })
  }
   return res.json()
  })
  .then(data => {
    
 if(!data.Message) {
  setData(data);
  setLoad(false)
 } else {
   signOut(auth);
   localStorage.removeItem('accessToken')
 }
   
  })
  },[])

  if(load) {
    return (
      <div className="spinner">
      <Spinner animation="grow" variant="danger" />
     </div>
    )
  }

  return (
    <>
    <PageTitle title='Manage orders'/>
    {data.length > 0 ?
       <div className="cart-area recent-order">
    <h3>Recent Order</h3>
    <form className="cart-controller mb-0">
      <div className="cart-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">User</th>
              <th scope="col">Quantity</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead> 
                              
          <tbody>
            {data.map(o =>  <tr key={o._id}>
              <td className="product-thumbnail">
                <a href="product-details.html">
                  <img width='30' src={o.img} alt={o.productName}/>
                </a>
              </td>
    
              <td className="product-name">
                <span>{o.productName.slice(0, 20)}</span>
              </td>
    
              <td className="product-name">
                <span>{o.email}</span>
              </td>
    
              <td className="product-price">
                <span className="unit-amount">{o.quantity}</span>
              </td>
    
              <td className="product-subtotal">
                <span className="subtotal-amount">{o.payment ? <span className="text-success">Paid</span> : 'Not Paid'}</span>
              </td>
    
              <td className="product-subtotal">
                <span className="subtotal-amount">${o.price}</span>
              </td>
    
              <td className="trash">
              {!o.payment ? <Link to='' className="btn btn-sm btn-primary border-0">Unpaid</Link> : <button className="btn btn-sm btn-success border-0 text-white" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on top">Pending</button> }
              </td>
            </tr> )}
    
    
          </tbody>
        </table>
      </div>
    </form>
    </div> : <div className="cart-area recent-order text-center mt-5">
    <h3 className='text-danger mb-3'>You have no order</h3>
    <Link to='/' className="default-btn two">
							Place a order
						</Link>
    </div>}
  
    </>
  );
};

export default ManageOrder;