import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../src/images/MYtineraryLogo.png";
import "./Landing.css";

const Landing = props => {
  return (
    <div>
      <h1>Landing</h1>
      {props.isAuthenticated ? (
        <h2>Welcome, {props.user.email}!</h2>
      ) : (
        <h3>Not authenticated</h3>
      )}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="description">
        <p>
          Find your perfect trip, designed by people who know and love their
          cities.
        </p>
      </div>
      <Link to="/cities">Start browsing</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.currentUser
});

export default connect(mapStateToProps, null)(Landing);
