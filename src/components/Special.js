import React from "react";
import CallToDelivery from "./CallToDelivery.js";
import { Link } from "react-router-dom";
import styles from "./specials.css";

function truncate(str = "", maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

function Special(props) {
  const { description } = props;
  const descriptioTruincated = truncate(description, 110);

  return (
    <div className="special-card">
      <img src={props.img} alt={props.title} className="card-img" />
      <div className="card-text">
        <div className="card-info">
          <h6>{props.title}</h6>
          <h6 className="price">$ {props.price}</h6>
        </div>
        <div className="card-details">
          <p>{descriptioTruincated}</p>
          <Link to="/order-online">
            <CallToDelivery />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Special;
