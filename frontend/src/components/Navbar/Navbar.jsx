import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <Header />
      <nav>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/studies">Studies</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
