import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { authActions } from "../../store/Auth";

import useGet from "../../hooks/useGet";

import LoginFail from "./loginFail/LoginFail";

import styles from "./LoginBox.module.css";

const LoginBox = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginMessage, setLoginMessage] = useState("fail");

  const isSmall = useMediaQuery({ query: "(max-width: 1224px)" });

  const dispatch = useDispatch();
  const getter = useGet();

  const usernameHandler = (event) => {
    setLoginFailed(false);
    setUser({ ...user, username: event.target.value });
  };

  const passwordHandler = (event) => {
    setLoginFailed(false);
    setUser({ ...user, password: event.target.value });
  };

  const sendItUp = async () => {
    let usersList = await getter("tabs/players");
    if (!usersList) return console.log("failed to retrieve user details list");
    const player = usersList.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (player) return dispatch(authActions.login({ player }));
    setLoginFailed(true);
  };

  return (
    <div className={styles.outerContainer}>
      <input
        className={styles.input}
        type="text"
        onChange={usernameHandler}
        placeholder={"your email"}
      ></input>

      <input
        className={styles.input}
        type="text"
        onChange={passwordHandler}
        placeholder={"your password"}
      ></input>

      <button className={styles.loginButton} onClick={sendItUp}>
        LOGIN
      </button>

      {loginFailed && <LoginFail failMessage={loginMessage} />}
    </div>
  );
};

export default LoginBox;
