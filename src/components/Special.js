import React from "react";
import CallToDelivery from "./Buttons/CallToDelivery.js";
import { Link } from "react-router-dom";
import styles from "./specials.css";

function truncate(str = "", maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

function Special(props) {
  const { description } = props;
  const descriptionTruincated = truncate(description, 110);

  return (
    <div className="special-card" key={props.key}>
      <img src={props.img} alt={props.title} className="card-img" />
      <div className="card-text">
        <div className="card-info">
          <h6>{props.title}</h6>
          <h6 className="price">$ {props.price}</h6>
        </div>
        <div className="card-details">
          <p>{descriptionTruincated}</p>
          <Link to="/order-online" aria-label={props.title}>
            <CallToDelivery />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Special;
