import { useReducer } from "react";

import usePush from "../../hooks/usePush";

import styles from "./Form.module.css";

const initialState = {
  name: "",
  age: "",
  streetAddress: "",
};

const deetsReducer = (state, action) => {
  return { ...state, [action.type]: action[action.type] };
};

const Form = () => {
  const [deetsForm, dispatch] = useReducer(deetsReducer, initialState);

  const pusher = usePush();

  const inputHandler = (inputType) => (event) => {
    dispatch({ type: inputType, [inputType]: event.target.value });
  };

  const giveIt = (event) => {
    const sendItUp = async () => {
      const response = await pusher(deetsForm);
      // if (typeof response === "string") return setError(response);
      // let headers = { "Content-Type": "application/json" };
      // let response = await fetch(toSendUrl, {
      //   method: "POST",
      //   mode: "cors",
      //   headers,
      //   body: JSON.stringify(deetsForm),
      // });
    };
    sendItUp();
  };

  const getFullSheet = async () => {
    let response = await fetch(
      "https://sheet.best/api/sheets/e189566d-1ba8-414b-8443-d3d0510e25f5/tabs/userDeets"
    );
    if (response.ok) {
      const jsonified = await response.json();
      console.log(jsonified);
    }
  };

  return (
    <form>
      I am a form
      <div className={styles.form}>
        <input
          className={styles.input}
          placeholder="name"
          onChange={inputHandler("name")}
        />
        <input
          className={styles.input}
          placeholder="age"
          onChange={inputHandler("age")}
        />
        <input
          className={styles.input}
          placeholder="streetAddress"
          onChange={inputHandler("streetAddress")}
        />
      </div>
      <button className={styles.button} type="submit" onClick={giveIt}>
        SUBMIT
      </button>
      <button type="button" onClick={getFullSheet}>
        TEST
      </button>
    </form>
  );
};

export default Form;
