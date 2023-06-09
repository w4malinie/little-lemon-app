import React from "react";
import CallToAction from "./Buttons/CallToAction";
import { motion as m } from "framer-motion";
import heroIMG from "../assets/restaurant-chefB.jpg";
import { HashLink } from "react-router-hash-link";
import styles from "./header.css";

function Header() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <header>
        <div className="container">
          <div className="header-container">
            <div className="header-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                doloribus aliquid fugit quasi, excepturi ipsam necessitatibus
                quam porro dolor, dolorem atque autem, iure praesentium sunt
                molestiae ea beatae omnis nulla!
              </h3>
              <HashLink smooth to="/booking#booking">
                <CallToAction cta="Book a table" />
              </HashLink>
            </div>
            <div className="hero-img">
              <img
                src={heroIMG}
                alt="Little Lemon Chef"
                className="header-img"
              />
            </div>
          </div>
        </div>
      </header>
    </m.div>
  );
}

export default Header;
