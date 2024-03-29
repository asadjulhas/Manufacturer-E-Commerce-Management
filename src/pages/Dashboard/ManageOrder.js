import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteMOdal from '../../components/Modal/DeleteMOdal';
import auth from '../../firebaseinit';
import PageTitle from '../../hooks/PageTitle';

const ManageOrder = () => {
  const [load, setLoad] = useState(false)
  const [user, loading, userror] = useAuthState(auth);
  const accessToken = localStorage.getItem('accessToken');
  const [data, setData] = useState([]);
  const [orderFetch, setOrderFetch] = useState(false)

   // Delete Modal
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  const [name, setName] = useState('')
  const [orderID, setOrderID] = useState('')

  useEffect(()=> {
    setLoad(true)
    fetch(`https://manufacturer.asadjulhas.com/orders`, {
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
  },[orderFetch])

  const handleShiped = (id) => {
    fetch(`https://manufacturer.asadjulhas.com/status/${id}`, {
    method: 'PUT',
    headers: {
      'authorization': `Bearer ${accessToken}`
    },
  })
  .then(ress => ress.json())
      .then(res => {
        if(res.acknowledged) {
        toast.success('Order status change to shipped', {
          position: 'top-center'
        })
        }
        setOrderFetch(!orderFetch)
      })
  }


  const handleCancle = (id, name) => {
    setName(name)
    setOrderID(id);
    handleShow()
  }
  
  const deleteConfirm = () => {
    axios.delete(`https://manufacturer.asadjulhas.com/order/${orderID}`, {
      headers: {
        'authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      if (res.data.deletedCount === 1) {
        toast.success('Cancel Order Successfully!', {
          position: 'top-center'
        })
        setOrderFetch(!orderFetch)
        handleClose();
      }
    })
  }


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
              <th className='d-none d-sm-block' scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User</th>
              <th scope="col">Quantity</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead> 
                              
          <tbody>
            {data?.map((o, index) =>  <tr key={o._id}>
              <td className="product-thumbnail d-none d-sm-block">
                {index+1}
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
                <span className="subtotal-amount">{o.payment ? <span className="text-success">Paid{o.status ? '(shipped)':''}</span> : <span className="text-danger">Not Paid</span>}</span>
              </td>
    
              <td className="product-subtotal">
                <span className="subtotal-amount">${o.price}</span>
              </td>
    
              <td className="trash">
              {!o.payment ? <Link to='' className="btn btn-sm btn-primary border-0">Unpaid</Link> : o.status ? <Link to='' className="btn btn-sm btn-info border-0 text-white">shipped</Link> : <Link to='' onClick={()=>handleShiped(o._id)} title='Click to shipped' className="btn btn-sm btn-success border-0 text-white">Pending</Link> }
              &nbsp;{!o.payment ? <label htmlFor="delete-confirm-modal" onClick={()=>handleCancle(o._id, o.productName)} className="btn btn-sm btn-danger border-0">Cancel</label> : '' }
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
  
    <DeleteMOdal name={name} show={show} handleClose={handleClose} deleteConfirm={deleteConfirm}  />
    </>
  );
};

export default ManageOrder;