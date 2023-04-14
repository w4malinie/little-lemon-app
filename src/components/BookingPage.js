import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ setTime, times, dispatch }) {
  return (
    <>
      <div className="container">
        <div className="booking-container">
          <div className="booking-text">
            <h2>Book a table</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              itaque sint ad nobis nesciunt dicta nam minus, distinctio quae
              eveniet quia placeat, cupiditate, doloribus repellendus provident.
              Explicabo distinctio inventore necessitatibus!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              itaque sint ad nobis nesciunt dicta nam minus, distinctio quae
            </p>
            <p>
              <a href="tel:202-918-2132" className="tel">
                +1 202-918-2132
              </a>
              <br></br>
              <a href="mailto:little@lemon.com" className="mail">
                little@lemon.com
              </a>
            </p>
          </div>

          <BookingForm setTime={setTime} times={times} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}

export default BookingPage;
