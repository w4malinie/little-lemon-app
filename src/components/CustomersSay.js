import React from "react";
import styles from "./customersay.css";
import restaurant from "../assets/restaurant.jpg";
import CustomerSayTestimonial from "./CustomerSayTestimonial";
import testimonialData from "../data/testimonialData";

function CustomersSay() {
  const testimonialElements = testimonialData.map((testimonial) => {
    return (
      <CustomerSayTestimonial
        rating={testimonial.rating}
        img={testimonial.img}
        testimonial={testimonial.testimonial}
        user={testimonial.user}
      />
    );
  });
  return (
    <div className="customers-say-container">
      <div className="container">
        <div className="customers-say">
          <h4>Testimonials</h4>
          <div className="testimonials">{testimonialElements}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomersSay;
