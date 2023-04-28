import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import * as Constants from "../../constants/Constants";

import useGet from "../../hooks/useGet";

const MyModal = ({ handleCloser, formType, fullscreen, gig }) => {
  const [show, setShow] = useState(true);
  const { id, title, date, venue, address, parking, dress } = gig;

  const getter = useGet();

  useEffect(() => {
    const getDress = async () => {
      const fullDress = await getter(`dress-codes/${id}`);
    };

    getDress();
  });

  const handleClose = () => handleCloser();
  const printTitle = formType[0].toUpperCase() + formType.slice(1);

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{printTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Venue: {gig.venue} </div>
        <div>Address: {gig.address} </div>
        <div>Full Dress: {gig.dress}</div>

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
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
