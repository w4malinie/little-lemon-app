import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./Bookings/BookingPage";
import { useState, useReducer } from "react";
import ConfirmedBooking from "./Bookings/ConfirmedBooking";
import { initializeTimes, updateTimes } from "./Bookings/utils/times";

function Main() {
  const [time, setTime] = useState("");
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (formData) => window.submitAPI(formData);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              submitForm={submitForm}
              time={time}
              setTime={setTime}
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
