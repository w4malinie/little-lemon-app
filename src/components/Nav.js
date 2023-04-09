import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";
import css from "./nav.css";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation container">
      <Link to="/">
        <img src={logo} alt="Little Lemon logo" />
      </Link>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations"> Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
