import React from "react";
import delivery from "../assets/Cycling.svg";

function CallToDelivery() {
  return (
    <button className="delivery">
      Order delivery
      <img src={delivery} alt="delivery icon" className="delivery-icon" />
    </button>
  );
}

export default CallToDelivery;
