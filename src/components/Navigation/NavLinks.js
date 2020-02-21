import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
  return (
    <ul>
      <li>
        <NavLink to="/cities">Cities</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
