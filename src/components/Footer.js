import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { HashLink } from "react-router-hash-link";
import css from "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container ">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="Little Lemon logo" aria-label="On Click" />
            </Link>
          </div>
          <div className="footer-section-wrapper">
            <div className="footer-section">
              <h5>Contact</h5>
              <p>
                <a href="tel:202-918-2132" className="tel">
                  +1 202-918-2132
                </a>
                <br />
                <a href="mailto:little@lemon.com" className="mail">
                  little@lemon.com
                </a>
              </p>
              <p>
                5819 N ROCKWELL ST
                <br />
                CHICAGO IL 60659-4985
              </p>
            </div>
            <div className="footer-section">
              <h5>Links</h5>
              <ul role="menu" aria-label="secondary">
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
                  <HashLink smooth to="/booking#booking">
                    {" "}
                    Reservations
                  </HashLink>
                </li>
                <li>
                  <Link to="/order-online">Order online</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h5>Follow us</h5>
              <ul role="social media menu" aria-label="social media">
                <li>
                  <Link to="https://www.facebook.com">Facebook</Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com">Instagram</Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com">Linkedin</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy;Little Lemon 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
