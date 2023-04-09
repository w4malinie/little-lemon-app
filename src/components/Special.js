import React from "react";
import CallToDelivery from "./CallToDelivery.js";
import brushetta from "../assets/bruchetta.svg";
import styles from "./specials.css";

function Special() {
  return (
    <div className="special-card">
      <img src={brushetta} alt="" className="card-img" />
      <div className="card-text">
        <div className="card-info">
          <h6>Bruschetta</h6>
          <h6 className="price">$ 9.99</h6>
        </div>
        <div className="card-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dolore expedita, suscipit qui, ad inventore nisi nulla maxime
            perspiciatis nesciunt laboriosam excepturi aperiam iure natus. Rem
            suscipit quos minima praesentium.
          </p>
          <CallToDelivery />
        </div>
      </div>
    </div>
  );
}

export default Special;
