import styles from "./TabsHeader.module.css";

const TabsHeader = ({ chosenTab, setChosenTab }) => {
  const clickedTabHandler = (choice) => () => {
    setChosenTab(choice);
  };

  const classNameFunc = (tab) => {
    return tab === chosenTab
      ? styles.li + " " + styles.highlightedTab
      : styles.li;
  };

  return (
    <ul className={styles.ul}>
      <div className={styles.tabDiv}>
        <li
          onClick={clickedTabHandler("upcomingGigs")}
          className={classNameFunc("upcomingGigs")}
        >
          Upcoming Gigs
        </li>
      </div>
      <div className={styles.tabDiv}>
        <li
          onClick={clickedTabHandler("gigOffers")}
          className={classNameFunc("gigOffers")}
        >
          Gig Offers
        </li>
      </div>
    </ul>
  );
};

export default TabsHeader;
