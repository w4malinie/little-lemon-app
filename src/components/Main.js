import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { useState, useReducer } from "react";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function initializeTimes() {
  return availableTimes;
}

export function updateTimes(state, action) {
  return ["06:00", "20:45"];
}

function Main() {
  const [time, setTime] = useState(availableTimes);
  const [times, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              time={time}
              setTime={setTime}
              times={times}
              dispatch={dispatch}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;
