import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteMOdal = ({name, deleteConfirm, handleClose, show}) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fs-5'>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want to cancle this order?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteConfirm}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default DeleteMOdal;