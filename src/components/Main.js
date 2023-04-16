import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./Bookings/BookingPage";
import { useState, useReducer, useEffect } from "react";
import ConfirmedBooking from "./Bookings/ConfirmedBooking";

export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export function updateTimes(state, payload) {
  if (payload) {
    const newDate = new Date(payload);
    return window.fetchAPI(newDate);
  }
  return window.fetchAPI(new Date());
}

export function submitForm(formData) {
  return window.submitAPI(formData);
}

function Main() {
  const [time, setTime] = useState("");
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

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
