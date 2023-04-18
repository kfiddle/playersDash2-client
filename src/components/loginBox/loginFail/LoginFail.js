import styles from "./LoginFail.module.css";

const LoginFail = ({ failMessage }) => {
  const printMessage = {
    fail: "Please re-enter your credentials",
    username: "The entered username is not recognized",
    password: "The entered password is not recognized",
  };
  return (
    <div className={styles.outerContainer}>{printMessage[failMessage]}</div>
  );
};

export default LoginFail;
