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

import MyModal from "../../../UI/MyModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { GIG_OPTIONS } from "../../../../constants/Constants";

import styles from "./UpcomingGig.module.css";

const UpcomingGig = ({ gig }) => {
  const { title, date, venue, address, parking, dress } = gig;
  const [optionsClicked, setOptionsClicked] = useState(false);

  const accordStyles = {
    background: "#3A4E60",
    color: "#aeaaaa",
    margin: "0.5rem",
    fontWeight: "700",
  };

  const cardStyles = {
    background: "#3A4E60",
    color: "#aeaaaa",
    margin: "0.25rem",
    fontWeight: "700",
  };

  const optionsClicker = () => {
    setOptionsClicked(true);
  };

  const handleCloser = () => {
    setOptionsClicked(false);
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
            <div>{dress}</div>
            <div>Rep List</div>
            <div>Parking</div>
            <button className={styles.optionsButton} onClick={optionsClicker}>GIG OPTIONS</button>
          </AccordionDetails>
        </Accordion>
      </Card>
      {optionsClicked && (
        <MyModal
          handleCloser={handleCloser}
          formType={GIG_OPTIONS}
          fullscreen={true}
        />
      )}
    </Fragment>
  );
};

export default UpcomingGig;
