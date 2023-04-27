import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./UpcomingGig.module.css";

const UpcomingGig = ({ gig }) => {
  const { title, date } = gig;

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

  const accSummaryStyles = {};

  return (
    <Card sx={cardStyles}>
      {/* <CardContent> */}
      <Accordion sx={accordStyles}>
        <AccordionSummary
          sx={accSummaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={styles.summaryDiv}>
           <span>{title}</span>
           <span>{date}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* // {title} {date} */}
      {/* </CardContent> */}
    </Card>
  );
};

export default UpcomingGig;
