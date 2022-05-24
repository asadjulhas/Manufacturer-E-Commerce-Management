import axios from "axios";
import './ProductDetails.css'
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebaseinit";
import PageTitle from "../../hooks/PageTitle";
import review from "../../images/review.png";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const ProductDetails = () => {
  const toOrderPage = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const accessToken = localStorage.getItem('accessToken')
  const [load, setLoad] = useState(false);
  const [disable, setDisable] = useState(false);
  const [total, setTotal] = useState('')

  // Modal handle
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Form alert
  const [formAlert, setFormAlert] = useState('');

  useEffect(() => {
    setLoad(true)
    axios(`https://boiling-brushlands-60040.herokuapp.com/product/${id}`,{
      headers: {
        'authorization': `Bearer ${accessToken}`
      }
    })
    .then((res) => {
      setProduct(res.data);
      setLoad(false)
    });
  }, []);

  if(load) {
    return (
      <div className="spinner">
      <Spinner animation="grow" variant="danger" />
     </div>
    )
  }

  const handleOrderForm = () => {
    setShow(true)
  }

  const handleQuentity = (e) => {
    const quantity = parseInt(e.target.value)
    if(quantity <  parseInt(product.minOrder)) {
      setDisable(true)
      setFormAlert(`Quantity can't less than ${parseInt(product.minOrder)}`);
      setTotal(0);
      return;
    } else {
      setDisable(false)
      setFormAlert('')
      setTotal(quantity * product.price)
    }

    if(quantity > parseInt(product.stock)) {
      setDisable(true)
      setFormAlert(`Quantity can't more than ${parseInt(product.stock)}`)
      setTotal(0)
    } else {
      setDisable(false)
      setFormAlert('');
      setTotal(quantity * product.price)
    }

  }

  const handleOrder = (e) => {
    e.preventDefault();

    const clientName = user?.displayName;
    const email = user?.email;
    const productName = product.name;
    const productId = product._id;
    const quantity = e.target.quantity.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const price = quantity * product.price;
    const payment = false;
    const img = product.img;

    if(quantity < parseInt(product.minOrder)) {
      setFormAlert(`Quantity can't less than ${parseInt(product.minOrder)}`)
      return;
    } else {
      setFormAlert('')
    }

    if(quantity > parseInt(product.stock)) {
      setFormAlert(`Quantity can't more than ${parseInt(product.stock)}`)
      return;
    } else {
      setFormAlert('')
    }

    const data = {clientName, email, productName, productId, quantity, phone, address, payment, price, img};

    axios.post('https://boiling-brushlands-60040.herokuapp.com/order', data)
    .then(res => {
      if(res.data.acknowledged) {
        toast.success(`Your order successfully placed!`, {
          position: 'top-center'
        })
        toOrderPage('/dashboard/order')
      };
      e.target.reset();
      handleClose();
    })
  }
  return (
    <section className="product-details-area ptb-54">
      <PageTitle title='Book a Order'/>
      <div className="container">
        <div className="row align-items-center">
          <div className="product-view-one">
            <div className="modal-content p-0">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="product-view-one-image">
                    <div className="item">
                      <img src={product.img} alt={product.name} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="product-content ml-15">
                    <h3>{product.name}</h3>

                    <div className="product-review">
                      <div className="rating">
                        <img src={review} alt="review" />
                      </div>
                    </div>

                    <div className="price">
                      <span className="new-price">
                        ${product.price}{" "}
                        <del>${Math.ceil(product.price * 1.3)}</del>
                      </span>
                      <span className="in-stock">
                        In Stock ({parseInt(product.stock)} Items)
                      </span>
                    </div>

                    <ul className="product-info">
                      <li>
                        <p>{product.description}</p>
                      </li>
                      <li>
                        <span>Minimum order:</span> {parseInt(product.minOrder)}
                      </li>
                      <li>
                        <span>Type:</span> {product.type}
                      </li>
                    </ul>

                    <div className="product-add-to-cart">

                      <button onClick={handleOrderForm} className="default-btn border-0">
                        <i className="ri-shopping-cart-line"></i>
                        Book a order now
                      </button>
                    </div>

                    <div className="share-this-product">
                      <ul>
                        <li>
                          <span>Share</span>
                        </li>
                        <li>
                          <a title="Facebook" href="https://www.facebook.com/" target="_blank">
                            <i className="ri-facebook-fill">f</i>
                          </a>
                        </li>
                        <li>
                          <a title="Instagram" href="https://www.instagram.com/" target="_blank">
                            <i className="ri-instagram-line">i</i>
                          </a>
                        </li>
                        <li>
                          <a title="Linkedin" href="https://www.linkedin.com/" target="_blank">
                            <i className="ri-linkedin-fill">l</i>
                          </a>
                        </li>
                        <li>
                          <a title="Twitter" href="https://twitter.com/" target="_blank">
                            <i className="ri-twitter-fill">t</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Book a order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleOrder}>

  <Form.Group className="mb-3" controlId="formBasicPassword"> 
  <Form.Label>Stock <span className="higlite">{parseInt(product.stock)},</span> <span>Minimum order:</span> <span className="higlite">{parseInt(product.minOrder)}</span></Form.Label>
    <Form.Control required name='name' readOnly disabled type="text" value={user.displayName} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='email' readOnly disabled type="text" value={user.email} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onChange={handleQuentity} required name='quantity' type="number" placeholder="Type your quantity" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='phone' type="text" placeholder="Your phone" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='address' type="text" placeholder="Your address" />
  </Form.Group>
  
  <p className='text-danger'>{formAlert}</p>
  
  <div className="d-flex justify-content-between">
  <Button disabled={disable} className='btn-style2' variant="primary" type="submit">
    Place orderrr
  </Button> {total > 0 ? <p className='text-success'>Total: <b>${total}</b>  </p> : ''}
  </div>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </section>
  );
};

export default ProductDetails;
