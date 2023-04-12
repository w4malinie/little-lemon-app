import React from "react";
import img from "../assets/restaurant.jpg";
import emptyStar from "../assets/emptystar.svg";
import star from "../assets/Star.svg";
import styles from "./customersay.css";

function CustomerSayTestimonial(props) {
  const { rating } = props;
  return (
    <div className="testimonial-card">
      <div className="stars-rating">
        <img
          src={rating >= 1 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 2 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 3 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 4 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
        <img
          src={rating >= 5 ? star : emptyStar}
          alt="rating"
          className="rating"
        />
      </div>
      <img src={props.img} alt="" className="testimonial-img" />
      <p>{props.testimonial}</p>
      <p className="highlighted">- {props.user}</p>
    </div>
  );
}

export default CustomerSayTestimonial;
