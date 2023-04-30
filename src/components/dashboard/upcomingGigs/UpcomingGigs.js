import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useGet from "../../../hooks/useGet";

import styles from "./UpcomingGigs.module.css";
import UpcomingGig from "./upcomingGig/UpcomingGig";

const UpcomingGigs = () => {
  const [gigs, setGigs] = useState([]);
  const [refreshGigs, setRefreshGigs] = useState(false);
  const auth = useSelector((state) => state.auth);
  const allGigs = useSelector((state) => state.gigs);
  const { loggedInPlayer } = auth;

  const getter = useGet();

  useEffect(() => {
    const getGigs = async () => {
      const playerGigs = await getter(
        `players/gigs-of-player/${loggedInPlayer.id}`
      );
      if (playerGigs.length > 0) setGigs(playerGigs);
      setRefreshGigs(false);
    };

    if (refreshGigs) {
      getGigs();
    }
    getGigs();
  }, [refreshGigs]);

  const gigsCopy = [...gigs];
  const sortedGigs = gigsCopy.sort((gig1, gig2) => {
    if (gig1.date < gig2.date) return -1;
    if (gig1.date > gig2.date) return 1;
    return 0;
  });

  const displayableGigs =
    gigs.length > 0
      ? gigs
          .sort((gig1, gig2) => {
            const gig1Date = new Date(gig1.date);
            const gig2Date = new Date(gig2.date);

            if (gig1Date < gig2Date) return -1;
            if (gig1Date > gig2Date) return 1;
            return 0;
          })
          .map((gig) => (
            <UpcomingGig
              key={gigs.indexOf(gig)}
              gig={gig}
              setRefreshGigs={setRefreshGigs}
            />
          ))
      : "";

  return <div className={styles.outerContainer}>{displayableGigs}</div>;
};

export default UpcomingGigs;
