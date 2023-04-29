import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useGet from "../../hooks/useGet";

import styles from "./CancelModal.module.css";

const CancelModal = ({ handleCloser }) => {
  const getter = useGet();

  const handleClose = () => handleCloser();

  const handleCancel = async () => {
    const testing = await getter(`players/clear-row`);
  };

  return (
    <Modal show={true} fullscreen={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cancel Gig</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you must cancel your participation in this gig? Clicking
        CANCEL below will notify the manager of your decision, and you will be
        replaced.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCancel}>
          <h5>CANCEL</h5>
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          <h5>Close</h5>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelModal;
