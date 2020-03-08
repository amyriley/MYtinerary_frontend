import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MainHeader from "../src/components/Navigation/MainHeader";
import Cities from "../src/pages/Cities";
import Itineraries from "../src/pages/Itineraries";
import Landing from "../src/pages/Landing";
import SignUp from "../src/pages/SignUp";
import Login from "../src/pages/LogIn";
import "./App.css";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./store/actions/userActions";

class App extends Component {
  componentWillMount() {
    console.log(this.props);
    this.checkUserToken();
  }

  checkUserToken = () => {
    const token = localStorage.getItem("userData");
    console.log(token);

    if (token) {
      const decodedToken = jwt_decode(token);
      this.props.setCurrentUser(decodedToken);
      console.log(this.props.currentUser);
    }
  };

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

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: decodedToken => dispatch(setCurrentUser(decodedToken))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
