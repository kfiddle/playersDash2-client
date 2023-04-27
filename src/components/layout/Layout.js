import { Fragment } from "react";
import MainNav from "../mainNav/MainNav";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles.layoutBody}>
      <MainNav />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
