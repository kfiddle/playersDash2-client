import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import * as Constants from "../../constants/Constants";

const MyModal = ({ handleCloser, formType, fullscreen }) => {
  const [show, setShow] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleClose = () => handleCloser();

  const submitClicker = () => setSubmitClicked(true);

  const title = formType[0].toUpperCase() + formType.slice(1);

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I WILL BE A MODAL BODY
        {/* {formType === Constants.GIG_OPTIONS && (
            <AddPlayerForm
              submitClicked={submitClicked}
              setSubmitClicked={setSubmitClicked}
              handleClose={handleClose}
            />
          )} */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <h5>Close</h5>
        </Button>

        <Button variant="primary" onClick={submitClicker}>
          <h5>Submit</h5>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
