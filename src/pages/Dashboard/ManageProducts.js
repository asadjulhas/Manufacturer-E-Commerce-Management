import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteMOdal from '../../components/Modal/DeleteMOdal';
import UpdateProduct from '../../components/Modal/UpdateProduct';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';
import auth from '../../firebaseinit';
import PageTitle from '../../hooks/PageTitle';

const ManageProducts = () => {
  const [name, setName] = useState('')
  const [productID, setProductID] = useState('')
  const [deleteAlert, setDeleteAlert] = useState(false)
  const accessToken = localStorage.getItem('accessToken')

   // Delete Modal
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   // Modal for  Update stock
  const [showStock, setShowStock] = useState(false);
  const handleCloseStock = () => setShowStock(false);
  const handleShowStock = () => setShowStock(true);
  const [product, setProduct] = useState([])

  const { data, isLoading, refetch } = useQuery(["products"], () =>
    fetch("https://boiling-brushlands-60040.herokuapp.com/product").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <LoadingSpinner className="homepage_products" />;
  }


  const handleCancle = (id, name) => {
    setName(name)
    setProductID(id);
    handleShow()
  }

  const deleteConfirm = () => {
    axios.delete(`http://localhost:5000/product/${productID}`, {
      headers: {
        'authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      if (res.data.deletedCount === 1) {
        toast.success('Product delete Successfully!', {
          position: 'top-center'
        })
        refetch()
        setDeleteAlert(!deleteAlert);
        handleClose();
      }
    })
  }

  const handleEditForm = (product) => {
    handleShowStock();
    setProduct(product)
  }

  return (
    <>
    <PageTitle title='Manage orders'/>
    {data.length > 0 ?
       <div className="cart-area recent-order">
    <h3>All the products</h3>
    <form className="cart-controller mb-0">
      <div className="cart-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Price</th>
              <th scope="col">MinOrder</th>
              <th scope="col">stock</th>
              <th scope="col">type</th>
              <th scope="col">Action</th>
            </tr>
          </thead> 
                              
          <tbody>
            {data.map(o =>  
              <tr key={o._id}>
              <td className="product-thumbnail">
                <a>
                  <img width='30' src={o.img} alt={o.name}/>
                </a>
              </td>
    
              <td className="product-name">
                <span>{o.name.slice(0, 20)}</span>
              </td>
    
              <td className="product-name">
                <span>${o.price}</span>
              </td>
    
              <td className="product-price">
                <span className="unit-amount">{o.minOrder}</span>
              </td>
    
              <td className="product-price">
                <span className="unit-amount">{o.stock}</span>
              </td>
    
              <td className="product-subtotal">
              <span className="unit-amount">{o.type}</span>
              </td>
    
    
              <td className="trash">
              <Link to='' onClick={()=>handleEditForm(o)} className="btn btn-sm btn-primary">
                Edit
              </Link>&nbsp;
              <label htmlFor="delete-confirm-modal" onClick={()=>handleCancle(o._id, o.name)} className="btn btn-sm btn-danger border-0">Delete</label> 
              </td>
    <UpdateProduct refetch={refetch} product={product} showStock={showStock} handleCloseStock={handleCloseStock} />
              </tr>
              
            
            
            
            )}
    
    
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

export default ManageProducts;