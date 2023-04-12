import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";
import css from "./nav.css";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav className="navigation container">
      <NavLink to="/">
        <img src={logo} alt="Little Lemon logo" />
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={menu} className="hamburger-icon" />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to="/" style={getActiveStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={getActiveStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" style={getActiveStyle}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" style={getActiveStyle}>
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/order-online" style={getActiveStyle}>
              Order online
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" style={getActiveStyle}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
