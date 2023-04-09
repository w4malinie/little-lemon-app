import React from "react";
import img from "../assets/restaurant.jpg";
import styles from "./customersay.css";

function CustomerSayTestimonial() {
  return (
    <div className="testimonial-card">
      <img src="" alt="rating" className="rating" />
      <img src={img} alt="" className="testimonial-img" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem accusamus,
        magni atque optio libero sequi corrupti at et, maiores necessitatibus ea
        fuga odio a error eos sed, voluptas quidem. Cupiditate!
      </p>
      <p className="highlighted">Joe</p>
    </div>
  );
}

export default CustomerSayTestimonial;
