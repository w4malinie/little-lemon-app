import React from "react";
import logo from "../assets/Logo.svg";
import css from "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container ">
          <div className="footer-logo">
            <a href="/">
              <img src={logo} alt="Little Lemon logo" />
            </a>
          </div>
          <div className="footer-section-wrapper">
            <div className="footer-section">
              <h5>Contact</h5>
              <p>
                +1 202-918-2132
                <br />
                little@lemon.com
                <br />
                5819 N ROCKWELL ST
                <br />
                CHICAGO IL 60659-4985
              </p>
            </div>
            <div className="footer-section">
              <h5>Links</h5>
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
            <div className="footer-section">
              <h5>Follow us</h5>
              <ul>
                <li>
                  <a href="https://www.facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">Linkedin</a>
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
