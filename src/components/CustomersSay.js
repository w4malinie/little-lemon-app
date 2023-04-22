import React from "react";
import { motion as m } from "framer-motion";
import styles from "./customersay.css";
import restaurant from "../assets/restaurant.jpg";
import CustomerSayTestimonial from "./CustomerSayTestimonial";
import testimonialData from "../data/testimonialData";

function CustomersSay() {
  const testimonialElements = testimonialData.map((testimonial) => {
    return (
      <CustomerSayTestimonial
        key={testimonial.id}
        rating={testimonial.rating}
        img={testimonial.img}
        testimonial={testimonial.testimonial}
        user={testimonial.user}
      />
    );
  });
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="customers-say-container">
        <div className="container">
          <div className="customers-say">
            <h4>Testimonials</h4>
            <div className="testimonials">{testimonialElements}</div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default CustomersSay;
