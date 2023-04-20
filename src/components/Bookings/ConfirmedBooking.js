import style from "./confirmation-page.css";
import React from "react";

export default function ConfirmedBooking() {
  return (
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
        </div>
      </div>
    </div>
  );
}
