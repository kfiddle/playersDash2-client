import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { FaEllipsisH } from "react-icons/fa";

import * as Constants from "../../constants/Constants";

import useGet from "../../hooks/useGet";

import styles from "./GigModal.module.css";

const GigModal = ({ handleCloser, formType, fullscreen, gig }) => {
  const { id, title, date, venue, address, parking, dress } = gig;
  const [dressList, setDressList] = useState([]);
  const [repList, setRepList] = useState([]);

  const getter = useGet();

  useEffect(() => {
    const getDress = async () => {
      const fullDress = await getter(`dress-codes/${id}`);
      setDressList(fullDress);
    };

    const getPieces = async () => {
      const pieces = await getter(`library/${id}`);
      setRepList(pieces);
    };

    getDress();
    getPieces();
  }, []);

  const handleClose = () => handleCloser();
  const printTitle = formType[0].toUpperCase() + formType.slice(1);

  const displayablePieces =
    repList.length > 0
      ? repList.map((piece) => (
          <div key={repList.indexOf(piece)} className={styles.pieceDiv}>
            <span>{piece.title}</span> <span>{piece.composerLast}</span>
          </div>
        ))
      : "";

  return (
    <Modal show={true} fullscreen={fullscreen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{printTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.div}>
          <span className={styles.label}>VENUE: </span>
          {gig.venue}{" "}
        </div>
        <div className={styles.div}>
          <span className={styles.label}>ADDRESS: </span>
          {gig.address}{" "}
        </div>
        <div className={styles.div}>
          <span className={styles.label}>FULL DRESS: </span>
        </div>
        {dressList && <div className={styles.indentDiv}>{dressList[0]}</div>}
        <div className={styles.ellipseDiv}>
          <FaEllipsisH />
        </div>
        {dressList && <div className={styles.indentDiv}>{dressList[1]}</div>}
        <div className={styles.ellipseDiv}>
          <FaEllipsisH />
        </div>
        {repList && (
          <div className={styles.div}>
            <span className={styles.label}>PROGRAM: </span>
            <div className={styles.indentDiv}>{displayablePieces}</div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <h5>Close</h5>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GigModal;
