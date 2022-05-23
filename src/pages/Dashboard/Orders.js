import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteMOdal from '../../components/Modal/DeleteMOdal';
import auth from '../../firebaseinit';

const Orders = () => {
  const [name, setName] = useState('')
  const [orderID, setOrderID] = useState('')
  const [deleteAlert, setDeleteAlert] = useState(false)
  const [load, setLoad] = useState(false)

  const [user, loading, userror] = useAuthState(auth);
  const accessToken = localStorage.getItem('accessToken')
  const [data, setData] = useState([]);

  // Delete Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=> {
    setLoad(true)
    fetch(`https://boiling-brushlands-60040.herokuapp.com/my-orders?email=${user?.email}`, {
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
  //  signOut(auth);
  //  localStorage.removeItem('accessToken')
 }
   
  })
  },[deleteAlert])


  const handleCancle = (id, name) => {
    setName(name)
    setOrderID(id);
    handleShow()
  }

  const deleteConfirm = () => {
    axios.delete(`http://localhost:5000/order/${orderID}`, {
      headers: {
        'authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      if (res.data.deletedCount === 1) {
        toast.success('Cancel Order Successfully!', {
          position: 'top-center'
        })
        setDeleteAlert(!deleteAlert);
        handleClose();
      }
    })
  }

  return (
    <>
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
                  <img width='50' src={o.img} alt={o.productName}/>
                </a>
              </td>
    
              <td className="product-name">
                <span>{o.productName}</span>
              </td>
    
              <td className="product-price">
                <span className="unit-amount">{o.quantity}</span>
              </td>
    
              <td className="product-subtotal">
                <span className="subtotal-amount">{o.payment ? 'Paid' : 'Not Paid'}</span>
              </td>
    
              <td className="product-subtotal">
                <span className="subtotal-amount">${o.price}</span>
              </td>
    
              <td className="trash">
              {!o.payment ? <Link to={`/dashboard/payment/${o._id}`} className="btn btn-sm btn-primary border-0">{`Pay $${o.price}`}</Link> : <button className="btn btn-xs bg-green-500 border-0 text-white">Payment done</button> }
              &nbsp;{!o.payment ? <label htmlFor="delete-confirm-modal" onClick={()=>handleCancle(o._id, o.productName)} className="btn btn-sm btn-danger border-0">Cancel</label> : '' }
              </td>
            </tr> )}
    
    
          </tbody>
        </table>
      </div>
    </form>
    </div> : <div className="cart-area recent-order">
    <h3 className='text-danger'>You have no order</h3>
    </div>}
    
    <DeleteMOdal name={name} show={show} handleClose={handleClose} deleteConfirm={deleteConfirm}  />
    </>
  );
};

export default Orders;