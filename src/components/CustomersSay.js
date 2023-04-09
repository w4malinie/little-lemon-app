import React from "react";
import styles from "./customersay.css";
import CustomerSayTestimonial from "./CustomerSayTestimonial";

function CustomersSay() {
  return (
    <div className="customers-say-container">
      <div className="container">
        <div className="customers-say">
          <h4>Testimonials</h4>
          <div className="testimonials">
            <CustomerSayTestimonial />
            <CustomerSayTestimonial />
            <CustomerSayTestimonial />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersSay;
