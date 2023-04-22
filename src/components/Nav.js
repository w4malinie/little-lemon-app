import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion as m } from "framer-motion";
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";
import css from "./nav.css";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="navigation container" aria-label="primary">
        <NavLink to="/">
          <img
            src={logo}
            alt="Little Lemon logo"
            aria-label="On Click"
            id="logo"
          />
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
              <NavLink to="/" onClick={() => setIsNavExpanded(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsNavExpanded(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={() => setIsNavExpanded(false)}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavHashLink
                smooth
                to="/booking#booking"
                onClick={() => setIsNavExpanded(false)}
              >
                Reservations
              </NavHashLink>
            </li>
            <li>
              <NavLink
                to="/order-online"
                onClick={() => setIsNavExpanded(false)}
              >
                Order online
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={() => setIsNavExpanded(false)}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </m.div>
  );
}

export default Nav;
