import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "../../../src/images/homeIcon.png";
import "./MainFooter.css";

const MainFooter = () => {
  return (
    <Link to="/">
      <img src={homeIcon} className="homeIcon" alt="home icon" />
    </Link>
  );
};

export default MainFooter;
