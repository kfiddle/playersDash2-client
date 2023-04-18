import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useGet from "../../../hooks/useGet";

import styles from "./UpcomingGigs.module.css";
import UpcomingGig from "./upcomingGig/UpcomingGig";

const UpcomingGigs = () => {
  const [gigs, setGigs] = useState([]);
  const auth = useSelector((state) => state.auth);
  const allGigs = useSelector(state => state.gigs)
  const { loggedInPlayer } = auth;

  const getter = useGet();

  console.log(allGigs)

  useEffect(() => {
    const getGigs = async () => {
      const playerGigs = await getter(
        `tabs/playerGigs/player_id/${loggedInPlayer.id}`
      );
        if (playerGigs.length > 0) setGigs(playerGigs)
    };

    getGigs();
  }, []);

  const displayableGigs =
    gigs.length > 0
      ? gigs.map((gig) => <UpcomingGig key={gigs.indexOf(gig)} title={gig.title} />)
      : "";

  return <div>{displayableGigs}</div>;
};

export default UpcomingGigs;
