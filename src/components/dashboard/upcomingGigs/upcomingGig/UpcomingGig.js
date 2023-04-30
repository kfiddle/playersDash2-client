import { Fragment, useState } from "react";

import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import GigModal from "../../../UI/GigModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { GIG_DETAILS } from "../../../../constants/Constants";

import styles from "./UpcomingGig.module.css";
import CancelModal from "../../../UI/CancelModal";

const UpcomingGig = ({ gig, setRefreshGigs }) => {
  const { id, title, date, venue, address, parking, dress } = gig;
  const [detailsClicked, setDetailsClicked] = useState(false);
  const [cancelClicked, setCancelClicked] = useState(false);

  const accordStyles = {
    background: "#3A4E60",
    color: "#aeaaaa",
    // margin: "0.5rem",
    fontWeight: "700",
  };

  const cardStyles = {
    background: "#3A4E60",
    color: "#aeaaaa",
    margin: "0.25rem",
    fontWeight: "700",
  };

  const detailsClicker = () => {
    setDetailsClicked(true);
  };

  const cancelClicker = () => {
    setCancelClicked(true);
  };

  const handleCloser = () => {
    setRefreshGigs(true);
    setDetailsClicked(false);
    setCancelClicked(false);
  };

  return (
    <Fragment>
      <Card sx={cardStyles}>
        <Accordion sx={accordStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={styles.summaryDiv}>
              <span>{title}</span>
              <span>{date}</span>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordStyles}>
            <div>{venue}</div>
            <div>DRESS: {dress}</div>
            <div>PARKING: {parking}</div>
            <div className={styles.buttonsDiv}>
              <button className={styles.optionsButton} onClick={detailsClicker}>
                DETAILS
              </button>
              <button className={styles.optionsButton} onClick={cancelClicker}>
                CANCEL GIG
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
      </Card>
      {detailsClicked && (
        <GigModal
          handleCloser={handleCloser}
          formType={GIG_DETAILS}
          fullscreen={true}
          gig={gig}
        />
      )}
      {cancelClicked && <CancelModal handleCloser={handleCloser} gigId={id} />}
    </Fragment>
  );
};

export default UpcomingGig;
