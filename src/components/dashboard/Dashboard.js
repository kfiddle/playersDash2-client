import { useState } from "react";

import TabsHeader from "./tabsHeader/TabsHeader";

import styles from "./Dashboard.module.css";
import UpcomingGigs from "./upcomingGigs/UpcomingGigs";

const [UPCOMING_GIGS, GIG_OFFERS] = ["upcomingGigs", "gigOffers"];

const Dashboard = () => {
  const [chosenTab, setChosenTab] = useState(UPCOMING_GIGS);

  return (
    <div>
      <TabsHeader chosenTab={chosenTab} setChosenTab={setChosenTab} />

      {chosenTab === UPCOMING_GIGS && <UpcomingGigs />}
    </div>
  );
};

export default Dashboard;
