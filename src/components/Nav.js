import React from "react";
import { useState } from "react";
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";
import css from "./nav.css";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/">
        <img src={logo} alt="Little Lemon logo" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={menu} />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations"> Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
