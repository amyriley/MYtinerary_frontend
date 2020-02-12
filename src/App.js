import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainHeader from "../src/components/Navigation/MainHeader";
import Cities from "../src/pages/Cities";
import Itineraries from "../src/pages/Itineraries";
import Landing from "../src/pages/Landing";
import SignUp from "../src/pages/SignUp";
import Login from "../src/pages/LogIn";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainHeader />
          <Switch>
            <Route path="/" component={Landing} exact></Route>
            <Route path="/cities" component={Cities} exact></Route>
            <Route
              path="/itineraries/:cityId"
              component={Itineraries}
              exact
            ></Route>
            <Route path="/signup" component={SignUp} exact></Route>
            <Route path="/login" component={Login} exact></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
