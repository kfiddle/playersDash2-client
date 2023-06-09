import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../store/Auth";

import { VscMenu } from "react-icons/vsc";

import styles from "./MainNav.module.css";
import MenuButton from "./MenuButton";

const MainNav = () => {
  const auth = useSelector((state) => state.auth);
  const { loggedIn, loggedInPlayer } = auth;

  const dispatch = useDispatch();

  if (loggedIn) console.log(loggedInPlayer);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return loggedIn ? (
    <header className={styles.header}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>{loggedInPlayer.lastName}</h1>
        <h2>Gigs</h2>
      </div>
      <div className={styles.iconDiv}>
        <MenuButton />
        {/* <Chip classes={{background:'red'}} label="MENU" icon={<VscMenu />} /> */}

        {/* <button className={styles.menuButton} onClick={logoutHandler}>
          MENU <VscMenu className={styles.menuIcon} />
        </button> */}
      </div>
    </header>
  ) : (
    <header className={styles.header}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>CSX Ensemble =></h1>
      </div>
    </header>
  );
};

export default MainNav;
