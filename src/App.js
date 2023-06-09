import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Layout from "./components/layout/Layout";
import LoginBox from "./components/loginBox/LoginBox";
import Dashboard from "./components/dashboard/Dashboard";

import useGet from "./hooks/useGet";

import { gigsActions } from "./store/Gigs";

import "./App.css";

function App() {
  const auth = useSelector((state) => state.auth);
  const { loggedIn } = auth;

  const dispatch = useDispatch();
  const getter = useGet();

  useEffect(() => {
    // const getAllGigs = async () => {
    //   const gigsResponse = await getter("gigs");
    //   if (gigsResponse) {
    //     const jsonifiedGigs = await gigsResponse.json();
    //     console.log(jsonifiedGigs);
    //     dispatch(gigsActions.setGigs(jsonifiedGigs));
    //   }
    // };

    const backendTest = async () => {
      const response = await fetch(
        process.env.REACT_APP_HEROKU_URL + "library"
      );
      console.log(response.text());
    };

    backendTest();
    // getAllGigs();
  }, []);

  return (
    <Layout>
      {!loggedIn && <LoginBox />}
      {loggedIn && <Dashboard />}
    </Layout>
  );
}

export default App;
