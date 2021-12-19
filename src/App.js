
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JrGu4SIaCvnUdaqF4WkluE8X8aUP3xOEIslJnyYLSuAhQyKlzaxKqeIX5TyqsY2OZYh53Zk2iMwtXdFfwzoxtcQ00nyCw6o6a");


function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>{" "}
          <Route path="/orders">
          <Header />
            <Orders />
            
          </Route>{" "}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>{" "}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>{" "}
          <Route path="/">
            <Header />
            <Home />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}
export default App;
