import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebaseinit";

const Profile = () => {
  const [lgUser, loading, error] = useAuthState(auth);

  
  // Modal handle
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Form alert
  const [formAlert, setFormAlert] = useState("");
  const accessToken = localStorage.getItem('accessToken')

  const {data, isLoading, refetch} = useQuery(['user'], () => fetch(`https://boiling-brushlands-60040.herokuapp.com/user/${lgUser.email}`, {
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

  const oldPhone =  data.phone;
  const oldAddress =  data.address;
  const oldLinkedin =  data.linkedin;


  const handleProfileForm = () => {
    setShow(true);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const email = lgUser.email;
    const phone = e.target.phone.value || oldPhone;
    const address = e.target.address.value || oldAddress;
    const linkedin = e.target.linkedin.value || oldLinkedin;

    const data = {email, phone, address, linkedin };
    axios.post("https://boiling-brushlands-60040.herokuapp.com/update-profile", data, {
      headers: {
        'authorization': `Bearer ${accessToken}`
      }
    }).then((res) => {
      if (res.data.acknowledged) {
        toast.success(`Profile update successfully!`, {
          position: "top-center",
        });
        refetch();
      }
      e.target.reset();
      handleClose();
    });
  };
  const img = lgUser.photoURL || "https://templates.envytheme.com/ehay/default/assets/images/profile-img.jpg";

  return (
    <>
      <div className="profile-bar">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="profile-info">
              <img src={img} alt={lgUser.displayName} />

              <h3>
                <a>{lgUser.displayName}</a>
              </h3>
              <a href="mailto:contact@ehay.com">{lgUser.email}</a>
              {data.phone ? <a>{data.phone}</a> : ''}
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="edit-profiles">
              <button onClick={handleProfileForm} className="default-btn border-0">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {data.phone || data.address ?
      <div className="billing-address-bar">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6">
            <h3>Billing Address</h3>
            <ul>
              <li>{lgUser.displayName}</li>
              <li>
                <span>Address:</span>
                {data.address ? <a>{data.address}</a> : ''}
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <ul>
              <li>
                <span>Phone:</span>
                {data.phone ? <a>{data.phone}</a> : ''}
              </li>
              <li>
                <span>Linkedin:</span>
                {data.linkedin ? <a>{data.linkedin}</a> : ''}
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="edit-address">
              <button onClick={handleProfileForm} className="default-btn">
                Edit Address
              </button>
            </div>
          </div>
        </div>
      </div> : '' }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="update_profile" onSubmit={handleUpdateProfile}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                required
                name="name"
                readOnly
                disabled
                type="text"
                placeholder={lgUser.displayName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                required
                name="email"
                readOnly
                disabled
                type="text"
                placeholder={lgUser.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="address"
                placeholder={data.address ? data.address : 'Type your address'}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="phone"
                placeholder={data.phone ? data.phone : 'Type your phone'}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="linkedin"
                placeholder={data.linkedin ? data.linkedin : 'Linkedin profile url'}
                type="text"
              />
            </Form.Group>

            <p className="text-danger">{formAlert}</p>
            <Button className="btn-style2" variant="primary" type="submit">
              Update Profile
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
