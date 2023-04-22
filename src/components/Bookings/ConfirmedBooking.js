import style from "./confirmation-page.css";
import React from "react";
import { motion as m } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function ConfirmedBooking() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="container">
        <div className="confirmation-container">
          <div className="confirmation-text">
            <h2>The booking has been confirmed!</h2>;
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              itaque sint ad nobis nesciunt dicta nam minus, distinctio quae
            </p>
            <p>
              <a href="tel:202-918-2132" className="tel">
                +1 202-918-2132
              </a>
              <a href="mailto:little@lemon.com" className="mail">
                little@lemon.com
              </a>
            </p>
            <HashLink smooth to="/#logo">
              <p className="back" aria-label="link">
                Go back to the homepage
              </p>
            </HashLink>
          </div>
        </div>
      </div>
    </m.div>
  );
}
