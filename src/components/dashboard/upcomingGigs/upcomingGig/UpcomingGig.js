import { Card, CardContent } from "@mui/material";

import styles from "./UpcomingGig.module.css";

const UpcomingGig = ({ gig }) => {
  const { title, date } = gig;

  const styleOb = {
    background: "#3A4E60",
    color: "#aeaaaa",
    margin: "0.5rem 1rem",
    fontWeight: "700",
  };

  return (
    <Card sx={styleOb} className={styles.gigCard}>
      <CardContent>
        {title} {date}
      </CardContent>
    </Card>
  );
};

export default UpcomingGig;
